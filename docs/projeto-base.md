# Especificação do Projeto Base

Sistema full-stack pequeno, previsível e estável — a estabilidade é uma **vantagem
pedagógica** (sem banco, sem auth real, sem config frágil). Código em `projeto-base/`
(limpo, para o aluno) e `gabarito/` (com todos os testes).

## 1. Stack
- **Frontend:** React + Vite (`client/`)
- **Backend:** Express (`server/`)
- **Testes:** Vitest + Supertest (`server/`), Cypress (raiz)
- **Persistência:** arrays em memória (`server/src/db.js`) — sem banco
- **Auth:** fake (`token: 'fake-token'`) — sem JWT real, sem hash

## 2. Estrutura de pastas
```
projeto-base/
  package.json            scripts dev / test / test:e2e (concurrently, start-server-and-test)
  cypress.config.js
  client/  src/ main.jsx App.jsx api.js  pages/{Login,Register,Tasks}.jsx  components/{TaskForm,TaskList}.jsx
  server/  src/ app.js server.js db.js  validators/ services/ controllers/ routes/
  cypress/ support/ e2e/
```

## 3. Modelo de dados (em memória)
- `tasks: [{ id, title, done }]`
- `users: [{ id, name, email, password }]`
- `resetDb()` — zera tudo (usado em testes e no endpoint `/test/reset`).

## 4. Regras de negócio (`validators/taskValidator.js`)
Funções **puras** — base ideal para testes unitários:
- `validateTitle(title)`:
  - vazio / só espaços → `Error('Título é obrigatório')`
  - `length < 3` → `Error('Título deve ter ao menos 3 caracteres')`
  - válido → `true`

## 5. API REST
| Método | Rota | Sucesso | Erro |
| --- | --- | --- | --- |
| POST | `/auth/register` | 201 `{ token, user }` | 400 (campos/duplicado) |
| POST | `/auth/login` | 200 `{ token, user }` | 401 (credenciais) |
| GET | `/tasks` | 200 `[...]` | — |
| POST | `/tasks` | 201 `{ id, title, done }` | 400 (título inválido) |
| PATCH | `/tasks/:id` | 200 `{...done alternado}` | 404 |
| DELETE | `/tasks/:id` | 204 | 404 |
| POST | `/test/reset` | 204 (apenas dev/test) | — |

O Express `app` é **exportado** por `createApp()` (`app.js`), permitindo testes com
Supertest sem subir porta. `server.js` apenas faz `listen`.

## 6. Frontend
- **Login** (`/login`), **Cadastro** (`/register`), **Tarefas** (`/tasks`).
- `api.js` chama a API por `/api/*`; o **proxy do Vite** redireciona `/api → :3000`.
- Elementos têm atributos `data-cy=...` (ex.: `task-input`, `task-add`, `task-toggle`,
  `task-remove`, `task-list`, `empty`) para seletores estáveis no Cypress.

## 7. Como rodar
```bash
cd projeto-base
npm install        # instala raiz + server + client (postinstall)
npm run dev        # Express :3000 + Vite :5173
# abrir http://localhost:5173
```

## 8. Determinismo para testes
- Vitest/Supertest: cada suíte chama `resetDb()` em `beforeEach`.
- Cypress: `cypress/support/e2e.js` chama `POST /api/test/reset` em `beforeEach`.
- Sem datas/aleatoriedade no fluxo → resultados reproduzíveis.
