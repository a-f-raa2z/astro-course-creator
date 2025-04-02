
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Course } from "@/types/course";
import { GameProgress } from "@/components/course/GameProgress";
import { XPPopup } from "@/components/course/XPPopup";
import { CourseHeader } from "@/components/course/CourseHeader";
import { CourseContent } from "@/components/course/CourseContent";
import { useCourseNavigation } from "@/hooks/useCourseNavigation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Rocket, Flag, User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
      <XPPopup xpPoints={xpEarned} level={1} levelProgress={0} />
      
      <div className="flex w-full">
        {/* Left sidebar - Gamification Panel (1/5 of page) */}
        <div className="w-1/5 px-4 py-4 border-r border-purple-500/30">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="mb-4 text-purple-300 hover:text-purple-100 hover:bg-purple-900/30 w-full justify-start"
              onClick={handleBackClick}
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back
            </Button>
            
            <h2 className="text-lg font-bold text-white flex items-center mb-4">
              <Rocket className="mr-2 h-5 w-5 text-purple-400" />
              {course.title}
            </h2>
          </div>
          
          {/* User Profile Section */}
          <div className="mb-6 bg-purple-900/20 p-3 rounded-lg border border-purple-500/30 flex items-center">
            <Avatar className="h-10 w-10 border-2 border-purple-400">
              <AvatarImage src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" alt="Ana" />
              <AvatarFallback className="bg-purple-800 text-purple-200">AN</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Ana</p>
              <p className="text-xs text-purple-300">Space Explorer</p>
            </div>
          </div>
          
          <Separator className="my-4 bg-purple-500/30" />
          
          <div className="space-y-6">
            <div className="text-purple-200">
              <h3 className="font-medium mb-2 flex items-center">
                <Flag className="h-4 w-4 mr-2 text-purple-400" />
                Current Section
              </h3>
              <p className="text-sm pl-6 text-purple-100">{currentSection.title}</p>
            </div>
            
            <div>
              <GameProgress
                overallProgress={(currentSectionIndex / (course.sections.length || 1)) * 100}
                currentSectionIndex={currentSectionIndex}
                totalSections={course.sections.length}
              />
            </div>
            
            <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/20">
              <h3 className="text-sm font-medium text-purple-200 mb-1">Your Stats</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-300">Level:</span>
                <span className="text-yellow-300 font-bold">1</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-300">XP:</span>
                <span className="text-yellow-300 font-bold">{xpEarned} pts</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content area (4/5 of page) */}
        <div className="w-4/5 px-4">
          <div className="max-w-4xl mx-auto">
            <header className="mb-6">
              <div className="flex items-center text-purple-200 mt-4 mb-4">
                <Flag className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-lg font-medium">Section {currentSectionIndex + 1}: {currentSection.title}</span>
              </div>
              
              <Separator className="my-4 bg-purple-500/30" />
            </header>

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
              allSections={course.sections}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICourseStartPage;
