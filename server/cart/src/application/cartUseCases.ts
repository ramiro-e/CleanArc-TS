import { CartRepository } from '../domain/cart/cart.repository';
import { IBasicCart, IBasicCartPartial, ICartPartial, NewCartEntity, UpdateCartEntity } from './../domain/cart/cart.entity';
import { NewCartValue, UpdateCartValue } from './../domain/cart/cart.value';

export class CartUseCase {
    constructor(private readonly cartRepository:CartRepository){

    }

    public findByUuid = async(uuid:string)=>{
        const item = await this.cartRepository.findByUuid(uuid);
        return item
    }

    public findByUser = async(userUuid:string)=>{
        const cart = await this.cartRepository.findByUser(userUuid);
        return cart
    }

    public filter = async(filters: ICartPartial)=>{
        const filteredItems = await this.cartRepository.filter(filters);
        return filteredItems
    }

    public create = async({quantity, productUuid, userUuid}:IBasicCart)=>{
        const cartItemValue = new NewCartValue({quantity, productUuid, userUuid});
        const newItem = await this.cartRepository.create(cartItemValue);
        return newItem
    }

    public update = async(uuid:string, {quantity, productUuid, userUuid}:IBasicCartPartial)=>{
        const cartItemValue = new UpdateCartValue({quantity, productUuid, userUuid});
        const updateItem = await this.cartRepository.update(uuid, cartItemValue);
        return updateItem
    }

    public delete = async(uuid:string)=>{
        const deletedItem = await this.cartRepository.isDeleted(uuid, true);
        return deletedItem
    }

}