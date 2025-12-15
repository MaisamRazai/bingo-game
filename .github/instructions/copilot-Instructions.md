## Code Patterns

### Component Structure
- All components are functional components using React hooks
- State management uses `useState` and custom hooks from `src/hooks/`
- Components follow single-responsibility: BingoSquare handles one cell, BingoBoard orchestrates the grid
- See `src/components/GameScreen.tsx` for the main game orchestration pattern

### Data Flow
1. Questions loaded from `src/data/questions.ts` (array of strings)
2. Shuffled on game start using `src/utils/shuffle.ts`
3. Win state checked via `src/utils/checkWin.ts` - detects rows, columns, diagonals
4. Game state managed in top-level component, passed down via props

### Testing with Vitest
- Test files colocated in `src/test/`
- Use `@testing-library/react` for component testing
- Run tests: `npm run test`
- Tests validate game logic (shuffle, win detection) and component rendering

## Tailwind CSS v4 Specifics
- Uses `@tailwindcss/vite` plugin (see `vite.config.ts`)
- Import via `@import "tailwindcss"` in `src/index.css`
- No separate config file - configure via CSS `@theme` directive
- Reference: `.github/instructions/tailwind.instructions.md`

## Key Workflows

### Adding New Questions
Edit `src/data/questions.ts` - it's a simple exported array. Keep questions concise and social mixer-appropriate.

### Adding Game Modes
This project is designed for experimentation with new modes (see `.lab/GUIDE.md` tasks). When adding modes:
1. Consider creating a new screen component in `src/components/`
2. Add routing logic in `src/App.tsx`
3. Reuse existing data/utils where possible
4. Write tests for new game logic

### Custom Agents & Prompts
- `.github/agents/` contains specialized agent definitions for domain-specific tasks (quiz generation, UX review)
- `.github/prompts/` has reusable prompt templates triggered via `/` commands
- These are VS Code Copilot features - see `.lab/GUIDE.md` for workshop context

## Design Philosophy
- **Frontend Focus**: See `.github/instructions/frontend.instructions.md` - avoid generic gradients, prioritize creative/bold design choices
- **Workshop Project**: Built as an agent collaboration learning tool, optimized for rapid iteration with AI agents
- **Mobile-First**: Game designed for phone use at in-person events

## Common Pitfalls
- Don't modify `dist/` or `node_modules/` - these are generated
- Vite base path is `/bingo-game/` for GitHub Pages (see `vite.config.ts`)
- React 19 is used - ensure compatibility when adding dependencies
- Tailwind v4 syntax differs from v3 - check instructions file before adding utility classes