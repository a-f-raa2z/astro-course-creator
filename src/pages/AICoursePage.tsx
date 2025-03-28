
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Cpu, ArrowRight } from "lucide-react";
import { Course } from "@/types/course";
import LoadingAnimation from "@/components/LoadingAnimation";
import { generateMockCourse } from "@/utils/courseData";
import AISectionCard from "@/components/AISectionCard";

const AICoursePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // If we already have course data passed from state, use that
    if (location.state?.course) {
      setCourse(location.state.course);
    } else {
      // Use the mock course data with AI topic
      setCourse(generateMockCourse("ai", "intermediate", "visual"));
    }
  }, [location.state]);

  const handleStartCourse = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/ai-course-start", { state: { course } });
    }, 1500);
  };

  const handleExploreSection = (sectionIndex: number) => {
    navigate("/ai-course-start", { state: { course, initialSectionIndex: sectionIndex } });
  };

  // Helper function to get the appropriate icon for each section
  const getSectionIcon = (sectionTitle: string) => {
    switch (sectionTitle) {
      case "Introduction to AI":
        return <Brain className="h-6 w-6 text-blue-400" />;
      case "Machine Learning":
        return <Database className="h-6 w-6 text-green-400" />;
      case "Neural Networks":
        return <Network className="h-6 w-6 text-yellow-400" />;
      case "Deep Learning":
        return <BrainCircuit className="h-6 w-6 text-purple-400" />;
      case "AI Applications":
        return <Bot className="h-6 w-6 text-pink-400" />;
      default:
        return <Cpu className="h-6 w-6 text-blue-400" />;
    }
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
            <Brain className="mr-2 h-6 w-6 text-blue-400" />
            {course.title}
          </h1>
        </div>
        
        <p className="text-gray-300 mb-8 max-w-3xl">{course.description}</p>
        
        <div className="mb-8">
          <Button 
            onClick={handleStartCourse}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Start Course <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {course.sections.map((section, index) => (
            <Card key={section.id} className="cosmic-card hover:shadow-blue-500/10 hover:shadow-md transition-all border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-blue-100 flex items-center">
                  {getSectionIcon(section.title)}
                  <span className="ml-2">{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 line-clamp-3">{section.introduction}</p>
                
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="bg-blue-900/30 p-2 rounded flex items-center justify-center" title="Introduction">
                    <FileText className="h-4 w-4 text-blue-300" />
                  </div>
                  <div className="bg-red-900/30 p-2 rounded flex items-center justify-center" title="Video Lesson">
                    <Youtube className="h-4 w-4 text-red-400" />
                  </div>
                  <div className="bg-green-900/30 p-2 rounded flex items-center justify-center" title="Key Points">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="bg-orange-900/30 p-2 rounded flex items-center justify-center" title="Quiz">
                    <HelpCircle className="h-4 w-4 text-orange-400" />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    variant="outline" 
                    className="border-blue-500/30 text-blue-300 hover:bg-blue-900/30"
                    onClick={() => handleExploreSection(index)}
                  >
                    Explore <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AICoursePage;
