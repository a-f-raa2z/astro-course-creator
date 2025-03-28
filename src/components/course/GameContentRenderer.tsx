
import { CourseSection } from "@/types/course";
import { ContentType } from "@/hooks/useGameLearning";
import { IntroductionContent } from "./content/IntroductionContent";
import { VideoContent } from "./content/VideoContent";
import { KeyPointsContent } from "./content/KeyPointsContent";
import { ShortVideoContent } from "./content/ShortVideoContent";
import { ImageContent } from "./content/ImageContent";
import { QuizContent } from "./content/QuizContent";

interface GameContentRendererProps {
  contentType: ContentType;
  currentSection: CourseSection;
  quizSubmitted: boolean;
  selectedAnswer: number | null;
  setSelectedAnswer: (answer: number) => void;
  handleQuizSubmit: () => void;
  handleNextContent: () => void;
  handlePreviousContent: () => void;
  isFirstContent: boolean;
}

export const GameContentRenderer = ({
  contentType,
  currentSection,
  quizSubmitted,
  selectedAnswer,
  setSelectedAnswer,
  handleQuizSubmit,
  handleNextContent,
  handlePreviousContent,
  isFirstContent
}: GameContentRendererProps) => {
  
  switch (contentType) {
    case 'introduction':
      return <IntroductionContent 
               section={currentSection} 
               onComplete={handleNextContent} 
               onPrevious={handlePreviousContent}
               isFirstContent={isFirstContent}
             />;
    case 'video':
      return <VideoContent 
               section={currentSection} 
               onComplete={handleNextContent}
               onPrevious={handlePreviousContent}
               isFirstContent={isFirstContent}
             />;
    case 'keyPoints':
      return <KeyPointsContent 
               section={currentSection} 
               onComplete={handleNextContent}
               onPrevious={handlePreviousContent}
               isFirstContent={isFirstContent}
             />;
    case 'shortVideo':
      if (!currentSection.shortVideo) return null;
      return <ShortVideoContent 
               section={currentSection} 
               onComplete={handleNextContent}
               onPrevious={handlePreviousContent}
               isFirstContent={isFirstContent}
             />;
    case 'image':
      return <ImageContent 
               section={currentSection} 
               onComplete={handleNextContent}
               onPrevious={handlePreviousContent} 
               isFirstContent={isFirstContent}
             />;
    case 'quiz':
      return (
        <QuizContent
          section={currentSection}
          quizSubmitted={quizSubmitted}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          handleQuizSubmit={handleQuizSubmit}
          onComplete={handleNextContent}
          onPrevious={handlePreviousContent}
          isFirstContent={isFirstContent}
        />
      );
    default:
      return null;
  }
};
