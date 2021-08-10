import { getCustomRepository } from 'typeorm'

import { UsersRepository } from '@modules/user/infra/typeorm/repositories/UsersRepository'
import { User } from '../entities/User'

interface ICreateUserService {
  name: string
  email: string
  admin: boolean
}

export class CreateUsersService {
  public async execute ({ name, email, admin }: ICreateUserService): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository)

    const userAlreadyExists = await usersRepository.findOne({ email })

    if (!email) {
      throw new Error('E-mail incorrect')
    }


    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = usersRepository.create({
      name,
      email,
      admin
    })

    await usersRepository.save(user)

    return user
  }
}
