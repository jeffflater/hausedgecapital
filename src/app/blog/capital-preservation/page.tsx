import Link from "next/link";

export default function CapitalPreservation() {
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
            <span className="text-gray-900">Capital Growth</span>
          </div>

          <div className="inline-block mb-4 px-3 py-1 bg-green-100 rounded-full">
            <span className="text-green-700 font-medium text-sm">Capital Growth</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Capital Preservation: Protecting Your Base
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Implements protective measures during drawdowns, reducing risk exposure to preserve capital for recovery.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/capital-preservation.webp" alt="Capital Preservation Strategy" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Capital Preservation Matters</h2>
            <p className="text-gray-600 mb-6">
              The first rule of trading is to protect your capital—without it, you can&apos;t trade. Mathematics works against you during drawdowns: a 50% loss requires a 100% gain to break even. Capital preservation strategies recognize when things aren&apos;t working and reduce exposure to survive the storm, ensuring you have capital to deploy when conditions improve.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Principles</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Drawdown limits:</strong> Maximum acceptable portfolio decline</li>
              <li><strong>Risk reduction:</strong> Decrease position sizes during losing periods</li>
              <li><strong>Cash reserves:</strong> Move to sidelines when conditions are unfavorable</li>
              <li><strong>Recovery focus:</strong> Preserve enough capital to recover</li>
              <li><strong>Emotional protection:</strong> Reduce stress during difficult periods</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementing Drawdown Rules</h2>
            <p className="text-gray-600 mb-6">
              Set clear rules before you start trading. For example: reduce position sizes by 50% when down 10% from peak equity; reduce by 75% when down 15%; stop trading entirely when down 20%. These rules should be automatic and non-negotiable. The goal is to ensure you always have capital available when good opportunities return.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recovery Mode</h2>
            <p className="text-gray-600 mb-6">
              When emerging from a drawdown, don&apos;t immediately return to full position sizes. Gradually increase exposure as you prove your edge is working again. A common approach is to stay at reduced risk until you&apos;ve recovered at least half the drawdown with the smaller positions, confirming your strategy is back in sync with the market.
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Capital Preservation Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Learn to implement drawdown rules with paper trading before risking real capital.
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
