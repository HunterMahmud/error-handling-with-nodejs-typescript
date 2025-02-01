import { Router } from "express";
import { signUp } from "../controllers/controller.user";

const router = Router();

router.get('/', signUp);

export default router;