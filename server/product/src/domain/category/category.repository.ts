import { CategoryEntity, ICategoryPartial, NewCategoryEntity ,UpdateCategoryEntity } from "./category.entity";

export interface CategoryRepository {
    findByUuid(uuid:string):Promise<ICategoryPartial | null>
    list():Promise<CategoryEntity[] | null>
    create(body:NewCategoryEntity):Promise<CategoryEntity | null>
    update(uuid:string, body:UpdateCategoryEntity,):Promise<CategoryEntity | null>
    isDeleted(uuid:string, value: boolean):Promise<CategoryEntity | null>
}