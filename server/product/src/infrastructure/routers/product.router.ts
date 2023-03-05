import { Router } from "express";
import { ProductController } from "../controller/product.controller";
import { MongoRepository } from "../repository/mongo.repository";
import { ProductUseCases } from '../../application/productUseCases';

const route = Router()
/**
 * Iniciar Repository
 */
const productRepository = new MongoRepository()

/**
 * Iniciamos casos de uso
 */

const ProductUseCases = new ProductUseCases(productRepository)

/**
 * Iniciar User Controller
 */

const userCtrl = new ProductController(ProductUseCases)


route.post(`/findByUuid`, userCtrl.findByUuid)
route.get(`/find`, userCtrl.find)
route.get(`/list`, userCtrl.list)
route.get(`/create`, userCtrl.create)
route.get(`/update`, userCtrl.update)
route.get(`/isActive`, userCtrl.isActive)
route.get(`/isDeleted`, userCtrl.isDeleted)









export default route