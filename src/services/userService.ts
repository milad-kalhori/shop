import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto"
import { userRepository } from "../repository/userRepository"

export const userService = {

  async createUser (body: CreateUserDTO) {
    return await userRepository.createUser(body);
  },

  async getAllUsers() {
    return await userRepository.getAllUsers();
  },

  async getUser(id: string) {
    return await userRepository.findUserById(id);
  },

  async updateUser(id: string, body: UpdateUserDTO) {
    return await userRepository.updateUser(id, body);
  },

  async deleteUser(id: string) {
    return await userRepository.deleteUser(id);
  },
}
