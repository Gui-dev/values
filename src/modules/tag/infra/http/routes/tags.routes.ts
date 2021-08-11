import { Router } from 'express'

import { TagsController } from '@modules/tag/infra/http/controllers/TagsController'
import { ensureAdmin } from '@modules/user/infra/http/middlewares/ensureAdmin'

const tagsRoutes = Router()
const tagsController = new TagsController()

tagsRoutes.post('/', ensureAdmin, tagsController.create)

export {
  tagsRoutes
}
