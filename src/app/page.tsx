import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="home" />

      {/* Hero Image Section */}
      <section className="pt-20 bg-[#0d1117]">
        <img src="/hero-image.webp" alt="Crypto Trading Platform" className="w-full h-auto" />
      </section>

      {/* Hero Section - Crypto Education Focus */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117]" />
          {/* Crypto-themed pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          {/* Decorative shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Affiliate Disclosure - FTC Compliant */}
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <p className="text-sm text-blue-300">
              This site contains affiliate links. If you choose to use partner services, Haus Edge Capital may earn a commission at no additional cost to you.
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Learn Crypto Trading<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Before You Risk Real Money
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Master crypto trading strategies with virtual funds on SkiaPaper. When you&apos;re ready, trade for real on Coinbase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learn" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-colors">
              Start Learning Free
            </Link>
            <a href="#how-it-works" className="px-8 py-4 rounded-full border-2 border-gray-600 text-gray-300 font-semibold text-lg hover:border-gray-500 hover:text-white transition-colors">
              How It Works
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            This content is for educational purposes only and does not constitute financial advice.
          </p>
        </div>
      </section>

      {/* Stats Section - Crypto Focused */}
      <section className="py-16 px-6 bg-[#0d1117] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$10K</div>
              <div className="text-gray-400">Virtual Starting Balance</div>
              <div className="text-sm text-blue-400 font-medium mt-1">Practice risk-free</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">AI Trading Assistant</div>
              <div className="text-sm text-blue-400 font-medium mt-1">Works while you sleep</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400">Cryptocurrencies</div>
              <div className="text-sm text-blue-400 font-medium mt-1">Available on Coinbase</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Crypto Education Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn the ropes with virtual money, then trade for real when you&apos;re confident
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
              </div>
              <div>
                <Link href="/learn" className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors block">Practice on SkiaPaper</Link>
                <p className="text-gray-600 mb-4">
                  Start with $10,000 in virtual capital. Trade using real Coinbase market data without risking a single dollar. Learn from your wins and losses in a safe environment.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No financial risk
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Real market conditions
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI-powered insights
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-[#0052ff]/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#0052ff]">2</span>
                </div>
              </div>
              <div>
                <Link href="/trade" className="text-2xl font-bold text-gray-900 mb-3 hover:text-[#0052ff] transition-colors block">Trade Real on Coinbase</Link>
                <p className="text-gray-600 mb-4">
                  When you&apos;re ready, apply your skills on one of the most trusted crypto exchanges in the US. Start small and trade with confidence.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#0052ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Industry-leading security
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#0052ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    200+ cryptocurrencies
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#0052ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Easy to get started
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SkiaPaper Section - Primary Focus */}
      <section id="learn" className="py-24 px-6 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              {/* Beta badge */}
              <div className="inline-block mb-6 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full">
                <span className="text-blue-400 font-medium text-sm">Free While In Beta</span>
              </div>

              <h2 className="text-4xl font-bold text-white mb-2">
                <span className="text-blue-400">Skia</span>Paper<span className="text-gray-500">.com</span>
              </h2>
              <p className="text-4xl font-bold text-white mt-4 mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Fantasy Crypto Trading.</span>
                <br />Real Strategy.
              </p>

              <p className="text-gray-400 mb-8 text-lg">
                The best traders practice before they play. SkiaPaper gives you $10,000 in virtual capital to learn crypto trading with real market data—no risk, real learning.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Real Coinbase market data</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">AI-powered trading assistant that works 24/7</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Track your performance and learn from mistakes</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Zero financial risk with virtual trading</span>
                </li>
              </ul>

              <Link
                href="/learn"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-colors"
              >
                Start Learning Free
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Visual/Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20">
                <div className="text-sm font-medium text-blue-400 mb-2">Your Virtual Portfolio</div>
                <div className="text-5xl font-bold text-white mb-6">$10,000</div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Bitcoin (BTC)</span>
                    <span className="text-green-400">+5.2%</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Ethereum (ETH)</span>
                    <span className="text-green-400">+3.8%</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Solana (SOL)</span>
                    <span className="text-red-400">-1.2%</span>
                  </div>
                  <div className="h-px bg-gray-700"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total P&L</span>
                    <span className="text-2xl font-bold text-green-400">+$780</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Example portfolio for illustration purposes only.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Coinbase Section - Secondary */}
      <section id="trade" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visual/Card */}
            <div className="relative order-2 md:order-1">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
                {/* Blue accent shape */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#0052ff] rounded-[32px] rotate-12 opacity-90" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#0052ff] flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-3xl">C</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    The most trusted<br />crypto exchange
                  </h3>
                  <p className="text-gray-500 text-lg">
                    Over 100 million verified users trust Coinbase to buy, sell, and manage their crypto.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-3 py-1 bg-[#0052ff]/10 rounded-full">
                <span className="text-[#0052ff] font-medium text-sm">When You&apos;re Ready</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Trade Real Crypto on Coinbase
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Once you&apos;ve practiced on SkiaPaper and feel confident in your strategy, you can trade real crypto on Coinbase—one of the most trusted exchanges in the US.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#0052ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Industry-leading security and insurance</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#0052ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">200+ cryptocurrencies available</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#0052ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Easy bank account linking</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#0052ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Staking rewards and DeFi access</span>
                </li>
              </ul>

              <Link
                href="/trade"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0052ff] hover:bg-[#0041cc] text-white font-semibold text-lg transition-colors"
              >
                Trade Crypto on Coinbase
              </Link>
              <p className="text-xs text-gray-500 mt-4">
                Cryptocurrency investments are volatile and high-risk. Past performance does not guarantee future results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0d1117] to-[#161b22]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Crypto Education Today
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Learn with virtual money first. Trade real when you&apos;re ready.
          </p>
          {/* Affiliate Disclosure */}
          <p className="text-sm text-gray-400 mb-10">
            Affiliate links below. Haus Edge Capital may earn a commission at no cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learn"
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-colors"
            >
              Start Learning on SkiaPaper
            </Link>
            <Link
              href="/trade"
              className="px-8 py-4 rounded-full bg-[#0052ff] hover:bg-[#0041cc] text-white font-semibold text-lg transition-colors"
            >
              Trade on Coinbase
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-6">
            This content is for educational purposes only and does not constitute financial advice.
          </p>
        </div>
      </section>

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
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
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
            {/* Independence Disclaimer */}
            <p className="text-gray-400 text-xs font-medium">
              Haus Edge Capital is an independent educational platform and is not a bank, lender, broker, or exchange. Loans, trading platforms, and financial services are provided by third-party partners.
            </p>
            {/* Affiliate Disclosure */}
            <p className="text-gray-500 text-xs">
              This site contains affiliate links. If you choose to use partner services, Haus Edge Capital may receive compensation at no additional cost to you.
            </p>
            {/* Victor Persona Transparency */}
            <p className="text-gray-500 text-xs">
              Victor is a curated digital persona created to guide users through financial education resources and affiliate platforms. Victor is not a licensed financial advisor.
            </p>
            {/* Full Disclaimer */}
            <p className="text-gray-500 text-xs font-medium">
              DISCLAIMER: This website is for educational and informational purposes only. Nothing on this site constitutes financial advice, investment advice, trading advice, or any other advice. You should not treat any of the website&apos;s content as such. Haus Edge Capital does not recommend that any cryptocurrency, security, or investment should be bought, sold, or held by you. Do your own due diligence and consult a licensed financial advisor before making any investment decisions. Cryptocurrency investments are volatile and high-risk. There are no warranties, expressed or implied, regarding the accuracy or completeness of any information on this site. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
