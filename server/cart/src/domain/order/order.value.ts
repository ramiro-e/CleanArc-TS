import {v4 as uuid} from "uuid"
import { IOrder, IOrderPartial, NewOrderEntity, UpdateOrderEntity } from "./order.entity";

export class NewOrderValue implements NewOrderEntity{
    uuid: string;
    total: number;
    couponUuid: string | null;
    userUuid: string;
    paymentUuid: string;
    shippingUuid: string;

    constructor({total,couponUuid,userUuid,paymentUuid,shippingUuid}:IOrder){
        this.uuid = uuid()
        this.total = total
        this.couponUuid = couponUuid
        this.userUuid = userUuid
        this.paymentUuid = paymentUuid
        this.shippingUuid = shippingUuid
    }

}

export class UpdateOrderValue implements UpdateOrderEntity{
    total: number;
    couponUuid: string | null;
    userUuid: string;
    paymentUuid: string;
    shippingUuid: string;

    constructor({total,couponUuid,userUuid,paymentUuid,shippingUuid}:IOrderPartial){
        if(total) this.total = total
        if(couponUuid) this.couponUuid = couponUuid
        if(userUuid) this.userUuid = userUuid
        if(paymentUuid) this.paymentUuid = paymentUuid
        if(shippingUuid) this.shippingUuid = shippingUuid
    }

}