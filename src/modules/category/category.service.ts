import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  create(create: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, update: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
