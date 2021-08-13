import { Router } from 'express'

import { ComplimentsController } from '@modules/compliments/infra/http/controllers/ComplimentsController'

const complimentsRoutes = Router()
const complimentsController = new ComplimentsController()

complimentsRoutes.post('/', complimentsController.create)

export {
  complimentsRoutes
}
