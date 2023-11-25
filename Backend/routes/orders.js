import express from "express"
import { fetchOrders, insertOrders, } from "../controllers/order.js"


const router = express.Router()

router.get("/api/data", fetchOrders);
router.post("/api/insertData", insertOrders);



export default router