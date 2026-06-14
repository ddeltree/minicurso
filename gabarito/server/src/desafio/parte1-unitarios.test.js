// DESAFIO FINAL — Parte 1 (Unitários): solução de referência.
// Cobre: impedir tarefa vazia, validar tamanho mínimo e verificar conclusão.
import { describe, it, expect, beforeEach } from 'vitest'
import { validateTitle } from '../validators/taskValidator.js'
import { createTask, toggleTask } from '../services/taskService.js'
import { resetDb } from '../db.js'

describe('Desafio — Parte 1: regras de negócio', () => {
  beforeEach(() => resetDb())

  it('impede tarefa vazia', () => {
    expect(() => validateTitle('')).toThrow()
    expect(() => createTask('   ')).toThrow('Título é obrigatório')
  })

  it('valida o tamanho mínimo do título', () => {
    expect(() => validateTitle('ab')).toThrow(/ao menos/)
    expect(validateTitle('abc')).toBe(true)
  })

  it('verifica a conclusão de uma tarefa', () => {
    const task = createTask('Concluir o desafio')
    expect(task.done).toBe(false)
    expect(toggleTask(task.id).done).toBe(true)
  })
})
