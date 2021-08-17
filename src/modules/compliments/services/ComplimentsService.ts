import { getCustomRepository } from 'typeorm'

import { ComplimentsRepository } from '../infra/typeorm/repositories/ComplimentsRepository'
import { Compliment } from '../infra/typeorm/entities/Compliment'
import { UsersRepository } from '@modules/user/infra/typeorm/repositories/UsersRepository'
import { AppError } from '@shared/error/AppError'

type CreateComplimentsServiceProps = {
  user_sender: string
  user_receiver: string
  tag_id: string
  message: string
}

export class ComplimentsService {
  public async execute (
    { user_sender, user_receiver, tag_id, message }: CreateComplimentsServiceProps
  ): Promise<Compliment> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository)
    const usersRepository = getCustomRepository(UsersRepository)

    if (user_sender === user_receiver) {
      throw new AppError('Incorrect user receiver')
    }

    const userReceiverExists = await usersRepository.findOne(user_receiver)

    if (!userReceiverExists) {
      throw new AppError('User receiver does not exists')
    }

    const compliment = complimentsRepository.create({
      user_sender,
      user_receiver,
      tag_id,
      message
    })

    await complimentsRepository.save(compliment)

    return compliment
  }

  public async listUserReceiverCompliments (user_receiver: string): Promise<Compliment[]> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository)

    const compliments = await complimentsRepository.find({
      where: {
        user_receiver
      },
      relations: ['userSender', 'userReceiver', 'tag']
    })

    return compliments
  }

  public async listUserSendCompliments (user_sender: string): Promise<Compliment[]> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository)

    const compliments = await complimentsRepository.find({
      where: {
        user_sender
      },
      relations: ['userSender', 'userReceiver', 'tag']
    })

    return compliments
  }
}
