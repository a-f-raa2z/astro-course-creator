
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Sun, Globe, Moon, Stars, Rocket, Telescope, Satellite, CheckCircle } from "lucide-react";
import { CourseSection } from "@/types/course";
import { ContentType } from "@/types/ContentType";

interface QuizCardProps {
  section: CourseSection;
  contentType: ContentType['type'];
  question: string;
  onStartQuiz: () => void;
  sectionIndex: number;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  section,
  contentType,
  question,
  onStartQuiz,
  sectionIndex
}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  
  useEffect(() => {
    // Check if this quiz is completed
    const completedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes') || '{}');
    const quizKey = `${sectionIndex}-${contentType}`;
    setIsCompleted(completedQuizzes[quizKey] === true);
  }, [sectionIndex, contentType]);

  // Get section-specific icon based on section title
  const getSectionIcon = () => {
    switch (section.title) {
      case "The Solar System":
        return <Sun className="h-4 w-4 text-yellow-400" />;
      case "Earth":
        return <Globe className="h-4 w-4 text-blue-400" />;
      case "The Moon":
        return <Moon className="h-4 w-4 text-gray-300" />;
      case "Stars":
        return <Stars className="h-4 w-4 text-yellow-300" />;
      case "The Inner Planets":
        return <Rocket className="h-4 w-4 text-orange-400" />;
      case "Telescopes":
        return <Telescope className="h-4 w-4 text-purple-400" />;
      case "Space Exploration":
        return <Rocket className="h-4 w-4 text-red-400" />;
      case "Satellites":
        return <Satellite className="h-4 w-4 text-blue-300" />;
      default:
        return <Rocket className="h-4 w-4 text-purple-400" />;
    }
  };
  
  // Get icon and background color based on content type
  const getContentTypeStyles = () => {
    if (isCompleted) {
      return { bgColor: 'bg-green-900/40', borderColor: 'border-green-500/30' };
    }
    
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
    if (isCompleted) {
      return 'Completed';
    }
    
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
        <CardTitle className="text-white text-lg font-medium flex items-center">
          {getSectionIcon()}
          <span className="ml-2">{question}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`${isCompleted ? 'bg-green-800/30 text-green-300' : 'bg-black/20 text-white'} rounded-md px-3 py-1 text-xs inline-block mb-2`}>
          {isCompleted && <CheckCircle className="inline-block h-3 w-3 mr-1" />}
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
          className={`w-full ${isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'} text-white`}
          size="sm"
        >
          <Play className="mr-2 h-4 w-4" /> {isCompleted ? 'Review' : 'Start Quiz'}
        </Button>
      </CardFooter>
    </Card>
  );
};
