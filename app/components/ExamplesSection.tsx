import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useState } from "react";

// Example texts for sentiment analysis
const exampleTexts = [
  {
    id: 1,
    text: "The new iPhone exceeded all my expectations! The camera quality is outstanding and the battery life is impressive.",
    sentiment: "positive",
  },
  {
    id: 2,
    text: "I'm extremely disappointed with the customer service. They were unhelpful and took forever to respond to my issues.",
    sentiment: "negative",
  },
  {
    id: 3,
    text: "This restaurant is absolutely amazing! The food is delicious, the atmosphere is perfect, and the staff is incredibly friendly.",
    sentiment: "positive",
  },
  {
    id: 4,
    text: "The product quality is terrible. It broke after just one week of use, and the company refused to provide a refund.",
    sentiment: "negative",
  },
  {
    id: 5,
    text: "The customer support team went above and beyond to help me. They were professional, knowledgeable, and very efficient.",
    sentiment: "positive",
  },
  {
    id: 6,
    text: "The delivery was late, the packaging was damaged, and the items inside were not as described in the listing.",
    sentiment: "negative",
  },
  {
    id: 7,
    text: "The new software update has significantly improved the performance and added amazing new features that I use daily.",
    sentiment: "positive",
  },
  {
    id: 8,
    text: "The service was a complete waste of money. Nothing worked as advertised and the support team was completely unresponsive.",
    sentiment: "negative",
  },
];

interface ExamplesSectionProps {
  onExampleClick: (text: string) => void;
}

const getSentimentColor = (sentiment: string) => {
  switch (sentiment.toLowerCase()) {
    case "positive":
      return "bg-green-100 text-green-800 border-green-200 hover:bg-green-50";
    case "negative":
      return "bg-red-100 text-red-800 border-red-200 hover:bg-red-50";
    default:
      return "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-50";
  }
};

const getGradientColor = (sentiment: string) => {
  switch (sentiment.toLowerCase()) {
    case "positive":
      return "from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100";
    case "negative":
      return "from-red-50 to-rose-50 hover:from-red-100 hover:to-rose-100";
    default:
      return "from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100";
  }
};

const getFilterButtonColor = (sentiment: string, isActive: boolean) => {
  if (!isActive) return "bg-gray-100 text-gray-600 hover:bg-gray-200";

  switch (sentiment.toLowerCase()) {
    case "positive":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "negative":
      return "bg-red-100 text-red-800 hover:bg-red-200";
    default:
      return "bg-blue-100 text-blue-800 hover:bg-blue-200";
  }
};

// Sort examples by sentiment to ensure consistent order
const sortedExamples = [...exampleTexts].sort((a, b) => {
  const sentimentOrder = { positive: 0, negative: 1 };
  return (
    sentimentOrder[a.sentiment as keyof typeof sentimentOrder] -
    sentimentOrder[b.sentiment as keyof typeof sentimentOrder]
  );
});

const ExamplesSection = ({ onExampleClick }: ExamplesSectionProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedSentiment, setSelectedSentiment] = useState<string | null>(
    null
  );
  const examplesPerPage = 3;

  // Filter examples based on selected sentiment
  const filteredExamples = selectedSentiment
    ? sortedExamples.filter(
        (example) => example.sentiment === selectedSentiment
      )
    : sortedExamples;

  const totalPages = Math.ceil(filteredExamples.length / examplesPerPage);
  const currentExamples = filteredExamples.slice(
    currentPage * examplesPerPage,
    (currentPage + 1) * examplesPerPage
  );

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handleFilterChange = (sentiment: string) => {
    setSelectedSentiment(sentiment === selectedSentiment ? null : sentiment);
    setCurrentPage(0); // Reset to first page when filter changes
  };

  return (
    <div className="h-full">
      <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm h-full">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-blue-600" />
            Try Example Texts
          </CardTitle>
          <CardDescription>
            Click on any example to quickly test the analyzer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Sentiment Filter */}
            <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => handleFilterChange("positive")}
                className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${getFilterButtonColor(
                  "positive",
                  selectedSentiment === "positive"
                )}`}
              >
                Positive
              </button>
              <button
                onClick={() => handleFilterChange("negative")}
                className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${getFilterButtonColor(
                  "negative",
                  selectedSentiment === "negative"
                )}`}
              >
                Negative
              </button>
            </div>

            <div className="space-y-2">
              {currentExamples.map((example) => (
                <button
                  key={example.id}
                  onClick={() => onExampleClick(example.text)}
                  className={`w-full p-3 text-left bg-gradient-to-r ${getGradientColor(
                    example.sentiment
                  )} rounded-lg border-2 transition-colors duration-200 group`}
                >
                  <p className="text-sm text-gray-700 group-hover:text-gray-900">
                    {example.text}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge
                      variant="secondary"
                      className={`text-xs ${getSentimentColor(
                        example.sentiment
                      )}`}
                    >
                      {example.sentiment.charAt(0).toUpperCase() +
                        example.sentiment.slice(1)}
                    </Badge>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Controls */}
            {filteredExamples.length > 0 && (
              <div className="flex items-center justify-between pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrevious}
                  className="hover:bg-blue-50"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <span className="text-sm text-gray-500">
                  {currentPage + 1} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNext}
                  className="hover:bg-blue-50"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExamplesSection;
