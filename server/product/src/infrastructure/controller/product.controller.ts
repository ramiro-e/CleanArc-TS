import { Request, Response } from "express";
import { ProductUseCases } from "../../application/productUseCases";

export class ProductController {
  constructor(private ProductUseCases: ProductUseCases) {
    this.findByUuid = this.findByUuid.bind(this)
    this.find = this.find.bind(this)
    this.list = this.list.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.isActive = this.isActive.bind(this)
    this.isDeleted = this.isDeleted.bind(this)
  }

  public async findByUuid({ query }: Request, res: Response) {
    const {uuid} = query;
    const product = await this.ProductUseCases.findByUuid(`${uuid}`);
    res.send(product);
  }

  public async find({ query }: Request, res: Response) {
    let {name, limit, skip} = query;
    const products = await this.ProductUseCases.find({name:`${name}`, limit: Number(limit) , skip: Number(skip)})
    res.send(products);
  }

  public async list(req: Request, res: Response) {
    const products = await this.ProductUseCases.list();
    res.send(products);
  }

  public async create({ body }: Request, res: Response) {
    const product = await this.ProductUseCases.create(body);
    res.send(product);

  }

  public async update({ query, body }: Request, res: Response) {
    const {uuid} = query;
    const product = await this.ProductUseCases.update(`${uuid}`, body);
    res.send(product);

  }

  public async isActive({ query }: Request, res: Response) {
    const {uuid, value} = query;
    const product = await this.ProductUseCases.isActive(`${uuid}`, value == 'false' ? false : true);
    res.send(product);
  }

  public async isDeleted({ query }: Request, res: Response) {
    const {uuid, value} = query;
    const product = await this.ProductUseCases.isDeleted(`${uuid}`,  value == 'true' ? true : false);
    res.send(product);
  }

}
