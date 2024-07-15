import { Router } from "express";
import {
    save_zoo,
    update_zoo,
    view_zoo,
    list_zoos,
    deactivate_state
} from "../controllers/zoo.controller.js"
import { validateZooSave } from '../middlewares/zoo_validation.js'; 
import {verifyJWT} from "../middlewares/auth.js"

const router = Router()
//secured routes
router.route("/").post(verifyJWT, validateZooSave, save_zoo)
router.route("/:id").put(verifyJWT, validateZooSave, update_zoo)
router.route("/:id").get(verifyJWT,view_zoo)
router.route("/list").post(verifyJWT, list_zoos)
router.route("/:id/deactivate").post(verifyJWT, deactivate_state)

export default router