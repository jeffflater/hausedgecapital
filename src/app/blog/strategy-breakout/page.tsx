import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function BreakoutStrategy() {
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
            Breakout: Trading Price Level Breaks
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Trades when price breaks through significant support or resistance levels with volume confirmation.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/strategy-breakout.webp" alt="Breakout Trading Strategy" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Breakout Trading?</h2>
            <p className="text-gray-600 mb-6">
              Breakout trading is a strategy that aims to capitalize on price movements when an asset breaks through established support or resistance levels. These levels act as barriers where price has historically reversed, and when they&apos;re broken, it often signals strong momentum in that direction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Characteristics</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Level identification:</strong> Find clear support/resistance zones</li>
              <li><strong>Volume confirmation:</strong> Breakouts should be accompanied by increased volume</li>
              <li><strong>Momentum entry:</strong> Enter when price decisively breaks the level</li>
              <li><strong>False breakout awareness:</strong> Not all breaks sustain—watch for retests</li>
              <li><strong>Trend alignment:</strong> Breakouts in trend direction are more reliable</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Trade Breakouts</h2>
            <p className="text-gray-600 mb-6">
              The key to successful breakout trading is patience and confirmation. Wait for the price to clearly break the level, not just touch it. Look for a strong candle close beyond the level with above-average volume. Many traders wait for a retest of the broken level before entering, which can provide a better risk-reward ratio.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing False Breakouts</h2>
            <p className="text-gray-600 mb-6">
              False breakouts occur when price briefly moves beyond a level but quickly reverses. To filter these out, look for volume confirmation, wait for candle closes (not just wicks), and consider the overall market context. Setting stop-losses just below the broken level helps limit losses on false breakouts.
            </p>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Breakout Trading Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Learn to identify and trade breakouts with paper trading before using real capital.
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
