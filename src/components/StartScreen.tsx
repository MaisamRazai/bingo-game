interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden coffee-texture" style={{ backgroundColor: '#EFEBE9' }}>
      {/* Subtle coffee stain pattern background - low opacity */}
      <div className="absolute inset-0 opacity-5 wood-grain"></div>
      
      <div className="text-center max-w-[600px] relative z-10 flex flex-col items-center gap-8">
        {/* Hero coffee cup with steam animation */}
        <div className="relative">
          <div className="text-[8rem] sm:text-[10rem]" role="img" aria-label="Coffee cup">☕</div>
          {/* Steam wisps */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-3">
            <div className="steam text-steam text-2xl">~</div>
            <div className="steam text-steam text-2xl">~</div>
            <div className="steam text-steam text-2xl">~</div>
          </div>
        </div>
        
        {/* Hero headline */}
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold leading-tight text-espresso mb-4" 
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Break the Ice, One Square at a Time
        </h1>
        
        {/* Compelling subtitle */}
        <p 
          className="text-xl sm:text-2xl text-mocha mb-8 max-w-md" 
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Transform awkward small talk into an engaging game
        </p>

        {/* Prominent CTA button - 2x larger */}
        <button
          onClick={onStart}
          className="text-cream font-bold py-6 px-16 rounded-lg text-2xl shadow-2xl transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(62,39,35,0.4)] active:scale-95 min-h-[44px]"
          style={{ 
            backgroundColor: '#3E2723',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '0.05em'
          }}
        >
          Brew Your Game
        </button>
      </div>
    </div>
  );
}
