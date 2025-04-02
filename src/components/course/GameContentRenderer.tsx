
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
import { FunFactsContent } from "./content/FunFactsContent";
import { VisualGalleryContent } from "./content/VisualGalleryContent";

interface GameContentRendererProps {
  contentType: ContentType | ContentType['type'];
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
  nextSection?: CourseSection | null;
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
  onStartNextSection,
  nextSection
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
  
  // Get the actual content type string 
  const type = typeof contentType === 'string' ? contentType : contentType.type;
  
  // Set default intro texts if not provided
  const defaultIntros = {
    keyPoints: "Here are the key points from this section that you should remember:",
    shortVideo: "Let's check out some fun and interesting facts related to this topic:",
    image: "Visual representation can help cement your understanding. Take a moment to study this image:",
    quiz: "Test your knowledge with these quick quizzes about what you've learned:",
    playground: "Try out this interactive playground to explore the concepts hands-on:",
    bonus: "Here's some bonus content to deepen your understanding:",
    funFacts: "Check out these fun facts about this topic:",
    visualGallery: "Browse this visual gallery to see more images related to this topic:"
  };
  
  // Process section to ensure it has intro texts
  const processedSection = {
    ...currentSection,
    keyPointsIntro: currentSection.keyPointsIntro || defaultIntros.keyPoints,
    shortVideoIntro: currentSection.shortVideoIntro || defaultIntros.shortVideo,
    image: {
      ...currentSection.image,
      intro: currentSection.image?.intro || defaultIntros.image
    },
    quizIntro: currentSection.quizIntro || defaultIntros.quiz,
    visualIntro: currentSection.visualIntro || defaultIntros.playground,
    bonusIntro: currentSection.bonusIntro || defaultIntros.bonus,
    quizzes: currentSection.quizzes || [currentSection.quiz]
  };
  
  switch (type) {
    case 'introduction':
      return <IntroductionContent 
               section={processedSection} 
               onComplete={handleNextContent} 
               onPrevious={handlePreviousContent}
               isFirstContent={isFirstContent}
             />;
    case 'video':
      return <VideoContent 
               section={processedSection} 
               onComplete={handleNextContent}
               onPrevious={handlePreviousContent}
               isFirstContent={isFirstContent}
             />;
    case 'key-points':
    case 'keyPoints':
      return <KeyPointsContent 
               section={processedSection} 
               onComplete={handleNextContent}
               onPrevious={handlePreviousContent}
               isFirstContent={isFirstContent}
             />;
    case 'short-video':
    case 'shortVideo':
      return <ShortVideoContent 
               section={processedSection} 
               onComplete={handleNextContent}
               onPrevious={handlePreviousContent}
               isFirstContent={isFirstContent}
             />;
    case 'image':
      return <ImageContent 
               section={processedSection} 
               onComplete={handleNextContent}
               onPrevious={handlePreviousContent} 
               isFirstContent={isFirstContent}
             />;
    case 'playground':
      return <PlaygroundContent
               section={processedSection}
               onComplete={handleNextContent}
               onPrevious={handlePreviousContent}
               isFirstContent={isFirstContent}
             />;
    case 'bonus':
      return <BonusVideoContent
               section={processedSection}
               onComplete={handleNextContent}
               onPrevious={handlePreviousContent}
               isFirstContent={isFirstContent}
             />;
    case 'fun-facts':
    case 'funFacts':
      return <FunFactsContent
               section={processedSection}
               onComplete={handleNextContent}
               onPrevious={handlePreviousContent}
               isFirstContent={isFirstContent}
             />;
    case 'visual-gallery':
    case 'visualGallery':
      return <VisualGalleryContent
               section={processedSection}
               onComplete={handleNextContent}
               onPrevious={handlePreviousContent}
               isFirstContent={isFirstContent}
             />;
    case 'quiz':
      return (
        <QuizContent
          section={processedSection}
          quizSubmitted={quizSubmitted}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          handleQuizSubmit={handleQuizSubmit}
          onComplete={handleNextContent}
          onPrevious={handlePreviousContent}
          isFirstContent={isFirstContent}
          nextSection={nextSection}
          onStartNextSection={onStartNextSection}
        />
      );
    default:
      return null;
  }
};
