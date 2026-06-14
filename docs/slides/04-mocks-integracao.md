---
marp: true
paginate: true
theme: default
---

<!-- Vídeo 4 — Mocks e integração · Roteiro: docs/roteiro-de-gravacao.md (§ Vídeo 4). Slides com ▶ são digitados/rodados AO VIVO no editor/terminal. -->

<!-- _class: lead -->

# Vitest
## Mocks, spies e integração

---

## Test doubles (dublês de teste)

Testar cada peça **isolada** das outras.

- **Spy** — observa uma função real
- **Mock** — função falsa, criada do zero

Ambos registram *como foram chamados*.

---

## vi.spyOn × vi.fn

```js
const spy = vi.spyOn(validator, 'validateTitle')
// ...
expect(spy).toHaveBeenCalledWith('Tarefa com spy')
```

```js
const onCreate = vi.fn()
expect(onCreate).toHaveBeenCalledTimes(1)
```

- `spyOn` → prova **colaboração** entre peças
- `vi.fn` → simula dependências

**▶ rodar ao vivo**

---

## Testes independentes

```js
beforeEach(() => {
  resetDb()
  vi.restoreAllMocks()
})
```

> Cada teste começa do zero.
> Teste que depende de outro é teste frágil.

**▶ rodar ao vivo**

---

## Integração com Supertest

```js
const app = createApp()
const res = await request(app).get('/tasks')
```

Testa a **rota inteira** — sem subir porta.

Por isso o projeto separa `createApp` do `server.js`.

**▶ rodar ao vivo**

---

## Status HTTP que importam

| Código | Significado |
|--------|-------------|
| **200** | OK |
| **201** | Criado |
| **400** | Requisição inválida |
| **204** | OK, sem conteúdo |

```js
expect(res.status).toBe(201)
```

---

<!-- _class: lead -->

# Próximo vídeo
## Cypress — testes E2E
