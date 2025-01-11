import { Router } from "express";
import { StatusModelInterface } from "../types/interfaces.ts";
declare function createStatusRouter(statusModel: StatusModelInterface): Router;
export default createStatusRouter;
