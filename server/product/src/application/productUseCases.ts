import { ProductRepository } from '../domain/product/product.repository';
import { IProduct, IProductPartial } from '../domain/product/product.entity';
import { NewProductValue, UpdateProductValue } from '../domain/product/product.value';


export class ProductUseCases {
    constructor(private readonly productRepository:ProductRepository){}
    
    public findByUuid = async (uuid:string) => {
        const product = await this.productRepository.findByUuid(uuid);
        return product
    }

    public find = async ({name, limit, skip}:{name:string, limit: number, skip: number}) => {
        const productList = await this.productRepository.find({name, limit, skip});
        return productList
    }

    public list = async() => {
        const productList = await this.productRepository.list();
        return productList
    }

    public create = async ({category, name, detail, image, price, discount, stock}:IProduct) => {
        const productValue = new NewProductValue({category, name, detail, image, price, discount, stock});
        const newProduct = await this.productRepository.create(productValue);
        return newProduct
    }

    public update = async (uuid:string,{category, name, detail, image, price, discount, stock}:IProductPartial) => {
        const productValue = new UpdateProductValue({category, name, detail, image, price, discount, stock});
        const userCreated = await this.productRepository.update(uuid, productValue);
        return userCreated
    }

    public isActive = async (uuid:string, value:boolean) => {
        const userCreated = await this.productRepository.isActive(uuid, value);
        return userCreated
    }

    public isDeleted = async (uuid:string, value:boolean) => {
        const userCreated = await this.productRepository.isDeleted(uuid, value);
        return userCreated
    }


}