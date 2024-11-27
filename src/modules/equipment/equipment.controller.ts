import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-category.dto';

@Controller('equipments')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) { }

  @Post('/add')
  create(
    @Body() createEquipmentDto: CreateEquipmentDto
  ) {
    return this.equipmentService.create(createEquipmentDto);
  }

  @Get('/all')
  findAll() {
    return this.equipmentService.findAll();
  }

  @Get('/single/:id')
  findOne(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.equipmentService.findOne(id);
  }

  @Patch('/update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEquipmentDto: UpdateEquipmentDto,
  ) {
    return this.equipmentService.update(id, updateEquipmentDto);
  }

  @Delete('/remove/:id')
  remove(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.equipmentService.remove(id);
  }
}
