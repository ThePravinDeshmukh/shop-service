import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ShopsService } from './shops.service';
import { Shop } from './entities/shop.entity';
import { CreateShopInput } from './dto/create-shop.input';
import { UpdateShopInput } from './dto/update-shop.input';
import { Owner } from 'src/owners/entities/owner.entity';

@Resolver(() => Shop)
export class ShopsResolver {
  constructor(private readonly shopsService: ShopsService) {}

  @Query((returns) => Shop)
  getShop(@Args('id', { type: () => Int }) id: number): Promise<Shop> {
    return this.shopsService.findOne(id);
  }

  @Query((returns) => [Shop])
  shops(): Promise<Shop[]> {
    return this.shopsService.findAll();
  }

  @ResolveField((returns) => Owner)
  owner(@Parent() shop: Shop): Promise<Owner> {
    return this.shopsService.getOwner(shop.ownerId);
  }

  @Mutation((returns) => Shop)
  createShop(
    @Args('createShopInput') createShopInput: CreateShopInput,
  ): Promise<Shop> {
    return this.shopsService.createShop(createShopInput);
  }

  @Query(() => [Shop], { name: 'shops' })
  findAll() {
    return this.shopsService.findAll();
  }

  @Query(() => Shop, { name: 'shop' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.shopsService.findOne(id);
  }

  @Mutation(() => Shop)
  updateShop(@Args('updateShopInput') updateShopInput: UpdateShopInput) {
    return this.shopsService.update(updateShopInput.id, updateShopInput);
  }

  @Mutation(() => Shop)
  removeShop(@Args('id', { type: () => Int }) id: number) {
    return this.shopsService.remove(id);
  }
}
