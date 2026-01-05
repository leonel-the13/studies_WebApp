# FASE 0 – BASE MÍNIMA (2 DIAS)

## O que aprender

- **HTML:** `div`, `button`, `input`, `form`, `img`, `section`
- **JavaScript:**
  - **Variáveis:** `const`, `let`
  - **Operações com arrays:** `map`, `filter`
  - **Funções:** arrow functions (`=>`)
  - **Requisições e assincronismo:** `fetch`, `async` / `await`

## Recursos

- HTML — W3Schools: https://www.w3schools.com/html/
- JS essencial — JavaScript.info: https://javascript.info/first-steps
- Fetch — JavaScript.info (Fetch API): https://javascript.info/fetch

## Exercícios

- **Exercício 1 — Form + Fetch (prático)**

  1. Crie `index.html` com um formulário de login (id `loginForm`) contendo campos `email` e `password` e um `button` de submit.
  2. Crie `script.js` que escute o `submit`, faça `event.preventDefault()`, leia os valores do formulário e execute `fetch('https://jsonplaceholder.typicode.com/users/1')`.
  3. Mostre o `user.name` dentro de um elemento com id `#user`.

  - Critério de conclusão: ao enviar o formulário, o nome do usuário aparece em `#user` sem recarregar a página.

- **Exercício 2 — Map/Filter (DOM)**
  1. Em `script.js`, crie um array de objetos `users` e use `filter` para selecionar um subconjunto, depois `map` para gerar `<li>` e renderize em `#lista`.
  - Critério de conclusão: os itens corretos aparecem em `#lista` conforme o filtro aplicado.

**Dicas de teste:** abra `index.html` no navegador ou use uma extensão como Live Server.
