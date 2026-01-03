import Link from "next/link";
import { notFound } from "next/navigation";
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

// Generate static params for all blog posts
export async function generateStaticParams() {
  return (blogPosts as BlogPost[]).map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (blogPosts as BlogPost[]).find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Haus Edge Capital",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: [post.category, "crypto trading", "cryptocurrency", "trading education"],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://hausedgecapital.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      authors: ["Haus Edge Capital"],
      images: [
        {
          url: post.imagePath,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.imagePath],
    },
    alternates: {
      canonical: `https://hausedgecapital.com/blog/${post.slug}`,
    },
  };
}

// Generate JSON-LD Article schema
function generateArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `https://hausedgecapital.com${post.imagePath}`,
    datePublished: post.publishDate || new Date().toISOString(),
    dateModified: post.publishDate || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "Haus Edge Capital",
      url: "https://hausedgecapital.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Haus Edge Capital",
      logo: {
        "@type": "ImageObject",
        url: "https://hausedgecapital.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hausedgecapital.com/blog/${post.slug}`,
    },
  };
}

// Color mappings for categories
const categoryColors: Record<string, { bg: string; text: string; button: string }> = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    button: "bg-blue-600 hover:bg-blue-500",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-700",
    button: "bg-purple-600 hover:bg-purple-500",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-700",
    button: "bg-green-600 hover:bg-green-500",
  },
  cyan: {
    bg: "bg-cyan-100",
    text: "text-cyan-700",
    button: "bg-cyan-600 hover:bg-cyan-500",
  },
  indigo: {
    bg: "bg-indigo-100",
    text: "text-indigo-700",
    button: "bg-indigo-600 hover:bg-indigo-500",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-700",
    button: "bg-orange-600 hover:bg-orange-500",
  },
  teal: {
    bg: "bg-teal-100",
    text: "text-teal-700",
    button: "bg-teal-600 hover:bg-teal-500",
  },
  gray: {
    bg: "bg-gray-100",
    text: "text-gray-700",
    button: "bg-gray-600 hover:bg-gray-500",
  },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (blogPosts as BlogPost[]).find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const colors = categoryColors[post.categoryColor] || categoryColors.blue;

  const articleSchema = generateArticleSchema(post);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navigation activePage="blog" />

      {/* Article */}
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900">{post.category}</span>
          </div>

          {/* Category Tag */}
          <div className={`inline-block mb-4 px-3 py-1 ${colors.bg} rounded-full`}>
            <span className={`${colors.text} font-medium text-sm`}>{post.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Description */}
          <p className="text-xl text-gray-600 mb-8">{post.description}</p>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={post.imagePath}
              alt={post.title}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-600 mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            {/* CTA Box */}
            <div className={`${colors.bg.replace("100", "50")} border ${colors.bg.replace("bg-", "border-")} rounded-xl p-6 my-8`}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Practice Risk-Free
              </h3>
              <p className="text-gray-600 mb-4">
                Master these concepts with paper trading before risking real capital.
              </p>
              <Link
                href="/learn"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${colors.button} text-white font-semibold transition-colors`}
              >
                Start Paper Trading
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>Disclaimer:</strong> This article is for educational purposes only and
              does not constitute financial advice. Trading involves significant risk of
              loss. Cryptocurrency investments are volatile and high-risk. Always do your
              own research before making any investment decisions.
            </p>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13h2v8H3zM9 9h2v12H9zM15 5h2v16h-2zM21 1h2v20h-2z"
                />
              </svg>
              <span className="text-xl font-semibold text-white">Haus Edge Capital</span>
            </Link>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              <Link href="/learn" className="text-gray-400 hover:text-white transition-colors">
                Learn
              </Link>
              <Link href="/trade" className="text-gray-400 hover:text-white transition-colors">
                Trade
              </Link>
              <Link href="/lending" className="text-gray-400 hover:text-white transition-colors">
                Lending
              </Link>
              <Link href="/blog" className="text-blue-400 font-medium transition-colors">
                Blog
              </Link>
              <a
                href="https://instagram.com/victor.draemont"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @victor.draemont
              </a>
            </div>
            <p className="text-gray-500 text-sm">&copy; 2025 Haus Edge Capital.</p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center space-y-4">
            <p className="text-gray-400 text-xs font-medium">
              Haus Edge Capital is an independent educational platform and is not a bank,
              lender, broker, or exchange. Loans, trading platforms, and financial services
              are provided by third-party partners.
            </p>
            <p className="text-gray-500 text-xs">
              This site contains affiliate links. If you choose to use partner services,
              Haus Edge Capital may receive compensation at no additional cost to you.
            </p>
            <p className="text-gray-500 text-xs">
              Victor is a curated digital persona created to guide users through financial
              education resources and affiliate platforms. Victor is not a licensed
              financial advisor.
            </p>
            <p className="text-gray-500 text-xs font-medium">
              DISCLAIMER: This website is for educational and informational purposes only.
              Nothing on this site constitutes financial advice, investment advice, trading
              advice, or any other advice. You should not treat any of the website&apos;s
              content as such. Haus Edge Capital does not recommend that any cryptocurrency,
              security, or investment should be bought, sold, or held by you. Do your own
              due diligence and consult a licensed financial advisor before making any
              investment decisions. Cryptocurrency investments are volatile and high-risk.
              There are no warranties, expressed or implied, regarding the accuracy or
              completeness of any information on this site. Past performance is not
              indicative of future results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
