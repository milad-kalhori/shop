import Router from 'express'
import { authController } from '../controllers/authController'
import { validateDTO } from '../middlewares/validate.dto'
import { CreateUserDTO } from '../dtos/user.dto'
const router = Router()

router.post('/signup', validateDTO(CreateUserDTO), authController.signup)
router.post('/login', validateDTO(CreateUserDTO), authController.login)
router.get('/logout', authController.logout)

export default router

