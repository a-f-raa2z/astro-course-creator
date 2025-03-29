
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Course, CourseSection } from "@/types/course";
import { ContentType } from "@/types/ContentType";
import { GameContentRenderer } from "@/components/course/GameContentRenderer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Rocket, Flag } from "lucide-react";
import { GameProgress } from "@/components/course/GameProgress";
import { XPPopup } from "@/components/course/XPPopup";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { useGameLearning } from "@/hooks/useGameLearning";
import { GameContentTabs } from "@/components/course/GameContentTabs";

const AstronomyCourseStartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;
  const initialSectionIndex = location.state?.initialSectionIndex ?? 0;
  const { toast } = useToast();
  const [showSectionTransition, setShowSectionTransition] = useState(false);
  
  useEffect(() => {
    if (!course) {
      navigate("/astronomy-course");
      return;
    }
  }, [course, navigate]);

  if (!course) {
    return null;
  }

  const {
    currentSectionIndex,
    setCurrentSectionIndex,
    currentContentIndex,
    currentSection,
    currentContentType,
    availableContentTypes,
    totalContentCount,
    totalSections,
    overallProgress,
    quizSubmitted,
    selectedAnswer,
    handleNextContent: originalHandleNextContent,
    handlePreviousContent,
    setSelectedAnswer,
    handleQuizSubmit,
    xpPoints,
    level,
    levelProgress,
    completedContents,
    setCurrentContentIndex
  } = useGameLearning(course);

  const handleNextContent = () => {
    const isLastContentInSection = currentContentIndex === availableContentTypes.length - 1;
    const isNotLastSection = currentSectionIndex < course.sections.length - 1;
    
    if (isLastContentInSection && isNotLastSection) {
      setShowSectionTransition(true);
    } else {
      originalHandleNextContent();
    }
  };

  const handleStartNextSection = () => {
    setShowSectionTransition(false);
    originalHandleNextContent();
  };

  useEffect(() => {
    if (initialSectionIndex !== undefined && initialSectionIndex !== currentSectionIndex) {
      setCurrentSectionIndex(initialSectionIndex);
      setCurrentContentIndex(0);
    }
  }, [initialSectionIndex, currentSectionIndex, setCurrentSectionIndex, setCurrentContentIndex]);

  const isFirstContent = currentContentIndex === 0 && currentSectionIndex === 0;
  const isLastContent = currentContentIndex === availableContentTypes.length - 1 && 
                        currentSectionIndex === totalSections - 1;
  
  const getNextSectionTitle = () => {
    if (currentSectionIndex < course.sections.length - 1) {
      return course.sections[currentSectionIndex + 1].title;
    }
    return "";
  };

  if (!currentSection) {
    return null;
  }

  return (
    <div className="bg-space min-h-screen py-8 px-4">
      <XPPopup xpPoints={xpPoints} level={level} levelProgress={levelProgress} />
      
      <div className="max-w-4xl mx-auto">
        <header className="mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                className="mr-2 text-purple-300 hover:text-purple-100 hover:bg-purple-900/30"
                onClick={() => navigate("/astronomy-course", { state: { course } })}
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back
              </Button>
              <h1 className="text-xl font-bold text-white flex items-center">
                <Rocket className="mr-2 h-5 w-5 text-purple-400" />
                {course.title}
              </h1>
            </div>
            <div className="flex-grow">
              <GameProgress
                overallProgress={overallProgress}
                currentSectionIndex={currentSectionIndex}
                totalSections={totalSections}
              />
            </div>
          </div>
          
          <Separator className="my-4 bg-purple-500/30" />
          
          <div className="flex items-center text-purple-200 mt-4 mb-4">
            <Flag className="h-5 w-5 mr-2 text-purple-400" />
            <span className="text-lg font-medium">Section {currentSectionIndex + 1}: {currentSection.title}</span>
          </div>
        </header>
        
        <GameContentTabs 
          contentTypes={availableContentTypes}
          currentContentIndex={currentContentIndex}
          onTabClick={(index) => {
            setSelectedAnswer(null);
            setCurrentContentIndex(index);
          }}
          completedContents={completedContents}
          sectionIndex={currentSectionIndex}
        />
        
        <div className="animate-fade-in h-[70vh] max-w-full mx-auto">
          <div className="relative w-full h-full max-h-full">
            <div className="absolute inset-0">
              <GameContentRenderer 
                contentType={currentContentType}
                currentSection={currentSection}
                quizSubmitted={quizSubmitted}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
                handleQuizSubmit={handleQuizSubmit}
                handleNextContent={handleNextContent}
                handlePreviousContent={handlePreviousContent}
                isFirstContent={isFirstContent}
                showSectionTransition={showSectionTransition}
                nextSectionTitle={getNextSectionTitle()}
                onStartNextSection={handleStartNextSection}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstronomyCourseStartPage;
