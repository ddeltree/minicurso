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
  guia-da-equipe.md       guia rápido por pessoa para executar a gravação (comece aqui)
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

## Distribuir os vídeos

- Grave seguindo `docs/roteiro-de-gravacao.md` (slides em `docs/slides/`).
- Publique os 6 vídeos (YouTube/Drive/etc.) e aponte os alunos para o `projeto-base/`.
