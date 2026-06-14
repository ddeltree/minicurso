---
marp: true
paginate: true
theme: default
---

<!-- _class: lead -->

# Setup do projeto
## React + Vite · Express

---

## Estrutura

```
server/   API Express (validators, services,
          controllers, routes, db em memória)
client/   React + Vite (pages, components)
cypress/  testes E2E
```

A separação por camadas facilita os testes.

---

## Instalar

```bash
npm install
```

Instala **raiz + server + client** de uma vez
(via `postinstall`).

---

## Rodar

```bash
npm run dev
```

- API Express → `http://localhost:3000`
- Front Vite → `http://localhost:5173`

---

## O app em 30 segundos

- Cadastrar → Login
- Criar tarefa
- Concluir (fica riscada)
- Remover

> Simples e previsível — o foco é testar.

---

<!-- _class: lead -->

# Próximo vídeo
## O primeiro teste com Vitest
