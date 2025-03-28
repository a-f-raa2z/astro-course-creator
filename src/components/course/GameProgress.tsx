
import { Progress } from "@/components/ui/progress";

interface GameProgressProps {
  overallProgress: number;
  currentSectionIndex: number;
  totalSections: number;
}

export const GameProgress = ({
  overallProgress,
  currentSectionIndex,
  totalSections,
}: GameProgressProps) => {
  return (
    <div className="space-y-2 my-3">
      {/* Course progress */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <div className="text-sm text-purple-300">Course Progress</div>
          <div className="text-sm text-purple-300">
            Section {currentSectionIndex + 1}/{totalSections}
          </div>
        </div>
        <Progress value={overallProgress} className="h-2 bg-gray-700" />
      </div>
    </div>
  );
};
