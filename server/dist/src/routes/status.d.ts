import { Router } from "express";
import { StatusModelInterface } from "../types/interfaces.js";
declare function createStatusRouter(statusModel: StatusModelInterface): Router;
export default createStatusRouter;
