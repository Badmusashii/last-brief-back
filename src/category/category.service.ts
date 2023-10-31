import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
// import { CreateCategoryDto } from './dto/create-category.dto';
// import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async findAll() {
    try {
      const categories = await this.categoryRepository.find();
      if (!categories.length) {
        throw new NotFoundException('Aucune catégorie trouvée');
      }
      return categories;
    } catch (error) {
      throw new InternalServerErrorException(
        'Une erreur est survenue lors de la récupération des catégories',
      );
    }
  }
}
