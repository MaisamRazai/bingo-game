import { useState, useEffect } from 'react';
import { questions } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
}

interface DemoSquare {
  id: number;
  text: string;
  isMarked: boolean;
}

export function StartScreen({ onStart }: StartScreenProps) {
  // Get 9 random questions for the demo
  const [demoQuestions] = useState(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 9);
  });

  const [demoSquares, setDemoSquares] = useState<DemoSquare[]>(() =>
    demoQuestions.map((text, id) => ({ id, text, isMarked: false }))
  );

  const [showFirstTimeHint, setShowFirstTimeHint] = useState(true);
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [markedCount, setMarkedCount] = useState(0);

  // Check for 3-in-a-row on 3x3 grid
  const checkThreeInRow = (squares: DemoSquare[]): boolean => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    return winPatterns.some(pattern =>
      pattern.every(idx => squares[idx].isMarked)
    );
  };

  const handleDemoSquareClick = (id: number) => {
    setDemoSquares(prev => {
      const updated = prev.map(square =>
        square.id === id ? { ...square, isMarked: !square.isMarked } : square
      );
      
      const newMarkedCount = updated.filter(s => s.isMarked).length;
      setMarkedCount(newMarkedCount);
      
      // Hide first-time hint after first tap
      if (newMarkedCount > 0) {
        setShowFirstTimeHint(false);
      }
      
      // Show encouragement after 3 taps or 3-in-a-row
      if (newMarkedCount >= 3 || checkThreeInRow(updated)) {
        setShowEncouragement(true);
      }
      
      return updated;
    });
  };

  // Auto-hide hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowFirstTimeHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden" style={{ backgroundColor: '#5D4037' }}>
      {/* Coffee beans decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">☕</div>
        <div className="absolute bottom-20 right-10 text-5xl">☕</div>
        <div className="absolute top-1/3 right-1/4 text-4xl">☕</div>
      </div>
      
      <div className="text-center max-w-2xl relative z-10">
        {/* Section 1: Playful Introduction - Compact */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: '#EFEBE9', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Ready to Break the Ice?
          </h1>
          <p className="text-lg" style={{ fontFamily: 'var(--font-body)', color: '#D7CCC8' }}>
            Tap the squares below to see how it works
          </p>
        </div>

        {/* Section 2: Interactive Mini Bingo Demo - Primary Focus */}
        <div className="relative mb-6">
          {/* First-time hint */}
          {showFirstTimeHint && markedCount === 0 && (
            <div 
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-cream text-espresso px-4 py-2 rounded-lg shadow-lg font-bold text-sm animate-bounce z-20"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Tap any square! ↓
            </div>
          )}

          {/* Progress indicator */}
          <div className="mb-3 text-latte text-sm font-medium" style={{ fontFamily: 'var(--font-body)' }}>
            {markedCount}/9 marked
          </div>

          {/* 3x3 Demo Grid */}
          <div 
            className="grid grid-cols-3 gap-3 max-w-md mx-auto p-4 bg-mocha/30 rounded-xl backdrop-blur-sm"
            style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
          >
            {demoSquares.map((square) => (
              <button
                key={square.id}
                onClick={() => handleDemoSquareClick(square.id)}
                className={`
                  relative flex items-center justify-center p-3 text-center rounded-lg
                  transition-all duration-200 select-none min-h-[90px] text-sm leading-tight font-medium
                  coffee-texture cursor-pointer
                  ${square.isMarked 
                    ? 'bg-marked border-2 border-marked-border text-mocha shadow-lg scale-105' 
                    : 'bg-cream border-2 border-latte text-mocha shadow-md hover:bg-latte active:scale-95'
                  }
                `}
                style={{ 
                  fontFamily: 'var(--font-body)',
                  touchAction: 'manipulation'
                }}
                aria-pressed={square.isMarked}
                aria-label={`Demo square: ${square.text}, ${square.isMarked ? 'marked' : 'unmarked'}`}
              >
                <span className="relative z-10">{square.text}</span>
                
                {/* Checkmark or coffee stain for marked squares */}
                {square.isMarked && (
                  <>
                    <span className="absolute top-1 right-1 text-caramel text-lg font-bold animate-in fade-in zoom-in duration-300">
                      ✓
                    </span>
                    {/* Coffee ring overlay */}
                    <div 
                      className="absolute inset-0 rounded-lg border-2 border-caramel/40 pointer-events-none"
                      style={{ 
                        background: 'radial-gradient(circle at 60% 40%, rgba(141, 110, 99, 0.2) 0%, transparent 60%)',
                        animation: 'fadeIn 0.3s ease-in-out'
                      }}
                    ></div>
                  </>
                )}
              </button>
            ))}
          </div>

          {/* Educational tooltip after 3 taps */}
          {markedCount >= 3 && markedCount < 6 && !showEncouragement && (
            <div 
              className="mt-3 bg-caramel text-cream px-4 py-2 rounded-lg shadow-md text-sm font-medium animate-in fade-in slide-in-from-bottom-2 duration-500"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              In the real game, find people who match! 🎯
            </div>
          )}
        </div>

        {/* Section 3: Transition to Full Game */}
        {showEncouragement && (
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-500 mb-6">
            <p className="text-2xl font-bold text-bingo mb-4" style={{ fontFamily: 'var(--font-heading)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              {checkThreeInRow(demoSquares) ? '🎉 Bingo! You\'ve got it!' : 'You\'ve got it!'}
            </p>
            <p className="text-lg text-latte mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Ready for the full 5×5 board?
            </p>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="space-y-3">
          <button
            onClick={onStart}
            className={`
              w-full text-cream font-bold py-4 px-8 rounded-lg text-lg shadow-xl 
              transition-all active:scale-95 hover:shadow-2xl
              ${showEncouragement ? 'animate-pulse' : ''}
            `}
            style={{ 
              backgroundColor: '#3E2723',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.05em'
            }}
          >
            Start Full Game
          </button>
          
          {/* Optional scoring info */}
          <details className="text-left">
            <summary className="cursor-pointer text-latte hover:text-cream transition-colors text-sm font-medium px-4 py-2" style={{ fontFamily: 'var(--font-body)' }}>
              How does scoring work?
            </summary>
            <div className="mt-2 bg-cream/10 rounded-lg p-4 text-latte text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Get 5 squares in a row (horizontal, vertical, or diagonal) to win! The center square is a free space. Find people who match each question and mark your board!
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
