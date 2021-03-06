import { CatsRequestDto } from "./dto/cats.request.dto";
import { Cat } from "./cats.schema";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class CatsRepository {
    constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

    async existsByEmail(email: string): Promise<boolean> {
        const result = await this.catModel.exists({ email });
        return result ? true : false;
    }

    async create(cat: CatsRequestDto): Promise<Cat> {
        return await this.catModel.create(cat);
    }

    async findOne(email: string): Promise<Cat | undefined> {
        return await this.catModel.findOne({ email });
    }
}   
