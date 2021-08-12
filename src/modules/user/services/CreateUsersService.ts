import { getCustomRepository } from 'typeorm'

import { UsersRepository } from '@modules/user/infra/typeorm/repositories/UsersRepository'
import { User } from '@modules/user/infra/typeorm/entities/User'
import { AppError } from '@shared/error/AppError'
import { BCryptHashProvider } from '@modules/user/providers/hashProvider/implementations/BCryptHashProvider'

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
    const bCryptHashProvider = new BCryptHashProvider()

    if (!email) {
      throw new AppError('E-mail incorrect')
    }


    if (userAlreadyExists) {
      throw new AppError('User already exists', 409)
    }

    const passwordHash = await bCryptHashProvider.generateHash(password)

    const user = usersRepository.create({
      name,
      email,
      password: passwordHash,
      admin
    })

    await usersRepository.save(user)

    return user
  }
}
