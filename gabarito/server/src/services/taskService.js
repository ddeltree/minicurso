// Camada de serviço: regras de negócio das tarefas.
// Usa o validator e o "banco" em memória.

import { db, nextTask } from '../db.js'
import { validateTitle } from '../validators/taskValidator.js'

// Retorna todas as tarefas.
export function listTasks() {
  return db.tasks
}

// Cria uma tarefa após validar o título. Lança Error se inválido.
export function createTask(title) {
  validateTitle(title)
  const task = { id: nextTask(), title: title.trim(), done: false }
  db.tasks.push(task)
  return task
}

// Alterna o estado de conclusão de uma tarefa. Retorna null se não existir.
export function toggleTask(id) {
  const task = db.tasks.find((t) => t.id === Number(id))
  if (!task) return null
  task.done = !task.done
  return task
}

// Remove uma tarefa. Retorna true se removeu, false se não existia.
export function removeTask(id) {
  const index = db.tasks.findIndex((t) => t.id === Number(id))
  if (index === -1) return false
  db.tasks.splice(index, 1)
  return true
}
