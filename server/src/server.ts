import cors from "cors"
import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())

const prisma = new PrismaClient()

app.get('/links', async (request, response) => {
  const data = await prisma.links.findMany()
  return response.json(data)
})

app.post('/updateCheckbox', async (request, response) => {
  const { id, isActive } = request.body
  const data = await prisma.links.update({
    where: {
      id
    },
    data: {
      isActive
    }
  })

  return response.json({
    data
  })
})

app.listen(port, () => {
  console.log(`🚀 Servidor iniciado na porta: ${port}`)
})