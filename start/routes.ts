/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// start/routes.ts
import router from '@adonisjs/core/services/router'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

router.get('/', async () => ({ hello: 'world!' }))

// Dynamically import all route files from the "start/routes" directory
const routesDir = join(import.meta.dirname, './routes')
for (const file of readdirSync(routesDir)) {
  const module = await import(pathToFileURL(join(routesDir, file)).href)

  // Call all exported functions (skip default export and non-functions)
  for (const key of Object.keys(module)) {
    if (key !== 'default' && typeof module[key] === 'function') {
      module[key]()
    }
  }

  // Fallback to default export if it's a function
  if (typeof module.default === 'function') {
    module.default()
  }
}
