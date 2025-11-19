const RegistersController = () => import('#controllers/http/auth/registers_controller')
import router from '@adonisjs/core/services/router'

export function userRoutes() {
  router
    .group(() => {
      router.post('/users', [RegistersController, 'store'])
    })
    .prefix('/api/v1')
}
