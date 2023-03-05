import { Router } from "express";
import { ProductController } from "../controller/product.controller";
import { MongoProductRepository } from "../repository/mongo.product.repository";
import { ProductUseCases } from './../../application/productUseCases';

const router = Router()

const productRepository = new MongoProductRepository()
const productUseCases = new ProductUseCases(productRepository)
const productCtrl = new ProductController(productUseCases)

router.get('/findByUuid', productCtrl.findByUuid)
router.get('/find', productCtrl.find)
router.get('/list', productCtrl.list)
router.post('/create', productCtrl.create)
router.put('/update', productCtrl.update)
router.delete('/isActive', productCtrl.isActive)
router.delete('/isDeleted', productCtrl.isDeleted)

export default router