# Plano de Curso — ACE 8: Testes Automatizados para Arquitetura

## 1. Metadados

| Campo | Valor |
| --- | --- |
| **Disciplina** | Atividades Curriculares de Extensão – ACE 8 |
| **Tema** | Testes Automatizados para Arquitetura |
| **Carga Horária** | 6 (seis) horas |
| **Público-Alvo** | Discentes interessados no ecossistema JavaScript/Node.js |
| **Equipe** | Aleksander Pires Calixto Negrao, Jose Carlos Silva Santos, Jose Davi Alexandre dos Santos |
| **Formato** | Vídeos gravados + *follow along* + desafio avaliativo |
| **Entrega do Plano** | 29/03/2026 |

## 2. Justificativa
A crescente complexidade das arquiteturas de software exige práticas que assegurem
qualidade, confiabilidade e manutenibilidade — conteúdos pouco abordados na graduação.
Testes automatizados também sustentam práticas modernas de CI/CD, amplamente usadas no
mercado. Usando **Vitest** (performance e DX) e **Cypress** (referência em E2E), o aluno
compreende a arquitetura de software de forma prática e ágil.

## 3. Objetivos

**Geral:** capacitar os participantes a construir uma estratégia de testes robusta no
ecossistema Node.js, da lógica de negócio isolada ao fluxo completo do usuário (E2E).

**Específicos:**
- Dominar a **Pirâmide de Testes** aplicada ao Node.js.
- Implementar testes unitários e de integração com **Vitest** e **Supertest**.
- Desenvolver testes E2E de fluxos críticos com **Cypress**.
- Compreender *Test Doubles* (mocks e spies) em arquiteturas modulares.
- Aplicar testes em APIs REST reais e ler relatórios de cobertura.

## 4. Pré-requisitos
- JavaScript básico
- Conhecimentos introdutórios de Node.js
- Familiaridade com React
- Uso básico de terminal e npm

## 5. Distribuição da carga horária (6h)

| Atividade | Carga |
| --- | --- |
| Aulas gravadas | ~1,5 h |
| *Follow along* e implementação guiada | ~2 h |
| Desenvolvimento do desafio final | ~3 h |
| **Total** | **6 h** |

## 6. Conteúdo programático e módulos

### Módulo 1 — Introdução (~10–15 min) → Vídeo 1
- O que são testes automatizados; por que testar.
- Pirâmide de testes: Unit × Integração × E2E.
- Apresentação do projeto base e das ferramentas.

### Módulo 2 — Vitest (~50 min) → Vídeos 2, 3 e 4
- Setup do Vitest; `describe`, `it`, `expect`.
- Testando **funções puras** (validações) e casos de erro.
- **Mocks/spies**: `vi.fn()` e `vi.spyOn()`.
- Testes de **integração** de rotas Express com **Supertest** (GET/POST, status, body).
- Cobertura de código.

### Módulo 3 — Cypress (~30 min) → Vídeo 5
- Setup e *Test Runner*.
- Comandos fundamentais: `cy.visit`, `cy.get`, `cy.click`, `cy.type`, `cy.contains`.
- Fluxo de login/cadastro; CRUD de tarefas; integração frontend ↔ backend.

### Módulo 4 — Projeto Final (~10 min) → Vídeo 6
- Explicação do desafio "The Green Suite".
- Critérios de avaliação e entrega no Google Classroom.

## 7. Ferramentas e escopo mínimo (intencional)
O escopo é deliberadamente enxuto para garantir estabilidade (ver `roteiro-de-gravacao.md`).

| Ferramenta | O que dominar |
| --- | --- |
| **Vitest** | `describe`, `it`, `expect`, `vi.fn`, `vi.spyOn` |
| **Supertest** | GET, POST, status code, response body |
| **Cypress** | `visit`, `get`, `click`, `type`, `contains` |

## 8. Produto de extensão
- **Repositório GitHub** com o *boilerplate* (`projeto-base/`) e a solução (`gabarito/`).
- **Série de vídeos** (6 vídeos curtos — ver `roteiro-de-gravacao.md`).

## 9. Critérios de sucesso
O minicurso é bem-sucedido se os alunos conseguirem: executar os testes; distinguir
unitário/integração/E2E; escrever testes simples sozinhos; e concluir o desafio final.
Não se trata de formar especialistas, mas de entregar **uma introdução prática, funcional
e moderna** sobre testes automatizados.
