# Roteiro de Gravação (locução palavra-a-palavra)

Este roteiro é feito para quem **sabe programar (JS/React/Node) mas não conhece testes**.
Tudo o que está em 🎙️ é para **ler em voz alta**. Tudo em 🖥️ é **ação na tela**. Os blocos
de código são para **digitar exatamente como estão**.

> Você não precisa entender testes de antemão: o roteiro explica cada conceito na hora.
> Basta ler as falas e reproduzir as ações.

## Como slides e código se conectam
Cada vídeo tem um deck em `docs/slides/`. O slide **apresenta o conceito**; o editor/terminal
**mostra funcionando**. Sempre que um slide trouxer um bloco de código, ele é **idêntico** ao
do `gabarito/` — e a ideia é **rodá-lo ao vivo**, não só exibir. Esses momentos estão marcados
com 🖼️→🖥️. Nos slides, eles aparecem com o selo **▶ rodar ao vivo**.

## Legenda
- 🖼️ **Slide** — qual slide do deck do vídeo deve estar na tela.
- 🖼️→🖥️ **Rodar ao vivo** — vire do slide para o editor/terminal e **execute** o trecho
  mostrado, exibindo o resultado.
- 🎙️ **Fala** — leia em voz alta, do jeito que está.
- 🖥️ **Ação** — o que fazer na tela (digitar, clicar, rodar).
- 🟩 **Resultado esperado** — o que deve aparecer (se não aparecer, corte e refaça).
- ⏱️ Subtempo aproximado de cada bloco.

## Regras de ouro
1. **Não improvisar.** Tudo já está pronto e validado em `gabarito/`. A gravação é só
   reproduzir, lendo as falas.
2. **Vídeos curtos** (5–15 min cada). Erro? Pare, respire, regrave o trecho.
3. Antes de cada vídeo: terminal com fonte grande, editor com zoom, app/testes prontos.
4. Fale num ritmo calmo. Silêncios e erros são cortados na edição.

## Preparação (uma vez, antes de tudo)
- Abra a pasta `projeto-base/` no editor.
- Rode `npm install` (já pode estar feito).
- Tenha dois terminais à mão: um para `npm run dev`, outro para `npm test`.
- Deixe o deck do vídeo aberto no apresentador (ex.: *Marp for VS Code* → "Open preview").
- Para gravar "do zero", os arquivos de teste **não existem** no `projeto-base/` — você vai
  digitá-los. A versão pronta de cada arquivo está em `gabarito/` (sua cola/conferência) e é a
  mesma que aparece nos slides.

---

# 🎬 Vídeo 1 — Introdução (~10 min)
**Tela:** slides + diagrama da pirâmide de testes. **Sem código.**
**Slides:** `docs/slides/01-introducao.md` (capa → próximo vídeo).

### ⏱️ Abertura (~1 min)
🖼️ Slide 1 (capa) → Slide 2 ("O que você vai aprender").

🎙️ "Olá! Seja bem-vindo a este minicurso de **testes automatizados**. Em poucas horas você
vai sair sabendo escrever testes de verdade num projeto full-stack: testes de unidade, de
integração e de ponta a ponta. Eu sou [seu nome], e vamos direto ao ponto: nada de teoria
infinita, a ideia é colocar a mão no código."

🖼️ Slide 3 ("Pré-requisitos").

🎙️ "Pré-requisito é só o básico de JavaScript, Node e React. Você não precisa saber nada de
testes — é exatamente isso que vamos aprender aqui."

### ⏱️ O que é teste automatizado e por que importa (~2,5 min)
🖼️ Slide 4 ("O que é um teste automatizado?").

🎙️ "Vamos começar pelo começo: o que é um teste automatizado? É simplesmente **um código que
verifica se o seu outro código funciona**. Em vez de você abrir o navegador e testar tudo na
mão toda vez que muda algo, você escreve um programa que faz isso por você, em segundos."

🖼️ Slide 5 ("Por que testar?").

🎙️ "Por que isso importa? Três motivos. Primeiro, **confiança**: você muda o código e os
testes te dizem na hora se quebrou alguma coisa. Segundo, **velocidade**: testar na mão é
lento e a gente esquece casos; o teste roda tudo sempre. Terceiro, é a base de **CI/CD** —
aquela automação que roda os testes a cada commit antes de subir para produção. Saber testar
é uma das habilidades mais valorizadas no mercado, e quase não é ensinada na graduação."

🎙️ "Uma frase para guardar: **testar não é luxo, é o que permite mudar o código sem medo.**"

### ⏱️ A pirâmide de testes (~3 min)
🖼️ Slide 6 ("A pirâmide de testes").

🎙️ "Existe um conceito clássico que organiza os tipos de teste: a **pirâmide de testes**. Ela
tem três camadas. Vamos de baixo para cima."

