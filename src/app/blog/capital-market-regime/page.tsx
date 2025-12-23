import Link from "next/link";

export default function MarketRegimeClassifier() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2v8H3zM9 9h2v12H9zM15 5h2v16h-2zM21 1h2v20h-2z" />
              </svg>
              <span className="text-xl font-semibold text-gray-900">Haus Edge Capital</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/learn" className="text-gray-600 hover:text-gray-900 transition-colors">Learn</Link>
              <Link href="/trade" className="text-gray-600 hover:text-gray-900 transition-colors">Trade</Link>
              <Link href="/lending" className="text-gray-600 hover:text-gray-900 transition-colors">Lending</Link>
              <Link href="/blog" className="text-blue-600 font-medium transition-colors">Blog</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">Capital Growth</span>
          </div>

          <div className="inline-block mb-4 px-3 py-1 bg-green-100 rounded-full">
            <span className="text-green-700 font-medium text-sm">Capital Growth</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Market Regime Classifier: Adapting to Conditions
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Classifies current market conditions and adjusts strategy parameters to match the prevailing regime.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/capital-market-regime.webp" alt="Market Regime Classifier Strategy" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is a Market Regime?</h2>
            <p className="text-gray-600 mb-6">
              Markets don&apos;t always behave the same way. Sometimes they trend strongly, sometimes they chop sideways, sometimes they&apos;re highly volatile, sometimes quiet. A market regime classifier identifies which state the market is in, allowing you to adapt your trading approach accordingly. Strategies that work in trends often fail in ranges, and vice versa.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Market Regimes</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Trending:</strong> Strong directional movement, higher highs/lows or lower highs/lows</li>
              <li><strong>Ranging:</strong> Price oscillating between support and resistance</li>
              <li><strong>High volatility:</strong> Large price swings, increased uncertainty</li>
              <li><strong>Low volatility:</strong> Tight price action, consolidation</li>
              <li><strong>Breakout:</strong> Transitioning from range to trend</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Classifying the Regime</h2>
            <p className="text-gray-600 mb-6">
              Several indicators can help classify market regimes. ADX (Average Directional Index) above 25 often indicates trending conditions. ATR (Average True Range) relative to its historical average reveals volatility levels. Moving average slopes and price position relative to moving averages indicate trend direction. Combining these gives a clearer picture of current conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Adapting Your Strategy</h2>
            <p className="text-gray-600 mb-6">
              In trending regimes, use trend-following strategies and wider stops. In ranging regimes, use mean reversion and trade the range boundaries. In high volatility, reduce position sizes and widen stops. In low volatility, prepare for breakouts. The key is matching your approach to current conditions rather than forcing one strategy onto all market states.
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Regime Classification Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Learn to identify and adapt to market regimes with paper trading before using real capital.
              </p>
              <Link href="/learn" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold transition-colors">
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
            <div className="flex items-center gap-8">
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
