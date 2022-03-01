import { Document } from "mongoose";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Prop, Schema, SchemaFactory, SchemaOptions } from "@nestjs/mongoose";

const options: SchemaOptions = {
    timestamps: true
};

@Schema(options)
export class Cat extends Document {
    @Prop({ required: true, unique: true })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Prop({ required: true })
    @IsString()
    @IsNotEmpty()
    name: string;

    @Prop({ required: true })
    @IsString()
    @IsNotEmpty()
    password: string;

    @Prop()
    @IsString()
    imgUrl: string;

    readonly readOnlyData: { id: string; email: string; name: string };
}

export const CatSchem = SchemaFactory.createForClass(Cat);

CatSchem.virtual("readOnlyData").get(function (this: Cat) {
    return {
        id: this.id,
        email: this.email,
        name: this.name
    };
});
