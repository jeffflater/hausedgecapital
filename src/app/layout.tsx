import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hausedgecapital.com"),
  title: {
    default: "Haus Edge Capital | Crypto Trading Education & Financial Tools",
    template: "%s | Haus Edge Capital",
  },
  description: "Learn crypto trading strategies, explore lending options, and build long-term wealth. Free paper trading education, expert guides, and trusted financial tools.",
  keywords: ["crypto trading", "paper trading", "cryptocurrency education", "trading strategies", "crypto lending", "capital growth", "financial education"],
  authors: [{ name: "Haus Edge Capital" }],
  creator: "Haus Edge Capital",
  publisher: "Haus Edge Capital",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hausedgecapital.com",
    siteName: "Haus Edge Capital",
    title: "Haus Edge Capital | Crypto Trading Education & Financial Tools",
    description: "Learn crypto trading strategies, explore lending options, and build long-term wealth. Free paper trading education, expert guides, and trusted financial tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Haus Edge Capital - Crypto Trading Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haus Edge Capital | Crypto Trading Education & Financial Tools",
    description: "Learn crypto trading strategies, explore lending options, and build long-term wealth.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://hausedgecapital.com",
  },
  verification: {
    google: "G-07H8XGQGPF",
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Haus Edge Capital",
  url: "https://hausedgecapital.com",
  logo: "https://hausedgecapital.com/logo.png",
  description: "Educational platform for crypto trading strategies, paper trading, and financial literacy.",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Haus Edge Capital",
  url: "https://hausedgecapital.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://hausedgecapital.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-07H8XGQGPF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-07H8XGQGPF');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
