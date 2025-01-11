"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createCustomError;
function createCustomError(name, message) {
    const error = new Error(message);
    error.name = name;
    return error;
}
