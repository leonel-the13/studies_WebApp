# FASE 1 – REACT ESSENCIAL (5 DIAS)

⚠️ React não é opcional, Next depende dele.

## O que aprender

- **React:**
  - **Componentes:** functional components
  - **JSX:** sintaxe para criar elementos React
  - **Props:** passar dados entre componentes
  - **Hooks:**
    - `useState`: gerenciar estado local
    - `useEffect`: efeitos colaterais e ciclo de vida
  - **Eventos:** `onClick`, `onChange`

## Recursos

- React docs — https://react.dev/learn
- Vídeo introdutório — https://www.youtube.com/watch?v=bMknfKXIFA8

## Exercícios

- **Exercício 1 — Contador**

  - Crie um componente com um número inicial, botões para incrementar e decrementar.
  - Use `useState` para gerenciar o estado.
  - Critério de conclusão: cliques atualizam o número sem recarregar a página.

- **Exercício 2 — Lista de usuários (Fetch)**

  - Crie um componente que faz fetch em `https://jsonplaceholder.typicode.com/users`.
  - Use `useEffect` para buscar os dados ao montar o componente.
  - Renderize a lista com `map`.
  - Critério de conclusão: lista de usuários aparece após o carregamento.

- **Exercício 3 — Form de login (sem backend)**
  - Crie um formulário com `input` para email e password.
  - Use `onChange` para atualizar o estado com `useState`.
  - Valide e mostre mensagem ao fazer submit (preventDefault).
  - Critério de conclusão: o formulário funciona e exibe feedback ao usuário.
