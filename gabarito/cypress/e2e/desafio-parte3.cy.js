// DESAFIO FINAL — Parte 3 (E2E): solução de referência.
// Um único fluxo: cria tarefa -> marca concluída -> remove.

describe('Desafio — Parte 3: fluxo completo de tarefa', () => {
  it('cria, conclui e remove uma tarefa', () => {
    cy.visit('/tasks')

    // cria
    cy.get('[data-cy=task-input]').type('Tarefa do desafio')
    cy.get('[data-cy=task-add]').click()
    cy.contains('Tarefa do desafio')

    // marca concluída
    cy.get('[data-cy=task-toggle]').click()
    cy.contains('Reabrir')

    // remove
    cy.get('[data-cy=task-remove]').click()
    cy.contains('Nenhuma tarefa ainda.')
  })
})