🎙️ "Na **base**, larga, ficam os **testes de unidade**. Eles testam uma peça pequena e isolada
do código — uma função, uma regra de negócio — sem depender de mais nada. São os mais rápidos
e os mais numerosos. Exemplo: uma função que valida se o título de uma tarefa é válido."

🎙️ "No **meio** ficam os **testes de integração**. Eles verificam se as peças conversam direito
entre si — por exemplo, se uma rota da nossa API recebe um pedido e devolve a resposta certa.
São um pouco mais lentos, e a gente tem menos deles."

🎙️ "No **topo**, a parte estreita, ficam os testes **end-to-end**, ou **E2E**. Eles simulam o
usuário de verdade: abrem o navegador, clicam, digitam e conferem o que aparece na tela. São
os mais realistas, mas também os mais lentos e frágeis — por isso a gente tem poucos, só para
os fluxos mais importantes."

🖼️ Slide 7 ("Unidade × Integração × E2E").

🎙️ "A ideia da pirâmide é essa proporção: **muitos testes de unidade na base, alguns de
integração no meio, e poucos E2E no topo.** Assim você tem cobertura boa sem deixar tudo
lento."

### ⏱️ Ferramentas e projeto (~2,5 min)
🖼️ Slide 8 ("Ferramentas").

🎙️ "Para cada camada vamos usar uma ferramenta. Para unidade e integração, o **Vitest** — um
framework de testes moderno, muito rápido e fácil de configurar. Junto com ele, o
**Supertest**, que deixa a gente testar rotas HTTP sem precisar subir o servidor numa porta.
E para os testes E2E, o **Cypress**, que controla um navegador de verdade."

🖼️ Slide 9 ("O projeto base").
🖥️ (Opcional) Mostrar rapidamente as telas reais do app (Login, Cadastro, Tarefas).

🎙️ "E o projeto que vamos usar é de propósito **pequeno e estável**: um app full-stack com
login, cadastro e uma lista de tarefas — criar, concluir e remover. React e Vite no front,
Express no back, e os dados ficam só na memória, sem banco de dados. Essa simplicidade é
intencional: assim a gente foca em aprender a testar, e não em configurar ambiente."

🎙️ "Um aviso honesto sobre o escopo: para manter o projeto enxuto, as tarefas aqui são
**compartilhadas** — não há separação de dados por usuário. O login e o cadastro estão no
projeto como **exemplo de um fluxo crítico para testar**, e a gente vai testá-los no E2E.
Num app real você protegeria as tarefas por usuário; aqui o foco é a técnica de teste, então
deixamos isso de fora de propósito."

🖼️ Slide 10 ("Próximo vídeo").

🎙️ "No próximo vídeo a gente baixa o projeto e roda ele funcionando. Até já!"

---

# 🎬 Vídeo 2 — Setup do projeto (~5 min)
**Tela:** terminal + navegador + editor.
**Slides:** `docs/slides/02-setup.md`.
**Estado inicial:** `projeto-base/` aberto, dependências instaladas.

### ⏱️ Estrutura do projeto (~1,5 min)
🖼️ Slide 2 ("Estrutura").
🖥️ Mostrar a árvore de pastas no editor.

🎙️ "Vamos conhecer o projeto. Ele tem duas partes principais. A pasta **`server`** é o
back-end, em Express. A pasta **`client`** é o front-end, em React com Vite. E tem a pasta
**`cypress`**, onde vão ficar os testes de ponta a ponta mais tarde."

🎙️ "Dentro do `server`, repare na organização: `validators` tem as regras de negócio puras,
`services` tem a lógica, `controllers` e `routes` cuidam do HTTP, e `db.js` é o nosso banco de
mentirinha, que é só um array na memória. Essa separação vai facilitar muito na hora de
testar."

### ⏱️ Instalar e rodar (~2 min)
🖼️→🖥️ Slide 3 ("Instalar"). O comando do slide é o que você roda agora — vire para o terminal,
na pasta `projeto-base/`:
```bash
npm install
```
🎙️ "Primeiro, `npm install`. Esse projeto tem um detalhe esperto: ao instalar na raiz, ele já
instala automaticamente as dependências do `server` e do `client` também. Um comando só."

🖼️→🖥️ Slide 4 ("Rodar"). Em seguida, rode:
```bash
npm run dev
```
🎙️ "Agora `npm run dev`. Esse comando sobe as duas coisas ao mesmo tempo: o servidor Express
na porta 3000 e o front-end do Vite na porta 5173."

🟩 No terminal devem aparecer as duas mensagens: a API em `:3000` e o Vite em `:5173`.

### ⏱️ Usar o app (~1,5 min)
🖼️→🖥️ Slide 5 ("O app em 30 segundos"). Abrir `http://localhost:5173` no navegador. Cadastrar
um usuário, logar, criar uma tarefa, marcar como concluída, remover.

