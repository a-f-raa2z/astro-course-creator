
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
import { Separator } from "@/components/ui/separator";

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
        
        <p className="text-gray-300 mb-4 max-w-3xl leading-relaxed">{course.description}</p>
        
        <div className="mb-8 flex flex-wrap gap-4 items-center">
          <Button 
            onClick={handleStartCourse}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Start Course <Rocket className="ml-2 h-4 w-4" />
          </Button>
          
          <div className="text-gray-400 text-sm">
            <span className="inline-flex items-center bg-purple-900/30 px-3 py-1 rounded-full">
              <span className="h-2 w-2 bg-purple-400 rounded-full mr-2"></span>
              {course.forLevel || "Intermediate"} Level
            </span>
            <span className="inline-flex items-center bg-blue-900/30 px-3 py-1 rounded-full ml-2">
              <span className="h-2 w-2 bg-blue-400 rounded-full mr-2"></span>
              {course.sections.length} Sections
            </span>
          </div>
        </div>
        
        <Separator className="my-6 bg-purple-500/20" />
        
        <h2 className="text-xl font-semibold text-white mb-6">Course Content</h2>

        {/* Timeline journey container */}
        <div className="relative journey-path">
          {course.sections.map((section, index) => (
            <div key={section.id} className="flex mb-8 relative">
              {/* Timeline circle with number */}
              <div className="relative z-10">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full mr-4 border-2 ${
                  sectionProgress[index] === 100 
                    ? 'bg-green-600 border-green-400' 
                    : sectionProgress[index] > 0 
                    ? 'bg-purple-600 border-purple-400' 
                    : 'bg-space-cosmic-blue border-purple-500/40'
                }`}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                {/* Connector line to next item */}
                {index < course.sections.length - 1 && (
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500"></div>
                )}
              </div>
              
              {/* Section card */}
              <div className="flex-1">
                <SectionCard 
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AstronomyCoursePage;
