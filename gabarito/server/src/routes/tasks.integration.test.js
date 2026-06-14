// VÍDEO 4 — Testes de integração das rotas com Supertest.
import { describe, it, expect, beforeEach } from 'vitest'
import request from 'supertest'
import { createApp } from '../app.js'
import { resetDb } from '../db.js'

const app = createApp()

describe('rotas /tasks', () => {
  beforeEach(() => resetDb())

  it('GET /tasks retorna 200 e um array', async () => {
    const res = await request(app).get('/tasks')
    expect(res.status).toBe(200)
    expect(res.body).toEqual([])
  })

  it('POST /tasks cria uma tarefa e retorna 201', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Tarefa via API' })
    expect(res.status).toBe(201)
    expect(res.body).toMatchObject({ title: 'Tarefa via API', done: false })

    const lista = await request(app).get('/tasks')
    expect(lista.body).toHaveLength(1)
  })

  it('POST /tasks com título inválido retorna 400', async () => {
    const res = await request(app).post('/tasks').send({ title: '' })
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('error')
  })

  it('PATCH /tasks/:id alterna a conclusão', async () => {
    const criada = await request(app).post('/tasks').send({ title: 'Concluir esta' })
    const res = await request(app).patch(`/tasks/${criada.body.id}`)
    expect(res.status).toBe(200)
    expect(res.body.done).toBe(true)
  })

  it('DELETE /tasks/:id remove a tarefa', async () => {
    const criada = await request(app).post('/tasks').send({ title: 'Remover esta' })
    const res = await request(app).delete(`/tasks/${criada.body.id}`)
    expect(res.status).toBe(204)

    const lista = await request(app).get('/tasks')
    expect(lista.body).toHaveLength(0)
  })
})
