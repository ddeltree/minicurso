# Guia rápido da equipe

Resumo do que cada um precisa fazer para gravar a atividade. Detalhe completo:
`roteiro-de-gravacao.md` (falas palavra-a-palavra) e `divisao-gravacao.md` (quem grava o quê).

> Regra de ouro: **não improvisar.** Tudo já está pronto e testado. Você lê o roteiro e
> reproduz. Errou? Pare e regrave o trecho — a edição corta.

---

## 1. Setup comum (todos, uma vez)
- [ ] Instalar **Node 20+** e ter o **npm**.
- [ ] Abrir a pasta `projeto-base/` no editor (VS Code).
- [ ] `cd projeto-base && npm install` → depois `npm run dev` e confirmar o app em
  `http://localhost:5173` (API em `:3000`).
- [ ] Slides: instalar a extensão **Marp for VS Code** (ou `npm i -g @marp-team/marp-cli`).
  Para apresentar, abra o deck do seu vídeo em `docs/slides/` ou rode `npm run slides` na raiz.
- [ ] Ler a **sua** seção em `docs/roteiro-de-gravacao.md`.

## 2. Na hora de gravar (todos)
- [ ] Terminal com fonte grande, editor com zoom, tela limpa.
- [ ] Fazer um **ensaio** e confirmar que sua parte fica **verde** (testes/app ok).
- [ ] Seguir as marcações do roteiro: **🖼️** troca de slide · **▶ / 🖼️→🖥️** = rode o código
  ao vivo (o trecho do slide é o mesmo do `gabarito/`).
- [ ] Gravar **em sequência V1 → V6**: os vídeos de código assumem o estado do anterior.
- [ ] "Cola" de cada arquivo de teste: pasta `gabarito/` (branch `solucao`).

---

## 3. Davi — Vídeos 3 e 4 (Vitest)
**Antes:** Supertest é novo p/ você — leia a seção "Vídeo 4" do roteiro e abra
`gabarito/server/src/routes/tasks.integration.test.js` (~30 min). Você é o apoio técnico da equipe.

- [ ] **V3 — Vitest básico:** partindo do `projeto-base` (sem testes), criar
  `server/src/validators/taskValidator.test.js` digitando do roteiro. Rodar `npm test` e
  `npm run coverage` (mostrar verde/100%).
- [ ] **V4 — Mocks + Supertest** (logo após o V3): criar `services/taskService.test.js`
  (`vi.fn`, `vi.spyOn`) e `routes/tasks.integration.test.js` (Supertest). `npm test` verde.

## 4. Carlos — Vídeos 1 e 5
**Antes:** seu forte é explicar; nem precisa saber testes antes — o roteiro explica na hora.

- [ ] **V1 — Introdução:** só slides (deck `01`). Ensaie a analogia da **pirâmide** até sair
  natural. Sem código.
- [ ] **V5 — Cypress:** deixe o app rodando (`npm run dev`) em um terminal. `npm run cy:open`,
  digitar `cypress/e2e/login.cy.js` e `tasks.cy.js` do roteiro, rodar no Test Runner e depois
  `npm run test:e2e`. Comandos legíveis (`visit/get/type/click/contains`).

## 5. Aleksander — Vídeos 2 e 6
**Antes:** assista aos vídeos **V1–V5 prontos** antes de gravar o V6 (o recap faz sentido).
Peça ao Carlos para ouvir um ensaio seu.

- [ ] **V2 — Setup:** deck `02`. Mostrar as pastas, rodar `npm install` e `npm run dev`, e usar
  o app no navegador (cadastrar, logar, criar/concluir/remover tarefa).
- [ ] **V6 — Encerramento:** deck `06`. Recap dos pontos + abrir `docs/projeto-final.md` e
  mostrar o exercício. Único comando: `npm test`.

---

## 6. Depois de gravar (juntos)
- [ ] Edição mínima (cortar erros/silêncios) — checklist no fim do `roteiro-de-gravacao.md`.
- [ ] Publicar os 6 vídeos e o repositório (passo a passo no `README.md` → "Publicar no GitHub").
