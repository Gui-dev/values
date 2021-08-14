import { NextFunction, Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { UsersRepository } from '../../typeorm/repositories/UsersRepository'
import { AppError } from '@shared/error/AppError'

export const ensureAdmin = async (request: Request, response: Response, next: NextFunction): Promise<Response | void> => {
  const id = request.userId
  const usersRepository = getCustomRepository(UsersRepository)
  const { admin } = await usersRepository.findOne(id)

  if (admin) {
    return next()
  }

  throw new AppError('Unauthorized', 401)
}
