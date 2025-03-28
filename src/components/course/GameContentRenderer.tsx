
import { CourseSection } from "@/types/course";
import { ContentType } from "@/hooks/useGameLearning";
import { Button } from "@/components/ui/button";
import { CheckCircle, Youtube, Video, Image, HelpCircle, Award, Lightbulb, FileText } from "lucide-react";

interface GameContentRendererProps {
  contentType: ContentType;
  currentSection: CourseSection;
  quizSubmitted: boolean;
  selectedAnswer: number | null;
  setSelectedAnswer: (answer: number) => void;
  handleQuizSubmit: () => void;
}

export const GameContentRenderer = ({
  contentType,
  currentSection,
  quizSubmitted,
  selectedAnswer,
  setSelectedAnswer,
  handleQuizSubmit
}: GameContentRendererProps) => {
  
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
    <h3 className="text-lg font-semibold text-purple-200 mb-2 flex items-center">
      <FileText className="h-5 w-5 text-purple-400 mr-2" />
      Introduction
    </h3>
    <div className="p-4 bg-space-cosmic-blue/20 backdrop-blur-sm rounded-lg border border-purple-500/20">
      <p className="text-gray-200">{section.introduction}</p>
    </div>
    
    <div className="mt-4 p-4 rounded-md bg-blue-900/30 border border-yellow-400/20">
      <h4 className="text-md font-semibold text-yellow-300 mb-1 flex items-center">
        <Lightbulb className="h-5 w-5 text-yellow-400 mr-2" />
        Why Learn This?
      </h4>
      <p className="text-gray-300 italic">{section.whyLearn}</p>
    </div>
  </div>
);

const VideoContent = ({ section }: { section: CourseSection }) => (
  <div className="prose prose-invert max-w-none">
    <h3 className="text-lg font-semibold text-purple-200 mb-3 flex items-center">
      <Youtube className="h-5 w-5 text-red-500 mr-2" />
      Main Lesson
    </h3>
    <div className="aspect-video rounded-lg overflow-hidden border border-purple-500/20 shadow-lg">
      <iframe 
        className="w-full h-full"
        src={section.videoUrl}
        title={`Video for ${section.title}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    <p className="text-sm text-purple-300 mt-2 text-center">
      Complete this video to earn 10 XP points!
    </p>
  </div>
);

const KeyPointsContent = ({ section }: { section: CourseSection }) => (
  <div className="prose prose-invert max-w-none">
    <h3 className="text-lg font-semibold text-purple-200 mb-2 flex items-center">
      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
      Key Points
    </h3>
    <div className="p-4 bg-space-cosmic-blue/20 backdrop-blur-sm rounded-lg border border-purple-500/20">
      <ul className="space-y-2 mb-2">
        {section.keyPoints.map((point, idx) => (
          <li key={idx} className="flex items-start animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
            <span className="text-gray-200">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ShortVideoContent = ({ section }: { section: CourseSection }) => (
  <div className="prose prose-invert max-w-none">
    <h3 className="text-lg font-semibold text-purple-200 mb-3 flex items-center">
      <Video className="h-5 w-5 text-blue-400 mr-2" />
      Additional Short Video
    </h3>
    <div className="aspect-video rounded-lg overflow-hidden border border-purple-500/20 shadow-lg">
      <iframe 
        className="w-full h-full"
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
    <h3 className="text-lg font-semibold text-purple-200 mb-3 flex items-center">
      <Image className="h-5 w-5 text-yellow-400 mr-2" />
      Visual Example
    </h3>
    <div className="relative overflow-hidden rounded-lg border border-purple-500/20 shadow-lg">
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
    <h3 className="text-lg font-semibold text-yellow-300 mb-4 flex items-center">
      <HelpCircle className="h-5 w-5 text-orange-400 mr-2" />
      Challenge Yourself
    </h3>
    <div className="p-4 bg-space-cosmic-blue/20 backdrop-blur-sm rounded-lg border border-purple-500/20 mb-4">
      <p className="text-white">{section.quiz.question}</p>
    </div>
    
    <div className="space-y-3 mb-4">
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
      <div className="flex justify-center">
        <Button 
          onClick={handleQuizSubmit}
          disabled={selectedAnswer === null}
          className="bg-purple-600 hover:bg-purple-700"
        >
          Submit Answer
        </Button>
      </div>
    )}
    
    {quizSubmitted && (
      <div className="mt-4 p-4 rounded-md bg-space-cosmic-blue/20 border border-purple-400/20">
        {selectedAnswer === section.quiz.correctAnswer ? (
          <div className="flex items-center">
            <Award className="h-6 w-6 text-yellow-400 mr-2" />
            <div>
              <p className="text-green-400 font-semibold">✓ Correct! Well done.</p>
              <p className="text-sm text-purple-300">+20 XP bonus for correct answer!</p>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-red-400">✗ Not quite. The correct answer is:</p>
            <p className="text-white mt-2 p-2 bg-green-900/20 border border-green-500/20 rounded">
              {section.quiz.options[section.quiz.correctAnswer]}
            </p>
          </div>
        )}
      </div>
    )}
  </div>
);
