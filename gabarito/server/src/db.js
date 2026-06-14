// Persistência fake em memória — sem banco de dados.
// Reiniciar o servidor (ou chamar resetDb) zera todo o estado.

let nextTaskId = 1
let nextUserId = 1

export const db = {
  tasks: [],
  users: []
}

// Gera o próximo id de tarefa.
export function nextTask() {
  return nextTaskId++
}

// Gera o próximo id de usuário.
export function nextUser() {
  return nextUserId++
}

// Zera todo o estado em memória. Usado pelos testes e pelo endpoint /test/reset.
export function resetDb() {
  db.tasks = []
  db.users = []
  nextTaskId = 1
  nextUserId = 1
}
