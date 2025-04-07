import Router from 'express'
import { productController } from '../controllers/productController'
import {protect} from '../middlewares/protectMiddlware'
import {restrictTo} from '../middlewares/roleMiddleware'

const router = Router()

router.route('/')
  .get(protect, productController.getAllProducts)
  .post(protect, restrictTo(['ADMIN', 'PRODUCT_OWNER']), productController.createProduct)

router.route('/:id')
  .get(protect, productController.getProduct)
  .patch(protect, restrictTo(['ADMIN', 'PRODUCT_OWNER']), productController.updateProduct)
  .delete(protect, restrictTo(['ADMIN', 'PRODUCT_OWNER']), productController.removeProduct)

export default router
