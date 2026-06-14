import { useState } from 'react'

// Formulário de criação de tarefa. Chama onCreate(title) ao enviar.
export default function TaskForm({ onCreate }) {
  const [title, setTitle] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const ok = await onCreate(title)
    if (ok) setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <input
          placeholder="Nova tarefa"
          data-cy="task-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" data-cy="task-add">Adicionar</button>
      </div>
    </form>
  )
}
