
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);

  const stages = [
    "Analyzing your astronomy interests...",
    "Calibrating difficulty to your knowledge level...",
    "Adapting content to your learning style...",
    "Selecting optimal video resources...",
    "Crafting personalized quiz questions...",
    "Building your custom astronomy course...",
    "Finalizing your personalized learning journey..."
  ];

  useEffect(() => {
    let timer: number | null = null;
    
    // Simulate progress over 4 seconds
    const increment = 100 / (stages.length * 15);
    
    timer = window.setInterval(() => {
      setProgress(prev => {
        const nextProgress = Math.min(prev + increment, 100);
        
        // Update stage based on progress
        const stageIndex = Math.min(
          Math.floor((nextProgress / 100) * stages.length),
          stages.length - 1
        );
        
        if (stageIndex !== currentStage) {
          setCurrentStage(stageIndex);
        }
        
        // Complete the loading when we reach 100%
        if (nextProgress >= 100 && timer) {
          window.clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 500);
        }
        
        return nextProgress;
      });
    }, 200);
    
    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [currentStage, onComplete]);

  return (
    <div className="space-glass p-8 rounded-xl animate-zoom-in max-w-2xl w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Creating Your Course</h2>
        <p className="text-purple-200">Please wait while we personalize your astronomy journey</p>
      </div>
      
      <div className="mb-6">
        <Progress value={progress} className="h-3 bg-space-cosmic-blue" />
        <p className="mt-2 text-right text-sm text-purple-200">{Math.round(progress)}%</p>
      </div>
      
      <div className="min-h-[80px] flex items-center justify-center">
        <p className="text-lg text-star-yellow animate-pulse">{stages[currentStage]}</p>
      </div>
      
      <div className="mt-10 flex justify-center">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full bg-nebula-purple animate-star-pulse opacity-30"></div>
          <div className="absolute inset-2 rounded-full bg-nebula-purple animate-star-pulse opacity-50" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute inset-4 rounded-full bg-nebula-purple animate-star-pulse opacity-70" style={{ animationDelay: "1s" }}></div>
          <div className="absolute inset-6 rounded-full bg-nebula-purple animate-star-pulse" style={{ animationDelay: "1.5s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
