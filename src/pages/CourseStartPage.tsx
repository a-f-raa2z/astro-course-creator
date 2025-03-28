
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Star, Rocket, Flag, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useGameLearning } from "@/hooks/useGameLearning";
import { GameProgress } from "@/components/course/GameProgress";
import { GameContentRenderer } from "@/components/course/GameContentRenderer";
import { GameContentTabs } from "@/components/course/GameContentTabs";
import { useEffect } from "react";

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
      <div className="max-w-4xl mx-auto">
        <header className="mb-6">
          <div className="flex justify-between items-center mb-2">
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
              <h1 className="text-2xl font-bold text-white flex items-center">
                <Rocket className="mr-2 h-6 w-6 text-purple-400" />
                {course.title}
              </h1>
            </div>
            <div className="flex items-center space-x-2 bg-space-cosmic-blue/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-purple-500/20">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-200 font-semibold">{xpPoints} XP</span>
            </div>
          </div>
          
          <div className="flex items-center text-purple-200 mb-4">
            <Flag className="h-4 w-4 mr-1 text-purple-400" />
            <span>Section {currentSectionIndex + 1}: {currentSection.title}</span>
          </div>
        </header>

        {/* Game progress display */}
        <GameProgress
          overallProgress={overallProgress}
          currentSectionIndex={currentSectionIndex}
          totalSections={totalSections}
        />
        
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
        
        {/* Main content card */}
        <Card className="cosmic-card overflow-visible mb-8 animate-fade-in">
          <CardContent className="p-6">
            <GameContentRenderer 
              contentType={currentContentType}
              currentSection={currentSection}
              quizSubmitted={quizSubmitted}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              handleQuizSubmit={handleQuizSubmit}
            />

            {/* Navigation buttons */}
            <div className="flex justify-between mt-6">
              <Button 
                onClick={handlePreviousContent}
                variant="outline"
                className={`border-purple-500/30 text-purple-300 hover:bg-purple-900/30 ${isFirstContent ? 'invisible' : ''}`}
              >
                <ArrowLeft className="mr-1 h-4 w-4" /> Previous
              </Button>
              
              <Button 
                onClick={handleNextContent}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300 active:scale-95"
              >
                {isLastContent ? 'Complete' : 'Next'} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseStartPage;
