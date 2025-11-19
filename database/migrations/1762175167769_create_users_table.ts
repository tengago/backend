import { BaseSchema } from '@adonisjs/lucid/schema'
import Roles from '../../app/enums/roles.js'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 25).primary()
      table.string('full_name').nullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table
        .integer('role_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('roles')
        .defaultTo(Roles.USER)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
