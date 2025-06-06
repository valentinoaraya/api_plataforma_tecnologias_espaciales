import { Router } from "express";
import { saludar } from "../controllers/query.controller";

export const queryRouter = Router()

queryRouter.get("/", saludar)