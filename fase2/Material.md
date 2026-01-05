# MATERIAL DE APRENDIZADO – FASE 2 (Next.js App Router)

Resumo curto com os pontos essenciais para implementar o exercício: `/login`, `/dashboard`, `/profile`.

## 1. Estrutura `app/` e roteamento

- Cada pasta dentro de `app/` representa uma rota. Um arquivo `page.tsx` exporta o componente da rota.
- `layout.tsx` cria layouts persistentes (ex.: nav, header) e envolve as páginas filhas.

Exemplo mínimo `app/layout.tsx`:

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav>{/* links */}</nav>
        {children}
      </body>
    </html>
  );
}
```

Exemplo mínimo `app/page.tsx` (server component):

```tsx
export default async function Home() {
  return <h1>Bem-vindo</h1>;
}
```

## 2. Server vs Client Components

- Por padrão, componentes em `app/` são Server Components (sem estado local, podem usar `fetch` diretamente).
- Quando precisar de estado, eventos ou hooks (ex.: `useState`, `useEffect`), marque o arquivo com `"use client"` no topo.

Exemplo de componente cliente (`app/components/LoginForm.tsx`):

```tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // fazer login (mock ou fetch)
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Entrar</button>
    </form>
  );
}
```

## 3. Navegação

- Use `Link` para links no HTML: `import Link from 'next/link'` e `<Link href="/dashboard">Dashboard</Link>`.
- Use `useRouter` de `next/navigation` em componentes cliente para navegação programática: `router.push('/route')`.

## 4. Fetch e dados

- Em Server Components você pode usar `fetch` diretamente e aguardar os dados (ex.: `const res = await fetch(url)`), pois o código roda no servidor.
- Em Client Components, faça requisições dentro de `useEffect` ou chame uma API route.

Exemplo simples em `page.tsx` (server):

```tsx
export default async function ProfilePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await res.json();
  return <div>{user.name}</div>;
}
```

## 5. Dicas rápidas para o exercício

- Comece com `npx create-next-app@latest` e escolha TypeScript se quiser.
- Crie `app/layout.tsx` com um nav contendo `<Link>` para as rotas.
- Faça `/login` como componente cliente com um formulário que, no submit, navega para `/dashboard` (mock de autenticação).
- `/dashboard` e `/profile` podem ser Server Components que fazem `fetch` para dados de exemplo.
- Mantenha o `LoginForm` separado em `app/components` e importe na rota `/login`.

Recursos oficiais: https://nextjs.org/docs/app

Boa prática: implemente primeiro a navegação e o layout, depois adicione o formulário cliente e as páginas com fetch.
