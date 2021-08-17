import { Request, Response } from 'express'
import { classToClass } from 'class-transformer'

import { TagsService } from '@modules/tag/services/TagsService'

export class TagsController {
  public async index (request: Request, response: Response): Promise<Response> {
    const tagsService = new TagsService()
    const tags = await tagsService.listTags()

    return response.status(201).json(classToClass(tags))
  }
  public async create (request: Request, response: Response): Promise<Response> {
    const { name } = request.body
    const tagsService = new TagsService()
    const tag = await tagsService.execute({ name })

    return response.status(201).json(tag)
  }
}
