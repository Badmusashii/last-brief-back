import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  HttpCode,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(AuthGuard('jwt'))
  create(@Request() req, @Body() createProductDto: CreateProductDto) {
    const user = req.user;
    return this.productService.create(createProductDto, user);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(AuthGuard('jwt'))
  findOne(@Request() req, @Param('id') id: string) {
    const user = req.user;
    return this.productService.findOne(+id, user);
  }

  @Patch(':id')
  @HttpCode(204)
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
