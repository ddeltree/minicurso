# Projeto Base — Minicurso ACE 8 (Testes Automatizados)

Sistema full-stack pequeno (React + Vite no front, Express no back, persistência em
memória) usado como base para escrever testes com **Vitest**, **Supertest** e **Cypress**.

> Este é o projeto **limpo**, sem testes. Você vai escrevê-los acompanhando as aulas.
> As soluções ficam na pasta `gabarito/` (liberada após o início do desafio final).

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
cypress/  testes E2E (vazio — preenchido no Vídeo 5)
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

## Testes (você vai escrever)
```bash
npm test            # Vitest (unit + integração) no server
npm run coverage    # relatório de cobertura
npm run test:e2e    # Cypress headless (sobe a app automaticamente)
npm run cy:open     # Cypress interativo (app precisa estar no ar)
```
