import { Router } from 'express'
import { UsersController } from '@modules/user/infra/http/controllers/UsersController'
import { ensureAuthentication } from '@modules/user/infra/http/middlewares/ensureAuthentication'

const usersRoutes = Router()
const usersController = new UsersController()


usersRoutes.get('/', ensureAuthentication, usersController.index)
usersRoutes.post('/', usersController.create)

export { usersRoutes }
