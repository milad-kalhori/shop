import { Role } from "@prisma/client";
import prisma from "../config/db";
import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto";
import { authService } from '../services/authService'

export const userRepository = {

  async createUser (body: CreateUserDTO) {
    const user = await prisma.user.create({
      data : {
        userName : body.userName,
        password : await authService.hashPassword(body.password),
        role : body.role ?? Role.CUSTOMER,
        updatedAt: new Date()
      }
    })
    return user
  },


  async findUserById (id) {
    const user = await prisma.user.findUnique({
      where : {
        id
      }
    })
    return user
  },

  async findUserByUserName (userName) {
    const user = await prisma.user.findUnique({
      where : {
        userName
      }
    })
    return user
  },


  async getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
  },

  async updateUser(id: string, body: UpdateUserDTO) {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        userName: body.userName,
        password: body.password,
        role: body.role,
        updatedAt: new Date(),
      },
    });
    return user;
  },


  async deleteUser(id: string) {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  },
};
