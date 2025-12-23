import Link from "next/link";

export default function DailyGuardrails() {
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
            Daily Guardrails: Setting Limits That Work
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Sets daily profit targets and loss limits to enforce discipline and prevent emotional overtrading.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/capital-daily-guardrails.webp" alt="Daily Guardrails Strategy" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What are Daily Guardrails?</h2>
            <p className="text-gray-600 mb-6">
              Daily guardrails are pre-defined limits on how much you can win or lose in a single day. When you hit your daily loss limit, you stop trading—no exceptions. When you hit your profit target, you might stop or switch to reduced risk. These rules protect you from yourself on your worst days and lock in gains on your best.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Components</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Daily loss limit:</strong> Maximum amount you can lose before stopping</li>
              <li><strong>Daily profit target:</strong> Target that triggers reduced risk or stop</li>
              <li><strong>Trade count limit:</strong> Maximum number of trades per day</li>
              <li><strong>Time restrictions:</strong> Specific hours when you trade</li>
              <li><strong>Automatic enforcement:</strong> Rules that trigger without decision-making</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Setting Your Limits</h2>
            <p className="text-gray-600 mb-6">
              A common approach is setting your daily loss limit at 2-3% of your account and your profit target at 4-6%. The loss limit prevents catastrophic days that can set you back weeks. The profit target prevents giving back gains through overconfidence. These numbers should be calibrated to your strategy&apos;s typical performance and your risk tolerance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Guardrails Work</h2>
            <p className="text-gray-600 mb-6">
              Most trading disasters happen when emotions take over. After a few losses, traders often revenge trade, taking bigger risks to recover. After a big win, they might overtrade feeling invincible. Guardrails remove decision-making in these vulnerable moments, replacing emotion with rules established when thinking clearly.
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Daily Guardrails Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Build the habit of following daily limits with paper trading before real capital is at stake.
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
