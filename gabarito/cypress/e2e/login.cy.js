// VÍDEO 5 — Cypress: fluxo de cadastro e login.
// Comandos usados: cy.visit, cy.get, cy.type, cy.click, cy.contains.

describe('Cadastro e Login', () => {
  it('cadastra um usuário e faz login', () => {
    // Cadastro
    cy.visit('/register')
    cy.get('[data-cy=name]').type('Maria')
    cy.get('[data-cy=email]').type('maria@email.com')
    cy.get('[data-cy=password]').type('123456')
    cy.get('[data-cy=submit]').click()

    // Login
    cy.visit('/login')
    cy.get('[data-cy=email]').type('maria@email.com')
    cy.get('[data-cy=password]').type('123456')
    cy.get('[data-cy=submit]').click()

    // Chegou na tela de tarefas
    cy.contains('Minhas Tarefas')
  })

  it('mostra erro ao logar com credenciais inválidas', () => {
    cy.visit('/login')
    cy.get('[data-cy=email]').type('ninguem@email.com')
    cy.get('[data-cy=password]').type('senhaerrada')
    cy.get('[data-cy=submit]').click()
    cy.contains('Credenciais inválidas')
  })
})
