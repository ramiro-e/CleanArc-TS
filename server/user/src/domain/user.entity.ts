

export interface IUser {
    firstName: string;
    lastName: string;
    dni:number;
    email: string;
    password: string;
}

export interface IUserPartial extends Partial<IUser>{}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserUpdate extends Partial<IUser>{
    image?:string;
}

export interface NewUserEntity extends IUser{
    uuid: string;
    isSuperuser: boolean;
    isActive: boolean;
    isConfirmed: boolean;
}

export interface UpdateUserEntity extends Partial<IUser>{
    image?:string;
    isSuperuser?: boolean;
    isActive?: boolean;
    isConfirmed?: boolean;
}

export interface UserEntity extends IUser {
    uuid: string;
    image?:string;
    isSuperuser: boolean;
    isActive: boolean;
    isConfirmed: boolean;
}