import "dotenv/config"
import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handle"
import User from "../model/user.model"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export default {
    login: async (req: Request, res: Response)=>{
        User.findOne({email: req.body.email})
        .then((user)=>{
            if (!user){
                handleHttpError(res, "El usuario o la contraseña son incorrectos")
            }else{
                if(!bcrypt.compareSync(req.body.password, user.password)){
                    handleHttpError(res, "El usuario o la contraseña son incorrectos")
                }else{
                    user.password = ""
                    let token = signToken(user)
                    res.json(token)
                }
            }
        })
        .catch((error)=>handleHttpError(res, "Hubo un problema al login", error))
    },
    validateLogin: async (req: Request, res: Response)=>{
        User.findOne({email: req.body.email})
        .then((user)=>{
            if (!user){
                res.json({match:false})
            }else{
                if(!bcrypt.compareSync(req.body.password, user.password)){
                    res.json({match:false})
                }else{
                    res.json({match:true})
                }
            }
        })
        .catch((error)=>handleHttpError(res,"Hubo un problema al login", error))
    },
    register: async (req: Request, res: Response)=>{
        User.create(
            {...req.body, ...{
                roleId:1,
                isConfirmed:false
            }}
        )
        .then((newUser)=>{
            res.sendStatus(200)
        })
        .catch((error)=>handleHttpError(res, "Hubo un problema al registrarse", error))
    },
    validateRegister: async (req: Request, res: Response)=>{
        User.findOne({email: req.body.email})
        .then((user)=>{
            if (!user){
                res.json({unique:true})
            }else{
                res.json({unique:false})
            }
        })
        .catch((error)=>handleHttpError(res, "Estamos teniendo problemas", error))
    }
}

function signToken(payload:object){
    let token = jwt.sign({ payload }, process.env.JWT_SECRET!, {
		algorithm: "HS256",
		expiresIn: '6h',
	})
    return token
}
