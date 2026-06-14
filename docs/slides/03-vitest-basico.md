---
marp: true
paginate: true
theme: default
---

<!-- Vídeo 3 — Vitest básico · Roteiro: docs/roteiro-de-gravacao.md (§ Vídeo 3). Slides com ▶ são digitados/rodados AO VIVO no editor/terminal. -->

<!-- _class: lead -->

# Vitest
## O primeiro teste

---

## Por onde começar: função pura

> Mesma entrada → mesma saída, sem efeitos externos.

A peça mais previsível do código —
o teste mais fácil de escrever.

Exemplo: `validateTitle(title)`

---

## Anatomia de um teste

```js
describe('validateTitle', () => {
  it('aceita um título válido', () => {
    expect(validateTitle('Estudar testes')).toBe(true)
  })
})
```

- `describe` — agrupa
- `it` — um caso (leia como frase)
- `expect` — a afirmação (*assertion*)

**▶ rodar ao vivo**

---

## Convenção de arquivo

```
taskValidator.js        → código
taskValidator.test.js   → teste
```

O Vitest acha os testes pelo nome `*.test.js`.

```bash
npm test
```

**▶ rodar ao vivo**

---

## Testar também os erros

```js
expect(() => validateTitle('')).toThrow('Título é obrigatório')
```

- Erro? embrulhe em `() => ...`
- `toThrow` — espera uma exceção
- regex casa parte da mensagem: `/ao menos/`

**▶ rodar ao vivo**

---

## Casos de borda

> A maioria dos bugs mora nos limites.

- vazio / só espaços
- abaixo do mínimo
- **exatamente** o mínimo

Use a constante, não o número mágico.

---

## Cobertura de código

```bash
npm run coverage
```

- Mostra o que **não** foi testado
- 100% ≠ "sem bugs"
- É um mapa, não um certificado

**▶ rodar ao vivo**

---

<!-- _class: lead -->

# Próximo vídeo
## Mocks, spies e integração
