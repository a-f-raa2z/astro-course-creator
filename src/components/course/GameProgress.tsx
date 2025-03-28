
import { Progress } from "@/components/ui/progress";
import { Trophy, Star } from "lucide-react";

interface GameProgressProps {
  overallProgress: number;
  currentSectionIndex: number;
  totalSections: number;
  xpPoints: number;
  level: number;
  levelProgress: number;
}

export const GameProgress = ({
  overallProgress,
  currentSectionIndex,
  totalSections,
  xpPoints
}: GameProgressProps) => {
  return (
    <div className="space-y-4">
      {/* Course progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <div className="text-sm text-purple-300">Course Progress</div>
          <div className="text-sm text-purple-300">
            Section {currentSectionIndex + 1}/{totalSections}
          </div>
        </div>
        <Progress value={overallProgress} className="h-2 bg-gray-700" />
      </div>
      
      {/* Player points */}
      <div className="bg-space-cosmic-blue/40 backdrop-blur-md border border-purple-500/20 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Trophy className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="text-yellow-200 font-semibold">Your Progress</span>
          </div>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="text-purple-200">{xpPoints} XP</span>
          </div>
        </div>
      </div>
    </div>
  );
};
