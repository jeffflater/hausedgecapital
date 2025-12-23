import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function StrategyPerformanceRotator() {
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
            Strategy Performance Rotator: Adaptive Allocation
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Allocates more capital to strategies that are currently performing well and reduces allocation to underperformers.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/capital-performance-rotator.webp" alt="Strategy Performance Rotator" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Strategy Rotation?</h2>
            <p className="text-gray-600 mb-6">
              Strategy rotation is a meta-strategy that tracks the performance of multiple trading strategies and allocates more capital to those currently performing well. No single strategy works in all market conditions. By rotating between strategies based on recent performance, you can adapt to changing markets without needing to predict what conditions are coming.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Principles</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Multiple strategies:</strong> Run several different approaches simultaneously</li>
              <li><strong>Performance tracking:</strong> Measure each strategy&apos;s recent returns</li>
              <li><strong>Dynamic allocation:</strong> Increase capital to winners, reduce to losers</li>
              <li><strong>Lookback period:</strong> Base decisions on recent performance window</li>
              <li><strong>Rebalancing frequency:</strong> Regular intervals to adjust allocations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementing Rotation</h2>
            <p className="text-gray-600 mb-6">
              Start by running multiple strategies (e.g., momentum, mean reversion, breakout) with equal allocation. Each week or month, rank them by recent performance. Increase allocation to top performers and decrease for underperformers. A simple approach: allocate 50% to the best performer, 30% to second, 20% to third. Rebalance on a fixed schedule.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Avoiding Pitfalls</h2>
            <p className="text-gray-600 mb-6">
              Don&apos;t rotate too quickly—short-term performance can be random noise. Use lookback periods of at least 20-30 trades per strategy. Maintain some allocation to all strategies (don&apos;t completely abandon any) so you don&apos;t miss when conditions shift back in their favor. The goal is tilting toward what&apos;s working, not all-or-nothing bets.
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Strategy Rotation Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Learn to rotate between strategies with paper trading before allocating real capital.
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
