"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  publishDate?: string;
  generated?: boolean;
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-600" },
  purple: { bg: "bg-purple-100", text: "text-purple-600" },
  green: { bg: "bg-green-100", text: "text-green-600" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-600" },
  orange: { bg: "bg-orange-100", text: "text-orange-600" },
  teal: { bg: "bg-teal-100", text: "text-teal-600" },
  gray: { bg: "bg-gray-100", text: "text-gray-600" },
};

export default function DailyUpdates() {
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

  if (loading) {
    return (
      <div className="mb-20">
        <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl p-8 border border-blue-100 animate-pulse">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl"></div>
              <div>
                <div className="h-6 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-4 bg-gray-100 rounded w-48"></div>
              </div>
            </div>
            <div className="h-12 bg-blue-200 rounded-full w-40"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || posts.length === 0) {
    return null;
  }

  // Get latest 4 posts for preview
  const latestPosts = posts.slice(0, 4);
  const latestDate = posts[0]?.publishDate
    ? new Date(posts[0].publishDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <div className="mb-20">
      <Link
        href="/daily-updates"
        className="block bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all group"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 transition-colors">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Daily Updates
                </h2>
                {latestDate && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    Latest: {latestDate}
                  </span>
                )}
              </div>
              <p className="text-gray-600 mt-1">
                {posts.length} articles covering crypto topics throughout the week
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full group-hover:bg-blue-700 transition-colors">
            View All Updates
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Preview of latest posts */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {latestPosts.map((post) => {
            const colors = categoryColors[post.categoryColor] || categoryColors.blue;
            return (
              <div
                key={post.slug}
                className="bg-white rounded-xl p-3 border border-blue-50"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs ${colors.text} font-medium`}>{post.category}</span>
                  {post.publishDate && (
                    <span className="text-gray-400 text-xs">
                      {new Date(post.publishDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                  {post.title}
                </h3>
              </div>
            );
          })}
        </div>

        {posts.length > 4 && (
          <div className="mt-4 text-center">
            <span className="text-blue-600 text-sm font-medium">
              +{posts.length - 4} more articles
            </span>
          </div>
        )}
      </Link>
    </div>
  );
}
