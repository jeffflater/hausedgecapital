import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function VolatilityAdaptiveScaling() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="blog" />

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
            Volatility Adaptive Scaling: Size for Conditions
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Adjusts position sizes inversely to market volatility, taking smaller positions when volatility is high.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/capital-volatility-scaling.webp" alt="Volatility Adaptive Scaling Strategy" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Volatility Adaptive Scaling?</h2>
            <p className="text-gray-600 mb-6">
              Volatility adaptive scaling adjusts your position size based on current market volatility. When volatility is high, price can move against you faster and further—so you take smaller positions. When volatility is low, you can take larger positions since the risk per unit is lower. This keeps your dollar risk relatively constant across different market conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Principles</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Inverse relationship:</strong> Higher volatility = smaller positions</li>
              <li><strong>ATR-based sizing:</strong> Use Average True Range to measure volatility</li>
              <li><strong>Constant dollar risk:</strong> Risk the same amount regardless of conditions</li>
              <li><strong>Dynamic adjustment:</strong> Recalculate with each trade</li>
              <li><strong>Smoother returns:</strong> Reduces the impact of volatile periods</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Calculation</h2>
            <p className="text-gray-600 mb-6">
              A common approach uses ATR: Position Size = (Risk Amount) / (N × ATR), where N is a multiplier for your stop distance. If you risk $100 per trade and current ATR is $2, with N=2 (stop at 2 ATR), your position size is $100 / ($2 × 2) = 25 units. When ATR doubles to $4, your position size halves to 12.5 units, keeping dollar risk constant.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of This Approach</h2>
            <p className="text-gray-600 mb-6">
              By scaling to volatility, you avoid the common mistake of taking the same position size in both calm and chaotic markets. During crypto volatility spikes (which can be extreme), this approach automatically protects you. During quiet periods, you can participate more fully. The result is more consistent risk exposure and smoother equity growth over time.
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Volatility Scaling Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Learn to adjust position sizes for volatility with paper trading before real capital.
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
