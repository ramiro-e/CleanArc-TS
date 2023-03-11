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
            return handleHttpError(res, "El token es invalido", error)
        }else{
            if(data.payload.role === 'admin') {
                req.user = data.payload
                next()
            } else {
                return res.sendStatus(401)
            }
        }
    });
    

    // if (cookies && cookies.Authorization) {
    //     const secret = process.env.JWT_SECRET;
    //     try {
    //       const verificationResponse = jwt.verify(cookies.Authorization, secret) as DataStoredInToken;
    //       const id = verificationResponse._id;
    //       const user = await userModel.findByUuid(id);
    //       if (user) {
    //         request.user = user;
    //         next();
    //       } else {
    //         next(new WrongAuthenticationTokenException());
    //       }
    //     } catch (error) {
    //       next(new WrongAuthenticationTokenException());
    //     }
    //   } else {
    //     next(new AuthenticationTokenMissingException());
    //   }
    // }
}
