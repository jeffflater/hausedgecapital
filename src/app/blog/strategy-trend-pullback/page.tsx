import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function TrendPullbackStrategy() {
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
            Trend Pullback: Higher Timeframe Confluence
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Enters pullbacks in strong trends after confirming the trend on higher timeframes for increased probability.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/strategy-trend-pullback.webp" alt="Trend Pullback Trading Strategy" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Trend Pullback Trading?</h2>
            <p className="text-gray-600 mb-6">
              Trend pullback trading combines the power of trend following with the precision of pullback entries. First, you identify the dominant trend on a higher timeframe (like the daily or 4-hour chart). Then, you wait for a pullback on a lower timeframe and enter in the trend direction. This multi-timeframe approach increases the probability of successful trades.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Characteristics</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Multi-timeframe analysis:</strong> Trend on higher, entry on lower</li>
              <li><strong>Trend alignment:</strong> Only trade in the direction of the major trend</li>
              <li><strong>Better entries:</strong> Pullbacks provide discounted entry prices</li>
              <li><strong>Higher probability:</strong> Trading with the trend increases odds</li>
              <li><strong>Clear invalidation:</strong> Easy to know when you&apos;re wrong</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Process</h2>
            <p className="text-gray-600 mb-6">
              Start by identifying a clear trend on your higher timeframe—look for higher highs and higher lows in an uptrend, or lower highs and lower lows in a downtrend. Then drop to your execution timeframe and wait for price to pull back to a key level (moving average, support/resistance, or Fibonacci level). Enter when you see confirmation that the pullback is ending and price is resuming the trend.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Timeframe Combinations</h2>
            <p className="text-gray-600 mb-6">
              Common timeframe combinations include daily/4-hour for swing traders, 4-hour/1-hour for active traders, and 1-hour/15-minute for day traders. The higher timeframe should be at least 4x longer than your entry timeframe. This gives you enough separation to identify meaningful trends while still finding precise entries.
            </p>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Trend Pullback Trading Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Master multi-timeframe analysis with paper trading before risking real capital.
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
