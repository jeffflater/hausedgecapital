"use client";

import Link from "next/link";
import { useState } from "react";

interface NavigationProps {
  activePage?: "home" | "learn" | "trade" | "lending" | "blog";
}

export default function Navigation({ activePage = "home" }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = (page: string) =>
    activePage === page
      ? "text-blue-600 font-medium transition-colors"
      : "text-gray-600 hover:text-gray-900 transition-colors";

  const mobileLinkClass = (page: string) =>
    activePage === page
      ? "block py-2 text-blue-600 font-medium"
      : "block py-2 text-gray-600 hover:text-gray-900";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2v8H3zM9 9h2v12H9zM15 5h2v16h-2zM21 1h2v20h-2z" />
            </svg>
            <span className="text-xl font-semibold text-gray-900">Haus Edge Capital</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/learn" className={linkClass("learn")}>Learn</Link>
            <Link href="/trade" className={linkClass("trade")}>Trade</Link>
            <Link href="/lending" className={linkClass("lending")}>Lending</Link>
            <Link href="/blog" className={linkClass("blog")}>Blog</Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <Link href="/learn" className={mobileLinkClass("learn")} onClick={() => setIsMenuOpen(false)}>Learn</Link>
            <Link href="/trade" className={mobileLinkClass("trade")} onClick={() => setIsMenuOpen(false)}>Trade</Link>
            <Link href="/lending" className={mobileLinkClass("lending")} onClick={() => setIsMenuOpen(false)}>Lending</Link>
            <Link href="/blog" className={mobileLinkClass("blog")} onClick={() => setIsMenuOpen(false)}>Blog</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
