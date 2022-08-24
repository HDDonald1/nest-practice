import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { UpdateCatDto } from 'src/cats/dto/update-cat.dto';
import { Cat, CatDocument } from 'src/cats/schemas/cat.schema';

@Injectable()
export class CatsService {
    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

    private cats = []

    async getAll(): Promise<Cat[]> {
        return this.catModel.find().exec()
    }

    async getById(id: string): Promise<Cat> {
        return this.catModel.findById(id).exec()
    }

    async create(catDto: CreateCatDto): Promise<Cat> {
        const newCat = new this.catModel(catDto)
        return newCat.save()
    }

    async remove(id: string): Promise<Cat> {
        return this.catModel.findByIdAndRemove(id)
    }

    async update(id: string, catDto: UpdateCatDto): Promise<Cat> {
        return this.catModel.findByIdAndUpdate(id, catDto, { new: true })
    }
}
