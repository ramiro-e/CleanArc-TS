import { UserEntity, IUser } from "./user.entity";

export interface UserRepository {
    findByUuid(uuid:string):Promise<UserEntity | null>
    login({email, password}:{email:string, password:string}):Promise<UserEntity | null>
    validateLogin({email, password}:{email:string, password:string}):Promise<UserEntity | null>
    register({firstName, lastName, dni, email, password}:IUser):Promise<UserEntity | null>
    list():Promise<UserEntity[] | null>
}