# Desafio Final — "The Green Suite"

Atividade prática **avaliativa**: critério para obtenção do certificado. Você vai
escrever novos testes automatizados para o projeto base até deixar a suíte **verde**.

> Carga horária estimada: ~3 h.

## Ambiente
1. Clone/baixe o `projeto-base/` (sem testes).
2. `npm install` e confirme `npm run dev` funcionando.
3. Escreva os testes nos arquivos indicados abaixo e rode até passarem.

## Parte 1 — Testes Unitários (Vitest)
Local sugerido: `server/src/validators/` e/ou `server/src/services/`.
Crie testes que:
1. **Impeçam tarefa vazia** (título vazio/só espaços deve falhar).
2. **Validem o tamanho mínimo** do título (`< 3` caracteres deve falhar; `>= 3` passa).
3. **Verifiquem a conclusão** de uma tarefa (alternar `done`).

```bash
cd server && npm test
```

## Parte 2 — Testes de Integração (Supertest)
Local sugerido: `server/src/routes/`.
Crie testes que validem:
1. `GET /tasks` → status **200** e corpo em formato de lista.
2. `POST /tasks` → cria tarefa válida (**201**) e rejeita inválida (**400**).

> Dica: importe `createApp` de `app.js` e use `request(app)`. Lembre de `resetDb()` em
> `beforeEach`.

## Parte 3 — Teste E2E (Cypress)
Local: `cypress/e2e/`.
Crie **um** teste que, pela interface, execute o fluxo completo:
1. **cria** uma tarefa;
2. **marca** como concluída;
3. **remove** a tarefa.

```bash
npm run test:e2e
```

## Parte 4 — Cobertura
Gere e analise o relatório:
```bash
cd server && npm run coverage
```
Comente brevemente (no README de entrega) quais partes ficaram cobertas e quais não.

## Critérios de avaliação (rubrica)

| Critério | Peso |
| --- | --- |
| Parte 1 — unitários corretos e passando | 30% |
| Parte 2 — integração GET/POST passando | 30% |
| Parte 3 — E2E do fluxo completo passando | 30% |
| Parte 4 — análise de cobertura + organização | 10% |

Requisito mínimo para certificação: **todos os testes verdes** (`npm test` e
`npm run test:e2e` sem falhas).

## Entrega (Google Classroom)
- Suba seu repositório (ou um `.zip` **sem `node_modules`**) com os testes escritos.
- Inclua um `README` curto com: como rodar e um print/registro da suíte verde.
- Prazo: conforme publicado no Classroom.

> A solução de referência fica em `gabarito/` e é liberada apenas após o início do
> período do desafio.
