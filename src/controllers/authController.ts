import { Request, Response, NextFunction } from "express"
import { authService } from '../services/authService'


export const authController = {
 async signup (req: Request, res: Response) {
  try {
    const token = await authService.signup(req.body)
    //res.status(201).json(token)
    const expireInDays = Number(process.env.JWT_COOKIE_EXPIRES_IN)
    res.cookie('jwt', token, {
      expires: new Date(
        Date.now() + expireInDays * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
    });
  } catch (err) {
    res.status(500).json({message: err.message})
  }
},

  async login (req: Request, res: Response) {
    try {
      const token = await authService.login(req.body)
      //res.status(201).json(token)
      const expireInDays = Number(process.env.JWT_COOKIE_EXPIRES_IN)
      res.cookie('jwt', token, {
        expires: new Date(
          Date.now() + expireInDays * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
      });
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  },

  async logout (req: Request, res: Response) {
    res.cookie('jwt', 'loggedout', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true
    });
    res.status(200).json({ status: 'success' });
   }
}