import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'

export const protect = async (req: Request, res: Response, next: NextFunction) =>  {
  const bearer = req.headers.auturizition
 let token
  if (!bearer) {
    res.status(401)
    res.json({message: 'unAuturaze'})
    return
  }
  if (typeof bearer === 'string') {
     token = bearer.split(' ')[1]
  }
  if (!token) {
    res.status(401)
    res.json({message: 'not valid token'})
    return
  }
  try {
    const user = jwt.verify(token, [process.env.JWT_SECRET])
    req.user = user
    next()
  } catch (err) {
    res.status(401)
    res.json({message: 'not valid token'})
    return
  }
}