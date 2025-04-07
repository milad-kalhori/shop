import prisma from "../config/db"
import { CreateProductDTO, UpdateProductDTO } from "../dtos/product.dto";

export const productRepository = {

  async create(body: CreateProductDTO) {
    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        price: body.price,
        updatedAt: new Date(),
      },
    });
    return product;
  },


  async getAllProducts() {
    const products = await prisma.product.findMany();
    return products;
  },


  async findProductById(id: string) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    return product;
  },

  async updateProduct(id: string, body: UpdateProductDTO) {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        name: body.name,
        description: body.description,
        price: body.price,
        updatedAt: new Date(),
      },
    });
    return product;
  },


  async deleteProduct(id: string) {
    const product = await prisma.product.delete({
      where: {
        id,
      },
    });
    return product;
  },
};
