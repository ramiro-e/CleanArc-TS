import { Request, Response, NextFunction } from "express"
import { handleHttpError } from "../utils/error.handle"
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET

import { IUserDB } from './../interfaces/userDB.interface';
interface CustomRequest extends Request {
    user?:IUserDB
}

export default async (req:CustomRequest, res:Response, next:NextFunction) =>{

    let bearerHeader =  req.headers.authorization;
    if(typeof bearerHeader === 'undefined'){
        return handleHttpError(res, "No encontramos un token")
    }

    let bearerToken = bearerHeader.split(" ")[1];
    if (!bearerToken) {
        return handleHttpError(res, "No encontramos un token")
    }    

    const finalToken = JSON.parse(bearerToken)

    jwt.verify(finalToken, JWT_SECRET!, (error:any, data: any) => {
        if(error){
            return handleHttpError(res, "El token es invalido")
        }else{
            if(data){
                req.user = data.payload
                next();
            }
        }
    });
    
}

