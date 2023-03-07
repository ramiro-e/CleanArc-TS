export interface IBasicOrder {
    couponUuid: string | null;
    userUuid: string;
    paymentUuid: string;
    shippingUuid: string;
}


export interface IBasicOrderPartial extends IBasicOrder {}

export interface NewOrderEntity extends IBasicOrder {
    uuid: string;
}

export interface UpdateOrderEntity extends IBasicOrderPartial {}


export interface IOrder extends IBasicOrder {
    total: number;
}

export interface IOrderPartial extends Partial<IOrder> {

}

export interface OrderEntity extends IOrder {
    uuid: string
}