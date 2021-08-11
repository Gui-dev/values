import { NextFunction, Request, Response } from "express";


export const ensureAdmin = async (request: Request, response: Response, next: NextFunction): Promise<Response | void> => {
  const admin = true

  if (admin) {
    return next()
  }

  return response.status(401).json({
    error: 'Unauthorized'
  })
}
