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
