"use client";

import { Brain } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-800">
                Sentiment Analysis Research
              </h1>
              <p className="text-xs text-gray-500">Machine Learning Study</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
