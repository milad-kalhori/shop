import { Role } from "@prisma/client"

declare global {
  namespace Express{
    interface Request {
      user?:{
        id: string;
        userName: string;
        password: string;
        role: Role
      };
    }
  }
}