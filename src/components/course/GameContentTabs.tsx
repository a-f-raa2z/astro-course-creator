
import { ContentType } from "@/hooks/useGameLearning";
import { FileText, Youtube, CheckCircle, Video, Image, HelpCircle, Star, Gamepad2 } from "lucide-react";

interface GameContentTabsProps {
  contentTypes: ContentType[];
  currentContentIndex: number;
  onTabClick: (index: number) => void;
  completedContents: string[];
  sectionIndex: number;
}

export const GameContentTabs = ({
  contentTypes,
  currentContentIndex,
  onTabClick,
  completedContents,
  sectionIndex
}: GameContentTabsProps) => {
  
  const getContentIcon = (type: ContentType) => {
    switch (type) {
      case 'introduction': return <FileText className="h-4 w-4" />;
      case 'video': return <Youtube className="h-4 w-4" />;
      case 'keyPoints': return <CheckCircle className="h-4 w-4" />;
      case 'shortVideo': return <Video className="h-4 w-4" />;
      case 'image': return <Image className="h-4 w-4" />;
      case 'quiz': return <HelpCircle className="h-4 w-4" />;
      case 'bonus': return <Star className="h-4 w-4" />;
      case 'playground': return <Gamepad2 className="h-4 w-4" />;
    }
  };

  const getContentTitle = (type: ContentType) => {
    switch (type) {
      case 'introduction': return 'Introduction';
      case 'video': return 'Main Lesson';
      case 'keyPoints': return 'Key Points';
      case 'shortVideo': return 'Fun Facts';
      case 'image': return 'Visual Guide';
      case 'quiz': return 'Knowledge Check';
      case 'bonus': return 'Bonus Content';
      case 'playground': return 'Interactive';
    }
  };
  
  const getContentColor = (type: ContentType) => {
    switch (type) {
      case 'introduction': return 'text-purple-400';
      case 'video': return 'text-red-500';
      case 'keyPoints': return 'text-green-500';
      case 'shortVideo': return 'text-blue-400';
      case 'image': return 'text-yellow-400';
      case 'quiz': return 'text-orange-400';
      case 'bonus': return 'text-yellow-400';
      case 'playground': return 'text-green-400';
    }
  };

  const isCompleted = (index: number) => {
    const contentKey = `${sectionIndex}-${index}`;
    return completedContents.includes(contentKey);
  };

  const isQuizTab = (type: ContentType) => type === 'quiz';
  const isPlaygroundTab = (type: ContentType) => type === 'playground';

  return (
    <div className="relative mb-8">
      {/* Progress line connecting the steps */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-purple-500/30 -translate-y-1/2 z-0"></div>
      
      {/* Steps container */}
      <div className="flex justify-between relative z-10">
        {contentTypes.map((type, index) => {
          const isActive = currentContentIndex === index;
          const isDone = isCompleted(index);
          const stepNumber = index + 1;
          const isQuiz = isQuizTab(type);
          const isPlayground = isPlaygroundTab(type);
          
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => onTabClick(index)}
                  className={`
                    w-6 h-6 rounded-full flex items-center justify-center transition-all 
                    ${isActive 
                      ? isQuiz 
                        ? "bg-orange-600 text-white shadow-md shadow-orange-500/30" 
                        : isPlayground
                          ? "bg-green-600 text-white shadow-md shadow-green-500/30"
                          : "bg-purple-600 text-white shadow-md shadow-purple-500/30"
                      : isDone
                        ? "bg-purple-800/80 text-purple-300 border border-purple-500/50"
                        : isQuiz
                          ? "bg-orange-900/80 text-orange-300 border border-orange-500/50 hover:bg-orange-800"
                          : isPlayground
                            ? "bg-green-900/80 text-green-300 border border-green-500/50 hover:bg-green-800"
                            : "bg-gray-800/80 text-gray-400 border border-purple-500/20 hover:bg-gray-700"
                    }
                    ${(isQuiz || isPlayground) && !isActive && !isDone ? "animate-pulse" : ""}
                  `}
                  aria-label={`Step ${stepNumber}: ${getContentTitle(type)}`}
                >
                  {isDone ? (
                    <Star className="h-3 w-3 text-yellow-400" />
                  ) : (
                    <span className="text-xs font-semibold">{stepNumber}</span>
                  )}
                </button>
                
                <div className={`flex items-center gap-1 text-xs font-medium ${
                  isActive 
                    ? isQuiz ? "text-orange-300" : isPlayground ? "text-green-300" : "text-purple-300" 
                    : "text-gray-400"
                }`}>
                  <span className={getContentColor(type)}>
                    {getContentIcon(type)}
                  </span>
                  <span className="hidden sm:inline">
                    {getContentTitle(type)}
                    {(isQuiz || isPlayground) && !isDone && (
                      <span className="ml-1 text-orange-400 font-bold">★</span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
