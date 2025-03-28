
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
      case 'introduction': return <FileText className="h-5 w-5" />;
      case 'video': return <Youtube className="h-5 w-5" />;
      case 'keyPoints': return <CheckCircle className="h-5 w-5" />;
      case 'shortVideo': return <Video className="h-5 w-5" />;
      case 'image': return <Image className="h-5 w-5" />;
      case 'quiz': return <HelpCircle className="h-5 w-5" />;
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
    <div className="flex justify-center mt-2 mb-6">
      <div className="flex space-x-1 p-1 bg-space-cosmic-blue/30 backdrop-blur-sm rounded-xl overflow-x-auto">
        {contentTypes.map((type, index) => (
          <button
            key={index}
            onClick={() => onTabClick(index)}
            className={`px-3 py-2 rounded-lg flex items-center transition-all ${
              currentContentIndex === index
                ? "bg-purple-800/80 text-white shadow-md"
                : isCompleted(index)
                ? "bg-space-cosmic-blue/50 text-purple-300"
                : "bg-transparent text-purple-400/70 hover:bg-space-cosmic-blue/20"
            }`}
          >
            <span className={`mr-1.5 ${getContentColor(type)}`}>
              {getContentIcon(type)}
            </span>
            <span className="text-sm whitespace-nowrap">{getContentTitle(type)}</span>
            {isCompleted(index) && (
              <Star className="ml-1.5 h-3.5 w-3.5 text-yellow-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
