import { UserRepository } from '../domain/user.repository';
import { IRegister } from '../infrastructure/types/register.interface';
import { UserValue } from '../domain/user.value';

export class UserUseCase {
    constructor(private readonly userRepository:UserRepository){

    }

    public async register({firstName, lastName, dni, email, password}:IRegister){
        const userValue = new UserValue({firstName, lastName, dni, email, password})
        const newUser = this.userRepository.register(userValue)
        return newUser
    }

    public registerUserAndEmailConfirmation(){

    }
}