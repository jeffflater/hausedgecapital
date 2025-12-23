import Link from "next/link";

export default function MomentumStrategy() {
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
            <span className="text-gray-900">Trading Strategy</span>
          </div>

          <div className="inline-block mb-4 px-3 py-1 bg-purple-100 rounded-full">
            <span className="text-purple-700 font-medium text-sm">Trading Strategy</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Momentum: Riding Strong Price Moves
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Enters positions when strong directional momentum is detected, riding the wave of aggressive buying or selling.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/strategy-momentum.webp" alt="Momentum Trading Strategy" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Momentum Trading?</h2>
            <p className="text-gray-600 mb-6">
              Momentum trading is based on the principle that strong price moves tend to continue in the same direction. Rather than trying to predict reversals, momentum traders jump on existing trends and ride them until they show signs of exhaustion. The crypto market, with its high volatility, offers many momentum trading opportunities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Characteristics</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Trend following:</strong> Trade in the direction of the move</li>
              <li><strong>Volume confirmation:</strong> Strong moves should have high volume</li>
              <li><strong>Quick entries:</strong> Enter when momentum is confirmed</li>
              <li><strong>Trailing stops:</strong> Let winners run, cut losers quickly</li>
              <li><strong>Momentum indicators:</strong> RSI, MACD, Rate of Change</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Identifying Momentum</h2>
            <p className="text-gray-600 mb-6">
              Look for price making new highs or lows with strong volume. Large candles with little wicks indicate strong momentum. Technical indicators like RSI above 70 (bullish) or below 30 (bearish) can confirm momentum, though in strong trends these levels can remain extreme for extended periods. Moving average crossovers and MACD histogram expansion also signal momentum.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Momentum Trades</h2>
            <p className="text-gray-600 mb-6">
              The key to momentum trading is letting winners run while cutting losers quickly. Use trailing stops that move with price to lock in profits as the move continues. Exit when momentum fades—this could be shown by smaller candles, decreasing volume, or bearish/bullish divergence on indicators. Don&apos;t try to pick the exact top or bottom.
            </p>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Momentum Trading Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Learn to identify and ride momentum moves with paper trading before using real capital.
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
