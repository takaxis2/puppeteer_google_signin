import { Router } from "express";
import { hello } from "../controllers/index.js";

const router = Router();

router.get("/", hello);

export { router };
