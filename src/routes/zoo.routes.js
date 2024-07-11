import {Router} from "express";
import {zooSave} from "../controllers/zoo.controller.js"

const router = Router()

router.route("/").post(zooSave)

export default router