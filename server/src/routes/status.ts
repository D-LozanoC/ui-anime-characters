import { Router } from "express";
import StatusController from "../controllers/status.js";
import type { StatusModelInterface } from "../types/interfaces.js";

function createStatusRouter(statusModel: StatusModelInterface): Router {
    const router = Router();
    
    const statusController = new StatusController({ model: statusModel }) 

    router.get("/status", statusController.getAllStatus)

    return router;
}

export default createStatusRouter;