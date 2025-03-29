import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Course } from "@/types/course";
import { GameProgress } from "@/components/course/GameProgress";
import { XPPopup } from "@/components/course/XPPopup";
import { CourseHeader } from "@/components/course/CourseHeader";
import { CourseContent } from "@/components/course/CourseContent";
import { useCourseNavigation } from "@/hooks/useCourseNavigation";

const AICourseStartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course as Course | null;
  const initialSectionIndex = location.state?.initialSectionIndex || 0;
  
  const {
    currentSectionIndex,
    currentSection,
    contentList,
    currentContentIndex,
    showXPPopup,
    xpEarned,
    completedContents,
    showSectionTransition,
    nextSectionTitle,
    handleNextContent,
    handleStartNextSection,
    handlePreviousContent,
    handleTabChange,
    getCustomIntroduction,
  } = useCourseNavigation(course, initialSectionIndex);

  if (!course || !currentSection) {
    return <div className="min-h-screen bg-space text-white flex items-center justify-center">Loading...</div>;
  }

  if (contentList[currentContentIndex]?.type === 'introduction' && currentSection) {
    currentSection.introduction = getCustomIntroduction(currentSection.title);
  }

  const handleBackClick = () => {
    navigate("/ai-course", { state: { course } });
  };

  return (
    <div className="min-h-screen bg-space text-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <CourseHeader course={course} onBackClick={handleBackClick} />
        
        <h2 className="text-xl text-gray-300 mb-4">{currentSection.title}</h2>

        <GameProgress 
          overallProgress={(currentSectionIndex / (course.sections.length || 1)) * 100}
          currentSectionIndex={currentSectionIndex}
          totalSections={course.sections.length}
        />

        <CourseContent 
          currentSection={currentSection}
          contentTypes={contentList.map(content => content.type)}
          currentContentIndex={currentContentIndex}
          completedContents={completedContents}
          sectionIndex={currentSectionIndex}
          onTabClick={handleTabChange}
          handlePreviousContent={handlePreviousContent}
          handleNextContent={handleNextContent}
          showSectionTransition={showSectionTransition}
          nextSectionTitle={nextSectionTitle}
          onStartNextSection={handleStartNextSection}
          isFirstContent={currentContentIndex === 0 && currentSectionIndex === 0}
        />
      </div>
      
      {showXPPopup && <XPPopup xpPoints={xpEarned} level={1} levelProgress={0} />}
    </div>
  );
};

export default AICourseStartPage;
