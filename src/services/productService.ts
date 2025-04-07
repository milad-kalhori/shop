import { CreateProductDTO, UpdateProductDTO } from "../dtos/product.dto"
import { productRepository } from "../repository/productRepository"

export const productService = {

  async getAllProducts() {
    return await productRepository.getAllProducts();
  },

  async getProduct(id: string) {
    return await productRepository.findProductById(id);
  },

  async createProduct (body: CreateProductDTO) {
    return await productRepository.create(body);
  },

  async updateProduct(id: string, body: UpdateProductDTO) {
    return await productRepository.updateProduct(id, body);
  },

  async deleteProduct(id: string) {
    return await productRepository.deleteProduct(id);
  },
}
