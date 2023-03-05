import {v4 as uuid} from "uuid"
import { ICategory, ICategoryPartial, NewCategoryEntity, UpdateCategoryEntity } from './category.entity';

export class NewCategoryValue implements NewCategoryEntity{
    uuid: string;
    category: string;
    alias:string;
    isDeleted: boolean;

    constructor({category, alias}:ICategory){
        this.uuid = uuid()
        this.category = category
        this.alias = alias
        this.isDeleted = false;
    }
    
}

export class UpdateCategoryValue implements UpdateCategoryEntity{
    category: string;
    alias:string;

    constructor({category, alias}:ICategoryPartial){
        if(category) this.category = category
        if(alias) this.alias = alias
    }
    
}