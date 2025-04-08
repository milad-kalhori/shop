import { Request, Response, NextFunction } from "express"
import { productService } from '../services/productService'


export const productController = {
  async getAllProducts(req: Request, res: Response) {
    try {
      const products = await productService.getAllProducts()
      res.status(200).json({
        status: 'success',
        data: {
          products
        }
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error.message
      });
    }
  },

  async createProduct(req: Request, res: Response) {
    try {
      const newproduct = await productService.createProduct(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          product: newproduct
        }
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error.message
      });
    }
  },

  async getProduct(req: Request, res: Response) {
    try {
      const product = await productService.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({
          status: 'fail',
          message: 'product not found'
        });
      }
      res.status(200).json({
        status: 'success',
        data: {
          product
        }
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error.message
      });
    }
  },

  async updateProduct(req: Request, res: Response) {
    try {
      const updatedproduct = await productService.updateProduct(req.params.id, req.body);
      if (!updatedproduct) {
        return res.status(404).json({
          status: 'fail',
          message: 'product not found'
        });
      }
      res.status(200).json({
        status: 'success',
        data: {
          product: updatedproduct
        }
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error.message
      });
    }
  },

  async removeProduct(req: Request, res: Response) {
    try {
      const deletedproduct = await productService.deleteProduct(req.params.id);
      if (!deletedproduct) {
        return res.status(404).json({
          status: 'fail',
          message: 'product not found'
        });
      }
      res.status(204).json({
        status: 'success',
        data: null
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error.message
      });
    }
  }
};
