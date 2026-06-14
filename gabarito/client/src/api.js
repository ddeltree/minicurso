// Wrapper de chamadas à API. Todas as rotas passam pelo proxy /api do Vite.

const BASE = '/api'

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error || 'Erro na requisição')
  }
  if (res.status === 204) return null
  return res.json()
}

export const api = {
  register: (data) => request('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
  login: (data) => request('/auth/login', { method: 'POST', body: JSON.stringify(data) }),
  listTasks: () => request('/tasks'),
  createTask: (title) => request('/tasks', { method: 'POST', body: JSON.stringify({ title }) }),
  toggleTask: (id) => request(`/tasks/${id}`, { method: 'PATCH' }),
  removeTask: (id) => request(`/tasks/${id}`, { method: 'DELETE' })
}
