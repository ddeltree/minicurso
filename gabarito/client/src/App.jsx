import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Tasks from './pages/Tasks.jsx'

export default function App() {
  return (
    <div className="container">
      <nav className="nav">
        <Link to="/login">Login</Link>
        <Link to="/register">Cadastro</Link>
        <Link to="/tasks">Tarefas</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  )
}
