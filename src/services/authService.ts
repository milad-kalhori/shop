import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { CreateUserDTO } from '../dtos/user.dto'
import { userRepository } from "../repository/userRepository"


export const authService = {
  async createJWT (user) {
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET)
    return token
  },

  async hashPassword (password) {
    return bcrypt.hash(password, 5)
  },

   async comparePassword (password, hash) {
    return bcrypt.compare(password, hash)
  },


  async signup (body: CreateUserDTO) {
    const user = await userRepository.createUser(body)
    const token = await this.createJWT(user)
    return token
  },

  async login (body: CreateUserDTO) {
    const user = await userRepository.findUserByUserName(body.userName)
    const isVAlid = this.comparePassword(body.password, user.password)
    if (!user || !isVAlid) {
      throw new Error('invalid password or username')
    }
    const token = this.createJWT(user)
    return token
  },


}
