
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assessmentQuestions, generateMockCourse } from "@/utils/courseData";
import { Assessment } from "@/types/course";
import { Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();
  const [assessment, setAssessment] = useState<Assessment>({
    interest: "",
    level: "",
    learningStyle: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const conversationSteps = [
    {
      id: "welcome",
      message: "Welcome to your personalized astronomy learning journey! I'm excited to help you explore the cosmos in a way that's perfect for you.",
      responseType: "button",
      options: [{ text: "Let's get started!", value: "start" }]
    },
    {
      id: "interest",
      message: "I'm curious to know what fascinates you most about the vast universe. Complete this sentence:",
      prompt: "When I look up at the night sky, I'm most interested in learning about...",
      responseType: "fillBlank",
      blanks: [
        { 
          options: [
            { id: "stars", text: "stars and stellar evolution" },
            { id: "planets", text: "planets and our solar system" },
            { id: "galaxies", text: "galaxies and deep space" },
            { id: "cosmology", text: "cosmology and the early universe" },
            { id: "space-tech", text: "space technology and exploration" }
          ],
          field: "interest"
        }
      ]
    },
    {
      id: "level",
      message: "Great choice! Now, to tailor your learning experience, I'd like to know:",
      prompt: "When it comes to astronomy knowledge, I would consider myself...",
      responseType: "fillBlank",
      blanks: [
        {
          options: [
            { id: "beginner", text: "a beginner with basic knowledge" },
            { id: "intermediate", text: "intermediate with solid understanding" },
            { id: "advanced", text: "advanced and looking to deepen my expertise" }
          ],
          field: "level"
        }
      ]
    },
    {
      id: "learningStyle",
      message: "Perfect! Last question to customize your journey:",
      prompt: "I learn best when information is presented through...",
      responseType: "fillBlank",
      blanks: [
        {
          options: [
            { id: "visual", text: "visual elements like images and diagrams" },
            { id: "interactive", text: "interactive, hands-on activities" },
            { id: "conceptual", text: "deep theoretical explanations" },
            { id: "practical", text: "real-world applications and examples" }
          ],
          field: "learningStyle"
        }
      ]
    },
    {
      id: "confirmation",
      message: "Wonderful! I've got everything I need to create your personalized astronomy course.",
      responseType: "button",
      options: [{ text: "Create my course", value: "create" }]
    }
  ];

  const currentConversation = conversationSteps[currentStep];

  const handleOptionSelect = (field: string, value: string) => {
    setAssessment(prev => ({
      ...prev,
      [field]: value
    }));
    setSelectedOption(value);
  };

  const handleNextStep = () => {
    setSelectedOption(null);
    if (currentStep < conversationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      startCourseGeneration();
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

  const renderFillBlanks = (blanks) => {
    return blanks.map((blank, index) => (
      <div key={`blank-${index}`} className="my-4">
        <div className="relative">
          {currentConversation.prompt && (
            <p className="text-white mb-3 text-lg">{currentConversation.prompt}</p>
          )}
          
          <div className="fake-text-input flex items-center mb-4 py-2 px-3 bg-space-cosmic-blue/40 border border-purple-500/30 rounded-md min-h-[42px] cursor-pointer">
            <span className="text-purple-300">
              {assessment[blank.field] 
                ? blank.options.find(opt => opt.id === assessment[blank.field])?.text 
                : "Click to choose an option..."}
            </span>
          </div>
          
          <div className={`dropdown-options absolute left-0 w-full mt-1 rounded-md overflow-hidden shadow-lg z-10 transition-all duration-300 ${selectedOption ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
            <div className="bg-space-cosmic-blue/95 backdrop-blur-lg border border-purple-500/30 rounded-md">
              {blank.options.map(option => (
                <div 
                  key={option.id}
                  className="py-2 px-3 hover:bg-purple-700/40 cursor-pointer transition-colors duration-200 text-white"
                  onClick={() => handleOptionSelect(blank.field, option.id)}
                >
                  {option.text}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {assessment[blank.field] && (
          <div className="mt-6 text-center">
            <Button
              onClick={handleNextStep}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300"
            >
              Continue
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    ));
  };

  const renderResponseArea = () => {
    if (currentConversation.responseType === "button") {
      return (
        <div className="mt-4 text-center">
          <Button 
            onClick={handleNextStep}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300"
          >
            {currentConversation.options[0].text}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      );
    } else if (currentConversation.responseType === "fillBlank") {
      return (
        <div className="mt-3">
          {renderFillBlanks(currentConversation.blanks)}
        </div>
      );
    }
    return null;
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
          <Card className="cosmic-card w-full max-w-2xl animate-fade-in">
            <CardContent className="p-6">
              <div className="chat-container">
                <div className="chat-message assistant mb-4">
                  <div className="bg-space-cosmic-blue/60 p-4 rounded-lg text-white">
                    <p>{currentConversation.message}</p>
                  </div>
                </div>
                
                <div className="chat-response">
                  {renderResponseArea()}
                </div>
              </div>
            </CardContent>
          </Card>
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
