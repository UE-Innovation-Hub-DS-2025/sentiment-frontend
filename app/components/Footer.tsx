"use client";

import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center mt-12 pb-8">
      <div className="space-y-4">
        <p className="text-gray-500 text-sm">
          Powered by advanced machine learning algorithms
        </p>
        <div className="flex items-center justify-center gap-6 text-xs text-gray-400">
          <span>Built with Next.js & Tailwind CSS</span>
          <span>•</span>
          <a
            href="https://ataie.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300 flex items-center gap-1"
          >
            Created by Abbas Ataie
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
