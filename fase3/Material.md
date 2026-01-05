# MATERIAL DE APRENDIZADO – FASE 3

## 1. Introdução ao Tailwind CSS

Tailwind CSS é um framework CSS utility-first que permite construir designs customizados rapidamente sem sair do HTML.

## 2. Layout com Flexbox

Use classes como `flex`, `justify-center`, `items-center` para alinhar elementos.

```html
<div class="flex justify-center items-center h-screen bg-gray-100">
  <h1 class="text-2xl font-bold">Conteúdo Centralizado</h1>
</div>
```

## 3. Grid Layout

Para layouts em grade, use `grid`, `grid-cols-3`, `gap-4`.

```html
<div class="grid grid-cols-3 gap-4 p-4">
  <div class="bg-blue-500 text-white p-4">Item 1</div>
  <div class="bg-green-500 text-white p-4">Item 2</div>
  <div class="bg-red-500 text-white p-4">Item 3</div>
</div>
```

## 4. Spacing (Espaçamento)

- Padding: `p-4` (todos os lados), `px-2` (esquerda/direita), `py-3` (topo/base).
- Margin: `m-2`, `mx-auto`, `my-1`.

## 5. Cores

- Background: `bg-blue-500`, `bg-gray-200`.
- Texto: `text-white`, `text-gray-800`.

## 6. Responsividade

Use prefixos como `sm:`, `md:`, `lg:` para diferentes tamanhos de tela.

```html
<div class="text-sm md:text-lg lg:text-xl">Texto responsivo</div>
```

## 7. Estados Hover / Focus

- `hover:bg-red-500`: muda cor ao passar o mouse.
- `focus:outline-none`: remove outline ao focar.

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
  Botão
</button>
```

## 8. Exercícios Práticos – Caminho para a Solução

Aqui vai uma orientação passo a passo para resolver os exercícios, usando os conceitos aprendidos. Não é o código pronto, mas dicas para você implementar.

### Card de Usuário

1. **Estrutura básica**: Crie uma `<div>` como container principal. Use classes como `bg-white`, `rounded-lg`, `shadow-lg`, `p-6`, `max-w-sm`, `w-full` para um card limpo e responsivo.

2. **Imagem do usuário**: Adicione uma `<img>` com `src` para uma foto (use placeholder como via.placeholder.com). Aplique `w-24 h-24 rounded-full mx-auto mb-4` para centralizar e tornar circular.

3. **Texto**: Use `<h2>` para o nome com `text-xl font-bold text-center text-gray-800`. Para a descrição, `<p>` com `text-gray-600 text-center mb-4`.

4. **Botões**: Crie dois `<button>` lado a lado com `flex justify-center space-x-4`. Para o primeiro: `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`. Para o segundo: `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded`.

5. **Centralização**: Envolva tudo em uma div pai com `flex items-center justify-center min-h-screen` e fundo `bg-gray-100`.

### Navbar Responsiva

1. **Container do nav**: Use `<nav>` com `bg-white shadow-lg`. Dentro, uma div com `max-w-7xl mx-auto px-4` para limitar largura.

2. **Layout flex**: Uma div com `flex justify-between items-center py-4` para logo à esquerda, menu ao centro/direita.

3. **Logo**: Uma div com `<h1>` e `text-xl font-bold text-gray-800`.

4. **Menu desktop**: Uma div com `hidden md:flex space-x-4`. Dentro, links `<a>` com `text-gray-800 hover:text-blue-500`.

5. **Menu mobile**: Uma div com `md:hidden` contendo um botão com ícone SVG (menu hambúrguer). Use `focus:outline-none` no botão.

6. **Conteúdo da página**: Abaixo do nav, adicione uma div com `p-8` e algum texto para testar.

### Página de Login Bonita

1. **Fundo**: No `<body>`, use `bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center min-h-screen`.

2. **Container do form**: Uma div com `bg-white rounded-lg shadow-lg p-8 max-w-md w-full`.

3. **Título**: `<h2>` com `text-2xl font-bold text-center text-gray-800 mb-6`.

4. **Formulário**: Use `<form>` com campos.

5. **Campo email**: Div com `mb-4`. Label com `block text-gray-700 text-sm font-bold mb-2`. Input com `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`.

6. **Campo senha**: Similar, mas `mb-6`.

7. **Botão**: Div com `flex items-center justify-between`, botão com `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full`.

8. **Link adicional**: `<p>` com `text-center text-gray-600 text-sm mt-4` e link `text-blue-500 hover:text-blue-800`.

Experimente combinar essas classes e ajuste conforme necessário. Abra os arquivos no navegador para ver as mudanças em tempo real!
