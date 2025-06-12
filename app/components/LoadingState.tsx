import { Loader2 } from "lucide-react";

const LoadingState = () => (
  <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-100 mb-8">
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
        <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-800">Analyzing Text</p>
      </div>
      <div className="w-full max-w-sm h-1.5 bg-blue-100 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-full"></div>
      </div>
    </div>
  </div>
);

export default LoadingState;
