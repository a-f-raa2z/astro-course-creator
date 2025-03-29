
import React from "react";
import { Card } from "@/components/ui/card";
import { CourseSection } from "@/types/course";
import { ContentType } from "@/types/ContentType";
import { GameContentRenderer } from "@/components/course/GameContentRenderer";
import { GameContentTabs } from "@/components/course/GameContentTabs";

interface CourseContentProps {
  currentSection: CourseSection;
  contentTypes: string[];
  currentContentIndex: number;
  completedContents: string[];
  sectionIndex: number;
  onTabClick: (index: number) => void;
  handlePreviousContent: () => void;
  handleNextContent: () => void;
  showSectionTransition: boolean;
  nextSectionTitle: string;
  onStartNextSection: () => void;
  isFirstContent: boolean;
}

export const CourseContent: React.FC<CourseContentProps> = ({
  currentSection,
  contentTypes,
  currentContentIndex,
  completedContents,
  sectionIndex,
  onTabClick,
  handlePreviousContent,
  handleNextContent,
  showSectionTransition,
  nextSectionTitle,
  onStartNextSection,
  isFirstContent
}) => {
  const currentContentType = contentTypes[currentContentIndex] || 'introduction';
  
  return (
    <>
      <div className="mt-6 mb-4">
        <GameContentTabs
          contentTypes={contentTypes}
          currentContentIndex={currentContentIndex}
          onTabClick={onTabClick}
          completedContents={completedContents}
          sectionIndex={sectionIndex}
        />
      </div>

      <Card className="w-full mb-4 p-4 bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <GameContentRenderer
          contentType={currentContentType as ContentType['type']}
          currentSection={currentSection}
          quizSubmitted={false}
          selectedAnswer={null}
          setSelectedAnswer={() => {}}
          handleQuizSubmit={() => {}}
          handleNextContent={handleNextContent}
          handlePreviousContent={handlePreviousContent}
          isFirstContent={isFirstContent}
          showSectionTransition={showSectionTransition}
          nextSectionTitle={nextSectionTitle}
          onStartNextSection={onStartNextSection}
        />
      </Card>
    </>
  );
};
