// VÍDEO 4 — Vitest: testando o service e usando mocks/spies.
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { listTasks, createTask, toggleTask, removeTask } from './taskService.js'
import { resetDb } from '../db.js'
import * as validator from '../validators/taskValidator.js'

describe('taskService', () => {
  beforeEach(() => {
    resetDb()
    vi.restoreAllMocks()
  })

  it('createTask cria e armazena uma tarefa', () => {
    const task = createTask('Primeira tarefa')
    expect(task).toMatchObject({ id: 1, title: 'Primeira tarefa', done: false })
    expect(listTasks()).toHaveLength(1)
  })

  it('createTask delega a validação para validateTitle (spyOn)', () => {
    const spy = vi.spyOn(validator, 'validateTitle')
    createTask('Tarefa com spy')
    expect(spy).toHaveBeenCalledWith('Tarefa com spy')
  })

  it('createTask propaga o erro quando o título é inválido', () => {
    expect(() => createTask('')).toThrow('Título é obrigatório')
    expect(listTasks()).toHaveLength(0)
  })

  it('toggleTask alterna o campo done', () => {
    const task = createTask('Concluir depois')
    expect(toggleTask(task.id).done).toBe(true)
    expect(toggleTask(task.id).done).toBe(false)
  })

  it('removeTask remove a tarefa existente', () => {
    const task = createTask('Para remover')
    expect(removeTask(task.id)).toBe(true)
    expect(listTasks()).toHaveLength(0)
  })

  it('exemplo de vi.fn como callback mockado', () => {
    const onCreate = vi.fn()
    const task = createTask('Notificar criação')
    onCreate(task)
    expect(onCreate).toHaveBeenCalledTimes(1)
    expect(onCreate).toHaveBeenCalledWith(task)
  })
})
