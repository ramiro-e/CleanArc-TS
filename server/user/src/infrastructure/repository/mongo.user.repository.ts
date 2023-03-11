import { UserEntity, IUser, IUserPartial } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/user.model";
import { NewUserValue, UpdateUserValue } from './../../domain/user.value';

export class MongoUserRepository implements UserRepository{

    
    async findByUuid(uuid:string):Promise<UserEntity | null>{
        let user = await UserModel.findOne({uuid})
        return user
    }

    async login({email, password}:{email:string, password:string}):Promise<UserEntity | null>{
        let user = await UserModel.findOne({email, password})
        return user
    }

    async validateLogin({email, password}:{email:string, password:string}):Promise<UserEntity | null>{
        let user = await UserModel.findOne({email, password})
        return user
    }

    async register({firstName, lastName, dni, email, password}:IUser):Promise<UserEntity | null>{
        let newUser = new NewUserValue({firstName, lastName, dni, email, password})
        let user = await UserModel.create(newUser)
        return user
    }

    async changePassword(uuid: string, password: string): Promise<UserEntity | null> {
        let user = await UserModel.findOneAndUpdate({uuid}, {password})
        return user
    }

    async activateAccount(uuid:string): Promise<UserEntity | null> {
        let user = await UserModel.findOneAndUpdate({uuid}, {isActive:true})
        return user
    }

    async updateUser(uuid:string, userUpdate: IUserPartial): Promise<UserEntity | null> {
        let  updatedUser= new UpdateUserValue(userUpdate)
        let user = await UserModel.findOneAndUpdate({uuid}, updatedUser)
        return user
    }

    async find({ filters, limit, skip }: { filters: IUserPartial; limit: number; skip: number; }): Promise<UserEntity[] | null> {
        let user = await UserModel.find(filters)
        .limit(limit)
        .skip(limit * skip)
        return user
    }

}