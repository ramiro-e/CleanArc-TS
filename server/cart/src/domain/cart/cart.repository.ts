import { CartEntity, IBasicCartPartial, ICartPartial, NewCartEntity, UpdateCartEntity } from "./cart.entity";

export interface CartRepository {
    findByUuid(uuid:string):Promise< CartEntity | null >
    findByUser(userUuid:string):Promise< CartEntity[] | null >
    filter(filter:ICartPartial):Promise< CartEntity[] | null >
    create(newItem:IBasicCartPartial):Promise< CartEntity | null >
    update(uuid:string, updatedItem:ICartPartial):Promise< CartEntity | null >
    isDeleted(uuid:string, value:boolean):Promise< CartEntity | null >
}