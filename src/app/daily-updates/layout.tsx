import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Crypto Updates - Fresh Market Insights",
  description: "Fresh crypto insights published daily. Topics include beginner education, trading strategies, risk management, market structure, and capital growth tips.",
  keywords: ["daily crypto updates", "market insights", "crypto news", "trading education", "market analysis", "cryptocurrency daily"],
  openGraph: {
    title: "Daily Crypto Updates - Fresh Market Insights",
    description: "Fresh crypto insights published daily covering trading, education, and market analysis.",
    url: "https://hausedgecapital.com/daily-updates",
  },
  alternates: {
    canonical: "https://hausedgecapital.com/daily-updates",
  },
};

export default function DailyUpdatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
