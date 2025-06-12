import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";

// Dynamically import components with loading states
const Hero = dynamic(() => import("./components/Hero"), {
  ssr: true,
  loading: () => (
    <div className="h-32 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  ),
});

const SentimentAnalyzer = dynamic(
  () => import("./components/SentimentAnalyzer"),
  {
    ssr: true,
    loading: () => (
      <div className="h-96 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    ),
  }
);

const Footer = dynamic(() => import("./components/Footer"), {
  ssr: true,
  loading: () => null,
});

export const metadata: Metadata = {
  title: "Sentiment Analyzer",
  description: "Analyze the sentiment of any text using advanced AI models",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <GlobalStyles />
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Hero />
        <SentimentAnalyzer />
        <Footer />
      </div>
    </div>
  );
}
