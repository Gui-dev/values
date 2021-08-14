import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import authConfig from '@config/authConfig'
import { AppError } from '@shared/error/AppError'

type TokenPayloadProps = {
  iat: number
  exp: number
  sub: string
}

export const ensureAuthentication = (request: Request, response: Response, next: NextFunction): void => {
  const authentication = request.headers.authorization

  if (!authentication) {
    throw new AppError('Token is missing', 401)
  }

  const [_, token] = authentication.split(' ')

  try {
    const decoded = verify(token, authConfig.jwt.secret)
    const { sub: userId} = decoded as TokenPayloadProps

    request.userId = userId

    return next()
  } catch (error) {
    throw new AppError('Invalid token', 401)
  }
}
