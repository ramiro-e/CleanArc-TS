import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { MongoUserRepository } from "../repository/mongo.user.repository";
import { UserUseCases } from "../../aplication/useruseCases";


const router = Router()

const userRepository = new MongoUserRepository()
const userUseCases = new UserUseCases(userRepository)
const userCtrl = new UserController(userUseCases)


router.get("/findByUuid/:uuid", userCtrl.findByUuid)
router.get("/login", userCtrl.login)
router.get("/validateLogin", userCtrl.validateLogin)
router.get("/register", userCtrl.register)
router.get("/changePassword/:uuid", userCtrl.changePassword)
router.get("/activateAccount/:uuid", userCtrl.activateAccount)
router.get("/updateUser/:uuid", userCtrl.updateUser)
router.get("/find", userCtrl.find)


export default router