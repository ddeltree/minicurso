# Divisão da gravação por integrante

Distribuição dos 6 vídeos entre a equipe, casando o perfil de cada um com a natureza de
cada vídeo. Tudo é gravável lendo o `roteiro-de-gravacao.md` (locução palavra-a-palavra) e
apresentando os `slides/` — ninguém precisa improvisar.

## Perfis
- **Davi** — forte em programação, já sabe bastante de testes (ainda não usou Supertest).
- **Carlos** — explica muito bem, sabe um tanto de programação, nada de testes automatizados.
- **Aleksander** — sabe pouco de programação, nada de testes automatizados.

## Quem grava o quê

| Vídeo | Duração | Responsável | Por quê |
| --- | --- | --- | --- |
| V1 — Introdução | ~10 min | **Carlos** | Só explicação (pirâmide, por que testar), sem código. Aproveita o ponto forte dele e dá uma boa primeira impressão. |
| V2 — Setup | ~5 min | **Aleksander** | Menor carga técnica: rodar comandos e mostrar o app. Reprodução direta do roteiro. |
| V3 — Vitest básico | ~22 min | **Davi** | Núcleo de testes (live-coding). Davi já domina Vitest. |
| V4 — Mocks + Supertest | ~26 min | **Davi** | Parte mais difícil (mocks/spies + Supertest). Davi aprende Supertest rápido — é pequeno. |
| V5 — Cypress E2E | ~26 min | **Carlos** | Live-coding mais amigável (comandos legíveis, visual); rende com um bom explicador. |
| V6 — Encerramento | ~8 min | **Aleksander** | Recap em slides + mostrar o exercício. Baixo código; grava por último. |

**Carga:** Davi ~48 min (mais técnico) · Carlos ~36 min (abertura + Cypress) · Aleksander
~14 min (os dois mais leves). Dois vídeos por pessoa, proporcional à experiência.

## Preparo por pessoa

### Davi — V3 e V4
- V3 é base; V4 assume o V3 pronto. Gravar os dois em sequência mantém a continuidade.
- Supertest é novo, mas mínimo (GET/POST + status + body). Antes de gravar: leia a seção
  "Vídeo 4" do roteiro e abra `gabarito/server/src/routes/tasks.integration.test.js`. ~30 min
  e você está confortável.
- É a rede de segurança técnica da equipe: se algo travar nas demais gravações, te chamam.

### Carlos — V1 e V5
- V1: foco total em clareza. Ensaie a analogia da pirâmide (base larga de unidade → topo
  estreito de E2E) até sair natural. Sem código.
- V5: Cypress lê quase como inglês (`visit`, `get`, `type`, `click`, `contains`). Faça um
  ensaio seguindo o roteiro com o app no ar; nos slides marcados **▶**, rode ao vivo.
- Não precisa saber testes de antemão — o roteiro explica cada conceito na hora.

### Aleksander — V2 e V6
- V2: é o mais simples. Basicamente `npm install`, `npm run dev` e usar o app no navegador.
- V6: assista aos vídeos V1–V5 **antes** de gravar — assim o recap faz sentido. É só slides
  + mostrar o exercício; o único comando é `npm test` (slide ▶).
- Dica: peça ao Carlos para te ouvir num ensaio do V6 (ele é o melhor em explicar).

## Regras para todos (não improvisar)
1. Antes de gravar, faça um **ensaio** com o roteiro aberto e confirme que sua parte fica
   **verde** (testes/app funcionando).
2. Siga as marcações: 🖼️ troca de slide · 🖼️→🖥️ / **▶** roda o código ao vivo.
3. Grave em sequência (V1 → V6): os vídeos de código assumem o estado do anterior.
4. Erro na gravação? Pare, respire e regrave o trecho — a edição corta.
