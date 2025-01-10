import { Router } from "express";
import StatusController from "../controllers/status.ts";
import { StatusModelInterface } from "../types/interfaces.ts";

function createStatusRouter(statusModel: StatusModelInterface): Router {
    const router = Router();
    
    const statusController = new StatusController({ model: statusModel }) 

    router.get("/status", statusController.getAllStatus)

    return router;
}

export default createStatusRouter;