import { Router } from 'express'

import { usersRoutes } from '@modules/user/infra/http/routes/users.routes'
import { tagsRoutes } from '@modules/tag/infra/http/routes/tags.routes'
import { sessionRoutes } from '@modules/user/infra/http/routes/session.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/login', sessionRoutes)

routes.use('/tags', tagsRoutes)

export default routes
