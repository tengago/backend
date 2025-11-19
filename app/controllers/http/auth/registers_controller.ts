import User from '#models/user'
import { registerUserValidator } from '#validators/auth/register'
import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'
import Roles from '../../../enums/roles.js'
import { getGravatarUrl } from '../../../utils/get_gravatar.js'

export default class RegistersController {
  async store({ request }: HttpContext) {
    logger.info(request.url())
    const userData = request.body()
    const payload = await registerUserValidator.validate(userData)
    const { firstName, lastName, password, email, role } = payload
    if (!role) {
      const user = await User.create({ firstName, lastName, password, email, roleId: Roles.USER })
      return { message: 'User registered successfully', user }
    }
    const roleKey = role.toUpperCase() as keyof typeof Roles
    if (roleKey in Roles) {
      const user = await User.create({
        firstName,
        lastName,
        password,
        email,
        profilePhotoUrl: getGravatarUrl(email),
        roleId: Roles[roleKey],
      })
      return { message: 'User registered successfully', user }
    }
  }
}
