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

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
  purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
  green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" },
  orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
  teal: { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-200" },
  gray: { bg: "bg-gray-100", text: "text-gray-600", border: "border-gray-200" },
};

export default function DailyUpdates() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Fetch from generated-posts.json - separate file that Lambda updates
        // This file is NOT in the git repo so it won't be overwritten by deployments
        const response = await fetch("/data/generated-posts.json", {
          cache: "no-store",
        });
        if (!response.ok) {
          // File doesn't exist yet - no generated posts
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
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Daily Updates</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
              <div className="h-5 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-100 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || posts.length === 0) {
    return null; // Don't show section if no AI-generated posts yet
  }

  return (
    <div className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Daily Updates</h2>
      </div>
      <p className="text-gray-600 mb-6 -mt-4">
        Fresh insights covering different crypto topics throughout the week.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.slice(0, 6).map((post) => {
          const colors = categoryColors[post.categoryColor] || categoryColors.blue;
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:${colors.border} transition-all group`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-sm ${colors.text} font-medium`}>{post.category}</span>
                {post.publishDate && (
                  <span className="text-gray-400 text-xs">
                    {new Date(post.publishDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                )}
              </div>
              <h3 className={`font-semibold text-gray-900 group-hover:${colors.text} transition-colors mb-2`}>
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2">{post.description}</p>
            </Link>
          );
        })}
      </div>
      {posts.length > 6 && (
        <div className="text-center mt-6">
          <span className="text-gray-500 text-sm">
            Showing 6 of {posts.length} posts
          </span>
        </div>
      )}
    </div>
  );
}
