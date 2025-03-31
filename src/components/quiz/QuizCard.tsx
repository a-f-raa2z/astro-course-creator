
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { CourseSection } from "@/types/course";
import { ContentType } from "@/types/ContentType";

interface QuizCardProps {
  section: CourseSection;
  contentType: ContentType['type'];
  question: string;
  onStartQuiz: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  section,
  contentType,
  question,
  onStartQuiz
}) => {
  // Get icon and background color based on content type
  const getContentTypeStyles = () => {
    switch (contentType) {
      case 'introduction':
        return { bgColor: 'bg-blue-900/40', borderColor: 'border-blue-500/30' };
      case 'video':
        return { bgColor: 'bg-red-900/40', borderColor: 'border-red-500/30' };
      case 'short-video':
        return { bgColor: 'bg-orange-900/40', borderColor: 'border-orange-500/30' };
      case 'image':
        return { bgColor: 'bg-green-900/40', borderColor: 'border-green-500/30' };
      case 'playground':
        return { bgColor: 'bg-indigo-900/40', borderColor: 'border-indigo-500/30' };
      case 'bonus':
        return { bgColor: 'bg-yellow-900/40', borderColor: 'border-yellow-500/30' };
      case 'quiz':
        return { bgColor: 'bg-purple-900/40', borderColor: 'border-purple-500/30' };
      default:
        return { bgColor: 'bg-gray-900/40', borderColor: 'border-gray-500/30' };
    }
  };

  const getContentTypeLabel = () => {
    switch (contentType) {
      case 'introduction':
        return 'Introduction';
      case 'video':
        return 'Video Lesson';
      case 'short-video':
        return 'Short Video';
      case 'image':
        return 'Visual Content';
      case 'playground':
        return 'Interactive Model';
      case 'bonus':
        return 'Bonus Content';
      case 'quiz':
        return 'Challenge Quiz';
      default:
        return 'Content';
    }
  };

  const { bgColor, borderColor } = getContentTypeStyles();

  return (
    <Card className={`overflow-hidden hover:shadow-purple-500/20 hover:shadow-md transition-all ${bgColor} border ${borderColor}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-white text-lg font-medium">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-black/20 rounded-md px-3 py-1 text-xs inline-block text-white mb-2">
          {getContentTypeLabel()}
        </div>
        
        <p className="text-gray-300 text-sm line-clamp-2">
          {contentType === 'introduction' && section.introduction.substring(0, 100) + '...'}
          {contentType === 'video' && 'Video content about ' + section.title}
          {contentType === 'short-video' && 'Quick facts and interesting information'}
          {contentType === 'image' && section.image.description.substring(0, 100) + '...'}
          {contentType === 'playground' && 'Interactive exploration of concepts'}
          {contentType === 'bonus' && 'Additional learning material'}
          {contentType === 'quiz' && 'Test your knowledge with a quiz about ' + section.title}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          onClick={onStartQuiz}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          size="sm"
        >
          <Play className="mr-2 h-4 w-4" /> Start Quiz
        </Button>
      </CardFooter>
    </Card>
  );
};
