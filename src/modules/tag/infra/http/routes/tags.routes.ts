import { Router } from 'express'

import { TagsController } from '@modules/tag/infra/http/controllers/TagsController'

const tagsRoutes = Router()
const tagsController = new TagsController()

tagsRoutes.post('/', tagsController.create)

export {
  tagsRoutes
}
