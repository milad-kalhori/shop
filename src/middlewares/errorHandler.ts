import { Request, Response, NextFunction } from 'express'

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error('Error:', err)

  res.status(err.statusCode || 500).json({
    status: 'error',
    message: err.message || 'Something went wrong',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  })
}
