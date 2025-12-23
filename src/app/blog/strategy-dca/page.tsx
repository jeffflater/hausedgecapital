import Link from "next/link";

export default function DCAStrategy() {
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
            <span className="text-gray-900">Trading Strategy</span>
          </div>

          <div className="inline-block mb-4 px-3 py-1 bg-purple-100 rounded-full">
            <span className="text-purple-700 font-medium text-sm">Trading Strategy</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            DCA: Dollar-Cost Averaging
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Invests fixed amounts at regular intervals regardless of price, reducing the impact of volatility on entry.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/strategy-dca.webp" alt="DCA Trading Strategy" className="w-full h-auto rounded-2xl" />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Dollar-Cost Averaging?</h2>
            <p className="text-gray-600 mb-6">
              Dollar-Cost Averaging (DCA) is an investment strategy where you invest a fixed amount of money at regular intervals—regardless of the asset&apos;s current price. This approach removes the stress of trying to time the market and naturally results in buying more when prices are low and less when prices are high, averaging out your cost basis over time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Characteristics</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Consistent investment:</strong> Same amount, same schedule</li>
              <li><strong>Removes timing pressure:</strong> No need to predict market direction</li>
              <li><strong>Averages entry price:</strong> Reduces impact of volatility</li>
              <li><strong>Builds discipline:</strong> Systematic approach to investing</li>
              <li><strong>Reduces emotion:</strong> Takes feelings out of the equation</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How DCA Works</h2>
            <p className="text-gray-600 mb-6">
              Imagine investing $100 weekly into Bitcoin. When Bitcoin is at $50,000, you buy 0.002 BTC. When it drops to $40,000, your $100 buys 0.0025 BTC. When it rises to $60,000, you get 0.00167 BTC. Over time, your average purchase price will be somewhere in between all these points, protecting you from buying entirely at the top.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">DCA vs. Lump Sum</h2>
            <p className="text-gray-600 mb-6">
              While lump sum investing (putting all your money in at once) can outperform DCA in consistently rising markets, DCA offers significant psychological benefits and reduces risk in volatile markets like crypto. It&apos;s especially valuable for new investors who might otherwise be paralyzed by the fear of buying at the wrong time.
            </p>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice DCA Strategy Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Test your DCA strategy with paper trading to see how it performs over different market conditions.
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
