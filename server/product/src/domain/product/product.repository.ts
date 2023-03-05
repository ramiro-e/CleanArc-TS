import { ProductEntity, NewProductEntity, UpdateProductEntity } from "./product.entity";

export interface ProductRepository {
    findByUuid(uuid:string):Promise<ProductEntity | null>
    find({name, limit, skip}:{name:string, limit: number, skip: number}):Promise<ProductEntity[] | null>
    list():Promise<ProductEntity[] | null>
    create(body:NewProductEntity):Promise<ProductEntity | null>
    update(uuid:string,body:UpdateProductEntity):Promise<ProductEntity | null>
    isActive(uuid:any, value:boolean):Promise<ProductEntity | null>
    isDeleted(uuid:any, value:boolean):Promise<ProductEntity | null>
}