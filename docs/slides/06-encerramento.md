---
marp: true
paginate: true
theme: default
---

<!-- _class: lead -->

# Encerramento
## e exercício de prática

---

## O que você aprendeu

- A **pirâmide** e quando usar cada teste
- **Vitest**: `describe`, `it`, `expect`, matchers
- **Mocks e spies**: `vi.fn`, `vi.spyOn`
- **Integração** com Supertest (status + corpo)
- **E2E** com Cypress

---

## Um núcleo pequeno, mas poderoso

```
Vitest    describe · it · expect · vi.fn · vi.spyOn
Supertest GET · POST · status · body
Cypress   visit · get · type · click · contains
```

> Não precisa decorar a ferramenta inteira.

---

## Exercício de prática (opcional)

1. **Unitários** — tarefa vazia, tamanho mínimo, conclusão
2. **Integração** — `GET` e `POST /tasks`
3. **E2E** — criar → concluir → remover

Meta: deixar a suíte **verde**.

---

## Como rodar

```bash
npm test          # unidade + integração
npm run test:e2e  # ponta a ponta
npm run coverage  # o que falta testar
```

Solução de referência: branch **`solucao`** (`gabarito/`).

---

<!-- _class: lead -->

# Obrigado!
## Pratique e bons testes 🟢
