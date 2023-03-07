import { IOrder, IOrderPartial, OrderEntity} from "./order.entity";

export interface OrderRepository {
    findByUuid(uuid:string):Promise< OrderEntity | null >
    findByUser(userUuid:string):Promise< OrderEntity[] | null >
    filter(filter:IOrderPartial):Promise< OrderEntity[] | null >
    create(newItem:IOrder):Promise< OrderEntity | null >
    update(uuid:string, updatedItem:IOrderPartial):Promise< OrderEntity | null >
    isDeleted(uuid:string, value:boolean):Promise< OrderEntity | null >
}