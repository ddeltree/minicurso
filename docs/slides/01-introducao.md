---
marp: true
paginate: true
theme: default
---

<!-- Vídeo 1 — Introdução · Roteiro: docs/roteiro-de-gravacao.md (§ Vídeo 1). Deck de conceitos — sem rodar código. -->

<!-- _class: lead -->

# Testes Automatizados
## Minicurso ACE 8

Unidade · Integração · End-to-End

---

## O que você vai aprender

- Escrever **testes de unidade** com Vitest
- Testar **rotas de API** com Supertest
- Criar **testes E2E** com Cypress
- Tudo num projeto **full-stack real**

---

## Pré-requisitos

- JavaScript básico
- Noções de Node.js
- Familiaridade com React
- Terminal e npm

> Não precisa saber nada de testes — é o que vamos aprender.

---

## O que é um teste automatizado?

> Um código que verifica se o seu outro código funciona.

Em vez de testar na mão a cada mudança,
um programa faz isso por você — em segundos.

---

## Por que testar?

- **Confiança** — mudar sem medo de quebrar
- **Velocidade** — roda tudo sempre, sem esquecer casos
- **CI/CD** — base da automação no mercado

> Testar não é luxo: é o que permite mudar o código com segurança.

---

## A pirâmide de testes

```
        ▲
       /E2E\        poucos · lentos · realistas
      /-----\
     /Integr.\      alguns · médios
    /---------\
   / Unidade   \    muitos · rápidos · isolados
  /-------------\
```

Muitos na base, poucos no topo.

---

## Unidade × Integração × E2E

| Tipo | Testa | Exemplo |
|------|-------|---------|
| **Unidade** | uma função isolada | validar título |
| **Integração** | peças conversando | rota da API |
| **E2E** | o usuário de verdade | login na tela |

---

## Ferramentas

- **Vitest** — unidade e integração (rápido, fácil)
- **Supertest** — testar rotas HTTP sem subir porta
- **Cypress** — E2E controlando o navegador

---

## O projeto base

- App full-stack: **login, cadastro, tarefas**
- React + Vite · Express
- Dados **em memória**, sem banco
- Pequeno e estável **de propósito**

> Tarefas compartilhadas; login é um fluxo crítico para testar.

---

<!-- _class: lead -->

# Próximo vídeo
## Rodando o projeto
