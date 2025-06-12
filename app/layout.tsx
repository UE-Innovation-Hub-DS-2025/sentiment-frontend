import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sentiment Analysis Research | Machine Learning Study",
  description:
    "A research project exploring machine learning models for sentiment analysis. Study includes Logistic Regression, Naive Bayes, SVM, and Random Forest implementations.",
  keywords:
    "sentiment analysis, machine learning, text analysis, natural language processing, emotion detection, text sentiment, ML models, research",
  robots: "index, follow",
  openGraph: {
    title: "Sentiment Analysis Research | Machine Learning Study",
    description:
      "A research project exploring machine learning models for sentiment analysis.",
    url: "https://sentiment-analyzer.ataie.me",
    siteName: "Sentiment Analysis Research",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sentiment Analysis Research - Machine Learning Study",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentiment Analysis Research | Machine Learning Study",
    description:
      "A research project exploring machine learning models for sentiment analysis.",
    images: ["/og-image.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563eb",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "Inter, sans-serif" }}>{children}</body>
    </html>
  );
}
