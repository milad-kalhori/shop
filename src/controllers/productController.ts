import { Request, Response, NextFunction } from "express"
import { productService } from '../services/productService'
import { AppError } from '../utils/AppError'

export const productController = {
  async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await productService.getAllProducts()
      res.status(200).json({
        status: 'success',
        data: { products }
      })
    } catch (error) {
      next(error)
    }
  },

  async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const newProduct = await productService.createProduct(req.body)
      res.status(201).json({
        status: 'success',
        data: { product: newProduct }
      })
    } catch (error) {
      next(error)
    }
  },

  async getProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await productService.getProduct(req.params.id)
      if (!product) {
        throw new AppError('Product not found', 404)
      }
      res.status(200).json({
        status: 'success',
        data: { product }
      })
    } catch (error) {
      next(error)
    }
  },

  async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedProduct = await productService.updateProduct(req.params.id, req.body)
      if (!updatedProduct) {
        throw new AppError('Product not found', 404)
      }
      res.status(200).json({
        status: 'success',
        data: { product: updatedProduct }
      })
    } catch (error) {
      next(error)
    }
  },

  async removeProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const deletedProduct = await productService.deleteProduct(req.params.id)
      if (!deletedProduct) {
        throw new AppError('Product not found', 404)
      }
      res.status(204).json({
        status: 'success',
        data: null
      })
    } catch (error) {
      next(error)
    }
  }
}
