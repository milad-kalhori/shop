import Router from 'express'
import { userController } from '../controllers/userController'
import {protect} from '../middlewares/protectMiddlware'
import {restrictTo} from '../middlewares/roleMiddleware'

const router = Router()

router.route('/')
  .get(protect, restrictTo(['ADMIN']), userController.getAllUsers)
  .post(protect, restrictTo(['ADMIN']), userController.createUser)

router.route('/:id')
  .get(protect, userController.getUser)
  .patch(protect , userController.updateUser)
  .delete(protect, userController.removeUser)

export default router
