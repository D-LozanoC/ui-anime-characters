import { Router } from "express";
import StatusController from "../controllers/status.ts";
function createStatusRouter(statusModel) {
    const router = Router();
    const statusController = new StatusController({ model: statusModel });
    router.get("/status", statusController.getAllStatus);
    return router;
}
export default createStatusRouter;
