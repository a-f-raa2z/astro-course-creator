
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Sun, Globe, Moon, Stars, Rocket, Telescope, Satellite, CheckCircle, Star } from "lucide-react";
import { CourseSection } from "@/types/course";
import { ContentType } from "@/types/ContentType";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  
  // Get solid background color and text color based on content type
  const getContentTypeStyles = () => {
    if (isCompleted) {
      return { 
        bgColor: 'rgba(47, 133, 90, 0.5)', // Semi-transparent green for completed
        textColor: 'text-white opacity-70' 
      };
    }
    
    switch (contentType) {
      case 'introduction':
        return { bgColor: '#1e3a8a', textColor: 'text-white' }; // Solid blue
      case 'video':
        return { bgColor: '#991b1b', textColor: 'text-white' }; // Solid red
      case 'short-video':
        return { bgColor: '#9a3412', textColor: 'text-white' }; // Solid orange
      case 'image':
        return { bgColor: '#065f46', textColor: 'text-white' }; // Solid green
      case 'playground':
        return { bgColor: '#4338ca', textColor: 'text-white' }; // Solid indigo
      case 'bonus':
        return { bgColor: '#854d0e', textColor: 'text-white' }; // Solid yellow
      case 'quiz':
        return { bgColor: '#6b21a8', textColor: 'text-white' }; // Solid purple
      default:
        return { bgColor: '#1f2937', textColor: 'text-white' }; // Solid gray
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

  const { bgColor, textColor } = getContentTypeStyles();

  return (
    <div className="w-[250px]">
      <AspectRatio ratio={1/1}>
        <Card 
          className={`overflow-hidden hover:shadow-purple-500/20 hover:shadow-md transition-all ${textColor} h-full`} 
          style={{ backgroundColor: bgColor, border: 'none' }}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              {getSectionIcon()}
              <span className="ml-2">{question}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <div className={`${isCompleted ? 'bg-green-800/50' : 'bg-black/30'} rounded-md px-3 py-1 text-xs inline-block`}>
                {isCompleted && <CheckCircle className="inline-block h-3 w-3 mr-1" />}
                {getContentTypeLabel()}
              </div>
              
              <div className="flex items-center">
                {isCompleted ? (
                  <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                ) : (
                  <Star className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </div>
            
            {!isCompleted && (
              <p className="text-sm line-clamp-2 opacity-90">
                {contentType === 'introduction' && section.introduction.substring(0, 100) + '...'}
                {contentType === 'video' && 'Video content about ' + section.title}
                {contentType === 'short-video' && 'Quick facts and interesting information'}
                {contentType === 'image' && section.image.description.substring(0, 100) + '...'}
                {contentType === 'playground' && 'Interactive exploration of concepts'}
                {contentType === 'bonus' && 'Additional learning material'}
                {contentType === 'quiz' && 'Test your knowledge with a quiz about ' + section.title}
              </p>
            )}
          </CardContent>
          <CardFooter className="pt-0 mt-auto">
            <Button 
              onClick={onStartQuiz}
              className={`w-full ${isCompleted ? 'bg-green-700/50 hover:bg-green-800/70' : 'bg-white/20 hover:bg-white/30'} ${isCompleted ? 'text-white/70' : 'text-white'}`}
              size="sm"
            >
              <Play className="mr-2 h-4 w-4" /> {isCompleted ? 'Review' : 'Start Quiz'}
            </Button>
          </CardFooter>
        </Card>
      </AspectRatio>
    </div>
  );
};
