import { Request, Response } from 'express'
import { classToClass } from 'class-transformer'

import { CreateUsersService } from '@modules/user/services/CreateUsersService'

export class UsersController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { name, email, password, admin } = request.body
    const createUsersService = new CreateUsersService()
    const user = await createUsersService.execute({ name, email, password, admin })

    return response.status(201).json(classToClass(user))
  }
}
