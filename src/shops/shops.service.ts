import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { CreateShopInput } from './dto/create-shop.input';
import { UpdateShopInput } from './dto/update-shop.input';
import { Shop } from './entities/shop.entity';

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(Shop) private ShopsRepository: Repository<Shop>,
    private ownersService: OwnersService,
  ) {}

  createShop(createShopIput: CreateShopInput): Promise<Shop> {
    const newShop = this.ShopsRepository.create(createShopIput); // newShop = new Shop();

    return this.ShopsRepository.save(newShop); // insert
  }

  async findAll(): Promise<Shop[]> {
    return this.ShopsRepository.find(); // SELECT * Shop
  }

  findOne(id: number): Promise<Shop> {
    return this.ShopsRepository.findOneOrFail(id);
  }

  getOwner(ownerId: number): Promise<Owner> {
    return this.ownersService.findOne(ownerId);
  }

  create(createShopInput: CreateShopInput) {
    return 'This action adds a new shop';
  }

  update(id: number, updateShopInput: UpdateShopInput) {
    return `This action updates a #${id} shop`;
  }

  remove(id: number) {
    return `This action removes a #${id} shop`;
  }
}
