import { questions } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
}

// Feature Card Component
interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

function FeatureCard({ emoji, title, description }: FeatureCardProps) {
  return (
    <div className="bg-cream rounded-lg p-6 border-4 border-caramel coffee-texture transition-all hover:scale-105 hover:shadow-xl">
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="font-bold text-espresso mb-2 text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
        {title}
      </h3>
      <p className="text-mocha text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function StartScreen({ onStart }: StartScreenProps) {
  // Get 9 sample questions for the preview grid
  const sampleQuestions = questions.slice(0, 9);

  return (
    <div className="min-h-full relative overflow-x-hidden" style={{ background: 'linear-gradient(135deg, #5D4037 0%, #3E2723 100%)' }}>
      {/* Coffee beans decoration - scattered throughout */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl">☕</div>
        <div className="absolute top-1/4 right-12 text-5xl">☕</div>
        <div className="absolute top-1/2 left-16 text-4xl">☕</div>
        <div className="absolute top-3/4 right-20 text-5xl">☕</div>
        <div className="absolute bottom-32 left-24 text-6xl">☕</div>
      </div>

      <div className="relative z-10">
        {/* Section 1: Hero Banner */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-cream" style={{ fontFamily: 'var(--font-heading)', textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}>
              Break the Ice, One Square at a Time
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-latte" style={{ fontFamily: 'var(--font-body)' }}>
              The social bingo game that turns strangers into connections
            </p>
            
            {/* Medium-sized hero coffee cup */}
            <div className="text-8xl my-8 animate-bounce">☕</div>
            
            <button
              onClick={onStart}
              className="bg-espresso text-cream font-bold py-4 px-12 rounded-lg text-xl shadow-2xl transition-all hover:scale-105 active:scale-95 mb-8"
              style={{ 
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.05em'
              }}
            >
              Start Playing
            </button>

            {/* Scroll hint indicator */}
            <div className="mt-12 flex flex-col items-center text-latte opacity-70">
              <p className="text-sm mb-2">Scroll to learn more</p>
              <div className="animate-bounce">↓</div>
            </div>
          </div>
        </section>

        {/* Section 2: Feature Showcase Cards */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cream" style={{ fontFamily: 'var(--font-heading)' }}>
              Why You'll Love It
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                emoji="⚡"
                title="Quick Setup"
                description="No accounts, no downloads, just tap and play. Get your game started in seconds."
              />
              <FeatureCard
                emoji="💬"
                title="Real Conversations"
                description="Designed for genuine human connection, not small talk. Break through surface-level interactions."
              />
              <FeatureCard
                emoji="🎉"
                title="Instant Fun"
                description="Race to get 5 in a row - simple rules, engaging gameplay. Everyone understands bingo!"
              />
              <FeatureCard
                emoji="📱"
                title="Works Anywhere"
                description="Perfect for mixers, team building, and networking events. Play on any device."
              />
            </div>
          </div>
        </section>

        {/* Section 3: Visual Game Preview */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cream" style={{ fontFamily: 'var(--font-heading)' }}>
              See It In Action
            </h2>
            <div className="bg-cream rounded-lg p-6 border-4 border-caramel shadow-2xl coffee-texture">
              <div className="grid grid-cols-3 gap-3">
                {sampleQuestions.map((question, index) => (
                  <div
                    key={index}
                    className={`
                      aspect-square bg-cream border-2 rounded-lg p-3 flex items-center justify-center text-center text-sm font-medium text-mocha
                      ${index === 4 ? 'border-caramel bg-marked border-4' : 'border-caramel'}
                    `}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {question}
                  </div>
                ))}
              </div>
              <p className="text-center text-mocha mt-4 text-sm italic">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Tap squares when you find matches - marked squares show you're making progress!
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: How It Works Steps */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cream" style={{ fontFamily: 'var(--font-heading)' }}>
              How It Works
            </h2>
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-espresso rounded-full flex items-center justify-center text-cream text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  1
                </div>
                <div className="flex-1 bg-cream rounded-lg p-6 border-4 border-caramel coffee-texture">
                  <p className="text-mocha text-lg font-medium">
                    Find people who match the questions on your bingo board
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-espresso rounded-full flex items-center justify-center text-cream text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  2
                </div>
                <div className="flex-1 bg-cream rounded-lg p-6 border-4 border-caramel coffee-texture">
                  <p className="text-mocha text-lg font-medium">
                    Tap a square when you find a match to mark it
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-espresso rounded-full flex items-center justify-center text-cream text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  3
                </div>
                <div className="flex-1 bg-cream rounded-lg p-6 border-4 border-caramel coffee-texture">
                  <p className="text-mocha text-lg font-medium">
                    Get 5 in a row to win! (horizontal, vertical, or diagonal)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Social Proof & Final CTA */}
        <section className="py-20 px-6 pb-32">
          <div className="max-w-2xl mx-auto text-center">
            {/* Testimonial with coffee cup attribution */}
            <div className="bg-cream rounded-lg p-8 border-4 border-caramel coffee-texture mb-8 shadow-2xl">
              <p className="text-mocha text-xl italic mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "The best icebreaker I've used at networking events. Everyone actually talks to each other!"
              </p>
              <div className="flex items-center justify-center gap-2 text-caramel">
                <span className="text-2xl">☕</span>
                <span className="font-medium">- Event Organizer</span>
              </div>
            </div>

            {/* Secondary CTA */}
            <button
              onClick={onStart}
              className="w-full bg-espresso text-cream font-bold py-5 px-8 rounded-lg text-xl shadow-2xl transition-all hover:scale-105 active:scale-95 mb-6"
              style={{ 
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.05em'
              }}
            >
              Brew Your Game
            </button>

            {/* Footer text */}
            <p className="text-latte text-sm">
              Free • No signup required • Mobile-friendly
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
