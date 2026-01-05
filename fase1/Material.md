# MATERIAL DE APRENDIZADO – FASE 1

## 1. Componentes React

Um componente React é uma função JavaScript que retorna JSX (elementos de interface).

```jsx
function MeuComponente() {
  return <h1>Olá, React!</h1>;
}

export default MeuComponente;
```

## 2. JSX – JavaScript XML

JSX permite escrever HTML dentro de JavaScript. É compilado para `React.createElement()`.

```jsx
// JSX
<div className="container">
  <h1>Título</h1>
  <p>Parágrafo</p>
</div>;

// Equivalente a:
React.createElement(
  "div",
  { className: "container" },
  React.createElement("h1", null, "Título"),
  React.createElement("p", null, "Parágrafo")
);
```

**Nota:** Use `className` em vez de `class` no JSX.

## 3. Props – Passando Dados

Props são argumentos passados para componentes.

```jsx
// Componente que recebe props
function Card({ titulo, descricao }) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
}

// Usando o componente
<Card titulo="Meu Card" descricao="Descrição aqui" />;
```

## 4. useState – Gerenciando Estado

`useState` permite adicionar estado a componentes funcionais.

```jsx
import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}
```

**Como funciona:**

- `useState(0)` retorna um array com: `[valorAtual, funcaoParaAtualizar]`
- Quando `setCount` é chamado, o componente re-renderiza com o novo valor

## 5. useEffect – Efeitos Colaterais

`useEffect` executa código quando o componente monta ou quando dependências mudam.

```jsx
import { useState, useEffect } from "react";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Este código executa ao montar o componente
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []); // Array vazio = executa apenas uma vez

  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>{usuario.name}</li>
      ))}
    </ul>
  );
}
```

**Dependências:**

- `[]` — executa apenas ao montar
- `[valor]` — executa ao montar e quando `valor` muda
- Nada — executa a cada render (evite!)

## 6. Eventos no React

Eventos em React usam camelCase e recebem a função diretamente.

```jsx
function Botao() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Clicado!");
  };

  return <button onClick={handleClick}>Clique aqui</button>;
}
```

**Eventos comuns:**

- `onClick` — clique
- `onChange` — mudança em input
- `onSubmit` — envio de formulário
- `onFocus` / `onBlur` — foco e perda de foco

## 7. Exemplo: Form com useState

```jsx
import { useState } from "react";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      setMensagem(`Login bem-sucedido para ${email}`);
      setEmail("");
      setPassword("");
    } else {
      setMensagem("Preencha todos os campos");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
      />
      <button type="submit">Login</button>
      {mensagem && <p>{mensagem}</p>}
    </form>
  );
}
```

## 8. Dicas Importantes

1. **Importe sempre:** `import { useState, useEffect } from 'react';`
2. **Cada elemento renderizado precisa de `key`:** `<li key={id}>{item}</li>`
3. **Não modifique estado diretamente:** use `setState`
4. **Use `preventDefault()` em formulários** para evitar reload
5. **Fetch sempre retorna uma Promise**, use `.then()` ou `async/await`

## 9. Estrutura Básica de um Projeto React

```
src/
  ├── components/
  │   ├── Contador.jsx
  │   ├── ListaUsuarios.jsx
  │   └── FormLogin.jsx
  ├── App.jsx
  └── index.jsx
```

Importe e use assim:

```jsx
import Contador from "./components/Contador";

function App() {
  return <Contador />;
}

export default App;
```
