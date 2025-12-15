interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50" style={{ backgroundColor: 'rgba(62, 39, 35, 0.75)' }}>
      <div className="bg-cream rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-[bounce_0.5s_ease-out] border-4 border-caramel coffee-texture relative">
        {/* Coffee cup illustration */}
        <div className="mb-4 relative">
          <div className="text-7xl">☕</div>
          {/* Steam effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="steam w-2 h-8 bg-steam rounded-full blur-sm"></div>
            <div className="steam w-2 h-8 bg-steam rounded-full blur-sm"></div>
            <div className="steam w-2 h-8 bg-steam rounded-full blur-sm"></div>
          </div>
        </div>
        
        <h2 className="text-5xl font-bold text-espresso mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          BINGO!
        </h2>
        <p className="text-mocha mb-6 text-lg font-semibold">
          ☕ Perfectly brewed! You completed a line!
        </p>
        
        <button
          onClick={onDismiss}
          className="w-full text-cream font-bold py-4 px-6 rounded-lg transition-all active:scale-95 shadow-lg"
          style={{ 
            backgroundColor: '#3E2723',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '0.05em'
          }}
        >
          Keep Sipping
        </button>
      </div>
    </div>
  );
}
