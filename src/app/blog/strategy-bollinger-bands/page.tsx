import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function BollingerBandsStrategy() {
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
            Bollinger Bands: Trading Volatility
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Uses Bollinger Bands to identify overbought/oversold conditions and volatility-based trading opportunities.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/strategy-bollinger-bands.webp" alt="Bollinger Bands Trading Strategy" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What are Bollinger Bands?</h2>
            <p className="text-gray-600 mb-6">
              Bollinger Bands are a volatility indicator consisting of a middle band (usually a 20-period moving average) with an upper and lower band set at 2 standard deviations away. The bands expand during high volatility and contract during low volatility. This creates a dynamic envelope around price that adapts to market conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Characteristics</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Mean reversion:</strong> Price tends to return to the middle band</li>
              <li><strong>Band touches:</strong> Can signal overbought/oversold conditions</li>
              <li><strong>Squeezes:</strong> Tight bands often precede big moves</li>
              <li><strong>Walking the bands:</strong> Strong trends can ride the upper or lower band</li>
              <li><strong>Dynamic levels:</strong> Bands adjust to current volatility</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trading Strategies</h2>
            <p className="text-gray-600 mb-6">
              There are several ways to trade Bollinger Bands. The mean reversion strategy buys when price touches the lower band and sells at the middle or upper band. The breakout strategy watches for band squeezes (low volatility) and trades the breakout direction. The trend strategy looks for price &quot;walking the bands&quot; as confirmation of strong momentum.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Bollinger Squeeze</h2>
            <p className="text-gray-600 mb-6">
              When the bands contract significantly (a &quot;squeeze&quot;), it indicates low volatility—and low volatility is often followed by high volatility. Watch for the bands to narrow, then enter in the direction of the breakout when price moves decisively outside the bands with volume confirmation. This can capture the beginning of powerful moves.
            </p>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Bollinger Band Trading Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Master Bollinger Band strategies with paper trading before risking real capital.
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
