import { Controller, Get, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';

import { AuthGuard } from '@nestjs/passport';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.categoryService.findAll();
  }
}
