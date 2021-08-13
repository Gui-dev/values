import { Request, Response } from 'express'
import { classToClass } from 'class-transformer'

import { AuthenticationUserService } from '@modules/user/services/AuthenticationUserService'

export class SessionController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const authenticationUserService = new AuthenticationUserService()
    const user = await authenticationUserService.execute({ email, password })

    return response.status(201).json(classToClass(user))
  }
}