🎙️ "Vamos ver funcionando. Abro o navegador na porta 5173. Faço um cadastro rápido… faço
login… e aqui está a tela de tarefas. Crio uma tarefa… marco como concluída — repare que ela
fica riscada… e removo. É só isso que o app faz. Simples e previsível, do jeito que a gente
quer para aprender a testar."

🖼️ Slide 6 ("Próximo vídeo").

🎙️ "Com o projeto rodando, no próximo vídeo a gente escreve o primeiro teste de verdade."

---

# 🎬 Vídeo 3 — Vitest: o primeiro teste (~30 min)
**Tela:** editor + terminal lado a lado.
**Slides:** `docs/slides/03-vitest-basico.md`.
**Estado inicial:** projeto instalado. Vamos criar o arquivo de teste do zero.

### ⏱️ Contexto: o que vamos testar (~2 min)
🖼️ Slide 2 ("Por onde começar: função pura").
🖥️ Abrir `server/src/validators/taskValidator.js` e mostrar a função `validateTitle`.

🎙️ "Vamos começar testando a peça mais simples do projeto: uma **função pura**. Função pura,
em testes, é aquela que para a mesma entrada sempre dá a mesma saída e não mexe em nada
externo. É o caso ideal para o primeiro teste, porque é totalmente previsível."

🎙️ "Esta é a função `validateTitle`. A regra dela é: se o título estiver vazio ou só com
espaços, ela lança um erro dizendo que o título é obrigatório. Se tiver menos de três
caracteres, lança um erro de tamanho mínimo. Se estiver tudo certo, retorna `true`. É essa
regra que vamos testar."

### ⏱️ Criar o arquivo e o primeiro teste (~6 min)
🖼️ Slide 4 ("Convenção de arquivo").
🖥️ Criar o arquivo `server/src/validators/taskValidator.test.js`.

🎙️ "O Vitest descobre os testes pelo nome do arquivo. A convenção é `ponto test ponto js`. Vou
criar `taskValidator.test.js`, ao lado da função que ele testa."

🖥️ Digitar:
```js
import { describe, it, expect } from 'vitest'
import { validateTitle, MIN_TITLE_LENGTH } from './taskValidator.js'
```
🎙️ "Importo três coisas do Vitest. O `describe`, que agrupa testes relacionados. O `it`, que
descreve um caso de teste individual. E o `expect`, que é como a gente faz as **afirmações** —
ou, em inglês, *assertions*. E claro, importo a função que vamos testar."

🖼️→🖥️ Slide 3 ("Anatomia de um teste") — o trecho do slide é exatamente este; digite-o no
editor:
```js
describe('validateTitle', () => {
  it('aceita um título válido', () => {
    expect(validateTitle('Estudar testes')).toBe(true)
  })
})
```
🎙️ "Aqui está a estrutura. O `describe` recebe um nome — o nome do que estamos testando — e uma
função. Dentro dela, cada `it` é um caso. Leio o `it` como uma frase: 'aceita um título
válido'. E a afirmação: eu **espero que** `validateTitle` com um título bom **seja igual a**
`true`. Esse é o coração de um teste: `expect`, valor obtido, e o que a gente espera dele."

🖥️ No terminal, na pasta `server`:
```bash
npm test
```
🎙️ "Vou rodar com `npm test`. O Vitest acha o arquivo, executa…"

🟩 Aparece o teste passando, em verde (`1 passed`).

🎙️ "Verde! Nosso primeiro teste passou. Esse verde é o que a gente persegue o curso inteiro."

### ⏱️ Testando os casos de erro (~10 min)
🖼️→🖥️ Slide 5 ("Testar também os erros") — digite, dentro do `describe`:

🎙️ "Um bom teste não verifica só o caminho feliz. Tão importante quanto é garantir que o código
**rejeita** o que é inválido. Vamos testar os erros."

🖥️ Adicionar dentro do `describe`:
```js
  it('rejeita título vazio', () => {
    expect(() => validateTitle('')).toThrow('Título é obrigatório')
  })
```
🎙️ "Repare numa diferença importante. Quando a função **lança um erro**, eu não posso só
chamar ela direto, senão o erro estoura e o teste quebra. Por isso eu embrulho a chamada numa
arrow function: `() => validateTitle('')`. Aí eu uso o matcher `toThrow`, que diz: 'eu espero
que isso lance um erro' — e ainda confiro a mensagem, 'Título é obrigatório'."

🖥️ Adicionar:
```js
  it('rejeita título só com espaços', () => {
    expect(() => validateTitle('   ')).toThrow('Título é obrigatório')
  })
```
🎙️ "Mesmo caso, mas com só espaços em branco. A função faz `trim` antes de validar, então
espaços contam como vazio. Bom testar isso explicitamente, porque é um caso fácil de esquecer."

