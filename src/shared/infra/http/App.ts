import 'reflect-metadata'
import express from 'express'
import cors from 'cors'

import '@shared/infra/typeorm'
import routes from './routes'

export class App {
  public server: express.Application

  constructor () {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.server.use(express.json())
    this.server.use(cors())
  }

  routes () {
    this.server.use(routes)
  }
}
