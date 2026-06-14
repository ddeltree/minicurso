// DESAFIO FINAL — Parte 2 (Integração): solução de referência.
// Cobre: GET /tasks e POST /tasks com Supertest.
import { describe, it, expect, beforeEach } from 'vitest'
import request from 'supertest'
import { createApp } from '../app.js'
import { resetDb } from '../db.js'

const app = createApp()

describe('Desafio — Parte 2: integração de /tasks', () => {
  beforeEach(() => resetDb())

  it('GET /tasks responde 200 com lista', async () => {
    await request(app).post('/tasks').send({ title: 'Tarefa existente' })
    const res = await request(app).get('/tasks')
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(1)
  })

  it('POST /tasks cria uma tarefa válida', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Nova tarefa' })
    expect(res.status).toBe(201)
    expect(res.body).toMatchObject({ title: 'Nova tarefa', done: false })
  })

  it('POST /tasks rejeita título inválido com 400', async () => {
    const res = await request(app).post('/tasks').send({ title: '' })
    expect(res.status).toBe(400)
  })
})
