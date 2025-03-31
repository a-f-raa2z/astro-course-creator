
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CourseSection } from "@/types/course";
import { GameContentRenderer } from "@/components/course/GameContentRenderer";
import { useToast } from "@/hooks/use-toast";

const AstronomyQuizDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { course, sectionIndex, contentType } = location.state || {};
  const { toast } = useToast();
  
  const [currentSection, setCurrentSection] = useState<CourseSection | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showContent, setShowContent] = useState(true);
  
  useEffect(() => {
    if (course && typeof sectionIndex === 'number' && course.sections[sectionIndex]) {
      setCurrentSection(course.sections[sectionIndex]);
    } else {
      navigate("/astronomy-quiz");
    }
  }, [course, sectionIndex, navigate]);

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const handleNextContent = () => {
    if (showContent) {
      setShowContent(false);
    } else {
      // Save completion status to localStorage
      const completedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes') || '{}');
      const quizKey = `${sectionIndex}-${contentType}`;
      completedQuizzes[quizKey] = true;
      localStorage.setItem('completedQuizzes', JSON.stringify(completedQuizzes));
      
      toast({
        title: "Quiz completed!",
        description: "Your progress has been saved.",
      });
      
      navigate("/astronomy-quiz");
    }
  };

  const handlePreviousContent = () => {
    if (!showContent) {
      setShowContent(true);
    } else {
      navigate("/astronomy-quiz");
    }
  };

  if (!currentSection) {
    return (
      <div className="bg-space min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Loading quiz content...</p>
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
            onClick={() => navigate("/astronomy-quiz")}
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Quizzes
          </Button>
          <h1 className="text-2xl font-bold text-white flex items-center">
            {showContent 
              ? `${currentSection.title} - Learning Content`
              : <><HelpCircle className="mr-2 h-6 w-6 text-orange-400" /> Quiz Challenge</>
            }
          </h1>
        </div>
        
        <Card className="w-full mb-4 p-4 bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
          <GameContentRenderer
            contentType={showContent ? contentType : 'quiz'}
            currentSection={currentSection}
            quizSubmitted={quizSubmitted}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            handleQuizSubmit={handleQuizSubmit}
            handleNextContent={handleNextContent}
            handlePreviousContent={handlePreviousContent}
            isFirstContent={false}
            showSectionTransition={false}
            nextSectionTitle=""
          />
        </Card>
      </div>
    </div>
  );
};

export default AstronomyQuizDetailPage;
