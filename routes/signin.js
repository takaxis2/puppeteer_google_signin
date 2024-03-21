import { Router } from "express";
import { signin, verifyCode } from "../controllers/signinController.js";

const router = Router();

router.post("/signin", signin);
router.post("/verification", verifyCode);

export { router };
