import { Request, Response } from 'express'

import { TagsService } from '@modules/tag/infra/typeorm/services/TagsService'

export class TagsController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { name } = request.body
    const tagsService = new TagsService()
    const tag = await tagsService.execute({ name })

    return response.status(201).json(tag)
  }
}
