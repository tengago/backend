import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'roles'

  async up() {
    // Insert data directly without schema.alterTable
    await this.db.table(this.tableName).insert({
      id: 4,
      name: 'superadmin',
    })
  }

  async down() {
    // Delete the inserted data
    await this.db.from(this.tableName).where('id', 4).delete()
  }
}
