import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    globals: false,
    // Não falhar quando ainda não há testes (projeto base, antes do aluno escrever os seus).
    passWithNoTests: true,
    include: ['src/**/*.test.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/validators/**', 'src/services/**', 'src/controllers/**']
    }
  }
})
