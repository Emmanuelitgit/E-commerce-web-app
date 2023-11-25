import { login, logout, register} from "../controllers/auth.js";
import express from "express"

const router = express.Router()

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
// router.post("/logout", logout);
// router.get("/", users)



export default router