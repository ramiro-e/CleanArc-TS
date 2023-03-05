import { Schema, model } from "mongoose";
import { CategoryEntity } from './../../domain/category/category.entity';

const CategorySchema = new Schema(
  {
    uuid: {
      type: String,
      unique: true
    },
    category: {
      type: String,
    },
    alias: {
      type: String,
      unique: true
    },
    isDeleted: {
      type: Boolean,
    }
  },
  {
    timestamps: true,
  }
);

const CategoryModel = model<CategoryEntity>("category", CategorySchema)

export default CategoryModel
