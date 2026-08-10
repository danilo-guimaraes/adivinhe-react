# 🎯 Adivinhe (Jogo da Forca)

Jogo de adivinhação de palavras (estilo "forca") construído em **React + TypeScript**, desenvolvido durante um curso da [Rocketseat](https://rocketseat.com.br). A cada rodada, uma palavra aleatória é sorteada e o jogador tem um número limitado de tentativas para descobri-la, letra por letra.

## 🖼️ Preview

> Adicione aqui um screenshot ou GIF do jogo em funcionamento.

## 🚀 Tecnologias

- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- CSS Modules (estilização isolada por componente)

## ✨ Funcionalidades

- Sorteio aleatório de uma palavra e sua dica a cada partida
- Envio de palpites letra por letra, com validação de letras repetidas
- Contagem de tentativas com limite baseado no tamanho da palavra
- Feedback visual das letras usadas (acerto/erro)
- Encerramento automático da rodada em caso de vitória ou derrota, com reinício da partida
- Reinício manual do jogo, com confirmação do jogador
- Layout responsivo, adaptado para telas de celular, tablet e desktop

## 📁 Estrutura do projeto

```
src/
├── assets/              # Imagens e ícones (logo, dica, reiniciar)
├── components/
│   ├── Button/          # Botão de confirmar palpite
│   ├── Header/           # Logo, contador de tentativas e botão de reiniciar
│   ├── Input/            # Campo de digitação da letra
│   ├── Letter/            # Quadrado que exibe uma letra da palavra
│   ├── LettersUsed/       # Lista de letras já utilizadas
│   └── Tip/                # Card com a dica da palavra
├── utils/
│   └── words.ts          # Banco de palavras e dicas do jogo
├── App.tsx               # Regras e estado do jogo
├── main.tsx               # Ponto de entrada da aplicação
└── global.css              # Estilos globais (reset e configurações base)
```

## ⚙️ Como rodar o projeto

```bash
# Instalar as dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Pré-visualizar a build de produção
npm run preview
```

O projeto estará disponível em `http://localhost:5173`.

## 🎮 Como jogar

1. Uma palavra é sorteada automaticamente e uma dica é exibida na tela.
2. Digite uma letra no campo e clique em **Confirmar** (ou pressione Enter).
3. Se a letra existir na palavra, ela é revelada nos espaços correspondentes.
4. O jogo termina quando a palavra é descoberta ou quando as tentativas se esgotam.
5. É possível reiniciar o jogo a qualquer momento pelo botão de reiniciar no cabeçalho.

## 📚 Sobre

Projeto desenvolvido para fins de estudo, praticando componentização, hooks (`useState`, `useEffect`), tipagem com TypeScript e estilização com CSS Modules.
