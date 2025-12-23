import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function MarketCycles() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="blog" />

      {/* Article Header */}
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">Strategy</span>
          </div>

          {/* Category Tag */}
          <div className="inline-block mb-4 px-3 py-1 bg-cyan-100 rounded-full">
            <span className="text-cyan-700 font-medium text-sm">Strategy</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Understanding Market Cycles in Crypto
          </h1>

          {/* Meta */}
          <p className="text-xl text-gray-600 mb-8">
            A beginner&apos;s guide to recognizing bull and bear markets in the cryptocurrency space.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/market-cycles.webp" alt="Understanding Market Cycles in Crypto" className="w-full h-auto rounded-2xl" />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Market Cycles?</h2>
            <p className="text-gray-600 mb-6">
              Market cycles are recurring patterns of growth and decline in financial markets. In cryptocurrency, these cycles are often more pronounced and dramatic than in traditional markets. Understanding these patterns can help you make more informed trading decisions.
            </p>

            <p className="text-gray-600 mb-6">
              The crypto market has historically moved through distinct phases: accumulation, uptrend (bull market), distribution, and downtrend (bear market). Each phase has its own characteristics and opportunities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Four Phases of a Market Cycle</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Accumulation Phase</h3>
            <p className="text-gray-600 mb-6">
              This phase occurs after a market has bottomed out. Prices are low, sentiment is pessimistic, and most retail investors have given up. However, informed investors and institutions begin quietly accumulating assets at discounted prices.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Uptrend (Bull Market)</h3>
            <p className="text-gray-600 mb-6">
              As more buyers enter the market, prices begin to rise. News coverage increases, public interest grows, and FOMO (fear of missing out) drives more participants into the market. This phase is characterized by higher highs and higher lows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Distribution Phase</h3>
            <p className="text-gray-600 mb-6">
              At the peak of a bull market, early investors begin selling their holdings to late arrivals. Prices become volatile, moving sideways as buying and selling pressure balance out. This is often when mainstream media attention is at its highest.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Downtrend (Bear Market)</h3>
            <p className="text-gray-600 mb-6">
              When selling pressure overwhelms buying pressure, prices begin to fall. Fear replaces greed, negative news dominates, and many investors sell at a loss. This phase is characterized by lower highs and lower lows.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Identify Market Phases</h2>
            <p className="text-gray-600 mb-6">
              While it&apos;s impossible to perfectly time the market, there are several indicators that can help you identify which phase the market is in:
            </p>

            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Volume:</strong> Increasing volume often confirms trend direction</li>
              <li><strong>Sentiment:</strong> Extreme fear or greed can signal turning points</li>
              <li><strong>Moving Averages:</strong> Price relative to long-term averages indicates trend</li>
              <li><strong>News Coverage:</strong> Mainstream attention often peaks near tops</li>
            </ul>

            <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Identifying Cycles</h3>
              <p className="text-gray-600 mb-4">
                The best way to learn market cycles is through practice. Use paper trading to test your analysis without risking real money.
              </p>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-colors"
              >
                Start Paper Trading
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>Disclaimer:</strong> This article is for educational purposes only and does not constitute financial advice. Cryptocurrency investments are volatile and high-risk. Always do your own research before making any investment decisions.
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
            <p className="text-gray-500 text-sm">
              &copy; 2025 Haus Edge Capital.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center space-y-4">
            <p className="text-gray-500 text-xs font-medium">
              DISCLAIMER: This website is for educational and informational purposes only. Nothing on this site constitutes financial advice, investment advice, trading advice, or any other advice. You should not treat any of the website&apos;s content as such. Haus Edge Capital does not recommend that any cryptocurrency, security, or investment should be bought, sold, or held by you. Do your own due diligence and consult a licensed financial advisor before making any investment decisions. Cryptocurrency investments are volatile and high-risk. There are no warranties, expressed or implied, regarding the accuracy or completeness of any information on this site. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
