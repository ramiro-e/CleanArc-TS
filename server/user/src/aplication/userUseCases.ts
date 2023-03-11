import { UserRepository } from '../domain/user.repository';
import { IUser, IUserPartial } from '../domain/user.entity';
import { NewUserValue, UpdateUserValue } from '../domain/user.value';

export class UserUseCases {
    constructor(private readonly userRepository:UserRepository){

    }

    public async findByUuid(uuid:string){
        const user = this.userRepository.findByUuid(uuid)
        return user
    }

    public async login({email, password}:{email:string, password:string}){
        const user = this.userRepository.login({email, password})
        return user
    }

    public async validateLogin({email, password}:{email:string, password:string}){
        const user = this.userRepository.validateLogin({email, password})
        return user
    }

    public async register({firstName, lastName, dni, email, password}:IUser){
        const userValue = new NewUserValue({firstName, lastName, dni, email, password})
        const newUser = this.userRepository.register(userValue)
        return newUser
    }

    public async changePassword(uuid:string, password:string){
        const newUser = this.userRepository.changePassword(uuid, password)
        return newUser
    }

    public async activateAccount(uuid:string){
        const newUser = this.userRepository.activateAccount(uuid)
        return newUser
    }

    public async updateUser(uuid:string, userUpdate:IUserPartial){
        const userValue = new UpdateUserValue(userUpdate)
        const newUser = this.userRepository.updateUser(uuid,userValue)
        return newUser
    }    

    public async find({filters,limit, skip}:{filters:IUserPartial , limit:number, skip:number}){
        const newUser = this.userRepository.find({filters, limit, skip})
        return newUser
    }

}