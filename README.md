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
projeto-base/         app full-stack LIMPO (o aluno escreve os testes) — começe aqui
gabarito/             app + TODOS os testes (solução / "The Green Suite") — branch solucao
```

## Como usar
- **Instrutor:** siga `docs/roteiro-de-gravacao.md`. Grave partindo do `projeto-base/`,
  digitando os testes que existem no `gabarito/`.
- **Aluno:** baixe `projeto-base/`, acompanhe os vídeos e, se quiser, faça o exercício de
  prática (`docs/projeto-final.md`).

## Rodar rápido (gabarito — tudo verde)
```bash
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

## Distribuição
- Publicar `projeto-base/` no GitHub e disponibilizar os vídeos.
- O gabarito fica na branch `solucao`; publique junto ou depois, como preferir (deixar para
  depois incentiva o aluno a tentar antes de conferir).
