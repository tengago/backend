import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('first_name').nullable()
      table.string('last_name').nullable()
      table.boolean('is_active').defaultTo(true)
      table.timestamp('last_login_at').nullable()
      table.string('profile_photo_url').nullable()
      table.dropColumn('full_name')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('first_name')
      table.dropColumn('last_name')
      table.dropColumn('is_active')
      table.dropColumn('last_login_at')
      table.dropColumn('profile_photo_url')
      table.string('full_name').nullable()
    })
  }
}
