
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Award, Sparkles } from "lucide-react";

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
  xpPoints,
  level,
  levelProgress
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
      
      {/* Player level */}
      <div className="bg-space-cosmic-blue/40 backdrop-blur-md border border-purple-500/20 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Trophy className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="text-yellow-200 font-semibold">Level {level}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="text-purple-200">{xpPoints} XP</span>
          </div>
        </div>
        
        <div className="relative h-3 bg-purple-900/30 rounded-full overflow-hidden">
          <div 
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-yellow-500 to-yellow-400 transition-all duration-300"
            style={{ width: `${levelProgress}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-xs mt-1 text-purple-400">
          <span>Level {level}</span>
          <span>{Math.round(levelProgress)}%</span>
          <span>Level {level + 1}</span>
        </div>
        
        {level >= 3 && (
          <div className="mt-3 flex items-center">
            <Award className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="text-yellow-200 text-sm">Achievement Unlocked: Star Student</span>
          </div>
        )}
        
        {level >= 5 && (
          <div className="mt-2 flex items-center">
            <Sparkles className="h-5 w-5 text-purple-400 mr-2" />
            <span className="text-purple-200 text-sm">Achievement Unlocked: Cosmic Explorer</span>
          </div>
        )}
      </div>
    </div>
  );
};
