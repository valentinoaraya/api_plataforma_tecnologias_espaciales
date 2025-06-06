import { Router } from "express";
import { saludar } from "../controllers/process.controller";

export const processRouter = Router()

processRouter.get("/", saludar)