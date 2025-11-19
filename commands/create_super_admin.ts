import User from '#models/user'
import { registerSuperAdminValidator } from '#validators/auth/register'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import Roles from '../app/enums/roles.js'

export default class CreateSuperAdmin extends BaseCommand {
  static commandName = 'create:super-admin'
  static description = 'Create a super admin user'

  static options: CommandOptions = {
    startApp: true, // Important: starts the app and database connection
  }

  async run() {
    // Check if SuperAdmin already exists
    const existing = await User.query().where('role_id', Roles.SUPERADMIN).first()

    if (existing) {
      this.logger.warning('SuperAdmin already exists. Please login with existing credentials.')
      return
    }

    // Prompt for details
    const email = await this.prompt.ask('Enter super admin email:')
    const password = await this.prompt.secure('Enter super admin password:')

    try {
      const payload = await registerSuperAdminValidator.validate({ email, password })

      const user = await User.create({
        ...payload,
        roleId: Roles.SUPERADMIN,
      })

      this.logger.success(`SuperAdmin created: ${user.email}`)
    } catch (error) {
      this.logger.error('Validation failed')
      if (error.messages) {
        error.messages.forEach((m: any) => this.logger.error(`${m.field}: ${m.message}`))
      } else {
        this.logger.error(error.message)
      }
    }
  }
}
