
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  Rocket,
  BrainCircuit
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
      // Make sure the generated course has multiple quizzes
      const mockCourse = generateMockCourse("planets", "intermediate", "visual");
      
      // Ensure each section has 5 quizzes
      mockCourse.sections = mockCourse.sections.map(section => {
        if (!section.quizzes || section.quizzes.length < 5) {
          // Generate 5 quizzes using the existing quiz as a template
          const baseQuiz = section.quiz;
          section.quizzes = [
            baseQuiz,
            {
              question: `What is another key aspect of ${section.title}?`,
              options: ["Option A", "Option B", "Option C", "Option D"],
              correctAnswer: Math.floor(Math.random() * 4)
            },
            {
              question: `Which statement about ${section.title} is correct?`,
              options: ["Statement 1", "Statement 2", "Statement 3", "Statement 4"],
              correctAnswer: Math.floor(Math.random() * 4)
            },
            {
              question: `What's a common misconception about ${section.title}?`,
              options: ["Misconception 1", "Misconception 2", "Misconception 3", "Misconception 4"],
              correctAnswer: Math.floor(Math.random() * 4)
            },
            {
              question: `Which of these is most closely related to ${section.title}?`,
              options: ["Related concept 1", "Related concept 2", "Related concept 3", "Related concept 4"],
              correctAnswer: Math.floor(Math.random() * 4)
            }
          ];
        }
        return section;
      });
      
      setCourse(mockCourse);
    }
    
    if (course && course.sections.length > 0) {
      const mockProgress = course.sections.map(() => 
        Math.floor(Math.random() * 100)
      );
      setSectionProgress(mockProgress);
    } else {
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
            {course?.title}
          </h1>
        </div>
        
        <p className="text-gray-300 mb-4 max-w-3xl leading-relaxed">{course?.description}</p>
        
        <div className="mb-8 flex flex-wrap gap-4 items-center">
          <Button 
            onClick={handleStartCourse}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Start Course <Rocket className="ml-2 h-4 w-4" />
          </Button>
          
          <Button 
            onClick={() => navigate("/astronomy-quiz")}
            variant="outline"
            className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
          >
            Quiz Mode <BrainCircuit className="ml-2 h-4 w-4" />
          </Button>
          
          <div className="text-gray-400 text-sm">
            <span className="inline-flex items-center bg-purple-900/30 px-3 py-1 rounded-full">
              <span className="h-2 w-2 bg-purple-400 rounded-full mr-2"></span>
              {course?.forLevel || "Intermediate"} Level
            </span>
            <span className="inline-flex items-center bg-blue-900/30 px-3 py-1 rounded-full ml-2">
              <span className="h-2 w-2 bg-blue-400 rounded-full mr-2"></span>
              {course?.sections.length} Sections
            </span>
          </div>
        </div>
        
        <Separator className="my-6 bg-purple-500/20" />
        
        <h2 className="text-xl font-semibold text-white mb-6">Course Content</h2>

        <div className="relative journey-path">
          {course?.sections.map((section, index) => (
            <div key={section.id} className="flex mb-8 relative">
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
              </div>
              
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
