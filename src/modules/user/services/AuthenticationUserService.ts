import { getCustomRepository } from 'typeorm'
import { sign } from 'jsonwebtoken'

import { BCryptHashProvider } from '@modules/user/providers/hashProvider/implementations/BCryptHashProvider'
import { UsersRepository } from '@modules/user/infra/typeorm/repositories/UsersRepository'
import { User } from '@modules/user/infra/typeorm/entities/User'
import { AppError } from '@shared/error/AppError'

import authConfig from '@config/authConfig'

type AuthenticationUserServiceProps = {
  email: string
  password: string
}

type IResponseProps = {
  user: User
  token: string
}

export class AuthenticationUserService {
  public async execute ({ email, password }: AuthenticationUserServiceProps): Promise<IResponseProps> {
    const usersRepository = getCustomRepository(UsersRepository)
    const bCryptHashProvider = new BCryptHashProvider()
    const user = await usersRepository.findOne({ email })

    if (!user) {
      throw new AppError('Email or Password incorrect', 403)
    }

    const checkPassword = await bCryptHashProvider.compareHash(password, user.password)

    if (!checkPassword) {
      throw new AppError('Email or Password incorrect', 403)
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn
    })

    return {
      user,
      token
    }
  }
}
