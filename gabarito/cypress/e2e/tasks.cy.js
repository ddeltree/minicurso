// VÍDEO 5 — Cypress: CRUD de tarefas pela interface.
// Comandos usados: cy.visit, cy.get, cy.type, cy.click, cy.contains.

describe('CRUD de Tarefas', () => {
  beforeEach(() => {
    cy.visit('/tasks')
  })

  it('cria uma tarefa', () => {
    cy.get('[data-cy=task-input]').type('Comprar café')
    cy.get('[data-cy=task-add]').click()
    cy.contains('Comprar café')
  })

  it('marca uma tarefa como concluída', () => {
    cy.get('[data-cy=task-input]').type('Estudar Cypress')
    cy.get('[data-cy=task-add]').click()
    cy.get('[data-cy=task-toggle]').click()
    cy.contains('Reabrir')
  })

  it('remove uma tarefa', () => {
    cy.get('[data-cy=task-input]').type('Tarefa temporária')
    cy.get('[data-cy=task-add]').click()
    cy.get('[data-cy=task-remove]').click()
    cy.contains('Nenhuma tarefa ainda.')
  })
})
