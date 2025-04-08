import { Request, Response, NextFunction } from "express"
import { userService } from '../services/userService'
import { AppError } from '../utils/AppError'

export const userController = {
  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getAllUsers()
      res.status(200).json({
        status: 'success',
        data: { users }
      })
    } catch (error) {
      next(error)
    }
  },

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const newUser = await userService.createUser(req.body)
      res.status(201).json({
        status: 'success',
        data: { user: newUser }
      })
    } catch (error) {
      next(error)
    }
  },

  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await userService.getUser(req.params.id)
      if (!user) {
        throw new AppError('User not found', 404)
      }
      res.status(200).json({
        status: 'success',
        data: { user }
      })
    } catch (error) {
      next(error)
    }
  },

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedUser = await userService.updateUser(req.params.id, req.body)
      if (!updatedUser) {
        throw new AppError('User not found', 404)
      }
      res.status(200).json({
        status: 'success',
        data: { user: updatedUser }
      })
    } catch (error) {
      next(error)
    }
  },

  async removeUser(req: Request, res: Response, next: NextFunction) {
    try {
      const deletedUser = await userService.deleteUser(req.params.id)
      if (!deletedUser) {
        throw new AppError('User not found', 404)
      }
      res.status(204).json({
        status: 'success',
        data: null
      })
    } catch (error) {
      next(error)
    }
  }
}
