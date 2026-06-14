// Regras de negócio puras para tarefas.
// Funções puras: não acessam o "banco", não têm efeitos colaterais.
// São o ponto de partida ideal para testes unitários.

export const MIN_TITLE_LENGTH = 3

// Lança um Error quando o título é inválido.
// - vazio ou só espaços  -> "Título é obrigatório"
// - menor que o mínimo   -> "Título deve ter ao menos 3 caracteres"
export function validateTitle(title) {
  if (typeof title !== 'string' || title.trim().length === 0) {
    throw new Error('Título é obrigatório')
  }
  if (title.trim().length < MIN_TITLE_LENGTH) {
    throw new Error(`Título deve ter ao menos ${MIN_TITLE_LENGTH} caracteres`)
  }
  return true
}
