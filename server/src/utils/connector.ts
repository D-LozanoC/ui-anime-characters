import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL} from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'
import { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from './config.js'

const tursoClient = createClient({
    url: TURSO_DATABASE_URL,
    authToken: TURSO_AUTH_TOKEN
})

const adapter = new PrismaLibSQL(tursoClient)
const prismaClient = new PrismaClient({adapter})

export default prismaClient
