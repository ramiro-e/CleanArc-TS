import {v4 as uuid} from "uuid"
import { IDetailPartial, IProduct, IProductPartial, NewProductEntity, UpdateProductEntity } from "./product.entity";

export class NewProductValue implements NewProductEntity{
    uuid: string;
    category: string;
    name: string;
    detail: IDetailPartial;
    image: string[];
    price: number;
    discount: number;
    stock: number;
    isActive: boolean;
    isDeleted: boolean;

    constructor({category, name, detail, image, price, discount, stock}:IProduct){
        this.uuid = uuid()
        this.category = category;
        this.name = name;
        this.detail = detail;
        this.image = image;
        this.price = price;
        this.discount = discount;
        this.stock = stock;
        this.isActive = true;
        this.isDeleted = false;
    }

}

export class UpdateProductValue implements UpdateProductEntity{
    category: string | undefined;
    name: string | undefined;
    detail: IDetailPartial | undefined;
    image: string[] | undefined;
    price: number | undefined;
    discount: number | undefined;
    stock: number | undefined;

    constructor({category, name, detail, image, price, discount, stock}:IProductPartial){
        if(category) this.category = category;
        if(name) this.name = name;
        if(detail) this.detail = detail;
        if(image) this.image = image;
        if(price) this.price = price;
        if(discount) this.discount = discount;
        if(stock) this.stock = stock;
    }
}