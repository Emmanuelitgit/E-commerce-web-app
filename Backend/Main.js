import express from 'express'
import cors from "cors"
import authRoute from "./routes/auth.js"
import cookieParser from 'cookie-parser'
import productRoute from "./routes/products.js"
import orderRoute from "./routes/orders.js"


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/user", authRoute)
app.use("/", productRoute)
app.use("/", orderRoute)






app.listen(8000,()=>{
  console.log("connected to backend")
})