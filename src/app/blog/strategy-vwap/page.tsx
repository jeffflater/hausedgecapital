import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function VWAPStrategy() {
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
            VWAP: Volume Weighted Average Price Trading
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Uses Volume Weighted Average Price as dynamic support/resistance for intraday trading decisions.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/strategy-vwap.webp" alt="VWAP Trading Strategy" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is VWAP?</h2>
            <p className="text-gray-600 mb-6">
              VWAP (Volume Weighted Average Price) is a trading benchmark that calculates the average price an asset has traded at throughout the day, weighted by volume. It represents the &quot;fair value&quot; of an asset for the trading session and is widely used by institutional traders to gauge whether they&apos;re getting good execution prices.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Characteristics</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Dynamic level:</strong> VWAP updates throughout the day</li>
              <li><strong>Institutional benchmark:</strong> Used by large traders for execution</li>
              <li><strong>Intraday focus:</strong> Resets each trading session</li>
              <li><strong>Volume weighted:</strong> Heavier volume periods have more impact</li>
              <li><strong>Mean reversion:</strong> Price often returns to VWAP</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Trade with VWAP</h2>
            <p className="text-gray-600 mb-6">
              Traders use VWAP in several ways. When price is above VWAP, it suggests bullish sentiment, and traders look for long entries on pullbacks to VWAP. When price is below VWAP, it indicates bearish sentiment, and traders look for short entries on rallies to VWAP. VWAP bands (standard deviations from VWAP) can provide additional support/resistance levels.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
            <p className="text-gray-600 mb-6">
              VWAP is most effective during active trading hours when volume is highest. The indicator is less reliable near market open when there&apos;s limited data, and near market close when the line becomes more static. Combine VWAP with other indicators like RSI or price action patterns for confirmation.
            </p>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice VWAP Trading Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Master VWAP-based trading strategies with paper trading before risking real capital.
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
              <a
                href="https://instagram.com/victor.draemont"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @victor.draemont
              </a>
            </div>
            <p className="text-gray-500 text-sm">&copy; 2025 Haus Edge Capital.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
