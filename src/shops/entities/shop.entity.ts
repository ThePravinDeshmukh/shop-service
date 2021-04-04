import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Shop {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;
    
    @Column()
    @Field()
    name: string;

    @Column({nullable: true})
    @Field({nullable: true})
    type?: string;

    @Column()
    @Field(type => Int)
    ownerId: number;

    // @ManyToOne(()=> Owner, owner => owner.shops)
    // @Field(type => Owner)
    // owner: Owner;

}
