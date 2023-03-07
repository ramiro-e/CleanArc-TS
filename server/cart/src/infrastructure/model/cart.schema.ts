import { Schema, model } from "mongoose";
import { CartEntity } from "../../domain/cart/cart.entity";

const CartSchema = new Schema(
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

const CartModel = model<CartEntity>("cart", CartSchema)

export default CartModel
