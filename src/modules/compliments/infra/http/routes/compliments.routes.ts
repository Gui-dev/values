import { Router } from 'express'

import { ComplimentsController } from '@modules/compliments/infra/http/controllers/ComplimentsController'

const complimentsRoutes = Router()
const complimentsController = new ComplimentsController()

complimentsRoutes.post('/', complimentsController.create)

complimentsRoutes.get('/users/compliments/send', complimentsController.showUserSendCompliments)
complimentsRoutes.get('/users/compliments/receiver', complimentsController.showUserReceiverCompliments)

export {
  complimentsRoutes
}
