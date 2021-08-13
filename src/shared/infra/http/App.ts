import 'reflect-metadata'
import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import 'express-async-errors'

import '@shared/infra/typeorm'
import { AppError } from '@shared/error/AppError'
import routes from './routes'

export class App {
  public server: express.Application

  constructor () {
    this.server = express()

    this.middlewares()
    this.routes()
    this.handleException()
  }

  public middlewares () {
    this.server.use(express.json())
    this.server.use(cors())
  }

  public routes () {
    this.server.use(routes)
  }

  public handleException () {
    this.server.use((err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({ message: err.message })
      }

      return response.status(500).json({ message: 'Internal server error' })
    })
  }
}