🖼️ Slide 6 ("Casos de borda").
🖥️ Adicionar:
```js
  it('rejeita título abaixo do tamanho mínimo', () => {
    expect(() => validateTitle('ab')).toThrow(/ao menos/)
  })
```
🎙️ "Agora o tamanho mínimo. Com duas letras, tem que falhar. E olha um truque: em vez da
mensagem inteira, passei uma **expressão regular**, barra 'ao menos' barra. Assim o teste
casa com qualquer mensagem que contenha esse trecho, sem eu precisar escrever ela toda."

🖥️ Adicionar:
```js
  it('aceita título exatamente no tamanho mínimo', () => {
    const titulo = 'a'.repeat(MIN_TITLE_LENGTH)
    expect(validateTitle(titulo)).toBe(true)
  })
```
🎙️ "E por fim, um caso de **borda**. O limite é três caracteres. O que acontece exatamente em
três? Tem que passar. Por isso uso a constante `MIN_TITLE_LENGTH` que a própria função exporta,
em vez de chutar o número três na mão — se a regra mudar, o teste acompanha. Testar as bordas é
onde mora a maioria dos bugs."

🖥️ Rodar de novo:
```bash
npm test
```
🟩 Cinco testes passando, todos verdes.

🎙️ "Cinco testes, todos verdes. Olha como ficou legível: a lista de `it` lida de cima a baixo é
praticamente a especificação da nossa função em português."

### ⏱️ Cobertura (~4 min)
🖼️→🖥️ Slide 7 ("Cobertura de código") — rode o comando do slide:
```bash
npm run coverage
```
🎙️ "Antes de fechar, deixa eu mostrar uma coisa muito útil: a **cobertura de código**. Esse
comando roda os testes e mede quanto do código foi de fato exercitado por eles."

🟩 Mostrar a tabela; o `taskValidator.js` aparece com 100%.

🎙️ "Olha aqui: o nosso `taskValidator` está com cem por cento de cobertura — todas as linhas e
todos os caminhos foram testados. Cuidado: cem por cento não quer dizer 'sem bugs'. Cobertura
mostra o que **não** foi testado, que é onde você deve olhar primeiro. É um mapa, não um
certificado."

🖼️ Slide 8 ("Próximo vídeo").

🎙️ "No próximo vídeo a gente sobe um degrau na pirâmide: mocks e testes de integração."

---

# 🎬 Vídeo 4 — Vitest: mocks, spies e integração (~20 min)
**Tela:** editor + terminal.
**Slides:** `docs/slides/04-mocks-integracao.md`.
**Estado inicial:** vídeo 3 concluído, testes do validator verdes.

### ⏱️ Testando o service + a ideia de isolar (~4 min)
🖼️ Slide 2 ("Test doubles").
🖥️ Criar `server/src/services/taskService.test.js`.

🎙️ "Agora vamos testar o `taskService`, que é a camada que cria, lista, conclui e remove
tarefas usando o nosso banco em memória. E aqui aparece um conceito central: a gente quer
testar cada parte **isolada**. Para isso existem os *test doubles* — dublês de teste — sendo
os mais comuns o **mock** e o **spy**. Já chego neles."

🖼️→🖥️ Slide 4 ("Testes independentes") — o `beforeEach` do slide é este; digite:
```js
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { listTasks, createTask, toggleTask, removeTask } from './taskService.js'
import { resetDb } from '../db.js'
import * as validator from '../validators/taskValidator.js'

describe('taskService', () => {
  beforeEach(() => {
    resetDb()
    vi.restoreAllMocks()
  })
})
```
🎙️ "Importo as funções do service, o `resetDb` do nosso banco, e o objeto `vi`, que é o
canivete do Vitest para mocks e spies. Repare no `beforeEach`: ele roda **antes de cada
teste**. Aqui eu zero o banco e restauro os mocks. Isso garante que um teste não interfere no
outro — cada um começa do zero. Testes independentes são testes confiáveis."

### ⏱️ Primeiro teste do service (~3 min)
🖥️ Dentro do `describe`:
```js
  it('createTask cria e armazena uma tarefa', () => {
    const task = createTask('Primeira tarefa')
    expect(task).toMatchObject({ id: 1, title: 'Primeira tarefa', done: false })
    expect(listTasks()).toHaveLength(1)
  })
```
🎙️ "Crio uma tarefa e faço duas afirmações. A primeira usa `toMatchObject`: eu espero que a
tarefa tenha esses campos — id um, o título, e `done` falso. `toMatchObject` é ótimo porque
confere só os campos que me interessam. A segunda: depois de criar, a lista deve ter um item —
`toHaveLength` um. Ou seja, criou e guardou."

