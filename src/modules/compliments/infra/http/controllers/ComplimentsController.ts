import { Request, Response } from 'express'
import { classToClass } from 'class-transformer'

import { ComplimentsService } from '@modules/compliments/services/ComplimentsService'

export class ComplimentsController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { user_receiver, tag_id, message } = request.body
    const user_sender = request.userId
    const complimentsService = new ComplimentsService()

    const compliment = await complimentsService.execute({
      user_sender,
      user_receiver,
      tag_id,
      message
    })

    return response.status(201).json(classToClass(compliment))
  }

  public async showUserSendCompliments (request: Request, response: Response): Promise<Response> {
    const user_sender = request.userId
    const complimentsService = new ComplimentsService()
    const compliments = await complimentsService.listUserSendCompliments(user_sender)

    return response.status(201).json(classToClass(compliments))
  }

  public async showUserReceiverCompliments (request: Request, response: Response): Promise<Response> {
    const user_receiver = request.userId
    const complimentsService = new ComplimentsService()
    const compliments = await complimentsService.listUserReceiverCompliments(user_receiver)

    return response.status(201).json(classToClass(compliments))
  }
}
