import {Schema, model} from "mongoose"
import {ProductEntity} from "../../domain/product/product.entity"

const ProductSchema = new Schema<ProductEntity>(
{
    uuid: {
      type: String,
      required:true
    },
    category: {
        type: String,
        required:true
    },

    name: {
        type: String,
        required:true
    },
    detail: {
        type: Object,
    },
    image: {
        type: [String],
    },
    price: {
        type: Number,
        required:true
    },
    discount: {
        type: Number,
        required:true
    },
    stock: {
        type: Number,
        required:true
    },
    isActive: {
        type: Boolean,
        required:true
    },
    isDeleted: {
        type: Boolean,
        required:true
    }
    
},{
  timestamps: true
})




const ProductModel = model<ProductEntity>('product', ProductSchema)

export default ProductModel