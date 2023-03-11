import { UserEntity, IUser, IUserPartial } from "./user.entity";

export interface UserRepository {
    findByUuid(uuid:string):Promise<UserEntity | null>
    login({email, password}:{email:string, password:string}):Promise<UserEntity | null>
    validateLogin({email, password}:{email:string, password:string}):Promise<UserEntity | null>
    register({firstName, lastName, dni, email, password}:IUser):Promise<UserEntity | null>
    changePassword(uuid:string, password:string):Promise<UserEntity | null>
    activateAccount(uuid:string):Promise<UserEntity | null>
    updateUser(uuid:string,userUpdate:IUserPartial):Promise<UserEntity | null>
    find({filters ,limit, skip}:{filters:IUserPartial, limit:number, skip:number}):Promise<UserEntity[] | null>
}