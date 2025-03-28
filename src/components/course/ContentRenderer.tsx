
import { CourseSection } from "@/types/course";
import { ContentType } from "@/pages/CourseStartPage";
import { Button } from "@/components/ui/button";
import { CheckCircle, Youtube, Video } from "lucide-react";

interface ContentRendererProps {
  contentType: ContentType;
  currentSection: CourseSection;
  quizSubmitted: boolean;
  selectedAnswer: number | null;
  setSelectedAnswer: (answer: number) => void;
  handleQuizSubmit: () => void;
}

export const ContentRenderer = ({
  contentType,
  currentSection,
  quizSubmitted,
  selectedAnswer,
  setSelectedAnswer,
  handleQuizSubmit
}: ContentRendererProps) => {
  
  switch (contentType) {
    case 'introduction':
      return <IntroductionContent section={currentSection} />;
    case 'video':
      return <VideoContent section={currentSection} />;
    case 'keyPoints':
      return <KeyPointsContent section={currentSection} />;
    case 'shortVideo':
      if (!currentSection.shortVideo) return null;
      return <ShortVideoContent section={currentSection} />;
    case 'image':
      return <ImageContent section={currentSection} />;
    case 'quiz':
      return (
        <QuizContent
          section={currentSection}
          quizSubmitted={quizSubmitted}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          handleQuizSubmit={handleQuizSubmit}
        />
      );
    default:
      return null;
  }
};

const IntroductionContent = ({ section }: { section: CourseSection }) => (
  <div className="prose prose-invert max-w-none">
    <h3 className="text-lg font-semibold text-purple-200 mb-2">Introduction</h3>
    <p className="text-gray-200">{section.introduction}</p>
    <div className="mt-4 p-3 rounded-md bg-blue-900/30 border border-purple-400/20">
      <h4 className="text-md font-semibold text-yellow-300 mb-1">Why Learn This?</h4>
      <p className="text-gray-300 italic">{section.whyLearn}</p>
    </div>
  </div>
);

const VideoContent = ({ section }: { section: CourseSection }) => (
  <div className="prose prose-invert max-w-none">
    <h3 className="text-lg font-semibold text-purple-200 mb-3 flex items-center">
      <Youtube className="inline-block mr-2 text-red-500" />
      Main Lesson
    </h3>
    <div className="aspect-video">
      <iframe 
        className="w-full h-full rounded-lg"
        src={section.videoUrl}
        title={`Video for ${section.title}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

const KeyPointsContent = ({ section }: { section: CourseSection }) => (
  <div className="prose prose-invert max-w-none">
    <h3 className="text-lg font-semibold text-purple-200 mb-2">Key Points</h3>
    <ul className="space-y-2 mb-6">
      {section.keyPoints.map((point, idx) => (
        <li key={idx} className="flex items-start">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
          <span className="text-gray-200">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ShortVideoContent = ({ section }: { section: CourseSection }) => (
  <div className="prose prose-invert max-w-none">
    <h3 className="text-lg font-semibold text-purple-200 mb-3 flex items-center">
      <Video className="inline-block mr-2 text-blue-400" />
      Additional Short Video
    </h3>
    <div className="aspect-video">
      <iframe 
        className="w-full h-full rounded-lg"
        src={section.shortVideo}
        title={`Short video for ${section.title}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

const ImageContent = ({ section }: { section: CourseSection }) => (
  <div className="prose prose-invert max-w-none">
    <h3 className="text-lg font-semibold text-purple-200 mb-3">Visual Example</h3>
    <div className="relative overflow-hidden rounded-lg">
      <img 
        src={section.image.url} 
        alt={section.image.description} 
        className="w-full object-cover h-64"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-sm text-white">{section.image.description}</p>
      </div>
    </div>
  </div>
);

const QuizContent = ({ 
  section,
  quizSubmitted,
  selectedAnswer,
  setSelectedAnswer,
  handleQuizSubmit 
}: {
  section: CourseSection,
  quizSubmitted: boolean;
  selectedAnswer: number | null;
  setSelectedAnswer: (answer: number) => void;
  handleQuizSubmit: () => void;
}) => (
  <div className="prose prose-invert max-w-none">
    <h3 className="text-lg font-semibold text-yellow-300 mb-4">Challenge Yourself</h3>
    <p className="mb-4 text-white">{section.quiz.question}</p>
    
    <div className="space-y-2 mb-4">
      {section.quiz.options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => !quizSubmitted && setSelectedAnswer(idx)}
          disabled={quizSubmitted}
          className={`w-full text-left p-3 rounded-md transition-all ${
            selectedAnswer === idx
              ? quizSubmitted
                ? idx === section.quiz.correctAnswer
                  ? "bg-green-600/30 border border-green-500"
                  : "bg-red-600/30 border border-red-500"
                : "bg-purple-700/50 border border-purple-500"
              : "bg-blue-900/50 hover:bg-blue-800/70 border border-purple-400/20"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
    
    {!quizSubmitted && (
      <Button 
        onClick={handleQuizSubmit}
        disabled={selectedAnswer === null}
        className="bg-purple-600 hover:bg-purple-700"
      >
        Submit Answer
      </Button>
    )}
    
    {quizSubmitted && (
      <div className="mt-4 p-3 rounded-md bg-blue-900/30 border border-purple-400/20">
        <p className="text-white">
          {selectedAnswer === section.quiz.correctAnswer
            ? "✓ Correct! Well done."
            : `✗ Not quite. The correct answer is: ${section.quiz.options[section.quiz.correctAnswer]}`}
        </p>
      </div>
    )}
  </div>
);
