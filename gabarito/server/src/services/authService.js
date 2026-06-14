// Autenticação FAKE — sem hash, sem JWT real, sem banco.
// Suficiente para o minicurso: o objetivo é ensinar testes, não segurança.

import { db, nextUser } from '../db.js'

// Cadastra um usuário. Lança Error se faltar campo ou e-mail já existir.
export function register({ name, email, password }) {
  if (!name || !email || !password) {
    throw new Error('Nome, e-mail e senha são obrigatórios')
  }
  if (db.users.some((u) => u.email === email)) {
    throw new Error('E-mail já cadastrado')
  }
  const user = { id: nextUser(), name, email, password }
  db.users.push(user)
  return { token: 'fake-token', user: { id: user.id, name, email } }
}

// Faz login fake. Lança Error se as credenciais não baterem.
export function login({ email, password }) {
  const user = db.users.find((u) => u.email === email && u.password === password)
  if (!user) {
    throw new Error('Credenciais inválidas')
  }
  return { token: 'fake-token', user: { id: user.id, name: user.name, email } }
}
