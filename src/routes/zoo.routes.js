import { Router } from "express";
import {
    save_zoo,
    update_zoo,
    view_zoo,
    list_zoos,
    deactivate_state
} from "../controllers/zoo.controller.js"
import { validateZooSave } from '../middlewares/zoo_validation.js'; // Adjust the path based on your project structure

const router = Router()

router.route("/").post(validateZooSave, save_zoo)
router.route("/:id").put(validateZooSave, update_zoo)
router.route("/:id").get(view_zoo)
router.route("/list").post(list_zoos)
router.route("/:id/deactivate").post(deactivate_state)



export default router