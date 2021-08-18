import { Request, Response } from 'express'
import { classToClass } from 'class-transformer'

import { UsersService } from '@modules/user/services/UsersService'

export class UsersController {
  public async index (request: Request, response: Response): Promise<Response> {
    const usersService = new UsersService()
    const users = await usersService.listUsers()

    return response.status(201).json(classToClass(users))
  }

  public async create (request: Request, response: Response): Promise<Response> {
    const { name, email, password, admin } = request.body
    const usersService = new UsersService()
    const user = await usersService.execute({ name, email, password, admin })

    return response.status(201).json(classToClass(user))
  }
}
