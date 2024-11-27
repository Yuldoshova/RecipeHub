import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async create(create: CreateUserDto) {

    return await this.userRepository.save(create)
  }

  async findAll() {
    return await this.userRepository.find({
      relations: {
        recipes: true
      }
    })
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id } })
  }

  async update(id: number, update: UpdateUserDto) {

    return await this.userRepository.save({
      id,
      first_name: update.firstName,
      last_name: update.lastName,
      email: update.email,
      password: update.password
    })
  }

  async remove(id: number) {
    return await this.userRepository.delete(id)
  }
}
