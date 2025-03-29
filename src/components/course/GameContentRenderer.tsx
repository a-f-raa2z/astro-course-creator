
import { CourseSection } from "@/types/course";
import { ContentType } from "@/types/ContentType";
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
  contentType: ContentType | string;
  currentSection: CourseSection | null;
  quizSubmitted: boolean;
  selectedAnswer: number | null;
  setSelectedAnswer: (answer: number | null) => void;
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
  
  if (!currentSection) {
    return <div className="w-full h-full flex items-center justify-center text-white">Loading course content...</div>;
  }
  
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
    case 'key-points':
    case 'keyPoints':
      return <KeyPointsContent 
               section={currentSection} 
               onComplete={handleNextContent}
               onPrevious={handlePreviousContent}
               isFirstContent={isFirstContent}
             />;
    case 'short-video':
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
