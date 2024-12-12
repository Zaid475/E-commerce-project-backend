import { Router } from "express";

import authroutes from "./authroutes.js"

const routes=Router();

routes.use("/auth",authroutes)

export default routes;

