
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Check, Award, Star, Rocket, Flag, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useGameLearning } from "@/hooks/useGameLearning";
import { GameProgress } from "@/components/course/GameProgress";
import { GameContentRenderer } from "@/components/course/GameContentRenderer";
import { GameContentTabs } from "@/components/course/GameContentTabs";

const CourseStartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;
  const { toast } = useToast();
  
  // If no course data is available, redirect to the course page
  if (!course) {
    navigate("/course");
    return null;
  }

  const {
    currentSectionIndex,
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
                onClick={() => navigate("/course")}
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
          xpPoints={xpPoints}
          level={level}
          levelProgress={levelProgress}
        />
        
        {/* Content tabs - Updated to allow clicking any tab */}
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
          </CardContent>
        </Card>
        
        {/* Navigation buttons */}
        <div className="flex justify-between mt-6 mb-12">
          <Button 
            onClick={handlePreviousContent} 
            disabled={currentContentIndex === 0 && currentSectionIndex === 0}
            variant="outline"
            className="border-purple-400/30 text-purple-200 hover:bg-purple-900/20"
          >
            <ChevronLeft className="mr-1" /> Previous
          </Button>
          <Button 
            onClick={handleNextContent}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300 active:scale-95"
          >
            Next <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseStartPage;
