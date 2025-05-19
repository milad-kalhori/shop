import { Request, Response, NextFunction } from "express"
import { authService } from '../services/authService'
import { AppError } from '../utils/AppError'

export const authController = {
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await authService.signup(req.body)

      if (!token) {
        return next(new AppError('Signup failed', 400))
      }

      const expireInDays = Number(process.env.JWT_COOKIE_EXPIRES_IN)

      res.cookie('jwt', token, {
        expires: new Date(Date.now() + expireInDays * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
      })

      res.status(201).json({
        status: 'success',
        token
      })
    } catch (error) {
      next(error)
    }
  },

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await authService.login(req.body)

      if (!token) {
        return next(new AppError('Invalid credentials', 401))
      }

      const expireInDays = Number(process.env.JWT_COOKIE_EXPIRES_IN)

      res.cookie('jwt', token, {
        expires: new Date(Date.now() + expireInDays * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
      })

      res.status(200).json({
        status: 'success',
        token
      })
    } catch (error) {
      next(error)
    }
  },

  async logout(req: Request, res: Response, _next: NextFunction) {
    res.cookie('jwt', 'loggedout', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true
    })
    res.status(200).json({ status: 'success' })
  }
}
