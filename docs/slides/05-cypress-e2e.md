---
marp: true
paginate: true
theme: default
---

<!-- Vídeo 5 — Cypress E2E · Roteiro: docs/roteiro-de-gravacao.md (§ Vídeo 5). Slides com ▶ são digitados/rodados AO VIVO (app precisa estar no ar). -->

<!-- _class: lead -->

# Cypress
## Testes End-to-End

---

## E2E = o usuário de verdade

- Abre o navegador
- Digita, clica
- Confere o que aparece na tela

O teste mais realista — e o mais lento.
Por isso, **poucos**, só nos fluxos críticos.

---

## Os 5 comandos essenciais

```js
cy.visit('/login')          // abre a página
cy.get('[data-cy=email]')   // encontra elemento
cy.type('maria@email.com')  // digita
cy.click()                  // clica
cy.contains('Minhas Tarefas') // confere texto
```

**▶ rodar ao vivo**

---

## Seletores estáveis: data-cy

```html
<input data-cy="email" />
```

> Não dependa de CSS nem de texto.
> Um atributo feito para o teste não quebra
> quando o estilo muda.

---

## Estabilidade: resetar antes

```js
beforeEach(() => {
  cy.request('POST', '/api/test/reset')
})
```

E2E mexe no estado real.
Zerar antes = cada teste num ambiente limpo.

**▶ rodar ao vivo**

---

## Rodar sem abrir janela (headless)

```bash
npm run test:e2e
```

Sobe o app, espera ficar no ar,
roda tudo no navegador invisível.

> É assim que roda numa esteira de CI.

**▶ rodar ao vivo**

---

<!-- _class: lead -->

# Próximo vídeo
## Encerramento e prática
