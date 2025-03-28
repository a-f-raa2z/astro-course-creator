import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import QuestionCard from "@/components/QuestionCard";
import { assessmentQuestions, generateMockCourse } from "@/utils/courseData";
import { Assessment } from "@/types/course";
import { Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import PlanetProgressTracker from "@/components/PlanetProgressTracker";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [assessment, setAssessment] = useState<Assessment>({
    interest: "",
    level: "",
    learningStyle: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("");
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; opacity: number }[]>([]);
  
  const courseType = location.state?.courseType || "astronomy";
  const isAICourse = courseType === "ai";

  useEffect(() => {
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
    
    const loadingTexts = isAICourse ? [
      "Analyzing your AI interests...",
      "Mapping learning pathways...",
      "Calibrating course difficulty...",
      "Customizing content for your learning style...",
      "Aligning educational resources...",
      "Finalizing your personalized journey..."
    ] : [
      "Analyzing your astronomy interests...",
      "Mapping celestial learning paths...",
      "Calibrating course difficulty...",
      "Customizing content for your learning style...",
      "Aligning educational resources...",
      "Finalizing your personalized journey..."
    ];
    
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
    const course = generateMockCourse(
      assessment.interest || (isAICourse ? "artificial intelligence" : "astronomy"), 
      assessment.level || "intermediate", 
      assessment.learningStyle || "visual"
    );
    
    setTimeout(() => {
      if (isAICourse) {
        navigate("/ai-course", { state: { course } });
      } else {
        navigate("/astronomy-course", { state: { course } });
      }
    }, 500);
  };

  const progressPercentage = ((currentQuestionIndex) / assessmentQuestions.length) * 100;
  const pageTitle = isAICourse ? "AI Journey" : "Astronomy Journey";
  const pageDescription = isAICourse ? 
    "Discover artificial intelligence through a personalized learning experience tailored to your interests and learning style." : 
    "Discover the cosmos through a personalized learning experience tailored to your interests and learning style.";
  const themeColor = isAICourse ? "blue" : "purple";

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
        <h1 className="text-4xl font-bold text-white mb-2 text-center">{pageTitle}</h1>
        <p className={`text-xl text-${themeColor}-300 mb-8 text-center max-w-2xl mx-auto`}>
          {pageDescription}
        </p>
        
        {!isLoading ? (
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="relative">
                <PlanetProgressTracker 
                  progress={progressPercentage} 
                  questionNumber={currentQuestionIndex + 1}
                  totalQuestions={assessmentQuestions.length}
                />
              </div>
            </div>
            
            <div className="w-full md:w-3/5">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h2 className={`text-xl font-medium text-${themeColor}-200`}>
                    Question {currentQuestionIndex + 1} of {assessmentQuestions.length}
                  </h2>
                  <span className={`text-${themeColor}-400`}>{Math.round(progressPercentage)}% Complete</span>
                </div>
                <Progress value={progressPercentage} className={`h-2 bg-${themeColor}-900/30`} />
                
                <div className="mt-4 text-2xl font-semibold text-white mb-4">
                  {assessmentQuestions[currentQuestionIndex].question}
                </div>
                {assessmentQuestions[currentQuestionIndex].description && (
                  <p className={`mb-6 text-${themeColor}-200/80`}>{assessmentQuestions[currentQuestionIndex].description}</p>
                )}
              </div>
              
              <QuestionCard 
                question={assessmentQuestions[currentQuestionIndex]}
                onAnswer={handleAnswer}
                onPrevious={handlePrevious}
                isFirst={currentQuestionIndex === 0}
                isLast={currentQuestionIndex === assessmentQuestions.length - 1}
              />
            </div>
          </div>
        ) : (
          <div className="w-full max-w-lg mx-auto">
            <div className={`bg-space-cosmic-blue/40 backdrop-blur-md border border-${themeColor}-500/20 p-8 rounded-lg mb-6`}>
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                Creating Your Personalized Course
              </h2>
              
              <div className={`relative h-3 bg-${themeColor}-900/30 rounded-full overflow-hidden mb-4`}>
                <div 
                  className={`absolute left-0 top-0 bottom-0 bg-${themeColor}-500 transition-all duration-300`}
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
              
              <div className={`flex justify-between text-sm text-${themeColor}-300 mb-8`}>
                <span>Analyzing</span>
                <span>{loadingProgress}%</span>
                <span>Complete</span>
              </div>
              
              <div className="flex items-center text-white">
                <Loader2 className="animate-spin h-5 w-5 mr-3" />
                <p>{loadingText}</p>
              </div>
            </div>
            
            <p className={`text-center text-${themeColor}-300 text-sm`}>
              This normally takes about 30 seconds...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
