import { useEffect, useState } from 'react'
import { api } from '../api.js'
import TaskForm from '../components/TaskForm.jsx'
import TaskList from '../components/TaskList.jsx'

export default function Tasks() {
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('')

  async function load() {
    try {
      setTasks(await api.listTasks())
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    load()
  }, [])

  async function handleCreate(title) {
    setError('')
    try {
      await api.createTask(title)
      await load()
      return true
    } catch (err) {
      setError(err.message)
      return false
    }
  }

  async function handleToggle(id) {
    await api.toggleTask(id)
    await load()
  }

  async function handleRemove(id) {
    await api.removeTask(id)
    await load()
  }

  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <TaskForm onCreate={handleCreate} />
      {error && <p className="error" data-cy="error">{error}</p>}
      <TaskList tasks={tasks} onToggle={handleToggle} onRemove={handleRemove} />
    </div>
  )
}
