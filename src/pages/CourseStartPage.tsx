
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Star, Rocket, Flag, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useGameLearning } from "@/hooks/useGameLearning";
import { GameProgress } from "@/components/course/GameProgress";
import { GameContentRenderer } from "@/components/course/GameContentRenderer";
import { GameContentTabs } from "@/components/course/GameContentTabs";
import { XPPopup } from "@/components/course/XPPopup";
import { useEffect } from "react";
import { Separator } from "@/components/ui/separator";

const CourseStartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;
  const initialSectionIndex = location.state?.initialSectionIndex ?? 0;
  const { toast } = useToast();
  
  // If no course data is available, redirect to the course page
  if (!course) {
    navigate("/course");
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
    handleNextContent,
    handlePreviousContent,
    setSelectedAnswer,
    handleQuizSubmit,
    xpPoints,
    level,
    levelProgress,
    completedContents,
    setCurrentContentIndex
  } = useGameLearning(course);

  // Set initial section index from route state
  useEffect(() => {
    if (initialSectionIndex !== undefined && initialSectionIndex !== currentSectionIndex) {
      setCurrentSectionIndex(initialSectionIndex);
      setCurrentContentIndex(0); // Reset to first content of the section
    }
  }, [initialSectionIndex, currentSectionIndex, setCurrentSectionIndex, setCurrentContentIndex]);

  const isFirstContent = currentContentIndex === 0 && currentSectionIndex === 0;
  const isLastContent = currentContentIndex === availableContentTypes.length - 1 && 
                        currentSectionIndex === totalSections - 1;

  return (
    <div className="bg-space min-h-screen py-8 px-4">
      {/* XPPopup - Positioned at the top corner */}
      <XPPopup xpPoints={xpPoints} level={level} levelProgress={levelProgress} />
      
      <div className="max-w-4xl mx-auto">
        <header className="mb-6">
          {/* Course title and back button row with progress bar */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                className="mr-2 text-purple-300 hover:text-purple-100 hover:bg-purple-900/30"
                onClick={() => navigate("/course", { state: { course } })}
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
          
          {/* Separator between course title and section title */}
          <Separator className="my-4 bg-purple-500/30" />
          
          {/* Section title with larger size */}
          <div className="flex items-center text-purple-200 mt-4 mb-4">
            <Flag className="h-5 w-5 mr-2 text-purple-400" />
            <span className="text-lg font-medium">Section {currentSectionIndex + 1}: {currentSection.title}</span>
          </div>
        </header>
        
        {/* Content tabs showing linear progress */}
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
        
        {/* Main content card with adjusted size - 70% of viewport height */}
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
              />
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <Button 
              onClick={handlePreviousContent}
              variant="outline"
              className={`border-purple-500/30 text-purple-300 hover:bg-purple-900/30 ${isFirstContent ? 'invisible' : ''}`}
            >
              <ArrowLeft className="mr-1 h-4 w-4" /> Previous
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStartPage;
