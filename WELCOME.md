# 🎉 Welcome to Soc Ops Bingo

A tiny, fast React + Vite + Tailwind v4 app you can tweak in minutes.

## 60‑Second Tour
- Run it: 
pm run dev → http://localhost:5173
- Test it: 
pm test (Vitest, JSDOM)
- Lint it: 
pm run lint (ESLint)
- Build it: 
pm run build (Vite + TypeScript)

## Key Files
- HTML entry: index.html
- App shell: src/App.tsx
- Screens: src/components/StartScreen.tsx, GameScreen.tsx
- Board UI: src/components/BingoBoard.tsx, BingoSquare.tsx, BingoModal.tsx
- Game logic: src/utils/bingoLogic.ts (+ tests in src/utils/bingoLogic.test.ts)
- Questions: src/data/questions.ts (edit to customize the game)
- Styles: src/index.css (Tailwind v4, @tailwindcss/vite)
- Config: vite.config.ts, eslint.config.js, tsconfig*.json

## Customize in 3 Steps
1) Open src/data/questions.ts and make it yours ✍️
2) Tweak colors/type in src/index.css 🎨
3) Refresh the browser — hot reload does the rest ⚡

## Handy Commands
- Dev: npm run dev
- Test: npm test
- Lint: npm run lint
- Build: npm run build

Have fun, and ship vibes! 🚀
