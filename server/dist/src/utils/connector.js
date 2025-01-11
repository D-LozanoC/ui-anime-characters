"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const adapter_libsql_1 = require("@prisma/adapter-libsql");
const client_2 = require("@libsql/client");
const config_js_1 = require("./config.js");
const tursoClient = (0, client_2.createClient)({
    url: config_js_1.TURSO_DATABASE_URL,
    authToken: config_js_1.TURSO_AUTH_TOKEN
});
const adapter = new adapter_libsql_1.PrismaLibSQL(tursoClient);
const prismaClient = new client_1.PrismaClient({ adapter });
exports.default = prismaClient;
