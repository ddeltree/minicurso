# Roteiro de Gravação

## Regras de ouro (não negociáveis)
1. **NÃO improvisar.** Tudo já está pronto e validado no `gabarito/`. A gravação é
   apenas a **reprodução guiada** de algo que já funciona.
2. **Vídeos curtos** (5–15 min): menos erros, regravação fácil, melhor retenção.
3. Antes de gravar cada vídeo: app rodando, testes verdes, terminal limpo, fonte grande.
4. Ritmo constante e objetivo. Cortes na edição apenas para remover silêncio/erros.

## Preparação do ambiente (antes de qualquer gravação)
- Terminal com fonte ampliada; editor com tema legível e zoom.
- Em `projeto-base/`: `npm install` já feito. Para gravar "do zero", parta do
  `projeto-base/` (sem specs) e digite os testes que existem no `gabarito/`.
- Dois terminais úteis: um para `npm run dev`, outro para `npm test`.

---

## Vídeo 1 — Introdução (~10 min)
**Tela:** slides + diagrama da pirâmide.
- Abertura: tema, equipe, o que o aluno vai conseguir fazer ao final.
- O que são testes automatizados e por que importam (qualidade, CI/CD, manutenção).
- **Pirâmide de testes:** base larga de unitários, meio de integração, topo de E2E.
- Unit × Integração × E2E — exemplos rápidos de cada um.
- Apresentação do projeto base (telas Login/Cadastro/Tarefas) e das ferramentas
  (Vitest, Supertest, Cypress).
- Encerramento: "no próximo vídeo, rodamos o projeto."

**Fala-guia:** "Testar não é luxo: é o que permite mudar o código com confiança."

---

## Vídeo 2 — Setup do projeto (~5 min)
**Tela:** terminal + navegador.
- Mostrar a estrutura: `client/`, `server/`, `cypress/`.
- `npm install` (explicar o `postinstall` que instala client e server).
- `npm run dev` → mostrar Express em `:3000` e Vite em `:5173`.
- No navegador: cadastrar, logar, criar/concluir/remover uma tarefa.
- Mostrar a API respondendo (DevTools → aba Network, ou Insomnia em `GET /tasks`).

**Fala-guia:** "Projeto pequeno de propósito — assim focamos nos testes, não na config."

---

## Vídeo 3 — Vitest básico (~30 min)
**Tela:** editor + terminal lado a lado.
- Setup: `vitest` já no `package.json`; rodar `npm test` (ainda sem testes).
- Criar `validators/taskValidator.test.js`.
- **Primeiro teste** com `describe`/`it`/`expect` — título válido (`toBe(true)`).
- **Casos de erro** com `expect(() => ...).toThrow()`:
  título vazio, só espaços, abaixo do mínimo, e a borda (exatamente o mínimo).
- Rodar `npm test` a cada teste e mostrar o verde.
- Encerrar mostrando `npm run coverage` no validator (100%).

**Comandos a digitar:** ver `gabarito/server/src/validators/taskValidator.test.js`.
**Fala-guia:** "Função pura é o teste mais fácil que existe: entra valor, sai resultado."

---

## Vídeo 4 — Vitest integração + mocks (~20 min)
**Tela:** editor + terminal.
- **Mocks/spies** em `services/taskService.test.js`:
  - `createTask` cria/armazena; erro propaga.
  - `vi.spyOn(validator, 'validateTitle')` — provar a delegação.
  - `vi.fn()` — callback mockado.
  - Lembrar do `resetDb()` em `beforeEach` (testes independentes).
- **Supertest** em `routes/tasks.integration.test.js`:
  - importar `createApp`, `request(app)`.
  - `GET /tasks` → 200/array; `POST` válido → 201; inválido → 400; PATCH/DELETE.
- Rodar `npm test` (tudo verde) e `npm run coverage`.

**Comandos:** ver os arquivos correspondentes em `gabarito/`.
**Fala-guia:** "Integração testa a rota de verdade, sem subir servidor nem abrir porta."

---

## Vídeo 5 — Cypress E2E (~30 min)
**Tela:** editor + Cypress Test Runner + app no ar (`npm run dev`).
- Instalação/abertura: `npm run cy:open`.
- Explicar `cypress.config.js` (`baseUrl`) e o reset em `support/e2e.js`.
- `login.cy.js`: cadastrar → logar → `cy.contains('Minhas Tarefas')`; caso de erro.
- `tasks.cy.js`: criar (`type` + `click` + `contains`), concluir (`Reabrir`), remover
  (`Nenhuma tarefa ainda.`). Destacar os seletores `data-cy`.
- Rodar headless: `npm run test:e2e` (sobe app sozinho) — mostrar tudo verde.

**Comandos:** ver `gabarito/cypress/e2e/*.cy.js`.
**Fala-guia:** "E2E é o usuário de verdade: clica, digita e confere o que aparece na tela."

---

## Vídeo 6 — Encerramento e exercício de prática (~10 min)
**Tela:** slides + `docs/projeto-final.md`.
- Recapitular rapidamente: pirâmide, Vitest, Supertest, Cypress.
- Apresentar o **exercício de prática opcional** e suas 3 partes.
- Mostrar onde escrever cada teste e como rodar (`npm test`, `npm run test:e2e`).
- Comentar a cobertura como forma de enxergar o que falta testar.
- Indicar onde está a solução de referência (branch `solucao`, pasta `gabarito/`).

**Fala-guia:** "Agora é com você: replique o que vimos para deixar a suíte verde — sem
pressa e sem cobrança."

---

## Checklist de pós-produção (edição mínima)
- [ ] Cortar erros e silêncios.
- [ ] Verificar legibilidade do código em tela cheia.
- [ ] Conferir áudio constante.
- [ ] Ordenar a sequência dos 6 vídeos.
- [ ] Publicar `projeto-base/` no GitHub e disponibilizar os vídeos (o gabarito, na branch
  `solucao`, pode ir junto ou depois — como preferir).
