import { Router } from 'express'

import { usersRoutes } from '@modules/user/infra/http/routes/users.routes'
import { tagsRoutes } from '@modules/tag/infra/http/routes/tags.routes'
import { sessionRoutes } from '@modules/user/infra/http/routes/session.routes'
import { complimentsRoutes } from '@modules/compliments/infra/http/routes/compliments.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/login', sessionRoutes)

routes.use('/tags', tagsRoutes)
routes.use('/compliments', complimentsRoutes)

export default routes
