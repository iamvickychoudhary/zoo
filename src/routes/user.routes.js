import {Router} from "express";
import {loginUser} from "../controllers/user.controller.js"

const router = Router()

router.route("/auth/login").post(loginUser)

export default router