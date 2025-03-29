import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  Brain
} from "lucide-react";
import { Course } from "@/types/course";
import LoadingAnimation from "@/components/LoadingAnimation";
import { generateMockCourse, aiCourseData } from "@/utils/courseData";
import AISectionCard from "@/components/AISectionCard";

const AICoursePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sectionProgress, setSectionProgress] = useState<number[]>([]);
  
  useEffect(() => {
    // If we already have course data passed from state, use that
    if (location.state?.course) {
      setCourse(location.state.course);
    } else {
      // Use the mock course data with AI topic
      setCourse(aiCourseData);
    }
    
    // Mock progress data - in a real app, this would come from user data
    // Here we're just generating random progress for demo purposes
    if (course && course.sections.length > 0) {
      const mockProgress = course.sections.map(() => 
        Math.floor(Math.random() * 100)
      );
      setSectionProgress(mockProgress);
    } else {
      // Default mock progress values if course isn't loaded yet
      setSectionProgress([85, 60, 30, 15, 0, 0, 0, 0, 0, 0]);
    }
  }, [location.state, course?.sections.length]);

  const handleStartCourse = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/ai-course-start", { state: { course } });
    }, 1500);
  };

  if (isLoading) {
    return (
      <div className="bg-space min-h-screen flex items-center justify-center p-4">
        <LoadingAnimation onComplete={() => {}} />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="bg-space min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Loading course data...</p>
      </div>
    );
  }

  return (
    <div className="bg-space min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            className="mr-2 text-blue-300 hover:text-blue-100 hover:bg-blue-900/30"
            onClick={() => navigate("/")}
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-white flex items-center">
            <Brain className="h-6 w-6 text-blue-400 mr-2" />
            <span>{course?.title}</span>
          </h1>
        </div>
        
        <p className="text-gray-300 mb-8 max-w-3xl">{course?.description}</p>
        
        <div className="mb-8">
          <Button 
            onClick={handleStartCourse}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Start Course <Brain className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {course?.sections.map((section, index) => (
            <AISectionCard 
              key={section.id} 
              title={section.title} 
              description={section.introduction}
              index={index}
              progress={sectionProgress[index] || 0}
              videoUrl={section.videoUrl}
              shortVideoUrls={section.shortVideo ? 
                [section.shortVideo, ...(section.additionalShortVideos || [])] : 
                []}
              visualUrl={section.visualUrl}
              bonusUrls={section.bonusVideos}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AICoursePage;
