# ACE 8 — Minicurso de Testes Automatizados para Arquitetura

Repositório completo do minicurso (6h): plano de curso, roteiro de gravação, projeto base
full-stack, testes de cada etapa e um exercício de prática opcional.

Stack: **React + Vite** · **Express** · **Vitest** · **Supertest** · **Cypress**
(persistência em memória, sem banco, auth fake).

## Estrutura do repositório
```
docs/                 documentos do curso
  plano-de-curso.md       plano completo (objetivos, módulos, carga horária)
  roteiro-de-gravacao.md  roteiro dos 6 vídeos, cena a cena
  projeto-base.md         especificação técnica do app
  testes-por-etapa.md     o que se testa em cada vídeo
  projeto-final.md        enunciado do exercício de prática opcional
  divisao-gravacao.md     quem da equipe grava cada vídeo (+ dicas de preparo)
  slides/                 decks Marp dos 6 vídeos
projeto-base/         app full-stack LIMPO (o aluno escreve os testes) — começe aqui
gabarito/             app + TODOS os testes (solução / "The Green Suite") — branch solucao
```

## Como usar
- **Instrutor:** siga `docs/roteiro-de-gravacao.md`. Grave partindo do `projeto-base/`,
  digitando os testes que existem no `gabarito/`.
- **Aluno:** baixe `projeto-base/`, acompanhe os vídeos e, se quiser, faça o exercício de
  prática (`docs/projeto-final.md`).

## Rodar rápido (gabarito — tudo verde)
O gabarito fica na branch `solucao`:
```bash
git switch solucao
cd gabarito
npm install
npm test           # 22 testes Vitest/Supertest
npm run coverage   # relatório de cobertura
npm run test:e2e   # 6 testes Cypress (sobe a app automaticamente)
```

## Status de validação
| Suíte | Resultado |
| --- | --- |
| Vitest unit (validators) | ✅ 5 |
| Vitest service + mocks | ✅ 6 |
| Supertest integração | ✅ 5 |
| Exercício Partes 1–2 (Vitest) | ✅ 6 |
| Cypress E2E (login/tasks/exercício) | ✅ 6 |

## Publicar no GitHub
O repositório já está em git, com duas branches: **`main`** (projeto base + `docs/` + slides) e
**`solucao`** (tudo da main + `gabarito/`). Para publicar:

1. Crie um repositório **vazio** no GitHub (sem README/licença), ex.: `ace8-testes-automatizados`.
2. Na raiz do projeto, conecte o remote e envie as branches:
   ```bash
   git remote add origin https://github.com/<usuario>/ace8-testes-automatizados.git
   git push -u origin main      # libera o projeto base para os alunos
   git push origin solucao      # solução/gabarito — junto ou depois, como preferir
   ```
3. (Opcional) No GitHub, confirme `main` como branch padrão.

> Dica: deixar a `solucao` para depois incentiva o aluno a tentar antes de ver o gabarito.
> Para manter a solução privada por um tempo, crie o repositório como privado (ou suba só a
> `main` agora e a `solucao` mais tarde).

**Licença (opcional):** por ser material didático, uma licença permissiva como a MIT é comum —
adicione um arquivo `LICENSE` se desejar.

## Distribuir os vídeos
- Grave seguindo `docs/roteiro-de-gravacao.md` (slides em `docs/slides/`).
- Publique os 6 vídeos (YouTube/Drive/etc.) e aponte os alunos para o `projeto-base/`.
