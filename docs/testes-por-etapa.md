# Testes por Etapa

Lista exata dos testes escritos em cada vídeo (presentes em `gabarito/`) e o resultado
esperado. Totais validados: **22 testes Vitest/Supertest** + **6 testes Cypress**, todos
verdes ("The Green Suite").

---

## Vídeo 3 — Vitest básico
**Arquivo:** `server/src/validators/taskValidator.test.js` (5 testes)

| Teste | Conceito |
| --- | --- |
| aceita um título válido | `expect().toBe()` |
| rejeita título vazio | `expect(fn).toThrow()` |
| rejeita título só com espaços | erro de validação |
| rejeita título abaixo do mínimo | `toThrow(/regex/)` |
| aceita exatamente o tamanho mínimo | borda da regra |

```bash
cd server && npm test
```

---

## Vídeo 4 — Vitest: mocks e integração

**Service + mocks** — `server/src/services/taskService.test.js` (6 testes):
- `createTask` cria e armazena; propaga erro em título inválido.
- `toggleTask` alterna `done`; `removeTask` remove.
- `vi.spyOn(validator, 'validateTitle')` — verifica delegação.
- `vi.fn()` — callback mockado (`toHaveBeenCalledWith`).

**Integração com Supertest** — `server/src/routes/tasks.integration.test.js` (5 testes):
- `GET /tasks` → 200 + array.
- `POST /tasks` válido → 201; inválido → 400.
- `PATCH /tasks/:id` → 200 (alterna); `DELETE /tasks/:id` → 204.

```bash
cd server && npm test            # roda tudo
cd server && npm run coverage    # relatório de cobertura
```

---

## Vídeo 5 — Cypress (E2E)
**Arquivos:** `cypress/e2e/login.cy.js` (2) e `cypress/e2e/tasks.cy.js` (3)

| Spec | Fluxo |
| --- | --- |
| login.cy.js | cadastra → loga → chega em "Minhas Tarefas"; credencial inválida mostra erro |
| tasks.cy.js | cria tarefa; marca concluída ("Reabrir"); remove ("Nenhuma tarefa ainda.") |

Comandos: `cy.visit`, `cy.get`, `cy.type`, `cy.click`, `cy.contains`.

```bash
npm run test:e2e   # sobe a app e roda headless
npm run cy:open    # interativo (app já no ar via npm run dev)
```

---

## Exercício de prática (solução de referência — `gabarito/`)
- `server/src/desafio/parte1-unitarios.test.js` (3) — regras de negócio.
- `server/src/desafio/parte2-integracao.test.js` (3) — GET/POST `/tasks`.
- `cypress/e2e/desafio-parte3.cy.js` (1) — fluxo criar → concluir → remover.

> A solução de referência fica na branch `solucao` (pasta `gabarito/`), disponível quando
> quiser conferir.
