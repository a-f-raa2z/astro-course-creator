
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  ChevronLeft, 
  Rocket, 
  ArrowRight, 
  Globe, 
  Moon, 
  Stars, 
  Sun, 
  Satellite, 
  FileText, 
  Youtube, 
  CheckCircle, 
  HelpCircle,
  Telescope
} from "lucide-react";
import { Course } from "@/types/course";
import LoadingAnimation from "@/components/LoadingAnimation";
import { generateMockCourse } from "@/utils/courseData";

const AstronomyCoursePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (location.state?.course) {
      setCourse(location.state.course);
    } else {
      setCourse(generateMockCourse("planets", "intermediate", "visual"));
    }
  }, [location.state]);

  const handleStartCourse = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/astronomy-course-start", { state: { course } });
    }, 1500);
  };

  const handleExploreSection = (sectionIndex: number) => {
    navigate("/astronomy-course-start", { state: { course, initialSectionIndex: sectionIndex } });
  };

  const getSectionIcon = (sectionTitle: string) => {
    switch (sectionTitle) {
      case "The Solar System":
        return <Sun className="h-6 w-6 text-yellow-400" />;
      case "Earth":
        return <Globe className="h-6 w-6 text-blue-400" />;
      case "The Moon":
        return <Moon className="h-6 w-6 text-gray-300" />;
      case "Stars":
        return <Stars className="h-6 w-6 text-yellow-300" />;
      case "Planets":
        return <Rocket className="h-6 w-6 text-orange-400" />;
      case "Telescopes":
        return <Telescope className="h-6 w-6 text-purple-400" />;
      case "Space Exploration":
        return <Rocket className="h-6 w-6 text-red-400" />;
      case "Satellites":
        return <Satellite className="h-6 w-6 text-blue-300" />;
      default:
        return <Rocket className="h-6 w-6 text-purple-400" />;
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
            Start Course <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {course.sections.map((section, index) => (
            <Card key={section.id} className="cosmic-card hover:shadow-purple-500/10 hover:shadow-md transition-all border-purple-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-purple-100 flex items-center">
                  {getSectionIcon(section.title)}
                  <span className="ml-2">{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 line-clamp-3">{section.introduction}</p>
                
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="bg-purple-900/30 p-2 rounded flex items-center justify-center" title="Introduction">
                    <FileText className="h-4 w-4 text-purple-300" />
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
                    className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
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

export default AstronomyCoursePage;
