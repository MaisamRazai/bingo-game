interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden" style={{ backgroundColor: '#424242' }}>
      {/* Office items decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">💼</div>
        <div className="absolute bottom-20 right-10 text-5xl">☕</div>
        <div className="absolute top-1/3 right-1/4 text-4xl">💻</div>
      </div>
      
      <div className="text-center max-w-sm relative z-10">
        {/* Title with office memo style */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: '#EFEBE9', textShadow: '3px 3px 6px rgba(0,0,0,0.3)' }}>
            Office Humor
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px bg-latte w-12"></div>
            <p className="text-xl" style={{ fontFamily: 'var(--font-heading)', color: '#D7CCC8', fontStyle: 'italic' }}>
              Bingo
            </p>
            <div className="h-px bg-latte w-12"></div>
          </div>
        </div>
        
        {/* Memo board style instructions */}
        <div className="bg-cream rounded-lg p-6 shadow-2xl border-4 border-caramel mb-8 coffee-texture relative">
          {/* Sticky note decoration */}
          <div className="absolute -top-3 -right-3 w-16 h-16 bg-yellow-300 opacity-60 rounded-sm rotate-12"></div>
          
          <h2 className="font-bold text-espresso mb-4 text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
            How to Play
          </h2>
          <ul className="text-left text-mocha space-y-2.5 font-medium">
            <li className="flex items-start gap-2">
              <span className="text-caramel mt-0.5">💼</span>
              <span>Find coworkers who match the prompts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-caramel mt-0.5">💼</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-caramel mt-0.5">💼</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        {/* Start button */}
        <button
          onClick={onStart}
          className="w-full text-cream font-bold py-4 px-8 rounded-lg text-lg shadow-xl transition-all active:scale-95"
          style={{ 
            backgroundColor: '#3E2723',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '0.05em'
          }}
        >
          Start Playing
        </button>
      </div>
    </div>
  );
}
