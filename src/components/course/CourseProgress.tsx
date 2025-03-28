
import { Progress } from "@/components/ui/progress";

interface CourseProgressProps {
  overallProgress: number;
  currentSectionIndex: number;
  totalSections: number;
}

export const CourseProgress = ({
  overallProgress,
  currentSectionIndex,
  totalSections
}: CourseProgressProps) => {
  return (
    <div className="mb-4 flex items-center">
      <div className="flex-1">
        <Progress value={overallProgress} className="h-2 bg-gray-700" />
      </div>
      <div className="ml-4 text-sm text-purple-300">
        Section {currentSectionIndex + 1}/{totalSections}
      </div>
    </div>
  );
};
