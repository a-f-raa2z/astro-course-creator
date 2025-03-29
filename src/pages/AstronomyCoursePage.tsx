
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  Rocket 
} from "lucide-react";
import { Course } from "@/types/course";
import LoadingAnimation from "@/components/LoadingAnimation";
import { generateMockCourse } from "@/utils/courseData";
import SectionCard from "@/components/SectionCard";

const AstronomyCoursePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sectionProgress, setSectionProgress] = useState<number[]>([]);
  
  useEffect(() => {
    if (location.state?.course) {
      setCourse(location.state.course);
    } else {
      setCourse(generateMockCourse("planets", "intermediate", "visual"));
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
      setSectionProgress([75, 40, 20, 5, 0, 0, 0]);
    }
  }, [location.state, course?.sections.length]);

  const handleStartCourse = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/astronomy-course-start", { state: { course } });
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
            className="mr-2 text-purple-300 hover:text-purple-100 hover:bg-purple-900/30"
            onClick={() => navigate("/")}
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-white flex items-center">
            <Rocket className="mr-2 h-6 w-6 text-purple-400" />
            {course.title}
          </h1>
        </div>
        
        <p className="text-gray-300 mb-8 max-w-3xl">{course.description}</p>
        
        <div className="mb-8">
          <Button 
            onClick={handleStartCourse}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Start Course <Rocket className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {course.sections.map((section, index) => (
            <SectionCard 
              key={section.id} 
              title={section.title} 
              description={section.introduction}
              index={index}
              videoUrl={section.videoUrl}
              shortVideoUrls={section.shortVideo ? [section.shortVideo, ...(section.additionalShortVideos || [])] : undefined}
              visualUrl={section.visualUrl}
              bonusUrls={section.bonusVideos}
              progress={sectionProgress[index] || 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AstronomyCoursePage;
