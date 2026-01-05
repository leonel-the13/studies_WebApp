# Material Essencial — Fase 0 (2 dias)

## HTML básico (essencial)

- `div` — container genérico para agrupar conteúdo.
- `section` — seção semântica de página (usar para blocos com significado).
- `img` — imagem. Atributos: `src` (fonte), `alt` (texto alternativo obrigatório para acessibilidade).
- `form` — formulário; `input` — campo de entrada; `button` — botão de submissão/ação.
  - `input` tipos comuns: `text`, `email`, `password`, `checkbox`, `radio`, `submit`.
  - Use `name` em inputs para identificar dados ao enviar.

## JavaScript — Como usar (exemplos rápidos)

- `const` / `let`:

  ```js
  const API_URL = "https://api.exemplo.com"; // não reatribuir
  let count = 0; // mutável
  count++;
  ```

- `map` / `filter` (uso prático com DOM):

  ```js
  const users = [{ name: "Ana" }, { name: "Beto" }];
  const lis = users.map((u) => `<li>${u.name}</li>`).join("");
  document.querySelector("#lista").innerHTML = lis;

  const filtered = users.filter((u) => u.name.startsWith("A"));
  ```

- Arrow functions:

  ```js
  const sum = (a, b) => a + b;
  btn.addEventListener("click", () => console.log("clicou"));
  ```

- `fetch` + `async/await` (padrão mínimo para obter JSON e atualizar a página):

  ```js
  async function getUser(id) {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Erro ao buscar:", err);
      return null;
    }
  }

  async function showUser(id) {
    const user = await getUser(id);
    if (user) document.querySelector("#user").textContent = user.name;
  }
  ```

- Tratamento de formulário (exemplo prático):
  ```js
  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    // enviar via fetch (exemplo simples)
    const resp = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    // processar resposta...
  });
  ```

## Recursos originais

- HTML — W3Schools: https://www.w3schools.com/html/
- JS essencial — JavaScript.info: https://javascript.info/first-steps
- Fetch — JavaScript.info (Fetch API): https://javascript.info/fetch

## Exercícios

- **Exercício 1 — Form + Fetch (prático)**

  1. Crie `index.html` com um formulário (id `loginForm`) contendo `email` e `password`, e um elemento `#user` para mostrar o resultado.
  2. Em `script.js`, escute o `submit`, invoque `event.preventDefault()`, leia `email` e `password` e use `fetch('https://jsonplaceholder.typicode.com/users/1')` para obter um usuário.
  3. Exiba `user.name` no elemento `#user`.

  - Critério de conclusão: ao enviar o formulário, o nome aparece em `#user` sem recarregar a página.

- **Exercício 2 — Map/Filter e renderização**
  1. Em `script.js`, crie um array `users` e use `filter` para selecionar usuários (por exemplo, nomes que começam com 'A').
  2. Use `map` para gerar `<li>` e insira no `innerHTML` de `#lista`.
  - Critério de conclusão: a lista exibe apenas os usuários filtrados.

---

Este material contém apenas os pontos essenciais e exemplos mínimos para começar rapidamente.
