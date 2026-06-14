// Controllers das tarefas: traduzem HTTP <-> serviço.

import * as taskService from '../services/taskService.js'

export function getTasks(req, res) {
  res.status(200).json(taskService.listTasks())
}

export function postTask(req, res) {
  try {
    const task = taskService.createTask(req.body?.title)
    res.status(201).json(task)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export function patchTask(req, res) {
  const task = taskService.toggleTask(req.params.id)
  if (!task) {
    return res.status(404).json({ error: 'Tarefa não encontrada' })
  }
  res.status(200).json(task)
}

export function deleteTask(req, res) {
  const removed = taskService.removeTask(req.params.id)
  if (!removed) {
    return res.status(404).json({ error: 'Tarefa não encontrada' })
  }
  res.status(204).send()
}
