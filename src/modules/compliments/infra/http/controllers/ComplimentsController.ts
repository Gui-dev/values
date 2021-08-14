import { Request, Response } from 'express'

import { CreateComplimentsService } from '@modules/compliments/services/CreateComplimentsService'

export class ComplimentsController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { user_receiver, tag_id, message } = request.body
    const user_sender = request.userId
    const createComplimentsService = new CreateComplimentsService()

    const compliment = await createComplimentsService.execute({
      user_sender,
      user_receiver,
      tag_id,
      message
    })

    return response.status(201).json(compliment)
  }
}
