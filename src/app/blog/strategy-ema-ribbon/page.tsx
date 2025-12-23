import Link from "next/link";

export default function EMARibbonStrategy() {
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
            EMA Ribbon: Visualizing Trend Strength
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Uses multiple Exponential Moving Averages to visualize trend direction and strength for trend-following trades.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/strategy-ema-ribbon.webp" alt="EMA Ribbon Trading Strategy" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is an EMA Ribbon?</h2>
            <p className="text-gray-600 mb-6">
              An EMA Ribbon is a collection of Exponential Moving Averages of different lengths plotted together on a chart. Typically, traders use 8 to 12 EMAs ranging from short-term (like 10-period) to longer-term (like 50 or 100-period). When these lines spread apart, it indicates a strong trend; when they converge, it signals a weakening trend or potential reversal.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Characteristics</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Trend visualization:</strong> Easy to see trend direction at a glance</li>
              <li><strong>Trend strength:</strong> Ribbon expansion shows strong trends</li>
              <li><strong>Dynamic support/resistance:</strong> EMAs act as price barriers</li>
              <li><strong>Crossover signals:</strong> EMA twists indicate trend changes</li>
              <li><strong>Pullback zones:</strong> Price often bounces off ribbon during trends</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reading the Ribbon</h2>
            <p className="text-gray-600 mb-6">
              In a strong uptrend, the ribbon fans out with the shortest EMAs on top and price staying above all lines. In a strong downtrend, the ribbon inverts with shortest EMAs below and price underneath. When the ribbon is flat and tangled, the market is choppy and trendless. Look for the ribbon to expand after a contraction for trend entry opportunities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trading with EMA Ribbons</h2>
            <p className="text-gray-600 mb-6">
              Enter trades when price pulls back to touch the ribbon during a trend. In an uptrend, buy when price dips to the ribbon and bounces; in a downtrend, sell when price rallies to the ribbon and rejects. The ribbon twist—when all EMAs cross over each other—is a major trend reversal signal that often precedes significant moves.
            </p>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice EMA Ribbon Trading Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Learn to read and trade EMA ribbons with paper trading before using real capital.
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
