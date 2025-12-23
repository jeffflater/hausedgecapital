import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function CapitalPreservation() {
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
