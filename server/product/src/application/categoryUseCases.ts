import { CategoryRepository } from '../domain/category/category.repository';
import { ICategory, ICategoryPartial } from '../domain/category/category.entity';
import { NewCategoryValue, UpdateCategoryValue } from '../domain/category/category.value';


export class CategoryUseCases {
    constructor(private readonly categoryRepository:CategoryRepository){}
    
    public findByUuid = async (uuid:string) => {
        const category = await this.categoryRepository.findByUuid(uuid);
        return category
    }

    public list = async() => {
        const categoryList = await this.categoryRepository.list();
        return categoryList
    }

    public create = async ({category, alias}:ICategory) => {
        const categoryValue = new NewCategoryValue({category, alias});
        const newCategory = await this.categoryRepository.create(categoryValue);
        return newCategory
    }

    public update = async (uuid:string,{category, alias}:ICategoryPartial) => {
        const categoryValue = new UpdateCategoryValue({category, alias});
        const userCreated = await this.categoryRepository.update(uuid, categoryValue);
        return userCreated
    }

    public isDeleted = async (uuid:string, value:boolean) => {
        const userCreated = await this.categoryRepository.isDeleted(uuid, value);
        return userCreated
    }


}