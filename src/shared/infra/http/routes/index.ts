import { Router } from 'express'
import { usersRoutes } from '@modules/user/infra/http/routes/users.routes'
import { tagsRoutes } from '@modules/tag/infra/http/routes/tags.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/tags', tagsRoutes)

export default routes
