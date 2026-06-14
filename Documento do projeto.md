# Estratégia final do minicurso

O minicurso será conduzido como uma experiência prática guiada, baseada em *follow along*, utilizando um projeto Full Stack simplificado desenvolvido com:

* React + Vite
* Express
* Vitest, Supertest
* Cypress

O objetivo NÃO será formar especialistas em testes automatizados, mas:

* introduzir os conceitos fundamentais;
* demonstrar aplicações práticas;
* permitir que o aluno desenvolva testes reais em um sistema funcional.

A metodologia será centrada em:

* demonstração prática;
* escrita guiada de testes;
* reprodução dos exemplos pelo aluno;
* atividade avaliativa aplicada.

---

# Estrutura pedagógica FINAL

## Módulo 1 — Introdução

### Objetivo

Contextualizar:

* importância dos testes;
* pirâmide de testes;
* diferenças entre testes unitários, integração e E2E.

### Conteúdo

* O que são testes automatizados
* Pirâmide de testes
* Unit vs Integration vs E2E
* Apresentação do projeto base

### Duração

~10–15 min

---

# Módulo 2 — Vitest

### Objetivo

Introduzir testes unitários e de integração básicos em aplicações Node.js.

### Conteúdo

* Setup do Vitest
* Primeiro teste
* Assertions
* Testando funções puras
* Casos de erro
* Mock básico:

  * `vi.fn()`
  * `vi.spyOn()`
* Testes de integração com rotas Express
* Introdução ao Supertest

### Duração

~50 min

---

# Módulo 3 — Cypress

### Objetivo

Demonstrar testes E2E simulando interações reais do usuário.

### Conteúdo

* Setup do Cypress
* Primeiro teste E2E
* Seletores básicos
* Fluxo de login
* Formulários
* CRUD de tarefas
* Interação frontend/backend

### Duração

~30 min

---

# Módulo 4 — Projeto Final

### Objetivo

Apresentar a atividade avaliativa necessária para certificação.

### Conteúdo

* Explicação do desafio
* Critérios avaliativos
* Entrega no Google Classroom

### Duração

~10 min

---

# Projeto base FINAL

O projeto será um sistema Full Stack simplificado contendo:

## Funcionalidades

* login
* cadastro
* formulário
* CRUD de tarefas

## Operações

* listar tarefas
* criar tarefa
* marcar concluída
* remover tarefa

## Persistência

* array em memória
* sem banco de dados

---

# Estratégia didática MAIS IMPORTANTE

O projeto inteiro deve ser:

* pequeno;
* previsível;
* extremamente estável.

Vocês NÃO podem correr risco de:

* configuração quebrar;
* dependência falhar;
* autenticação dar problema;
* banco causar erro;
* ambiente ficar inconsistente.

A simplicidade do projeto é uma vantagem pedagógica.

---

# O que vocês REALMENTE precisam dominar

## Vitest

Somente:

* `describe`
* `it`
* `expect`
* `vi.fn`
* `vi.spyOn`

---

# Supertest

Somente:

* GET
* POST
* status code
* response body

---

# Cypress

Somente:

* `cy.visit`
* `cy.get`
* `cy.click`
* `cy.type`
* `cy.contains`

Isso já é suficiente para entregar um minicurso totalmente válido.

---

# Estratégia de gravação

## Regra principal:

NÃO improvisar.

Antes de gravar:

* todos os testes devem estar prontos;
* todo o fluxo deve funcionar;
* todos os bugs devem ter sido resolvidos.

A gravação deve ser apenas:

> reprodução guiada de algo já validado.

---

# Melhor formato de vídeo

## Vídeos curtos

Muito melhor que:

* 1 vídeo gigante.

Ideal:

* 5–15 minutos por vídeo.

Isso:

* reduz erros;
* facilita regravação;
* melhora retenção;
* deixa mais profissional.

---

# Estrutura operacional das próximas horas

# FASE 1 — Fechar escopo (AGORA)

Tempo máximo:
~20 min

Definir definitivamente:

* estrutura de pastas;
* bibliotecas;
* funcionalidades.

Depois:
NÃO mudar mais.

---

# FASE 2 — Construir projeto base

Tempo:
~2h

Prioridade:

1. Express funcionando
2. React funcionando
3. CRUD funcionando
4. sem estilização sofisticada
5. sem autenticação real
6. sem banco

---

# FASE 3 — Aprender o mínimo necessário

Tempo:
~1h–1h30

Aprender somente:

* mocks básicos;
* supertest básico;
* Cypress básico.

Sem aprofundamento.

---

# FASE 4 — Escrever TODOS os testes

Tempo:
~1h

Antes da gravação:

* tudo pronto;
* tudo funcionando.

---

# FASE 5 — Gravar

Tempo:
~1h

Foco:

* clareza;
* objetividade;
* ritmo constante.

---

# FASE 6 — Edição mínima

Tempo:
~30–40 min

Somente:

* cortar erros;
* remover silêncio;
* organizar sequência.

---

# Critério de sucesso REAL

O minicurso será bem-sucedido se:

* os alunos conseguirem executar os testes;
* entenderem a diferença entre unitário/integrado/E2E;
* escreverem testes simples sozinhos;
* concluírem o desafio final.

Vocês NÃO precisam entregar um curso avançado.

Vocês precisam entregar:

> uma introdução prática, funcional e moderna sobre testes automatizados.
