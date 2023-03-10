import {v4 as uuid} from "uuid"
import { UserEntity, IUser, UpdateUserEntity, IUserUpdate, NewUserEntity } from "./user.entity";

export class NewUserValue implements NewUserEntity{
    uuid: string;
    firstName: string;
    lastName: string;
    dni: number;
    email: string;
    image: string;
    password: string;
    isSuperuser: boolean;
    isActive: boolean;
    isConfirmed: boolean;

    constructor({firstName, lastName, dni, email, password}:IUser){
        this.uuid = uuid()
        this.firstName = firstName
        this.lastName = lastName
        this.dni = dni
        this.email = email
        this.password = password
        this.isSuperuser = false
        this.isActive = true
        this.isConfirmed = false
    }
    
}

export class UserUpdateValue implements UpdateUserEntity{
    firstName?: string;
    lastName?: string;
    dni?: number;
    email?: string;
    image?: string;
    password?: string;
    isSuperuser?: boolean;
    isActive?: boolean;
    isConfirmed?: boolean;

    constructor({firstName, lastName, dni, email, image, password}:IUserUpdate){
        if(firstName)this.firstName = firstName
        if(lastName)this.lastName = lastName
        if(dni)this.dni = dni
        if(email)this.email = email
        if(image)this.image = image
        if(password)this.password = password
        this.isSuperuser = false
        this.isActive = true
        this.isConfirmed = false
    }
    
}

