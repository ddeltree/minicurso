# Slides dos vídeos

Slides em **Markdown (formato [Marp](https://marp.app/))** — um arquivo por vídeo. O mesmo
`.md` vira PDF, PPTX ou HTML, e cada `---` separa um slide.

| Arquivo | Vídeo |
| --- | --- |
| `01-introducao.md` | V1 — Introdução |
| `02-setup.md` | V2 — Setup do projeto |
| `03-vitest-basico.md` | V3 — Vitest básico |
| `04-mocks-integracao.md` | V4 — Mocks e integração |
| `05-cypress-e2e.md` | V5 — Cypress E2E |
| `06-encerramento.md` | V6 — Encerramento e exercício |

> Os slides são propositalmente enxutos (palavras-chave). O texto a ser **narrado** está no
> `docs/roteiro-de-gravacao.md`, vídeo a vídeo.

## Slides ↔ roteiro
- Cada deck está amarrado ao roteiro: o `docs/roteiro-de-gravacao.md` indica, com 🖼️, qual
  slide deve estar na tela em cada fala.
- Slides marcados com **▶ rodar ao vivo** não são só para exibir: o código/comando que aparece
  neles é **idêntico ao do `gabarito/`** e deve ser **executado ao vivo** no editor/terminal,
  mostrando o resultado. No roteiro esses momentos aparecem como 🖼️→🖥️.
- O slide 1 de cada deck tem uma **nota de apresentador** (comentário Marp) com o vídeo e a
  seção correspondente do roteiro — visível no modo apresentador, invisível para o público.

## Como visualizar / exportar

**Opção 1 — VS Code (mais simples):** instale a extensão *Marp for VS Code*, abra qualquer
arquivo e use o preview / "Export slide deck" (PDF, PPTX, HTML).

**Opção 2 — linha de comando:** (não precisa instalar nada permanentemente)
```bash
# PDF
npx @marp-team/marp-cli docs/slides/01-introducao.md --pdf

# PowerPoint
npx @marp-team/marp-cli docs/slides/01-introducao.md --pptx

# HTML
npx @marp-team/marp-cli docs/slides/01-introducao.md --html

# Apresentar com auto-reload enquanto edita
npx @marp-team/marp-cli -s docs/slides
```

## Personalização rápida
- Trocar tema: no topo de cada arquivo, `theme: default` → `gaia` ou `uncover`.
- Slides centralizados (capa/seção) usam `<!-- _class: lead -->`.
- `paginate: true` mostra o número do slide.