### ⏱️ Spy: provando a delegação (~3 min)
🖼️→🖥️ Slide 3 ("vi.spyOn × vi.fn") — bloco do `spyOn`. Adicionar:
```js
  it('createTask delega a validação para validateTitle (spyOn)', () => {
    const spy = vi.spyOn(validator, 'validateTitle')
    createTask('Tarefa com spy')
    expect(spy).toHaveBeenCalledWith('Tarefa com spy')
  })
```
🎙️ "Agora um **spy**. Um spy é um espião: ele **observa** uma função de verdade sem trocar o
comportamento dela, e registra como ela foi chamada. Aqui eu espiono o `validateTitle`. Crio a
tarefa e depois afirmo: 'esse espião foi chamado com o argumento Tarefa com spy'. Ou seja, eu
provo que o `createTask` realmente delega a validação para o `validateTitle`, em vez de validar
por conta própria. Isso é testar a **colaboração** entre as peças."

### ⏱️ Erro propaga + toggle + remove (~3 min)
🖥️ Adicionar:
```js
  it('createTask propaga o erro quando o título é inválido', () => {
    expect(() => createTask('')).toThrow('Título é obrigatório')
    expect(listTasks()).toHaveLength(0)
  })

  it('toggleTask alterna o campo done', () => {
    const task = createTask('Concluir depois')
    expect(toggleTask(task.id).done).toBe(true)
    expect(toggleTask(task.id).done).toBe(false)
  })

  it('removeTask remove a tarefa existente', () => {
    const task = createTask('Para remover')
    expect(removeTask(task.id)).toBe(true)
    expect(listTasks()).toHaveLength(0)
  })
```
🎙️ "Três casos rápidos. Um: se o título é inválido, o erro tem que **subir** pelo service, e
nada deve ser salvo — lista com zero. Dois: o `toggleTask` alterna o concluído; chamo uma vez
fica `true`, chamo de novo volta para `false`. Três: o `removeTask` apaga e a lista volta a
ficar vazia. Repare que cada teste é curtinho e conta uma história só."

### ⏱️ Mock com vi.fn (~2 min)
🖼️→🖥️ Slide 3 ("vi.spyOn × vi.fn") — bloco do `vi.fn`. Adicionar:
```js
  it('exemplo de vi.fn como callback mockado', () => {
    const onCreate = vi.fn()
    const task = createTask('Notificar criação')
    onCreate(task)
    expect(onCreate).toHaveBeenCalledTimes(1)
    expect(onCreate).toHaveBeenCalledWith(task)
  })
```
🎙️ "E aqui o **mock** propriamente dito, com `vi.fn`. Enquanto o spy observa uma função real, o
`vi.fn` **cria uma função falsa do zero**, que não faz nada além de registrar como foi chamada.
Serve para simular dependências — por exemplo, um callback ou um envio de e-mail que você não
quer disparar de verdade no teste. Aqui afirmo que ele foi chamado uma vez, e com a tarefa
certa."

🖥️ Rodar `npm test`. 🟩 Todos verdes.

### ⏱️ Integração com Supertest (~6 min)
🖼️ Slide 5 ("Integração com Supertest").
🖥️ Criar `server/src/routes/tasks.integration.test.js`.

🎙️ "Subindo na pirâmide: testes de **integração**. Até agora testamos funções isoladas. Agora
quero testar a **rota HTTP inteira** — o caminho do pedido entrar e a resposta sair. Para isso
uso o **Supertest**, que faz requisições direto no app Express, **sem precisar subir uma
porta**."

🖼️→🖥️ O trecho do Slide 5 é este começo; digite:
```js
import { describe, it, expect, beforeEach } from 'vitest'
import request from 'supertest'
import { createApp } from '../app.js'
import { resetDb } from '../db.js'

const app = createApp()

describe('rotas /tasks', () => {
  beforeEach(() => resetDb())
})
```
🎙️ "Importo o `request` do Supertest e a função `createApp`, que monta o nosso Express e
devolve o app sem ligar o servidor. É justamente para isso que o projeto separa o `createApp`
do `server.js` — fica testável. Crio o app uma vez, e zero o banco antes de cada teste."

🖼️ Slide 6 ("Status HTTP que importam") — deixe à vista enquanto explica os status.
🖥️ Dentro do `describe`:
```js
  it('GET /tasks retorna 200 e um array', async () => {
    const res = await request(app).get('/tasks')
    expect(res.status).toBe(200)
    expect(res.body).toEqual([])
  })
```
🎙️ "Primeiro teste de rota. Repare no `async` e no `await` — requisições são assíncronas. Faço
um GET em `/tasks`. Afirmo que o **status** é 200, que em HTTP significa 'deu certo', e que o
**corpo** da resposta é um array vazio, porque acabei de zerar o banco. `toEqual` compara o
conteúdo inteiro, diferente do `toBe`, que serve para valores simples."

