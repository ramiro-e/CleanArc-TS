import { Router } from "express";
import { CategoryController } from "../controller/category.controller";
import { MongoCategoryRepository } from "../repository/mongo.category.repository";
import { CategoryUseCases } from './../../application/categoryUseCases';

const router = Router()

const categoryRepository = new MongoCategoryRepository()
const categoryUseCases = new CategoryUseCases(categoryRepository)
const categoryCtrl = new CategoryController(categoryUseCases)

    router.get("/findByUuid", categoryCtrl.findByUuid)
    router.get("/list", categoryCtrl.list)
    router.get("/create", categoryCtrl.create)
    router.get("/update", categoryCtrl.update)
    router.get("/isDeleted", categoryCtrl.isDeleted)

export default router