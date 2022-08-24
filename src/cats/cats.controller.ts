import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './schemas/cat.schema';
import { CatsService } from './services/cats-service/cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  
  @Get()
  getAll(): Promise<Cat[]> {
    return this.catsService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Cat> {
    return this.catsService.getById(id)
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Cat> {
    return this.catsService.remove(id)
  }

  @Put(':id')
  update(@Body() updateCatDto: UpdateCatDto, @Param('id') id: string): Promise<Cat> {
    return this.catsService.update(id, updateCatDto)
  }
}
