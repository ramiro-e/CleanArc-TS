import {v4 as uuid} from "uuid"
import { NewCartEntity, UpdateCartEntity, IBasicCart, IBasicCartPartial, FinishCartEntity, ICartPartial, ICart, ICartFilter, CartEntity, ICartFilterRaw } from "./cart.entity";

export class FilterCartValue implements ICartFilter{

    quantity: {$gte:number, $lte:number};
    salePrice: {$gte:number, $lte:number};
    subtotal: {$gte:number, $lte:number};
    sold: boolean;
    productUuid: string;
    userUuid: string;
    orderUuid: string;

    constructor({quantity, salePrice, subtotal, sold, productUuid, userUuid}:ICartFilterRaw){
        if(quantity) this.quantity = JSON.parse(quantity)
        if(salePrice) this.salePrice = JSON.parse(salePrice)
        if(subtotal) this.subtotal = JSON.parse(subtotal)
        if(sold) this.sold = JSON.parse(sold)
        if(productUuid) this.productUuid = JSON.parse(productUuid);
        if(userUuid) this.userUuid = JSON.parse(userUuid);
    }

}

export class NewCartValue implements NewCartEntity{
    uuid: string;
    quantity: number;
    productUuid: string;
    userUuid: string;
    isDeleted: boolean;

    constructor({quantity,productUuid, userUuid}:IBasicCart){
        this.uuid = uuid()
        this.quantity = quantity;
        this.productUuid = productUuid;
        this.userUuid = userUuid;
        this.isDeleted = false
    }
}

export class UpdateCartValue implements UpdateCartEntity{
    uuid: string;
    quantity: number;
    productUuid: string;
    userUuid: string;

    constructor({quantity, productUuid, userUuid}:IBasicCartPartial){
        if(quantity)this.quantity = quantity;
        if(productUuid)this.productUuid = productUuid;
        if(userUuid)this.userUuid = userUuid;
    }
}

export class FinishCartValue implements FinishCartEntity{
    quantity: number;
    salePrice: number;
    subtotal: number;
    sold: boolean;
    productUuid: string;
    userUuid: string;
    orderUuid: string;

    constructor({salePrice, subtotal, orderUuid}:ICart){
        this.salePrice = salePrice;
        this.subtotal = subtotal;
        this.sold = true;
        this.orderUuid = orderUuid;
    }


}