## I - Sobre o minicurso

### 1. Metadados

| **Disciplina** | Atividades Curriculares de Extensão – ACE 8 |
| --- | --- |
| **Tema do Minicurso** | Testes Automatizados para Arquitetura |
| **Carga Horária** | 6 (seis) horas |
| **Público-Alvo** | Discentes interessados no ecossistema JavaScript/Node.js |
| **Equipe Responsável** | Aleksander Pires Calixto Negrao, Jose Carlos Silva Santos, Jose Davi Alexandre dos Santos |
| **Entrega do Plano** | 29/03/2026 |

### 2. Justificativa
A crescente complexidade das arquiteturas de software exige a adoção de práticas que assegurem a qualidade, a confiabilidade e a manutenibilidade dos sistemas. Entretanto, tais conteúdos não são abordados no curso da graduação, fazendo-se necessário introduzir esses conceitos de maneira acessível, contribuindo para a formação acadêmica dos discentes.

Além disso, a adoção de testes automatizados está diretamente relacionada a práticas modernas como Integração Contínua (CI) e Entrega Contínua (CD), amplamente utilizadas no mercado de trabalho. Dessa forma, o minicurso contribui não apenas para a formação acadêmica, mas também para a preparação profissional dos discentes.

O ecossistema JavaScript é hoje o mais utilizado para o desenvolvimento de aplicações Full Stack. A transição de ferramentas tradicionais para frameworks modernos como **Vitest** (focado em performance e DX - Developer Experience) e **Cypress** (referência em testes de interface e E2E) permite que o aluno compreenda a arquitetura de software sob uma ótica prática e ágil, essencial para o desenvolvimento de software moderno.

### 3. Objetivo Geral
Capacitar os participantes a construir uma estratégia de testes robusta utilizando o ecossistema Node.js, cobrindo desde a lógica de negócio isolada até o fluxo completo do usuário (End-to-End).

### 4. Objetivos Específicos
- Dominar a **Pirâmide de Testes** aplicada ao ambiente Node.js.
- Implementar testes unitários e de integração de alta performance com **Vitest**.
- Desenvolver testes de interface e fluxos críticos de negócio com **Cypress**.
- Compreender o conceito de *Test Double* (Mocks e Spies) em arquiteturas modulares.
- Aplicar testes automatizados em APIs REST reais.

<div style="page-break-after: always;"></div>

## II - Conteúdo Programático

### 1. A Pirâmide de Testes no Ecossistema JS
- **Testes Unitários:** Isolando a lógica com **Vitest**.
- **Testes de Integração:** Validando a comunicação entre módulos e banco de dados.
- **Testes End-to-End (E2E):** Simulando a experiência do usuário com **Cypress**.

### 2. Testes de Unidade e Integração em APIs com Vitest
- Configuração do ambiente Node.js.
- Escrita de asserções (*expects*).
- **Mocks e Stubs:** Como testar um serviço sem depender de uma API externa instável.
- Testando rotas e controladores de uma API Express.
- Debugging manual de requisições usando Insomnia e DevTools.

### 3. Testes de UI e Fluxos Completos com Cypress
- Introdução ao Cypress: Instalação e *Test Runner*.
- Seletores e comandos fundamentais.
- Testando a integração: Como o Frontend consome a API REST.
- Simulação de cenários: Login, cadastro e persistência de dados.

### 4. Atividade Prática: "The Green Suite"
- **Desafio:** Dada uma API REST em Node.js e um Front-end simples, os alunos deverão:
    1. Criar testes de unidade para as regras de negócio (Vitest).
    2. Criar um teste E2E que valide o fluxo principal de um formulário (Cypress).
    3. Analisar relatórios de cobertura de código.

<div style="page-break-after: always;"></div>

## III - Metodologia e Produto Final

O curso seguirá o modelo **Live Coding**, onde os conceitos são apresentados enquanto o código é construído. 

**Produto de Extensão:**
- **Repositório no GitHub:** Com o "Boilerplate" do projeto e a solução dos desafios.
- **Série de Vídeos:** 1. "Vitest: O sucessor do Jest para testes rápidos".
    2. "Cypress: Automatizando o navegador de forma simples".
    3. "Integrando tudo na Pirâmide de Testes".
