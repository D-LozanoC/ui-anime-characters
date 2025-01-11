"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TURSO_DATABASE_URL = exports.TURSO_AUTH_TOKEN = exports.PORT = void 0;
process.loadEnvFile();
_a = process.env, _b = _a.PORT, exports.PORT = _b === void 0 ? 3000 : _b, _c = _a.TURSO_AUTH_TOKEN, exports.TURSO_AUTH_TOKEN = _c === void 0 ? '' : _c, _d = _a.TURSO_DATABASE_URL, exports.TURSO_DATABASE_URL = _d === void 0 ? '' : _d;
