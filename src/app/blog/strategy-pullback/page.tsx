import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function PullbackStrategy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="blog" />

      {/* Article */}
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">Trading Strategy</span>
          </div>

          <div className="inline-block mb-4 px-3 py-1 bg-purple-100 rounded-full">
            <span className="text-purple-700 font-medium text-sm">Trading Strategy</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Pullback: Entering Trends at Discount
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Waits for temporary retracements in trending markets to enter at more favorable prices.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/strategy-pullback.webp" alt="Pullback Trading Strategy" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Pullback Trading?</h2>
            <p className="text-gray-600 mb-6">
              Pullback trading is a strategy that enters trending markets during temporary counter-trend moves. Instead of chasing price at extended levels, pullback traders wait for the market to &quot;pull back&quot; to a support level before entering in the trend direction. This approach often provides better entry prices and improved risk-reward ratios.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Characteristics</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Trend identification:</strong> Only trade pullbacks in established trends</li>
              <li><strong>Support levels:</strong> Moving averages, Fibonacci levels, prior resistance</li>
              <li><strong>Patience required:</strong> Wait for price to come to you</li>
              <li><strong>Confirmation entry:</strong> Look for reversal signals at support</li>
              <li><strong>Better risk-reward:</strong> Tighter stops, larger profit potential</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Pullback Levels</h2>
            <p className="text-gray-600 mb-6">
              Popular levels to watch for pullbacks include the 20 and 50-period moving averages, Fibonacci retracement levels (38.2%, 50%, 61.8%), and previous resistance that has become support. The best pullbacks occur when multiple levels align, creating a confluence zone where price is more likely to bounce.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Executing Pullback Trades</h2>
            <p className="text-gray-600 mb-6">
              Wait for price to approach your identified support level, then look for confirmation that buyers are stepping in. This could be a bullish engulfing candle, a hammer, or a bounce off the level with increased volume. Enter your trade and place your stop-loss just below the support level. Your target should be at least the previous high, or use a trailing stop to capture larger moves.
            </p>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Pullback Trading Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Master the art of pullback entries with paper trading before risking real capital.
              </p>
              <Link href="/learn" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors">
                Start Paper Trading
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>Disclaimer:</strong> This article is for educational purposes only and does not constitute financial advice. Trading involves significant risk of loss.
            </p>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2v8H3zM9 9h2v12H9zM15 5h2v16h-2zM21 1h2v20h-2z" />
              </svg>
              <span className="text-xl font-semibold text-white">Haus Edge Capital</span>
            </Link>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              <Link href="/learn" className="text-gray-400 hover:text-white transition-colors">Learn</Link>
              <Link href="/trade" className="text-gray-400 hover:text-white transition-colors">Trade</Link>
              <Link href="/lending" className="text-gray-400 hover:text-white transition-colors">Lending</Link>
              <Link href="/blog" className="text-blue-400 font-medium transition-colors">Blog</Link>
            </div>
            <p className="text-gray-500 text-sm">&copy; 2025 Haus Edge Capital.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
