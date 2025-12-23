import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function RiskManagement() {
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
            <span className="text-gray-900">Education</span>
          </div>

          {/* Category Tag */}
          <div className="inline-block mb-4 px-3 py-1 bg-indigo-100 rounded-full">
            <span className="text-indigo-700 font-medium text-sm">Education</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Risk Management: Protecting Your Portfolio
          </h1>

          {/* Meta */}
          <p className="text-xl text-gray-600 mb-8">
            Essential strategies for managing risk and preserving capital in volatile markets.
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img src="/blog/risk-management.webp" alt="Risk Management: Protecting Your Portfolio" className="w-full h-auto rounded-2xl" />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Risk Management Matters</h2>
            <p className="text-gray-600 mb-6">
              In trading, it&apos;s not just about how much you make—it&apos;s about how much you keep. The most successful traders aren&apos;t necessarily those who find the biggest winners; they&apos;re the ones who protect their capital through disciplined risk management.
            </p>

            <p className="text-gray-600 mb-6">
              The cryptocurrency market is particularly volatile, with assets commonly moving 5-10% or more in a single day. Without proper risk management, a few bad trades can wipe out months of gains—or worse, your entire portfolio.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Risk Management Strategies</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Position Sizing</h3>
            <p className="text-gray-600 mb-6">
              Never risk more than 1-2% of your total portfolio on any single trade. This ensures that even a string of losing trades won&apos;t devastate your account. If you have a $10,000 portfolio, that means risking no more than $100-200 per trade.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Stop-Loss Orders</h3>
            <p className="text-gray-600 mb-6">
              Always define your exit before you enter a trade. A stop-loss order automatically sells your position if the price drops to a predetermined level, limiting your potential loss. This removes emotion from the equation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Diversification</h3>
            <p className="text-gray-600 mb-6">
              Don&apos;t put all your eggs in one basket. Spread your investments across different cryptocurrencies and asset classes. When one asset underperforms, others may compensate.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Risk-Reward Ratio</h3>
            <p className="text-gray-600 mb-6">
              Before entering any trade, calculate your potential reward relative to your risk. A good rule of thumb is to aim for trades where the potential profit is at least 2-3 times the potential loss.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Psychology of Risk</h2>
            <p className="text-gray-600 mb-6">
              Understanding the psychological aspects of risk is just as important as the technical strategies. Common mistakes include:
            </p>

            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Revenge trading:</strong> Trying to recover losses with increasingly risky bets</li>
              <li><strong>Overconfidence:</strong> Ignoring risk management after a winning streak</li>
              <li><strong>Loss aversion:</strong> Holding losing positions too long, hoping they&apos;ll recover</li>
              <li><strong>FOMO:</strong> Entering trades impulsively without proper analysis</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Building Good Habits</h2>
            <p className="text-gray-600 mb-6">
              Risk management is a skill that improves with practice. Keep a trading journal, review your trades regularly, and always learn from your mistakes. Paper trading is an excellent way to develop these habits without risking real money.
            </p>

            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Risk-Free</h3>
              <p className="text-gray-600 mb-4">
                Develop your risk management skills with paper trading. Learn to set stop-losses, manage position sizes, and control emotions—all without financial consequences.
              </p>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors"
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
