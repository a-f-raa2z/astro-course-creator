
import { CourseSection } from "@/types/course";
import { ContentType } from "@/hooks/useGameLearning";
import { IntroductionContent } from "./content/IntroductionContent";
import { VideoContent } from "./content/VideoContent";
import { KeyPointsContent } from "./content/KeyPointsContent";
import { ShortVideoContent } from "./content/ShortVideoContent";
import { ImageContent } from "./content/ImageContent";
import { QuizContent } from "./content/QuizContent";
import { BonusVideoContent } from "./content/BonusVideoContent";
import { PlaygroundContent } from "./content/PlaygroundContent";
import { SectionTransition } from "./content/SectionTransition";

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
  showSectionTransition?: boolean;
  nextSectionTitle?: string;
  onStartNextSection?: () => void;
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
  isFirstContent,
  showSectionTransition = false,
  nextSectionTitle,
  onStartNextSection
}: GameContentRendererProps) => {
  
  if (showSectionTransition && nextSectionTitle) {
    return (
      <SectionTransition 
        currentSectionTitle={currentSection.title}
        nextSectionTitle={nextSectionTitle}
        onStartNextSection={onStartNextSection || handleNextContent}
      />
    );
  }
  
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
    case 'playground':
      return <PlaygroundContent
               section={currentSection}
               onComplete={handleNextContent}
               onPrevious={handlePreviousContent}
               isFirstContent={isFirstContent}
             />;
    case 'bonus':
      return <BonusVideoContent
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
