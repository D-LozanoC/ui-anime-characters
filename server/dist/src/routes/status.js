"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const status_js_1 = __importDefault(require("../controllers/status.js"));
function createStatusRouter(statusModel) {
    const router = (0, express_1.Router)();
    const statusController = new status_js_1.default({ model: statusModel });
    router.get("/status", statusController.getAllStatus);
    return router;
}
exports.default = createStatusRouter;
