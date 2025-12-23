import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function GridStrategy() {
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
            Grid Trading: Systematic Range Capture
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Places buy and sell orders at regular price intervals to profit from market oscillations within a range.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/strategy-grid.webp" alt="Grid Trading Strategy" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Grid Trading?</h2>
            <p className="text-gray-600 mb-6">
              Grid trading is a systematic strategy that places a series of buy and sell orders at predetermined price levels, creating a &quot;grid&quot; of orders. As price oscillates up and down, orders are executed automatically—buying low and selling high within the grid. It&apos;s particularly effective in ranging or choppy markets where price moves sideways.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Characteristics</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Automated execution:</strong> Orders trigger without constant monitoring</li>
              <li><strong>Range-based:</strong> Works best in sideways markets</li>
              <li><strong>Consistent profits:</strong> Small gains accumulate from each grid level</li>
              <li><strong>No prediction needed:</strong> Profits from any movement within the range</li>
              <li><strong>Capital intensive:</strong> Requires capital at multiple price levels</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Setting Up a Grid</h2>
            <p className="text-gray-600 mb-6">
              First, identify the trading range by finding strong support and resistance. Then divide this range into equal intervals—these become your grid levels. Place buy orders at each level below the current price and sell orders at each level above. The distance between grid lines and the number of levels depends on your capital and risk tolerance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Risks and Management</h2>
            <p className="text-gray-600 mb-6">
              The main risk of grid trading is a strong breakout that leaves you with multiple losing positions on one side. To manage this, set clear boundaries outside the grid where you&apos;ll close all positions. Also consider using a smaller portion of your capital and adjusting grid spacing based on the asset&apos;s typical volatility.
            </p>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Grid Trading Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Learn to set up and manage grid strategies with paper trading before using real capital.
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