🖥️ Adicionar:
```js
  it('POST /tasks cria uma tarefa e retorna 201', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Tarefa via API' })
    expect(res.status).toBe(201)
    expect(res.body).toMatchObject({ title: 'Tarefa via API', done: false })

    const lista = await request(app).get('/tasks')
    expect(lista.body).toHaveLength(1)
  })
```
🎙️ "Agora um POST. Uso o `.send` para mandar o corpo com o título. Espero status **201**, que é
o código de 'criado com sucesso'. Confiro os campos da tarefa devolvida. E, para garantir que
ela foi mesmo persistida, faço um GET em seguida e confirmo que a lista tem um item. Isso é
integração de verdade: dois endpoints colaborando."

🖥️ Adicionar:
```js
  it('POST /tasks com título inválido retorna 400', async () => {
    const res = await request(app).post('/tasks').send({ title: '' })
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('error')
  })
```
🎙️ "E o caso de erro na rota. Mando um título vazio. Espero status **400**, que é 'requisição
inválida' — o jeito do HTTP dizer 'você mandou algo errado'. E confiro que o corpo tem uma
propriedade `error`. Veja que a regra de validação que testamos lá no vídeo 3 está agora sendo
exercida de ponta a ponta no back-end."

🖥️ (Opcional, se houver tempo) Adicionar PATCH e DELETE:
```js
  it('PATCH /tasks/:id alterna a conclusão', async () => {
    const criada = await request(app).post('/tasks').send({ title: 'Concluir esta' })
    const res = await request(app).patch(`/tasks/${criada.body.id}`)
    expect(res.status).toBe(200)
    expect(res.body.done).toBe(true)
  })

  it('DELETE /tasks/:id remove a tarefa', async () => {
    const criada = await request(app).post('/tasks').send({ title: 'Remover esta' })
    const res = await request(app).delete(`/tasks/${criada.body.id}`)
    expect(res.status).toBe(204)

    const lista = await request(app).get('/tasks')
    expect(lista.body).toHaveLength(0)
  })
```
🎙️ "Para fechar o CRUD: o PATCH alterna o concluído e devolve 200. E o DELETE remove e devolve
**204**, que é 'deu certo, e não tenho conteúdo para te devolver'. Depois confirmo a lista
vazia."

🖥️ Rodar `npm test`. 🟩 Tudo verde. Mostrar rapidamente `npm run coverage`.

🖼️ Slide 7 ("Próximo vídeo").

🎙️ "Tudo verde. Já temos a base e o meio da pirâmide cobertos. No próximo vídeo, o topo: testes
de ponta a ponta com Cypress, controlando o navegador de verdade."

---

# 🎬 Vídeo 5 — Cypress: testes E2E (~30 min)
**Tela:** editor + Cypress + navegador. **Importante:** o app precisa estar rodando.
**Slides:** `docs/slides/05-cypress-e2e.md`.
**Estado inicial:** num terminal, deixe `npm run dev` ligado (server + client no ar).

### ⏱️ O que é E2E e abrir o Cypress (~4 min)
🖼️ Slide 2 ("E2E = o usuário de verdade").

🎙️ "Chegamos ao topo da pirâmide: testes **end-to-end**, ou E2E. A diferença é que aqui a gente
não chama função nem rota: a gente controla um **navegador de verdade**, como se fosse o
usuário. Abre a página, digita nos campos, clica nos botões e confere o que aparece na tela. É
o teste mais realista que existe."

🖥️ Com o app rodando em outro terminal, abrir o Cypress:
```bash
npm run cy:open
```
🎙️ "Para isso uso o Cypress. Vou abri-lo com `npm run cy:open`. Ele abre uma janela própria, o
*Test Runner*, onde a gente vê os testes rodando passo a passo dentro do navegador."

🖼️→🖥️ Slide 5 ("Estabilidade: resetar antes"). Mostrar o `cypress.config.js` e escrever em
`cypress/support/e2e.js` o trecho do slide:
```js
beforeEach(() => {
  cy.request('POST', '/api/test/reset')
})
```
🎙️ "Duas configurações rápidas. No `cypress.config.js` tem a `baseUrl`, apontando para o nosso
front na porta 5173 — assim eu escrevo só o caminho nos testes, sem repetir o endereço. E aqui,
no `support/e2e.js`, antes de cada teste eu faço uma requisição para uma rota especial,
`/test/reset`, que zera os dados do servidor. Por quê? Porque E2E mexe no estado real do app.
Se um teste deixa lixo, o próximo pode falhar sem motivo. Zerando antes de cada teste, cada um
roda num ambiente limpo e **previsível**. Estabilidade é tudo em E2E."

### ⏱️ Teste de login (fluxo crítico) (~9 min)
🖼️ Slide 3 ("Os 5 comandos essenciais").
🖥️ Criar `cypress/e2e/login.cy.js`.

🎙️ "Vamos começar pelo fluxo mais crítico de qualquer app: cadastro e login. Se isso quebra,
ninguém entra. É exatamente o tipo de coisa que merece um teste E2E. Aqui o que a gente está
testando é **o próprio fluxo de autenticação**. As tarefas, lembra, são compartilhadas — por
isso, no próximo teste, a gente vai direto para a tela de tarefas sem precisar logar."

