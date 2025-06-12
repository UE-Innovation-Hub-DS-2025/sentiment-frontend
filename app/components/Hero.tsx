"use client";

import { Brain } from "lucide-react";

export default function Hero() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-lg">
          <Brain className="w-12 h-12 text-blue-600" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Sentiment Analysis Research
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        A research project exploring machine learning models for text sentiment
        analysis
      </p>
    </div>
  );
}
