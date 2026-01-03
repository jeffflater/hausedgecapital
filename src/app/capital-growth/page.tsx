import Link from "next/link";
import Navigation from "@/components/Navigation";
import blogPosts from "@/data/blog-posts.json";

// Type definitions
interface BlogSection {
  heading: string;
  content: string;
}

interface BlogPost {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  imagePath: string;
  sections: BlogSection[];
  publishDate?: string;
  generated?: boolean;
}

export default function CapitalGrowth() {
  const posts = blogPosts as BlogPost[];
  const capitalGrowthPosts = posts.filter(post => post.category === "Capital Growth");

  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="blog" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50/30" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-green-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
          <div className="inline-block mb-4 px-3 py-1 bg-green-100 rounded-full">
            <span className="text-green-700 font-medium text-sm">Long-Term Wealth Building</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Capital Growth<br />
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Strategies
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn how to protect and grow your trading capital over time. Master position sizing, risk management, and portfolio strategies for sustainable wealth building.
          </p>
        </div>
      </section>

      {/* Strategy Count */}
      <section className="py-8 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">{capitalGrowthPosts.length}</span> strategies to explore
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Focus on capital preservation first, growth second
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capitalGrowthPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="text-sm text-green-600 font-medium mb-2">Capital Growth</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {post.title.replace(/:.*/g, "").trim()}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {post.description}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-green-600 font-medium text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Build Wealth Sustainably
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            The key to long-term trading success isn&apos;t finding the next big winner—it&apos;s protecting your capital and growing it consistently over time. Start with paper trading to master these concepts risk-free.
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
          >
            Start Learning
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
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
              <Link href="/trading-strategies" className="text-gray-400 hover:text-white transition-colors">Strategies</Link>
              <Link href="/capital-growth" className="text-green-400 font-medium transition-colors">Capital Growth</Link>
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
              DISCLAIMER: This website is for educational and informational purposes only. Nothing on this site constitutes financial advice, investment advice, trading advice, or any other advice. You should not treat any of the website&apos;s content as such. Do your own due diligence and consult a licensed financial advisor before making any investment decisions. Cryptocurrency investments are volatile and high-risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
