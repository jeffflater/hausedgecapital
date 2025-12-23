import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function PaperTrading101() {
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
            <span className="text-gray-900">Getting Started</span>
          </div>

          {/* Category Tag */}
          <div className="inline-block mb-4 px-3 py-1 bg-blue-100 rounded-full">
            <span className="text-blue-700 font-medium text-sm">Getting Started</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Paper Trading 101: Why Practice Makes Perfect
          </h1>

          {/* Meta */}
          <p className="text-xl text-gray-600 mb-8">
            Learn why practicing with virtual money is the smartest first step for new crypto traders.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/paper-trading-101.webp" alt="Paper Trading 101" className="w-full h-auto rounded-2xl" />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Paper Trading?</h2>
            <p className="text-gray-600 mb-6">
              Paper trading is the practice of simulating trades without using real money. It&apos;s like a flight simulator for traders—you get all the experience of making trading decisions in real market conditions, but without the financial risk of crashing.
            </p>

            <p className="text-gray-600 mb-6">
              For crypto traders, paper trading is especially valuable because the cryptocurrency market is known for its volatility. Prices can swing 10%, 20%, or even more in a single day. Learning to navigate these waters with virtual money first can save you from costly mistakes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Paper Trading Matters</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Learn Without Losing</h3>
            <p className="text-gray-600 mb-6">
              The biggest advantage of paper trading is obvious: you can&apos;t lose real money. This freedom allows you to experiment with different strategies, make mistakes, and learn from them without any financial consequences.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Develop Emotional Discipline</h3>
            <p className="text-gray-600 mb-6">
              Trading is as much psychological as it is analytical. Paper trading helps you experience the emotions of watching your positions move—both up and down—so you can develop the discipline needed for real trading.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Test Your Strategies</h3>
            <p className="text-gray-600 mb-6">
              Before risking real capital, you can test different trading strategies to see what works for you. Does momentum trading suit your style? What about swing trading? Paper trading lets you find out.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Understand Market Mechanics</h3>
            <p className="text-gray-600 mb-6">
              Paper trading teaches you how orders work, what slippage means, and how market volatility affects your positions—all without paying tuition in the form of losses.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started with Paper Trading</h2>
            <p className="text-gray-600 mb-6">
              Ready to start your paper trading journey? SkiaPaper offers a comprehensive paper trading platform specifically designed for crypto traders. You&apos;ll get $10,000 in virtual capital and access to real market data from Coinbase.
            </p>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Practice?</h3>
              <p className="text-gray-600 mb-4">
                Start your paper trading journey today with SkiaPaper. No risk, real learning.
              </p>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
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
