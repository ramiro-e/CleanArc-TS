import { Schema, model } from "mongoose";
import { OrderEntity } from "../../domain/order/order.entity";

const OrderSchema = new Schema(
  {
    uuid: {
      type: String,
      unique: true,
    },
    total: {
      type:Number
    },
    couponUuid: {
      type:String
    },
    userUuid: {
      type:String
    },
    paymentUuid: {
      type:String
    },
    shippingUuid: {
      type:String
    }
  },
  {
    timestamps: true,
  }
);

const OrderModel = model<OrderEntity>("order", OrderSchema)

export default OrderModel
