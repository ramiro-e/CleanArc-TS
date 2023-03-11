import { Response } from "express"

const handleHttpError = (res:Response, errorRaw:any, error?:string)=>{
    console.log(error)
    return res.status(500).send({error})
}

export {handleHttpError}