
import { ICart, ICartPartial,CartEntity, IBasicCartPartial } from '../../domain/cart/cart.entity';
import CartModel from '../model/cart.schema';
import { CartRepository } from '../../domain/cart/cart.repository';

export class MongoCartRepository implements CartRepository {
    
    async findByUuid(uuid:string):Promise< CartEntity | null >{
        const item = await CartModel.findOne({uuid})
        return item
    }
    async findByUser(userUuid:string):Promise< CartEntity[] | null >{
        const cart = await CartModel.find({userUuid})
        return cart
    }
    async filter(filter:ICartPartial):Promise< CartEntity[] | null >{
        const cart = await CartModel.find({filter})
        return cart
    }
    async create(newItem:IBasicCartPartial):Promise< CartEntity | null >{
        const cart = await CartModel.create(newItem)
        return cart
    }
    async update(uuid:string, updatedItem:ICartPartial):Promise< CartEntity | null >{
        const cart = await CartModel.findOneAndUpdate({uuid}, updatedItem)
        return cart
    }
    async isDeleted(uuid:string, value:boolean):Promise< CartEntity | null >{
        const cart = await CartModel.findOneAndUpdate({uuid}, {isDeleted:value})
        return cart
    }
}