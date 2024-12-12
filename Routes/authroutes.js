import { Router } from "express";
import { Register } from "../controllers/register.js";

const routes=Router()

routes.post("/register",Register)

export default routes;