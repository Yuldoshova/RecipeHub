import * as fs from 'fs'
import * as path from 'path'
import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity'

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) { }

  async create(create: CreateCategoryDto, image: Express.Multer.File) {

    if (!image) {
      throw new BadRequestException('no file uploaded');
    }

    // validate file type
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowedMimeTypes.includes(image.mimetype)) {
      throw new BadRequestException('invalid file type');
    }

    // validate file size (e.g., max 5mb)
    const maxSize = 5 * 1024 * 1024;
    if (image.size > maxSize) {
      throw new BadRequestException('file is too large!');
    }

    const dublicateCategory = await this.categoryRepository.findOne({ where: { name: create.name } })
    if (dublicateCategory) {
      throw new ConflictException("Category name already exists❗")
    }

    const newCategory = new Category()
    newCategory.name = create.name
    newCategory.description = create.description
    newCategory.imageUrl = image.filename

    await this.categoryRepository.save(newCategory)

    return newCategory
  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOne(id: number) {
    const findCategory = await this.categoryRepository.findOne({ where: { id } })
    if (!findCategory) {
      throw new NotFoundException("Category not found❗")
    }
    return findCategory
  }

  async update(id: number, update: UpdateCategoryDto, image: Express.Multer.File) {

    const [findCategory, dublicateCategory] = await Promise.all([
      this.categoryRepository.findOne({ where: { id } }),
      this.categoryRepository.findOne({ where: { name: update.name } })
    ])

    if (!findCategory) {
      throw new NotFoundException("Category not found❗")
    }

    if (dublicateCategory) {
      throw new ConflictException("Category name already exists❗")
    }

    const imagePath = path.join(process.cwd() + "/uploads" + "/categories/" + findCategory.imageUrl)

    fs.unlink(imagePath, (err) => {
      if (err) {
        throw new NotFoundException("Image not found❗")
      }
    })

    return await this.categoryRepository.save({
      ...findCategory,
      name: update.name,
      description: update.description,
      imageUrl: update.imageUrl
    })

  }

  async remove(id: number) {
    const findCategory = await this.categoryRepository.findOne({ where: { id } })
    if (!findCategory) {
      throw new NotFoundException("Category not found❗")
    }

    await this.categoryRepository.delete({ id })
    return "Successfully deleted✅"
  }
}
