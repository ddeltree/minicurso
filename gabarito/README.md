# Gabarito — Minicurso ACE 8 (Testes Automatizados)

Cópia completa do projeto base **com todos os testes implementados** — "The Green Suite".
Inclui os testes escritos nas aulas e a solução do exercício de prática.

> Solução de referência. Disponibilize junto ou após os vídeos, como preferir
> (deixar para depois incentiva o aluno a tentar antes de conferir).

## Testes inclusos
| Local                                          | Vídeo / Etapa            |
| ---------------------------------------------- | ------------------------ |
| `server/src/validators/taskValidator.test.js`  | V3 — Vitest básico       |
| `server/src/services/taskService.test.js`      | V4 — mocks/spies         |
| `server/src/routes/tasks.integration.test.js`  | V4 — Supertest           |
| `cypress/e2e/login.cy.js`, `tasks.cy.js`        | V5 — Cypress             |
| `server/src/desafio/parte1-unitarios.test.js`   | Exercício — Parte 1      |
| `server/src/desafio/parte2-integracao.test.js`  | Exercício — Parte 2      |
| `cypress/e2e/desafio-parte3.cy.js`              | Exercício — Parte 3 (E2E)|

## Pré-requisitos
- Node.js 20+
- npm

## Instalação
```bash
npm install     # instala raiz, server e client (via postinstall)
```

## Rodando a aplicação
```bash
npm run dev     # sobe Express (http://localhost:3000) + Vite (http://localhost:5173)
```
Abra http://localhost:5173. Telas: **Login**, **Cadastro** e **Tarefas** (criar,
concluir, remover).

## Estrutura
```
server/   API Express (db em memória, validators, services, controllers, routes)
client/   React + Vite (pages, components, api.js)
cypress/  testes E2E (já implementados)
```

## API
| Método | Rota              | Descrição                         |
| ------ | ----------------- | --------------------------------- |
| POST   | `/auth/register`  | cadastro fake                     |
| POST   | `/auth/login`     | login fake (`token: fake-token`)  |
| GET    | `/tasks`          | lista tarefas                     |
| POST   | `/tasks`          | cria tarefa (valida título)       |
| PATCH  | `/tasks/:id`      | alterna concluída                 |
| DELETE | `/tasks/:id`      | remove tarefa                     |
| POST   | `/test/reset`     | zera o estado (apenas dev/test)   |

## Testes (já implementados)
```bash
npm test            # Vitest (unit + integração) no server
npm run coverage    # relatório de cobertura
npm run test:e2e    # Cypress headless (sobe a app automaticamente)
npm run cy:open     # Cypress interativo (app precisa estar no ar)
```
