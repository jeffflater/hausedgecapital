import Link from "next/link";
import Navigation from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Loans & Lending Options - Compare Rates",
  description: "Explore flexible personal loan options with competitive rates. Compare lending solutions from trusted partners like SoFi to find the right fit for your financial goals.",
  keywords: ["personal loans", "lending options", "SoFi loans", "low interest loans", "debt consolidation", "personal finance"],
  openGraph: {
    title: "Personal Loans & Lending Options - Compare Rates",
    description: "Explore flexible personal loan options with competitive rates from trusted partners.",
    url: "https://hausedgecapital.com/lending",
  },
  alternates: {
    canonical: "https://hausedgecapital.com/lending",
  },
};

export default function Lending() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="lending" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Affiliate Disclosure - FTC Compliant */}
          <div className="inline-block mb-6 px-4 py-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800 mb-2">
              This page contains affiliate links. If you choose to use SoFi, Haus Edge Capital may earn a commission at no additional cost to you.
            </p>
            <p className="text-sm text-emerald-700 font-medium">
              Loan offers provided by SoFi (affiliate partner)
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Personal Loans That<br />
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Work for You
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Explore competitive rates and flexible terms through SoFi. Whether you&apos;re consolidating debt, funding a project, or covering unexpected expenses.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Consider SoFi Personal Loans?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                SoFi offers personal loans with competitive rates and no hidden fees. Check your rate without impacting your credit score.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">No fees—zero origination, zero late fees</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Borrow $5K to $100K</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Same-day funding available</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Check your rate without impacting your credit</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Flexible repayment terms from 2-7 years</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Unemployment protection available</span>
                </li>
              </ul>
              <a
                href="https://go.fifo.media/sofi-personal-loans"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block px-8 py-4 rounded-full text-white font-semibold text-lg"
              >
                Check Your Rate on SoFi
              </a>
              <p className="text-xs text-gray-500 mt-4">
                Loans should not be used for speculative investing.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl p-8 text-white">
                <div className="text-sm font-medium opacity-80 mb-2">Example Loan Estimate</div>
                <div className="text-5xl font-bold mb-6">$25,000</div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="opacity-80">Term</span>
                    <span className="font-semibold">60 months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-80">APR</span>
                    <span className="font-semibold">8.99%</span>
                  </div>
                  <div className="h-px bg-white/20"></div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-80">Monthly Payment</span>
                    <span className="text-2xl font-bold">$519/mo</span>
                  </div>
                </div>
                <p className="text-xs opacity-70 mt-4">
                  Rates, terms, and payment amounts are estimates and subject to approval by SoFi.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-200 rounded-full opacity-50 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Uses for Personal Loans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Personal loans can be used for a variety of purposes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Debt Consolidation</h3>
              <p className="text-gray-600">
                Combine multiple high-interest debts into a single, lower-rate payment.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Improvements</h3>
              <p className="text-gray-600">
                Fund renovations, repairs, or upgrades to your home.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Major Expenses</h3>
              <p className="text-gray-600">
                Cover unexpected costs, medical bills, or large purchases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APR Info Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Competitive Rates
          </h2>
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-12">
            <div className="text-6xl font-bold text-emerald-600 mb-4">5-12%</div>
            <div className="text-xl text-gray-700 mb-2">APR Range</div>
            <p className="text-gray-600 max-w-xl mx-auto">
              Your actual rate depends on your credit score, income, and other factors. Check your rate on SoFi without impacting your credit score.
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            APR ranges are subject to change. Visit SoFi for current rates and terms.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Check Your Rate?
          </h2>
          <p className="text-xl text-emerald-100 mb-4">
            See what you qualify for without affecting your credit score.
          </p>
          <p className="text-sm text-emerald-200 mb-10">
            Affiliate link. Haus Edge Capital may earn a commission at no cost to you.
          </p>
          <a
            href="https://go.fifo.media/sofi-personal-loans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 rounded-full bg-white text-emerald-600 font-semibold text-lg hover:bg-emerald-50 transition-colors"
          >
            Check Your Rate on SoFi
          </a>
          <p className="text-xs text-emerald-200 mt-6">
            Loans should not be used for speculative investing.
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
              <Link href="/lending" className="text-emerald-400 font-medium transition-colors">Lending</Link>
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
