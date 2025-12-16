import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full wood-grain">
      {/* Header - Office memo style */}
      <header className="flex items-center justify-between p-4 border-b-2 border-espresso relative" style={{ backgroundColor: '#424242' }}>
        <button
          onClick={onReset}
          className="text-cream font-semibold px-4 py-2 rounded-md transition-all active:bg-espresso"
        >
          ← Back
        </button>
        <h1 className="font-bold text-cream text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
          Office Humor Bingo
        </h1>
        <div className="w-20"></div>
      </header>

      {/* Instructions with office theme */}
      <p className="text-center text-cream text-sm py-3 px-4 font-medium" style={{ backgroundColor: 'rgba(66, 66, 66, 0.8)' }}>
        💼 Tap a square when you find a coworker who matches it.
      </p>

      {/* Bingo indicator - office celebration */}
      {hasBingo && (
        <div className="bg-bingo text-espresso text-center py-3 font-bold border-y-2 border-caramel shadow-inner" style={{ fontFamily: 'var(--font-heading)' }}>
          🎉 BINGO! Meeting adjourned - you won! 🎉
        </div>
      )}

      {/* Board with office background */}
      <div className="flex-1 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(141, 110, 99, 0.3)' }}>
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
