import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;
  
  @Column()
  @Field()
  name: string;

  // @OneToMany(() => Shop, shop => shop.owner)
  // @Field(type => [Shop], {nullable: true})
  // shops?: Shop[];
}
