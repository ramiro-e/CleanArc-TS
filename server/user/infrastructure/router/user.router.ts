import {Router, Request, Response} from "express"
import userController from "../controller/user.controller"
const router = Router()


router.post("/login", userController.login)
router.post("/validateLogin",userController.validateLogin)

router.post("/register", userController.register)
router.post("/validateRegister",userController.validateRegister)

export {router}