// Cria e configura o app Express SEM iniciar o listen.
// Exportar o app permite que o Supertest faça requisições sem subir uma porta.

import express from 'express'
import cors from 'cors'
import taskRoutes from './routes/taskRoutes.js'
import authRoutes from './routes/authRoutes.js'
import { resetDb } from './db.js'

export function createApp() {
  const app = express()

  app.use(cors())
  app.use(express.json())

  app.use('/tasks', taskRoutes)
  app.use('/auth', authRoutes)

  // Endpoint utilitário para zerar o estado entre testes E2E.
  // Disponível apenas fora de produção.
  if (process.env.NODE_ENV !== 'production') {
    app.post('/test/reset', (req, res) => {
      resetDb()
      res.status(204).send()
    })
  }

  return app
}

export default createApp
