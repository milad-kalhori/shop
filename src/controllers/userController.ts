import { Request, Response, NextFunction } from "express"
import { userService } from '../services/userService'

export const userController = {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json({
        status: 'success',
        data: {
          users
        }
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error.message
      });
    }
  },

  async createUser(req: Request, res: Response) {
    try {
      const newUser = await userService.createUser(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          user: newUser
        }
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error.message
      });
    }
  },

  async getUser(req: Request, res: Response) {
    try {
      const user = await userService.getUser(req.params.id);
      if (!user) {
        return res.status(404).json({
          status: 'fail',
          message: 'User not found'
        });
      }
      res.status(200).json({
        status: 'success',
        data: {
          user
        }
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error.message
      });
    }
  },

  async updateUser(req: Request, res: Response) {
    try {
      const updatedUser = await userService.updateUser(req.params.id, req.body);
      if (!updatedUser) {
        return res.status(404).json({
          status: 'fail',
          message: 'User not found'
        });
      }
      res.status(200).json({
        status: 'success',
        data: {
          user: updatedUser
        }
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error.message
      });
    }
  },

  async removeUser(req: Request, res: Response) {
    try {
      const deletedUser = await userService.deleteUser(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({
          status: 'fail',
          message: 'User not found'
        });
      }
      res.status(204).json({
        status: 'success',
        data: null
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error.message
      });
    }
  }
};