🖼️→🖥️ Os 5 comandos do slide aparecem todos aqui; digite:
```js
describe('Cadastro e Login', () => {
  it('cadastra um usuário e faz login', () => {
    cy.visit('/register')
    cy.get('[data-cy=name]').type('Maria')
    cy.get('[data-cy=email]').type('maria@email.com')
    cy.get('[data-cy=password]').type('123456')
    cy.get('[data-cy=submit]').click()

    cy.visit('/login')
    cy.get('[data-cy=email]').type('maria@email.com')
    cy.get('[data-cy=password]').type('123456')
    cy.get('[data-cy=submit]').click()

    cy.contains('Minhas Tarefas')
  })
})
```
🎙️ "Olha como o Cypress é legível — quase português. `cy.visit` abre uma página. `cy.get`
encontra um elemento, e `cy.type` digita nele. `cy.click` clica. Então: visito a página de
cadastro, preencho nome, e-mail e senha, e clico em enviar. Depois visito o login, preencho, e
clico. No final, `cy.contains` confere que o texto 'Minhas Tarefas' apareceu — ou seja, o login
funcionou e cheguei na tela certa."

🖼️ Slide 4 ("Seletores estáveis: data-cy").

🎙️ "Uma observação sobre os seletores. Repare que eu uso `[data-cy=email]` em vez de procurar
por classe de CSS ou por texto. Esses atributos `data-cy` foram colocados no código justamente
para os testes. É uma boa prática: o teste não quebra se você mudar o estilo ou o texto do
botão, porque ele se prende a um identificador estável, feito para ele."

🖥️ No Test Runner, clicar no `login.cy.js` e mostrar rodando. 🟩 Verde, com o navegador
executando os passos.

🎙️ "Vou rodar… e olha que lindo: o Cypress executa cada passo no navegador, na nossa frente.
Cadastrou, logou, achou 'Minhas Tarefas'. Verde."

🖥️ Adicionar o caso de erro:
```js
  it('mostra erro ao logar com credenciais inválidas', () => {
    cy.visit('/login')
    cy.get('[data-cy=email]').type('ninguem@email.com')
    cy.get('[data-cy=password]').type('senhaerrada')
    cy.get('[data-cy=submit]').click()
    cy.contains('Credenciais inválidas')
  })
```
🎙️ "E o outro lado: com credenciais erradas, o app tem que mostrar a mensagem de erro. Tento
logar com um usuário que não existe e confiro que aparece 'Credenciais inválidas'. Testar o
erro é tão importante quanto testar o sucesso."

### ⏱️ CRUD de tarefas (~11 min)
🖥️ Criar `cypress/e2e/tasks.cy.js`.

🎙️ "Agora o coração do app: criar, concluir e remover tarefas, tudo pela tela."

🖥️ Digitar:
```js
describe('CRUD de Tarefas', () => {
  beforeEach(() => {
    cy.visit('/tasks')
  })

  it('cria uma tarefa', () => {
    cy.get('[data-cy=task-input]').type('Comprar café')
    cy.get('[data-cy=task-add]').click()
    cy.contains('Comprar café')
  })
})
```
🎙️ "Coloco um `beforeEach` que visita a tela de tarefas antes de cada teste — assim não repito
isso em todo `it`. No primeiro caso: digito 'Comprar café' no campo, clico em adicionar, e
confiro com `cy.contains` que a tarefa apareceu na tela. Note que, como o `support` zera o banco
antes, eu sei que a lista começa vazia toda vez."

🖥️ Adicionar:
```js
  it('marca uma tarefa como concluída', () => {
    cy.get('[data-cy=task-input]').type('Estudar Cypress')
    cy.get('[data-cy=task-add]').click()
    cy.get('[data-cy=task-toggle]').click()
    cy.contains('Reabrir')
  })
```
🎙️ "Segundo caso: crio a tarefa, e clico no botão de concluir. Como sei que concluiu? O botão
muda de texto: quando a tarefa está aberta ele diz 'Concluir', e quando está concluída ele diz
'Reabrir'. Então eu confiro que 'Reabrir' apareceu. Esse é um padrão útil: olhar para a mudança
visível que prova que a ação aconteceu."

🖥️ Adicionar:
```js
  it('remove uma tarefa', () => {
    cy.get('[data-cy=task-input]').type('Tarefa temporária')
    cy.get('[data-cy=task-add]').click()
    cy.get('[data-cy=task-remove]').click()
    cy.contains('Nenhuma tarefa ainda.')
  })
```
🎙️ "Terceiro: crio uma tarefa e removo. Para provar que sumiu, confiro que a tela voltou a
mostrar 'Nenhuma tarefa ainda.' — a mensagem de lista vazia."

🖥️ Mostrar os três rodando no Test Runner. 🟩 Verdes.

