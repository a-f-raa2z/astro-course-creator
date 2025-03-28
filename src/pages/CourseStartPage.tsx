import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Course } from "@/types/course";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { ContentNavigation } from "@/components/course/ContentNavigation";
import { CourseProgress } from "@/components/course/CourseProgress";
import { ContentRenderer } from "@/components/course/ContentRenderer";
import { useContentNavigation } from "@/hooks/useContentNavigation";

// Define the content types for each card (keep this in the main file as it's referenced in multiple places)
export type ContentType = 'introduction' | 'video' | 'keyPoints' | 'shortVideo' | 'image' | 'quiz';

const CourseStartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;
  
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
    handleQuizSubmit
  } = useContentNavigation(course);

  return (
    <div className="bg-space min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">
            {course.title} - Section {currentSectionIndex + 1}
          </h1>
          <div className="text-purple-200">
            Card {currentContentIndex + 1} of {totalContentCount}
          </div>
        </div>

        <CourseProgress 
          overallProgress={overallProgress} 
          currentSectionIndex={currentSectionIndex} 
          totalSections={totalSections} 
        />
        
        <Card className="cosmic-card overflow-visible mb-8 animate-fade-in">
          <CardContent className="p-6">
            <ContentNavigation 
              title={currentSection.title} 
              contentType={currentContentType}
              availableContentTypes={availableContentTypes} 
              currentContentIndex={currentContentIndex} 
            />
            
            <ContentRenderer 
              contentType={currentContentType}
              currentSection={currentSection}
              quizSubmitted={quizSubmitted}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              handleQuizSubmit={handleQuizSubmit}
            />
          </CardContent>
        </Card>
        
        <div className="flex justify-between mt-6">
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
            className="bg-purple-600 hover:bg-purple-700"
          >
            Next <ChevronRight className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseStartPage;
