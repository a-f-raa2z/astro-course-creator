
import { ContentType } from "@/hooks/useGameLearning";
import { FileText, Youtube, CheckCircle, Video, Image, HelpCircle, Star } from "lucide-react";

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
    }
  };

  const getContentTitle = (type: ContentType) => {
    switch (type) {
      case 'introduction': return 'Intro';
      case 'video': return 'Video';
      case 'keyPoints': return 'Points';
      case 'shortVideo': return 'Bonus';
      case 'image': return 'Visual';
      case 'quiz': return 'Quiz';
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
    }
  };

  const isCompleted = (index: number) => {
    const contentKey = `${sectionIndex}-${index}`;
    return completedContents.includes(contentKey);
  };

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
          
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => onTabClick(index)}
                  className={`
                    w-6 h-6 rounded-full flex items-center justify-center transition-all 
                    ${isActive 
                      ? "bg-purple-600 text-white shadow-md shadow-purple-500/30" 
                      : isDone
                        ? "bg-purple-800/80 text-purple-300 border border-purple-500/50"
                        : "bg-gray-800/80 text-gray-400 border border-purple-500/20 hover:bg-gray-700"
                    }
                  `}
                  aria-label={`Step ${stepNumber}: ${getContentTitle(type)}`}
                >
                  {isDone ? (
                    <Star className="h-3 w-3 text-yellow-400" />
                  ) : (
                    <span className="text-xs font-semibold">{stepNumber}</span>
                  )}
                </button>
                
                <div className={`flex items-center gap-1 text-xs font-medium ${isActive ? "text-purple-300" : "text-gray-400"}`}>
                  <span className={getContentColor(type)}>
                    {getContentIcon(type)}
                  </span>
                  <span>{getContentTitle(type)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Mobile view - scrollable tabs */}
      <div className="md:hidden flex overflow-x-auto py-2 mt-4 gap-2 px-1">
        {contentTypes.map((type, index) => {
          const isActive = currentContentIndex === index;
          const isDone = isCompleted(index);
          const stepNumber = index + 1;
          
          return (
            <button
              key={index}
              onClick={() => onTabClick(index)}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap flex-shrink-0
                ${isActive 
                  ? "bg-purple-800 text-white" 
                  : isDone
                    ? "bg-purple-900/50 text-purple-300 border border-purple-500/30"
                    : "bg-gray-800/50 text-gray-400 border border-purple-500/20"
                }
              `}
            >
              <div className={`
                w-4 h-4 rounded-full flex items-center justify-center
                ${isActive 
                  ? "bg-purple-600" 
                  : isDone
                    ? "bg-purple-800"
                    : "bg-gray-700"
                }
              `}>
                {isDone ? (
                  <Star className="h-2 w-2 text-yellow-400" />
                ) : (
                  <span className="text-[10px]">{stepNumber}</span>
                )}
              </div>
              <span className={getContentColor(type)}>{getContentIcon(type)}</span>
              <span>{getContentTitle(type)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
