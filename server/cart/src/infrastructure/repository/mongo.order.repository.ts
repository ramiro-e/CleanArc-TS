
import { IOrder, IOrderPartial,OrderEntity, IBasicOrderPartial } from '../../domain/order/order.entity';
import OrderModel from '../model/order.schema';
import { OrderRepository } from '../../domain/order/order.repository';

export class MongoOrderRepository implements OrderRepository {
    
    async findByUuid(uuid:string):Promise< OrderEntity | null >{
        const order = await OrderModel.findOne({uuid})
        return order
    }
    async findByUser(userUuid:string):Promise< OrderEntity[] | null >{
        const order = await OrderModel.find({userUuid})
        return order
    }
    async filter(filter:IOrderPartial):Promise< OrderEntity[] | null >{
        const order = await OrderModel.find({filter})
        return order
    }
    async create(newItem:IBasicOrderPartial):Promise< OrderEntity | null >{
        const order = await OrderModel.create(newItem)
        return order
    }
    async update(uuid:string, updatedItem:IOrderPartial):Promise< OrderEntity | null >{
        const order = await OrderModel.findOneAndUpdate({uuid}, updatedItem)
        return order
    }
    async isDeleted(uuid:string, value:boolean):Promise< OrderEntity | null >{
        const order = await OrderModel.findOneAndUpdate({uuid}, {isDeleted:value})
        return order
    }
}