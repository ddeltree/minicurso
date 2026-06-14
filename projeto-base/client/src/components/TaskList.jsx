// Lista de tarefas com ações de concluir e remover.
export default function TaskList({ tasks, onToggle, onRemove }) {
  if (tasks.length === 0) {
    return <p data-cy="empty">Nenhuma tarefa ainda.</p>
  }

  return (
    <ul data-cy="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.done ? 'done' : ''} data-cy="task-item">
          <span data-cy="task-title">{task.title}</span>
          <div className="row">
            <button
              className="secondary"
              data-cy="task-toggle"
              onClick={() => onToggle(task.id)}
            >
              {task.done ? 'Reabrir' : 'Concluir'}
            </button>
            <button
              className="danger"
              data-cy="task-remove"
              onClick={() => onRemove(task.id)}
            >
              Remover
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
