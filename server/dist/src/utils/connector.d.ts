import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
declare const prismaClient: PrismaClient<{
    adapter: PrismaLibSQL;
}, never, import("@prisma/client/runtime/library").DefaultArgs>;
export default prismaClient;
