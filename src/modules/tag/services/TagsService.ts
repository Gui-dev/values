import { getCustomRepository } from 'typeorm'

import { Tag } from '@modules/tag/infra/typeorm/entities/Tag'
import { TagsRepository } from '@modules/tag/infra/typeorm/repositories/TagsRepository'
import { AppError } from '@shared/error/AppError'

type TagsServiceProps = {
  name: string
}

export class TagsService {
  public async execute ({ name }: TagsServiceProps): Promise<Tag> {
    const tagsRepository = getCustomRepository(TagsRepository)

    if (!name) {
      throw new AppError('Incorrect name!')
    }

    const tagAlreadyExists = await tagsRepository.findOne({ name })

    if (tagAlreadyExists) {
      throw new AppError('Tag already exists')
    }

    const tag = tagsRepository.create({ name })
    await tagsRepository.save(tag)

    return tag
  }

  public async listTags (): Promise<Tag[]> {
    const tagsRepository = getCustomRepository(TagsRepository)
    const tags = await tagsRepository.find()

    return tags
  }
}
