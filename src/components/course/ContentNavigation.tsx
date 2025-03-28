
import { ContentType } from "@/pages/CourseStartPage";
import { FileText, Youtube, CheckCircle, Video, Image, HelpCircle } from "lucide-react";

interface ContentNavigationProps {
  title: string;
  contentType: ContentType;
  availableContentTypes: ContentType[];
  currentContentIndex: number;
}

export const ContentNavigation = ({
  title,
  contentType,
  availableContentTypes,
  currentContentIndex
}: ContentNavigationProps) => {
  const getContentIcon = (type: ContentType) => {
    switch (type) {
      case 'introduction': return <FileText className="h-5 w-5 text-purple-400" />;
      case 'video': return <Youtube className="h-5 w-5 text-red-500" />;
      case 'keyPoints': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'shortVideo': return <Video className="h-5 w-5 text-blue-400" />;
      case 'image': return <Image className="h-5 w-5 text-yellow-400" />;
      case 'quiz': return <HelpCircle className="h-5 w-5 text-orange-400" />;
    }
  };

  const getContentTitle = (type: ContentType) => {
    switch (type) {
      case 'introduction': return 'Introduction';
      case 'video': return 'Main Lesson';
      case 'keyPoints': return 'Key Points';
      case 'shortVideo': return 'Additional Short Video';
      case 'image': return 'Visual Example';
      case 'quiz': return 'Challenge Yourself';
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-purple-100">{title}</h2>
        <div className="flex items-center space-x-1">
          {availableContentTypes.map((type, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full ${currentContentIndex === index ? 'bg-purple-500' : 'bg-purple-500/30'}`}
            />
          ))}
        </div>
      </div>
      
      <div className="flex items-center mb-4 text-sm text-purple-300">
        {getContentIcon(contentType)}
        <span className="ml-2">{getContentTitle(contentType)}</span>
      </div>
    </>
  );
};
