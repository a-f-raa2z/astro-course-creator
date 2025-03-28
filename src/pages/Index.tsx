
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "@/components/QuestionCard";
import { assessmentQuestions, generateMockCourse } from "@/utils/courseData";
import { Assessment, Course } from "@/types/course";
import { Loader2 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [assessment, setAssessment] = useState<Assessment>({
    interest: "",
    level: "",
    learningStyle: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("");

  const handleAnswer = (questionId: string, answer: string) => {
    setAssessment(prev => ({
      ...prev,
      [questionId]: answer
    }));

    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      startCourseGeneration();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const startCourseGeneration = () => {
    setIsLoading(true);
    
    const loadingTexts = [
      "Analyzing your astronomy interests...",
      "Mapping celestial learning paths...",
      "Calibrating course difficulty...",
      "Customizing content for your learning style...",
      "Aligning educational resources...",
      "Finalizing your personalized journey..."
    ];
    
    // Simulate loading process with progress updates
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setLoadingProgress(progress);
      
      if (progress <= 100) {
        const textIndex = Math.min(
          Math.floor(progress / 20), 
          loadingTexts.length - 1
        );
        setLoadingText(loadingTexts[textIndex]);
      }
      
      if (progress >= 100) {
        clearInterval(interval);
        finishCourseGeneration();
      }
    }, 120);
  };
  
  const finishCourseGeneration = () => {
    // Generate mock course based on assessment answers
    const course = generateMockCourse(
      assessment.interest, 
      assessment.level, 
      assessment.learningStyle
    );
    
    // Navigate to the course page with the generated course data
    setTimeout(() => {
      navigate("/course", { state: { course } });
    }, 500);
  };

  return (
    <div className="bg-space min-h-screen">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-2">Astronomy Journey</h1>
        <p className="text-xl text-purple-300 mb-10 text-center max-w-2xl">
          Discover the cosmos through a personalized learning experience
          tailored to your interests and learning style.
        </p>
        
        {!isLoading ? (
          <>
            <QuestionCard 
              question={assessmentQuestions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              onPrevious={handlePrevious}
              isFirst={currentQuestionIndex === 0}
              isLast={currentQuestionIndex === assessmentQuestions.length - 1}
            />
            <div className="mt-8 text-purple-400">
              <span className="text-xl font-medium">Question {currentQuestionIndex + 1} of {assessmentQuestions.length}</span>
              <div className="mt-2 bg-purple-500/30 border border-purple-400/20 rounded-lg p-3 text-white text-lg font-medium">
                Discover your cosmic journey
              </div>
            </div>
          </>
        ) : (
          <div className="w-full max-w-lg">
            <div className="bg-space-cosmic-blue/40 backdrop-blur-md border border-purple-500/20 p-8 rounded-lg mb-6">
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                Creating Your Personalized Course
              </h2>
              
              <div className="relative h-3 bg-purple-900/30 rounded-full overflow-hidden mb-4">
                <div 
                  className="absolute left-0 top-0 bottom-0 bg-purple-500 transition-all duration-300"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-sm text-purple-300 mb-8">
                <span>Analyzing</span>
                <span>{loadingProgress}%</span>
                <span>Complete</span>
              </div>
              
              <div className="flex items-center text-white">
                <Loader2 className="animate-spin h-5 w-5 mr-3" />
                <p>{loadingText}</p>
              </div>
            </div>
            
            <p className="text-center text-purple-300 text-sm">
              This normally takes about 30 seconds...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
