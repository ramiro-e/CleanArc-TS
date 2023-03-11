import "dotenv/config"
import { Request, Response } from "express";
import { UserUseCases } from "../../aplication/useruseCases";
import { handleHttpError } from "../utils/error.handle"
import User from "../model/user.model"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { IUserPartial } from "../../domain/user.entity";

export class UserController {
  constructor(private UserUseCases: UserUseCases) {
    this.findByUuid = this.findByUuid.bind(this)
    this.login = this.login.bind(this)
    this.validateLogin = this.validateLogin.bind(this)
    this.register = this.register.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.activateAccount = this.activateAccount.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.find = this.find.bind(this)
  }
  public async findByUuid({ params }: Request, res: Response){
    const {uuid} = params;
    const user = await this.UserUseCases.findByUuid(uuid)
    res.send(user)
  }

  public async login({ body }: Request, res: Response){
    const {email, password} = body;
    const user = await this.UserUseCases.login({email, password})
    res.send(user)
  }

  public async validateLogin({ body }: Request, res: Response){
    const {email, password} = body;
    const user = await this.UserUseCases.validateLogin({email, password})
    res.send(user)
  }

  public async register({ body }: Request, res: Response){
    const {firstName, lastName, dni, email, password} = body;
    const user = await this.UserUseCases.register({firstName, lastName, dni, email, password})
    res.send(user)
  }

  public async changePassword({ params, body }: Request, res: Response){
    const {password} = body;
    const {uuid} = params;
    const user = await this.UserUseCases.changePassword(uuid,password)
    res.send(user)
  }

  public async activateAccount({ params }: Request, res: Response){
    const {uuid} = params;
    const user = await this.UserUseCases.activateAccount(uuid)
    res.send(user)
  }

  public async updateUser({ params, body }: Request, res: Response){
    const {firstName, lastName, dni, email} = body;
    const {uuid} = params;
    const userUpdate = {firstName, lastName, dni, email}
    const user = await this.UserUseCases.updateUser(uuid,userUpdate)
    res.send(user)
  }

  public async find({ query }: Request, res: Response){
    const {limit, skip, ...rest} = query;
    const {firstName, lastName, dni, email}:IUserPartial = {...rest}
    const filters = {firstName, lastName, dni, email}
    const user = await this.UserUseCases.find({filters, limit: Number(limit) , skip: Number(skip)})
    res.send(user)
  }


}
