import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/user.model";

export class MongoRepository implements UserRepository{
    async findByUuid(uuid:string):Promise<UserEntity | null>{
        UserModel.findOne({uuid})
    }
    async login({email, password}:{email:string, password:string}):Promise<UserEntity | null>{
        UserModel.findOne
    }
    async validateLogin({email, password}:{email:string, password:string}):Promise<UserEntity | null>{
        UserModel.findOne
    }
    async register():Promise<UserEntity | null>{
        UserModel.create()
    }
    async list():Promise<UserEntity[] | null>{
        UserModel.findOne
    }
}