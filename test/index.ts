import express, { response } from 'express'

const app = express()

app.use(express.json())

import { Prisma, PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

const libsql = createClient({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
})

const adapter = new PrismaLibSQL(libsql)
const prisma = new PrismaClient({ adapter })

app.get('/createRandomUser', (req, res) => {
    fetch('https://random-data-api.com/api/v2/users')
    .then(response => response.json())
    .then(async user => {
        const newUser = await prisma.user.create({
            data: {
                name: user.first_name + ' ' + user.last_name,
                email: user.email
        }})
        res.json(newUser)
    })
})

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
    console.log('http://localhost:3000')
})