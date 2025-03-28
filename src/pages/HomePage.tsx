
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Rocket, Brain } from "lucide-react";
import LoadingAnimation from "@/components/LoadingAnimation";

const HomePage = () => {
  const navigate = useNavigate();
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; opacity: number }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingCourse, setLoadingCourse] = useState<"astronomy" | "ai" | null>(null);

  React.useEffect(() => {
    const newStars = [];
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2
      });
    }
    
    setStars(newStars);
  }, []);

  const handleCourseSelect = (course: string) => {
    if (course === "astronomy") {
      setIsLoading(true);
      setLoadingCourse("astronomy");
      setTimeout(() => {
        setIsLoading(false);
        navigate("/astronomy-course");
      }, 3000);
    } else if (course === "ai") {
      setIsLoading(true);
      setLoadingCourse("ai");
      setTimeout(() => {
        setIsLoading(false);
        navigate("/ai-course");
      }, 3000);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-space min-h-screen flex items-center justify-center">
        {stars.map(star => (
          <div
            key={star.id}
            className="star absolute bg-white rounded-full pointer-events-none"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.4)"
            }}
          />
        ))}
        <LoadingAnimation 
          onComplete={() => {}} 
        />
      </div>
    );
  }

  return (
    <div className="bg-space min-h-screen">
      {stars.map(star => (
        <div
          key={star.id}
          className="star absolute bg-white rounded-full pointer-events-none"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.4)"
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 py-10 md:py-16">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Learning Journey</h1>
        <p className="text-xl text-purple-300 mb-12 text-center max-w-2xl mx-auto">
          Choose a course to begin your personalized learning experience
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Astronomy Course Card */}
          <Card className="cosmic-card overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all border-purple-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-purple-100 flex items-center">
                <Rocket className="h-6 w-6 text-purple-400 mr-3" />
                Astronomy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Explore the cosmos through a personalized learning experience. Discover planets, 
                stars, galaxies, and the mysteries of our universe.
              </p>
              <div className="flex justify-end">
                <Button 
                  onClick={() => handleCourseSelect("astronomy")}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Generate Course <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* AI Course Card */}
          <Card className="cosmic-card overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all border-blue-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-blue-100 flex items-center">
                <Brain className="h-6 w-6 text-blue-400 mr-3" />
                Artificial Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Discover the world of AI through an interactive learning journey. Explore machine learning, 
                neural networks, and how AI is shaping our future.
              </p>
              <div className="flex justify-end">
                <Button 
                  onClick={() => handleCourseSelect("ai")}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Generate Course <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
