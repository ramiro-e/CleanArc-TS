
export interface IDetail {
    sku: string;
    brand: number;
    model: string;
}

export interface IDetailPartial extends Partial<IDetail>{}

export interface IProduct {
    category: string;
    name: string;
    detail: IDetailPartial;
    image: string[];
    price: number;
    discount: number;
    stock: number;
}

export interface IProductPartial extends Partial<IProduct>{}

export interface NewProductEntity extends IProduct {
    uuid: string;
    isActive: boolean;
    isDeleted: boolean;
}

export interface UpdateProductEntity extends IProductPartial {}

export interface ProductEntity extends IProduct {
    uuid: string;
    isActive: boolean;
    isDeleted: boolean;
}