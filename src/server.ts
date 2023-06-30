import express, { NextFunction, Request, Response } from 'express'
import { generateXmlRoutes } from './controller/routes'
import { env } from './env'
import { AppError } from './erros/AppError'

const app = express()

app.use(express.json())

BigInt.prototype.toJSON = function () {
  return this.toString()
}

app.use(generateXmlRoutes)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      })
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    })
  },
)

app.listen(env.PORT, () => console.log('🚀 Server Running!'))
