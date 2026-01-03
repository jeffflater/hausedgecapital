import Link from "next/link";
import Navigation from "@/components/Navigation";
import DailyUpdates from "@/components/DailyUpdates";
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

// Color mappings
const categoryColors: Record<string, { border: string; text: string; hoverBorder: string }> = {
  blue: { border: "border-blue-100", text: "text-blue-600", hoverBorder: "hover:border-blue-200" },
  purple: { border: "border-purple-100", text: "text-purple-600", hoverBorder: "hover:border-purple-200" },
  green: { border: "border-green-100", text: "text-green-600", hoverBorder: "hover:border-green-200" },
  cyan: { border: "border-cyan-100", text: "text-cyan-600", hoverBorder: "hover:border-cyan-200" },
  indigo: { border: "border-indigo-100", text: "text-indigo-600", hoverBorder: "hover:border-indigo-200" },
  orange: { border: "border-orange-100", text: "text-orange-600", hoverBorder: "hover:border-orange-200" },
  teal: { border: "border-teal-100", text: "text-teal-600", hoverBorder: "hover:border-teal-200" },
  gray: { border: "border-gray-100", text: "text-gray-600", hoverBorder: "hover:border-gray-200" },
};

// Group posts by category
function groupPostsByCategory(posts: BlogPost[]) {
  const groups: Record<string, BlogPost[]> = {};
  posts.forEach((post) => {
    const category = post.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(post);
  });
  return groups;
}

// Get featured posts (first 3)
function getFeaturedPosts(posts: BlogPost[]) {
  return posts.slice(0, 3);
}

export default function Blog() {
  const posts = blogPosts as BlogPost[];
  const featuredPosts = getFeaturedPosts(posts);
  const groupedPosts = groupPostsByCategory(posts);

  // Get Trading Strategy posts
  const tradingStrategyPosts = groupedPosts["Trading Strategy"] || [];
  // Get Capital Growth posts
  const capitalGrowthPosts = groupedPosts["Capital Growth"] || [];

  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="blog" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gray-100/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-100 rounded-full">
            <span className="text-blue-700 font-medium text-sm">Crypto Education & Insights</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Haus Edge<br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn crypto trading strategies, market insights, and financial education from the Haus Edge Capital team.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-gray-600">
              Educational content to help you on your crypto journey.
            </p>
          </div>

          {/* Featured Blog Posts */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {featuredPosts.map((post, index) => {
              const colors = categoryColors[post.categoryColor] || categoryColors.blue;
              const gradientFrom = index === 0 ? "from-blue-100" : index === 1 ? "from-cyan-100" : "from-blue-100";
              const gradientTo = index === 0 ? "to-cyan-100" : index === 1 ? "to-blue-100" : "to-indigo-100";
              const iconColor = index === 0 ? "text-blue-400" : index === 1 ? "text-cyan-400" : "text-indigo-400";

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`bg-white rounded-2xl p-6 shadow-sm border ${colors.border} hover:shadow-md ${colors.hoverBorder} transition-all group`}
                >
                  <div className={`w-full h-48 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl mb-6 flex items-center justify-center`}>
                    <svg className={`w-12 h-12 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className={`text-sm ${colors.text} font-medium mb-2`}>{post.category}</div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:${colors.text} transition-colors`}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {post.description}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Daily Updates - AI Generated Posts */}
          <DailyUpdates />

          {/* Trading Strategies Callout */}
          {tradingStrategyPosts.length > 0 && (
            <div className="mb-20">
              <Link
                href="/trading-strategies"
                className="block bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        Trading Strategies
                      </h2>
                      <p className="text-gray-600 mt-1">
                        Explore {tradingStrategyPosts.length} proven strategies from scalping to swing trading
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full group-hover:bg-purple-700 transition-colors">
                    View All Strategies
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                {/* Preview of strategies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {tradingStrategyPosts.slice(0, 6).map((post) => (
                    <span
                      key={post.slug}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-purple-100"
                    >
                      {post.title.replace(/:.*/g, "").replace("Strategy", "").trim()}
                    </span>
                  ))}
                  {tradingStrategyPosts.length > 6 && (
                    <span className="px-3 py-1 bg-purple-100 rounded-full text-sm text-purple-600 font-medium">
                      +{tradingStrategyPosts.length - 6} more
                    </span>
                  )}
                </div>
              </Link>
            </div>
          )}

          {/* Capital Growth Strategies Callout */}
          {capitalGrowthPosts.length > 0 && (
            <div>
              <Link
                href="/capital-growth"
                className="block bg-gradient-to-br from-green-50 via-white to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        Capital Growth Strategies
                      </h2>
                      <p className="text-gray-600 mt-1">
                        Learn {capitalGrowthPosts.length} strategies for protecting and growing your trading capital
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full group-hover:bg-green-700 transition-colors">
                    View All Strategies
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                {/* Preview of strategies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {capitalGrowthPosts.slice(0, 5).map((post) => (
                    <span
                      key={post.slug}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-green-100"
                    >
                      {post.title.replace(/:.*/g, "").trim()}
                    </span>
                  ))}
                  {capitalGrowthPosts.length > 5 && (
                    <span className="px-3 py-1 bg-green-100 rounded-full text-sm text-green-600 font-medium">
                      +{capitalGrowthPosts.length - 5} more
                    </span>
                  )}
                </div>
              </Link>
            </div>
          )}
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