### ⏱️ Rodar tudo no modo headless (~6 min)
🖼️→🖥️ Slide 6 ("Rodar sem abrir janela (headless)") — rode o comando do slide. Fechar o Test
Runner. No terminal:
```bash
npm run test:e2e
```
🎙️ "Para fechar, deixa eu mostrar como isso roda de forma automática, sem abrir janela — o modo
*headless*, que é o que usaríamos numa esteira de CI. O comando `test:e2e` faz tudo sozinho:
ele **sobe o app**, espera ficar no ar, roda todos os testes no navegador invisível e devolve o
resultado no terminal."

🟩 Mostrar a tabela final do Cypress: todos os specs passando.

🖼️ Slide 7 ("Próximo vídeo").

🎙️ "Pronto: todos os testes E2E verdes, num comando só. Com isso a gente fechou a pirâmide
inteira — unidade, integração e ponta a ponta. No último vídeo eu te passo um exercício para
praticar por conta própria."

---

# 🎬 Vídeo 6 — Encerramento e exercício de prática (~10 min)
**Tela:** slides + `docs/projeto-final.md`.
**Slides:** `docs/slides/06-encerramento.md`.

### ⏱️ Recapitulação (~3 min)
🖼️ Slide 2 ("O que você aprendeu").

🎙️ "Chegamos ao fim. Vamos recapitular o que você aprendeu. Você entendeu a **pirâmide de
testes** e quando usar cada tipo. Escreveu **testes de unidade** com Vitest — `describe`, `it`,
`expect` e os matchers como `toBe`, `toThrow` e `toMatchObject`. Aprendeu **mocks e spies** com
`vi.fn` e `vi.spyOn` para isolar dependências. Fez **testes de integração** de rotas com
Supertest, checando status e corpo da resposta. E escreveu **testes E2E** com Cypress,
controlando o navegador com `visit`, `get`, `type`, `click` e `contains`."

🖼️ Slide 3 ("Um núcleo pequeno, mas poderoso").

🎙️ "Repare que foi um conjunto pequeno de comandos. Você não precisa decorar a ferramenta
inteira: com esse núcleo você já escreve testes de verdade, úteis, em projetos reais."

### ⏱️ O exercício (~5 min)
🖼️ Slide 4 ("Exercício de prática (opcional)").
🖥️ Abrir `docs/projeto-final.md` na tela.

🎙️ "Para fixar, tem um **exercício de prática** — totalmente opcional, sem avaliação, é só para
você treinar. A ideia é deixar a suíte verde escrevendo os testes você mesmo, no projeto base."

🎙️ "Ele tem três partes, uma para cada camada que vimos. Parte 1, **unitários**: escreva testes
que impeçam tarefa vazia, validem o tamanho mínimo do título, e verifiquem a conclusão de uma
tarefa. Parte 2, **integração**: teste o GET e o POST de `/tasks` com Supertest, conferindo os
status. Parte 3, **E2E**: faça um teste que cria uma tarefa, marca como concluída e remove,
tudo pela tela com Cypress."

🖼️ Slide 5 ("Como rodar").
🖥️ Mostrar os comandos:
```bash
npm test          # unidade e integração
npm run test:e2e  # ponta a ponta
npm run coverage  # cobertura
```
🎙️ "Você roda os testes com `npm test` para unidade e integração, e `npm run test:e2e` para o
Cypress. E pode usar o `npm run coverage` para enxergar o que ainda falta testar. A meta é
simples: todos verdes."

### ⏱️ Fechamento (~2 min)
🖼️ Slide 6 ("Obrigado!").

🎙️ "Se você travar, ou quando quiser conferir, a **solução de referência** está na branch
`solucao`, na pasta `gabarito`, com todos os testes prontos. Mas tente sozinho primeiro — é
errando e fazendo passar que a ficha cai."

🎙️ "Era isso! Você saiu do zero e agora consegue escrever testes de unidade, integração e E2E
num projeto full-stack. Isso é uma habilidade que poucos dominam e o mercado valoriza muito.
Pratique, aplique nos seus projetos, e bons testes. Até a próxima!"

---

## ✅ Checklist de pós-produção (edição mínima)
- [ ] Cortar erros, gaguejos e silêncios longos.
- [ ] Conferir que o código aparece legível em tela cheia (zoom suficiente).
- [ ] Garantir que todo `npm test`/`test:e2e` mostrado terminou **verde** na gravação.
- [ ] Conferir que cada slide com **▶ rodar ao vivo** foi de fato executado em tela (não só exibido).
- [ ] Conferir áudio constante (sem picos/quedas).
- [ ] Ordenar a sequência dos 6 vídeos.
- [ ] Publicar `projeto-base/` no GitHub e disponibilizar os vídeos. O gabarito, na branch
  `solucao`, pode ir junto ou depois — como preferir.
