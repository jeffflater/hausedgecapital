import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Trade() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="trade" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0052ff] via-[#0041cc] to-[#003399]" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 border border-white/20 rounded-lg">
            <p className="text-sm text-blue-100">
              Affiliate Partner - We may earn a commission at no cost to you
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Trade Crypto on<br />
            <span className="text-blue-200">
              Coinbase
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            The most trusted cryptocurrency exchange in the United States. Buy, sell, and trade over 200 cryptocurrencies with industry-leading security.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Trade on Coinbase?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by millions of users worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#0052ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry-Leading Security</h3>
              <p className="text-gray-600">
                Coinbase stores 98% of customer funds offline in cold storage. Your assets are protected by insurance and state-of-the-art security measures.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#0052ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Publicly Traded & Regulated</h3>
              <p className="text-gray-600">
                Coinbase is a publicly traded company (NASDAQ: COIN) and is fully regulated in the United States, providing transparency and accountability.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#0052ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">200+ Cryptocurrencies</h3>
              <p className="text-gray-600">
                Trade Bitcoin, Ethereum, and hundreds of other cryptocurrencies. Access the full crypto market from one trusted platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0052ff] mb-2">$300B+</div>
              <div className="text-gray-600">Assets on Platform</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0052ff] mb-2">108M+</div>
              <div className="text-gray-600">Verified Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0052ff] mb-2">100+</div>
              <div className="text-gray-600">Countries Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0052ff] mb-2">$1T+</div>
              <div className="text-gray-600">Total Volume Traded</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0052ff] to-[#0041cc]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join millions of users who trust Coinbase to buy, sell, and manage their cryptocurrency portfolio.
          </p>
          <a
            href="https://www.coinbase.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white hover:bg-blue-50 text-[#0052ff] font-semibold text-xl transition-colors"
          >
            Sign Up for Coinbase
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="text-sm text-blue-200 mt-6">
            This is an affiliate link. Haus Edge Capital may earn a commission at no additional cost to you.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What You Can Do on Coinbase
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0052ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Buy & Sell Crypto</h3>
                    <p className="text-gray-600">Purchase cryptocurrency with your bank account, debit card, or wire transfer. Sell anytime and withdraw to your bank.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0052ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Earn Rewards</h3>
                    <p className="text-gray-600">Stake your crypto to earn rewards. Some assets offer up to 5% APY just for holding them in your account.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0052ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Advanced Trading</h3>
                    <p className="text-gray-600">Use Coinbase Advanced for professional-grade trading tools, charts, and lower fees for active traders.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0052ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Learn & Earn</h3>
                    <p className="text-gray-600">Watch educational videos and earn free crypto. Great for beginners who want to learn about different cryptocurrencies.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#0052ff] mb-4">NASDAQ: COIN</div>
                <p className="text-gray-600 mb-6">Publicly traded since April 2021</p>
                <div className="h-px bg-blue-200 my-6" />
                <p className="text-lg text-gray-700 font-medium">
                  Coinbase is one of the most transparent and regulated cryptocurrency exchanges in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-12 px-6 bg-amber-50 border-y border-amber-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 className="text-lg font-semibold text-amber-800">Investment Risk Warning</h3>
          </div>
          <p className="text-amber-700 text-sm">
            Cryptocurrency investments are volatile and high-risk. The value of your investment can go down as well as up, and you may lose some or all of your invested capital. Past performance is not indicative of future results. Only invest what you can afford to lose. Do your own research before making any investment decisions.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Start Trading on Coinbase Today
          </h2>
          <p className="text-gray-600 mb-8">
            Click below to create your account and start your crypto journey.
          </p>
          <a
            href="https://www.coinbase.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0052ff] hover:bg-[#0041cc] text-white font-semibold text-lg transition-colors"
          >
            Visit Coinbase.com
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
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
            <p className="text-gray-400 text-xs font-medium">
              Haus Edge Capital is an independent educational platform and is not a bank, lender, broker, or exchange. Loans, trading platforms, and financial services are provided by third-party partners.
            </p>
            <p className="text-gray-500 text-xs">
              This site contains affiliate links. If you choose to use partner services, Haus Edge Capital may receive compensation at no additional cost to you.
            </p>
            <p className="text-gray-500 text-xs font-medium">
              DISCLAIMER: This website is for educational and informational purposes only. Nothing on this site constitutes financial advice, investment advice, trading advice, or any other advice. You should not treat any of the website&apos;s content as such. Haus Edge Capital does not recommend that any cryptocurrency, security, or investment should be bought, sold, or held by you. Do your own due diligence and consult a licensed financial advisor before making any investment decisions. Cryptocurrency investments are volatile and high-risk. There are no warranties, expressed or implied, regarding the accuracy or completeness of any information on this site. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
