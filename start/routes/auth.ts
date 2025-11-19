import router from '@adonisjs/core/services/router'
const RegistersController = () => import('#controllers/http/auth/registers_controller')
router
  .group(() => {
    router.group(() => {
      router.get('/login', async () => {
        return { message: 'Login attempt' }
      })
      router.post('/register', [RegistersController, 'store'])
      router.post('/register', [RegistersController, 'store']).domain('localhost:3333/admin')
    })
  })
  .prefix('/api/auth')
