
import { ICategory, ICategoryPartial, CategoryEntity } from '../../domain/category/category.entity';
import CategoryModel from '../model/category.schema';
import { CategoryRepository } from '../../domain/category/category.repository';

export class MongoCategoryRepository implements CategoryRepository {
    
    async findByUuid(uuid:string): Promise<CategoryEntity | null>{
        const category = await CategoryModel.findOne({uuid})
        return category
    }

    async list(): Promise<CategoryEntity[] | null>{
        const category = await CategoryModel.find()
        return category
    }

    async create(newCategory:ICategory):Promise<CategoryEntity | null>{
        const category = await CategoryModel.create(newCategory)
        return category
    }

    async update(uuid:any,categoryUpdate:ICategoryPartial):Promise<CategoryEntity | null>{
        const category = await CategoryModel.findOneAndUpdate({uuid}, categoryUpdate)
        return category
    }

    async isDeleted(uuid:any, value:boolean):Promise<CategoryEntity | null>{
        const category = await CategoryModel.findOneAndUpdate({uuid}, {isDeleted:value})
        return category
    }

    
}