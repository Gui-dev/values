import { Router } from 'express'
import { UsersController } from '@modules/user/infra/http/controllers/UsersController'

const usersRoutes = Router()
const usersController = new UsersController()


usersRoutes.post('/', usersController.create)

export { usersRoutes }
