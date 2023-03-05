import { Request, Response } from "express";
import { CategoryUseCases } from "../../application/categoryUseCases";

export class CategoryController {
  constructor(private categoryUseCase: CategoryUseCases) {
    this.findByUuid = this.findByUuid.bind(this)
    this.list = this.list.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.isDeleted = this.isDeleted.bind(this)
  }

  public async findByUuid({ query }: Request, res: Response) {
    const {uuid} = query;
    const category = await this.categoryUseCase.findByUuid(`${uuid}`);
    res.send(category);
  }

  public async list(req: Request, res: Response) {
    const categories = await this.categoryUseCase.list();
    res.send(categories);
  }

  public async create({ body }: Request, res: Response) {
    const category = await this.categoryUseCase.create(body);
    res.send(category);

  }

  public async update({ query, body }: Request, res: Response) {
    const {uuid} = query;
    const category = await this.categoryUseCase.update(`${uuid}`, body);
    res.send(category);

  }
  
  public async isDeleted({ query }: Request, res: Response) {
    const {uuid, value} = query;
    const category = await this.categoryUseCase.isDeleted(`${uuid}`,  value == 'true' ? true : false);
    res.send(category);
  }

}
