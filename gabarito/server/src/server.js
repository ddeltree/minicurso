// Ponto de entrada: sobe o servidor HTTP.

import { createApp } from './app.js'

const PORT = process.env.PORT || 3000
const app = createApp()

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`)
})
