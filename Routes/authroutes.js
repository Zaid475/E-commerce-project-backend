import { Router } from "express";
import { Register } from "../controllers/register.js";
import { Login } from "../controllers/login.js";
// import { messageenter } from "../controllers/messageenter.js";
// import { Getuserdata } from "../controllers/getuserdata.js";

const routes=Router()

routes.post("/register",Register)
routes.post("/login",Login)
// routes.post("/messageenter",messageenter)

export default routes;