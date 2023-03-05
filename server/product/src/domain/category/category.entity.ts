export interface ICategory {
    category: string;
    alias:string;
}

export interface ICategoryPartial extends Partial<ICategory>{}

export interface NewCategoryEntity extends ICategory {
    uuid: string;
    isDeleted: boolean;
}

export interface UpdateCategoryEntity extends ICategoryPartial {}

export interface CategoryEntity extends ICategory {
    uuid: string;
    isDeleted: boolean;
}