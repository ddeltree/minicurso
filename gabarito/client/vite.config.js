import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O frontend chama a API por caminhos /api/*; o proxy redireciona ao Express (3000).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
