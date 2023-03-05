
import { IProduct, IProductPartial,ProductEntity } from '../../domain/product/product.entity';
import ProductModel from '../model/product.schema';
import { ProductRepository } from '../../domain/product/product.repository';

export class MongoProductRepository implements ProductRepository {
    
    async findByUuid(uuid:string): Promise<ProductEntity | null>{
        const product = await ProductModel.findOne({uuid})
        return product
    }

    async find({name, limit, skip}:{name:string, limit: number, skip: number}): Promise<ProductEntity[] | null>{
        const product = await ProductModel.find({name})
        .limit(limit)
        .skip(limit * skip)
        .sort({
            name: 'asc'
        });
        return product
    }

    async list(): Promise<ProductEntity[] | null>{
        const product = await ProductModel.find()
        return product
    }

    async create(newProduct:IProduct): Promise<ProductEntity | null>{
        const product = await ProductModel.create(newProduct)
        return product
    }

    async update(uuid:any,productUpdate:IProductPartial): Promise<ProductEntity | null>{
        const product = await ProductModel.findOneAndUpdate({uuid}, productUpdate)
        return product
    }

    async isActive(uuid:any, value:boolean): Promise<ProductEntity | null>{
        const product = await ProductModel.findOneAndUpdate({uuid}, {isActive:value})
        return product
    }

    async isDeleted(uuid:any, value:boolean): Promise<ProductEntity | null>{
        const product = await ProductModel.findOneAndUpdate({uuid}, {isDeleted:value})
        return product
    }

    
}