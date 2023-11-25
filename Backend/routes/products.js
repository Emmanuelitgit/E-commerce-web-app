import express from "express"
import { products, singleProduct, slider } from "../controllers/products.js"


const router = express.Router()

router.get("/products", products)
router.get("/slider", slider)
router.get("/products/:id", singleProduct)



export default router