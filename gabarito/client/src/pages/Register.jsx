import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../api.js'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    try {
      await api.register({ name, email, password })
      navigate('/login')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          data-cy="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          data-cy="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          data-cy="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" data-cy="submit">Cadastrar</button>
        {error && <p className="error" data-cy="error">{error}</p>}
      </form>
    </div>
  )
}
