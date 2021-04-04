import { Field, InputType, Int } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class  CreateShopInput {
    @IsAlpha()
    @Field()
    name: string;

    @IsAlpha()
    @Field({nullable: true})
    type?: string;

    @Field(type => Int)
    ownerId: number;
}