import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/users/entities/user.entity';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async create(
    createProductDto: CreateProductDto,
    user: Users,
  ): Promise<Product> {
    if (!user) {
      throw new Error('User not found');
    }
    const category = await this.categoryRepository.findOne({
      where: { id: createProductDto.category_id },
    });
    if (!category) {
      throw new Error('Category not found');
    }
    const newProduct = this.productRepository.create(createProductDto);
    newProduct.category = category;

    return await this.productRepository.save(newProduct);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id: id } });

    if (!product) {
      throw new NotFoundException(`Produit avec l'id ${id} introuvable`);
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne({ where: { id: id } });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    Object.assign(product, updateProductDto);

    return await this.productRepository.save(product);
  }

  async remove(id: number) {
    const result = await this.productRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Product with id ${id} not found`);
    } else {
      return `L'article avec l'id ${id} à été supprimer`;
    }
  }
}
