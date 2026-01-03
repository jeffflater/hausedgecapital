"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

interface BlogPost {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  publishDate?: string;
  generated?: boolean;
}

const categoryColors: Record<string, { bg: string; text: string; border: string; hoverBorder: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200", hoverBorder: "hover:border-blue-300" },
  purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200", hoverBorder: "hover:border-purple-300" },
  green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200", hoverBorder: "hover:border-green-300" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200", hoverBorder: "hover:border-indigo-300" },
  orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200", hoverBorder: "hover:border-orange-300" },
  teal: { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-200", hoverBorder: "hover:border-teal-300" },
  gray: { bg: "bg-gray-100", text: "text-gray-600", border: "border-gray-200", hoverBorder: "hover:border-gray-300" },
};

// Group posts by week
function groupPostsByWeek(posts: BlogPost[]): Map<string, BlogPost[]> {
  const groups = new Map<string, BlogPost[]>();

  posts.forEach((post) => {
    if (!post.publishDate) return;

    const date = new Date(post.publishDate);
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    const weekKey = startOfWeek.toISOString().split("T")[0];

    if (!groups.has(weekKey)) {
      groups.set(weekKey, []);
    }
    groups.get(weekKey)!.push(post);
  });

  return groups;
}

function formatWeekLabel(weekStart: string): string {
  const start = new Date(weekStart);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);

  const startMonth = start.toLocaleDateString("en-US", { month: "short" });
  const endMonth = end.toLocaleDateString("en-US", { month: "short" });

  if (startMonth === endMonth) {
    return `${startMonth} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}`;
  }
  return `${startMonth} ${start.getDate()} - ${endMonth} ${end.getDate()}, ${start.getFullYear()}`;
}

export default function DailyUpdatesPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/data/generated-posts.json", {
          cache: "no-store",
        });
        if (!response.ok) {
          setPosts([]);
          return;
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load posts");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const groupedPosts = groupPostsByWeek(posts);
  const weekKeys = Array.from(groupedPosts.keys()).sort((a, b) => b.localeCompare(a));

  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage="blog" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50/30" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
          <div className="inline-block mb-4 px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full">
            <span className="text-blue-700 font-medium text-sm">Fresh Content Daily</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Daily<br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Updates
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh crypto insights published every day. Each day covers a different topic from beginner education to advanced trading strategies.
          </p>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-8 px-6 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-gray-500 mr-2">Weekly Schedule:</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Mon: Beginner Education</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Tue: Trading Strategies</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Wed: Risk Management</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">Thu: Market Structure</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Fri: Capital Growth</span>
            <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">Sat: Lending Education</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Sun: Evergreen SEO</span>
          </div>
        </div>
      </section>

      {/* Post Count */}
      <section className="py-8 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              {loading ? (
                <span className="animate-pulse">Loading posts...</span>
              ) : (
                <>
                  <span className="font-semibold text-gray-900">{posts.length}</span> daily updates published
                </>
              )}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              New content published daily
            </div>
          </div>
        </div>
      </section>

      {/* Posts by Week */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded w-full mb-3"></div>
                  <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Unable to load posts. Please try again later.</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-500">Daily updates will start appearing here soon. Check back tomorrow!</p>
            </div>
          ) : (
            <div className="space-y-12">
              {weekKeys.map((weekKey) => {
                const weekPosts = groupedPosts.get(weekKey) || [];
                return (
                  <div key={weekKey}>
                    <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      Week of {formatWeekLabel(weekKey)}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {weekPosts.map((post) => {
                        const colors = categoryColors[post.categoryColor] || categoryColors.blue;
                        return (
                          <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className={`group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg ${colors.hoverBorder} transition-all duration-300`}
                          >
                            {/* Date & Category */}
                            <div className="flex items-center justify-between mb-3">
                              <span className={`px-2 py-1 ${colors.bg} rounded-full text-xs font-medium ${colors.text}`}>
                                {post.category}
                              </span>
                              {post.publishDate && (
                                <span className="text-gray-400 text-sm">
                                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </span>
                              )}
                            </div>

                            {/* Title */}
                            <h3 className={`text-lg font-bold text-gray-900 mb-2 group-hover:${colors.text} transition-colors`}>
                              {post.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {post.description}
                            </p>

                            {/* Read More */}
                            <div className={`flex items-center gap-2 ${colors.text} font-medium text-sm group-hover:gap-3 transition-all`}>
                              Read Article
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Never Miss an Update
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our daily content covers everything from beginner basics to advanced trading strategies. Start with paper trading to apply what you learn risk-free.
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
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
              <Link href="/daily-updates" className="text-blue-400 font-medium transition-colors">Daily Updates</Link>
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
