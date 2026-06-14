// Controllers de autenticação fake.

import * as authService from '../services/authService.js'

export function postRegister(req, res) {
  try {
    const result = authService.register(req.body ?? {})
    res.status(201).json(result)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export function postLogin(req, res) {
  try {
    const result = authService.login(req.body ?? {})
    res.status(200).json(result)
  } catch (err) {
    res.status(401).json({ error: err.message })
  }
}
