import router from '@adonisjs/core/services/router'

export function adminRoutes() {
  router
    .group(() => {
      router.get('/', async () => {
        return { message: 'Admin area', access: ['manage_users', 'view_reports'] }
      })
    })
    .prefix('/api/v1/admin')
}
