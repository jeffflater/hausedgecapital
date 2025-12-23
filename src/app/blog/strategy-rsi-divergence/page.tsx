import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function RSIDivergenceStrategy() {
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
            RSI Divergence: Spotting Trend Reversals
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Detects divergences between price and RSI indicator to anticipate potential trend reversals.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/strategy-rsi-divergence.webp" alt="RSI Divergence Trading Strategy" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is RSI Divergence?</h2>
            <p className="text-gray-600 mb-6">
              RSI (Relative Strength Index) divergence occurs when price action and the RSI indicator move in opposite directions. This disconnect between price and momentum often signals that the current trend is losing steam and may be about to reverse. Divergence is one of the most powerful tools for identifying potential turning points in the market.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Divergence</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Bullish divergence:</strong> Price makes lower lows, RSI makes higher lows</li>
              <li><strong>Bearish divergence:</strong> Price makes higher highs, RSI makes lower highs</li>
              <li><strong>Hidden bullish:</strong> Price makes higher lows, RSI makes lower lows (trend continuation)</li>
              <li><strong>Hidden bearish:</strong> Price makes lower highs, RSI makes higher highs (trend continuation)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Spot Divergence</h2>
            <p className="text-gray-600 mb-6">
              Look for the RSI indicator to move in the opposite direction of price. For bullish divergence, wait for price to make a new low while RSI forms a higher low—this suggests selling pressure is weakening. For bearish divergence, watch for price to make a new high while RSI forms a lower high—this indicates buying pressure is fading despite the price rise.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trading RSI Divergence</h2>
            <p className="text-gray-600 mb-6">
              Divergence signals work best when combined with other confirmation. Look for support/resistance levels, candlestick reversal patterns, or volume shifts to confirm the divergence. Enter after confirmation rather than immediately on the divergence, and set stops beyond the recent swing high/low. Divergence can take time to play out, so patience is essential.
            </p>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice RSI Divergence Trading Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Learn to spot and trade divergences with paper trading before risking real capital.
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
