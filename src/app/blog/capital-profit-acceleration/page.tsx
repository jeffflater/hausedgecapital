import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function ProfitAcceleration() {
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
            Profit Acceleration: Pressing Your Winners
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Increases position sizes during winning streaks to capitalize on periods when your edge is working.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/capital-profit-acceleration.webp" alt="Profit Acceleration Strategy" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Profit Acceleration?</h2>
            <p className="text-gray-600 mb-6">
              Profit acceleration is the strategy of increasing your position sizes when you&apos;re in a winning streak. The logic is simple: if your edge is currently working well, you should capitalize on it while conditions are favorable. Just as you reduce risk during losing streaks, you can responsibly increase risk during winning periods to maximize returns.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Principles</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Streak awareness:</strong> Track consecutive wins and winning days</li>
              <li><strong>Gradual increases:</strong> Scale up position size incrementally</li>
              <li><strong>Profit protection:</strong> Only increase size with profits, not original capital</li>
              <li><strong>Quick reduction:</strong> Reduce size immediately when streak ends</li>
              <li><strong>Maximum caps:</strong> Set limits on how large positions can grow</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementing Acceleration</h2>
            <p className="text-gray-600 mb-6">
              Start with your base position size. After a defined winning streak (say, 3-5 consecutive winners), increase size by a small percentage (10-20%). Continue increasing with each additional win, up to a maximum cap (perhaps 50% above base). When you experience a loss, immediately return to base size or even below if the loss was significant.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Risk Management</h2>
            <p className="text-gray-600 mb-6">
              The key to profit acceleration is protecting your gains. Only &quot;press&quot; with profits you&apos;ve made, never with your original capital. If you&apos;ve made $1,000 in profits, you can afford to be more aggressive with that $1,000, but your original stake should remain protected. Think of it as playing with house money while keeping your initial bankroll safe.
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Profit Acceleration Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Learn to manage winning streaks effectively with paper trading before real capital.
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
