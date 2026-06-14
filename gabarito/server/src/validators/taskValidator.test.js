// VÍDEO 3 — Vitest básico: assertions, funções puras e casos de erro.
import { describe, it, expect } from 'vitest'
import { validateTitle, MIN_TITLE_LENGTH } from './taskValidator.js'

describe('validateTitle', () => {
  it('aceita um título válido', () => {
    expect(validateTitle('Estudar testes')).toBe(true)
  })

  it('rejeita título vazio', () => {
    expect(() => validateTitle('')).toThrow('Título é obrigatório')
  })

  it('rejeita título só com espaços', () => {
    expect(() => validateTitle('   ')).toThrow('Título é obrigatório')
  })

  it('rejeita título abaixo do tamanho mínimo', () => {
    expect(() => validateTitle('ab')).toThrow(/ao menos/)
  })

  it('aceita título exatamente no tamanho mínimo', () => {
    const titulo = 'a'.repeat(MIN_TITLE_LENGTH)
    expect(validateTitle(titulo)).toBe(true)
  })
})
