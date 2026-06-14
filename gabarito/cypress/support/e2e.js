// Carregado antes de cada arquivo de teste E2E.
// Antes de cada teste, zeramos o estado do servidor para garantir testes
// independentes e determinísticos (regra: projeto estável, sem surpresas).
beforeEach(() => {
  cy.request('POST', '/api/test/reset')
})
