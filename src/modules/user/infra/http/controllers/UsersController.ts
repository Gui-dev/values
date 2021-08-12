import { Request, Response } from 'express';

import { CreateUsersService } from '@modules/user/infra/typeorm/services/CreateUsersService'

export class UsersController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { name, email, password, admin } = request.body
    const createUsersService = new CreateUsersService()
    const user = await createUsersService.execute({ name, email, password, admin })

    return response.status(201).json(user)
  }
}
