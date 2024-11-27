import {  ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipment } from './entities/equipment.entity'
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-category.dto';

@Injectable()
export class EquipmentService {

  constructor(
    @InjectRepository(Equipment)
    private equipmentRepository: Repository<Equipment>
  ) { }

  async create(create: CreateEquipmentDto) {

    const newEquipment = new Equipment()
    newEquipment.name = create.name

    return await this.equipmentRepository.save(newEquipment)
  }

  async findAll() {
    return await this.equipmentRepository.find();
  }

  async findOne(id: number) {
    const findEquipment = await this.equipmentRepository.findOne({ where: { id } })
    if (!findEquipment) {
      throw new NotFoundException("Equipment not found❗")
    }
    return findEquipment
  }

  async update(id: number, update: UpdateEquipmentDto) {

    const [findEquipment, dublicateEquipment] = await Promise.all([
      this.equipmentRepository.findOne({ where: { id } }),
      this.equipmentRepository.findOne({ where: { name: update.name } })
    ])

    if (!findEquipment) {
      throw new NotFoundException("Equipment not found❗")
    }

    if (dublicateEquipment) {
      throw new ConflictException("Equipment name already exists❗")
    }

    return await this.equipmentRepository.save({
      ...findEquipment,
      name: update.name,
    })

  }

  async remove(id: number) {
    const findEquipment = await this.equipmentRepository.findOne({ where: { id } })
    if (!findEquipment) {
      throw new NotFoundException("Equipment not found❗")
    }

    await this.equipmentRepository.delete({ id })
    return "Successfully deleted✅"
  }
}
