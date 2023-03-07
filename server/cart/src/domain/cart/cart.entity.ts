export interface IBasicCart{
    quantity: number;
    productUuid: string;
    userUuid: string;
}

export interface IBasicCartPartial extends Partial<IBasicCart>{}

export interface ICart extends IBasicCart{
    salePrice: number;
    subtotal: number;
    sold: boolean;
    orderUuid: string;
}

export interface ICartPartial extends Partial<ICart>{}

export interface NewCartEntity extends IBasicCart{
    isDeleted: boolean
}

export interface UpdateCartEntity extends ICartPartial{}

export interface FinishCartEntity extends ICart{}

export interface CartEntity extends ICart{
    uuid: string;
    isDeleted: boolean
}

export interface ICartFilter{
    quantity: {$gte:number, $lte:number};
    salePrice: {$gte:number, $lte:number};
    subtotal: {$gte:number, $lte:number};
    sold: boolean;
    orderUuid: string;
    productUuid: string;
    userUuid: string;
}

export interface ICartFilterRaw{
    quantity: string;
    salePrice: string;
    subtotal: string;
    sold: string;
    orderUuid: string;
    productUuid: string;
    userUuid: string;
}
