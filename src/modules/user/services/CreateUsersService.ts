import { getCustomRepository } from 'typeorm'

import { UsersRepository } from '@modules/user/infra/typeorm/repositories/UsersRepository'
import { User } from '@modules/user/infra/typeorm/entities/User'
import { AppError } from '@shared/error/AppError'

interface ICreateUserService {
  name: string
  email: string
  password: string
  admin: boolean
}

export class CreateUsersService {
  public async execute ({ name, email, password, admin }: ICreateUserService): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository)
    const userAlreadyExists = await usersRepository.findOne({ email })

    if (!email) {
      throw new AppError('E-mail incorrect')
    }


    if (userAlreadyExists) {
      throw new AppError('User already exists', 409)
    }

    const user = usersRepository.create({
      name,
      email,
      password,
      admin
    })

    await usersRepository.save(user)

    return user
  }
}
