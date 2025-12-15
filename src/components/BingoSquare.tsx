import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center rounded-md transition-all duration-150 select-none min-h-[60px] text-xs leading-tight font-medium coffee-texture';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-bingo border-2 border-caramel text-espresso shadow-lg scale-105'
      : 'bg-marked border-2 border-marked-border text-mocha shadow-md'
    : 'bg-cream border-2 border-latte text-mocha active:bg-latte shadow-sm';

  const freeSpaceClasses = square.isFreeSpace 
    ? 'font-bold text-sm bg-caramel text-cream border-mocha' 
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto relative z-10">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-caramel text-base font-bold">✓</span>
      )}
      {/* Coffee stamp effect for marked squares */}
      {square.isMarked && !square.isFreeSpace && (
        <div className="absolute inset-0 rounded-md border border-caramel/30 pointer-events-none"></div>
      )}
    </button>
  );
}
