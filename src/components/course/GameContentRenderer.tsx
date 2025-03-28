
import { useState } from "react";
import { CourseSection } from "@/types/course";
import { ContentType } from "@/hooks/useGameLearning";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Youtube, 
  Video, 
  Image, 
  HelpCircle, 
  Award, 
  Lightbulb, 
  FileText,
  ArrowRight,
  RotateCw,
  CheckSquare,
  SlidersHorizontal
} from "lucide-react";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface GameContentRendererProps {
  contentType: ContentType;
  currentSection: CourseSection;
  quizSubmitted: boolean;
  selectedAnswer: number | null;
  setSelectedAnswer: (answer: number) => void;
  handleQuizSubmit: () => void;
  handleNextContent: () => void;
}

export const GameContentRenderer = ({
  contentType,
  currentSection,
  quizSubmitted,
  selectedAnswer,
  setSelectedAnswer,
  handleQuizSubmit,
  handleNextContent
}: GameContentRendererProps) => {
  
  switch (contentType) {
    case 'introduction':
      return <IntroductionContent section={currentSection} onComplete={handleNextContent} />;
    case 'video':
      return <VideoContent section={currentSection} onComplete={handleNextContent} />;
    case 'keyPoints':
      return <KeyPointsContent section={currentSection} onComplete={handleNextContent} />;
    case 'shortVideo':
      if (!currentSection.shortVideo) return null;
      return <ShortVideoContent section={currentSection} onComplete={handleNextContent} />;
    case 'image':
      return <ImageContent section={currentSection} onComplete={handleNextContent} />;
    case 'quiz':
      return (
        <QuizContent
          section={currentSection}
          quizSubmitted={quizSubmitted}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          handleQuizSubmit={handleQuizSubmit}
          onComplete={handleNextContent}
        />
      );
    default:
      return null;
  }
};

// Title wrapper with rectangle styling
const TitleWrapper = ({ icon, title, color }: { icon: React.ReactNode; title: string; color: string }) => (
  <div className="mb-4">
    <div className={`inline-block px-3 py-2 rounded-md ${color} border border-purple-400/30`}>
      <h3 className="text-lg font-semibold text-white flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h3>
    </div>
  </div>
);

// Card flip animation for Introduction
const IntroductionContent = ({ section, onComplete }: { section: CourseSection; onComplete: () => void }) => {
  const [flipped, setFlipped] = useState(false);
  const { toast } = useToast();
  
  const handleFlip = () => {
    setFlipped(!flipped);
    if (!flipped) {
      toast({
        title: "Card Flipped!",
        description: "Now you can continue to the next content."
      });
    }
  };
  
  return (
    <div className="h-[400px] w-full">
      <div className={`relative w-full h-full transition-transform duration-700 ${flipped ? 'rotate-y-180' : ''}`} style={{ perspective: '1000px' }}>
        {/* Front of card */}
        <div className={`absolute w-full h-full backface-hidden ${flipped ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}>
          <Card className="w-full h-full overflow-auto p-4 bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
            <TitleWrapper 
              icon={<FileText className="h-5 w-5 text-purple-400 mr-2" />}
              title="Introduction" 
              color="bg-purple-800/50"
            />
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200">{section.introduction}</p>
            </div>
            
            <div className="absolute bottom-4 right-4">
              <Button 
                onClick={handleFlip}
                className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2"
              >
                <RotateCw className="h-4 w-4" /> Flip Card
              </Button>
            </div>
          </Card>
        </div>
        
        {/* Back of card */}
        <div className={`absolute w-full h-full backface-hidden rotate-y-180 ${flipped ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
          <Card className="w-full h-full overflow-auto p-4 bg-purple-900/20 backdrop-blur-sm border border-purple-500/20">
            <TitleWrapper 
              icon={<Lightbulb className="h-5 w-5 text-yellow-400 mr-2" />}
              title="Why Learn This?" 
              color="bg-yellow-800/30"
            />
            
            <p className="text-gray-300 italic">{section.whyLearn}</p>
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <Button 
                onClick={handleFlip}
                variant="outline"
                className="border-purple-500/30 text-purple-300"
              >
                <RotateCw className="h-4 w-4 mr-2" /> Flip Back
              </Button>
              
              <Button 
                onClick={onComplete}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                Continue <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

// Video with progress tracking
const VideoContent = ({ section, onComplete }: { section: CourseSection; onComplete: () => void }) => {
  const [videoProgress, setVideoProgress] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const { toast } = useToast();
  
  // Simulate video progress
  const handleVideoProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = Math.min(100, Math.max(0, (offsetX / rect.width) * 100));
    
    setVideoProgress(newProgress);
    
    if (newProgress >= 95 && !showContinue) {
      setShowContinue(true);
      toast({
        title: "Video Completed!",
        description: "Great job! You can now continue to the next section."
      });
    }
  };
  
  return (
    <div className="h-[400px] w-full">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          <TitleWrapper 
            icon={<Youtube className="h-5 w-5 text-red-500 mr-2" />}
            title="Main Lesson" 
            color="bg-red-900/30"
          />
        </div>
        
        <div className="flex-grow relative overflow-hidden">
          <iframe 
            className="w-full h-full"
            src={section.videoUrl}
            title={`Video for ${section.title}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="p-4">
          <p className="text-sm text-purple-300 mb-2">
            Drag to complete the video:
          </p>
          
          <div 
            className="h-4 bg-gray-800 rounded-full overflow-hidden cursor-pointer"
            onClick={handleVideoProgress}
          >
            <div 
              className="h-full bg-gradient-to-r from-purple-600 to-purple-500 rounded-full transition-all"
              style={{ width: `${videoProgress}%` }}
            ></div>
          </div>
          
          {showContinue && (
            <div className="flex justify-end mt-4">
              <Button 
                onClick={onComplete}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 animate-fade-in"
              >
                Continue <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

// Key points with checkboxes
const KeyPointsContent = ({ section, onComplete }: { section: CourseSection; onComplete: () => void }) => {
  const [checkedPoints, setCheckedPoints] = useState<number[]>([]);
  const { toast } = useToast();
  
  const handleCheck = (idx: number) => {
    if (checkedPoints.includes(idx)) {
      setCheckedPoints(checkedPoints.filter(i => i !== idx));
    } else {
      const newCheckedPoints = [...checkedPoints, idx];
      setCheckedPoints(newCheckedPoints);
      
      if (newCheckedPoints.length === section.keyPoints.length) {
        toast({
          title: "All Points Checked!",
          description: "You've reviewed all the key points. Great job!"
        });
      }
    }
  };
  
  const allChecked = checkedPoints.length === section.keyPoints.length;
  
  return (
    <div className="h-[400px] w-full">
      <Card className="w-full h-full overflow-auto p-4 bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <TitleWrapper 
          icon={<CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
          title="Key Points" 
          color="bg-green-900/30"
        />
        
        <div className="space-y-3 mb-4">
          {section.keyPoints.map((point, idx) => (
            <div 
              key={idx} 
              className={`flex items-start p-3 rounded-md border ${
                checkedPoints.includes(idx) 
                  ? "border-green-500/50 bg-green-900/20" 
                  : "border-purple-500/20 bg-space-cosmic-blue/10"
              }`}
            >
              <Checkbox 
                id={`point-${idx}`} 
                checked={checkedPoints.includes(idx)}
                onCheckedChange={() => handleCheck(idx)}
                className="mr-2 mt-1 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
              />
              <label 
                htmlFor={`point-${idx}`} 
                className={`text-gray-200 ${checkedPoints.includes(idx) ? "line-through text-gray-400" : ""}`}
              >
                {point}
              </label>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={onComplete}
            className={`
              transition-all ${allChecked 
                ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" 
                : "bg-gray-700 text-gray-300 cursor-not-allowed"
              }
            `}
            disabled={!allChecked}
          >
            <CheckSquare className="h-4 w-4 mr-2" />
            {allChecked ? "Continue" : `Check all points (${checkedPoints.length}/${section.keyPoints.length})`}
          </Button>
        </div>
      </Card>
    </div>
  );
};

// Short video with same interaction as main video
const ShortVideoContent = ({ section, onComplete }: { section: CourseSection; onComplete: () => void }) => {
  const [videoProgress, setVideoProgress] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const { toast } = useToast();
  
  const handleVideoProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = Math.min(100, Math.max(0, (offsetX / rect.width) * 100));
    
    setVideoProgress(newProgress);
    
    if (newProgress >= 95 && !showContinue) {
      setShowContinue(true);
      toast({
        title: "Bonus Video Completed!",
        description: "Extra knowledge unlocked!"
      });
    }
  };
  
  return (
    <div className="h-[400px] w-full">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          <TitleWrapper 
            icon={<Video className="h-5 w-5 text-blue-400 mr-2" />}
            title="Additional Short Video" 
            color="bg-blue-900/30"
          />
        </div>
        
        <div className="flex-grow relative overflow-hidden">
          <iframe 
            className="w-full h-full"
            src={section.shortVideo}
            title={`Short video for ${section.title}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="p-4">
          <p className="text-sm text-blue-300 mb-2">
            Drag to complete the bonus video:
          </p>
          
          <div 
            className="h-4 bg-gray-800 rounded-full overflow-hidden cursor-pointer"
            onClick={handleVideoProgress}
          >
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full transition-all"
              style={{ width: `${videoProgress}%` }}
            ></div>
          </div>
          
          {showContinue && (
            <div className="flex justify-end mt-4">
              <Button 
                onClick={onComplete}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 animate-fade-in"
              >
                Continue <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

// Image carousel
const ImageContent = ({ section, onComplete }: { section: CourseSection; onComplete: () => void }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const { toast } = useToast();
  
  // Sample images - in a real app, these would come from the section data
  const images = [
    { url: section.image.url, description: section.image.description },
    { url: section.image.url, description: "Additional perspective on the concept" },
    { url: section.image.url, description: "Final example to reinforce learning" }
  ];
  
  const handleSlide = () => {
    const nextIndex = (slideIndex + 1) % images.length;
    setSlideIndex(nextIndex);
    
    if (nextIndex === images.length - 1) {
      setShowContinue(true);
      toast({
        title: "All Images Viewed!",
        description: "You've seen all the visual examples."
      });
    }
  };
  
  return (
    <div className="h-[400px] w-full">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          <TitleWrapper 
            icon={<Image className="h-5 w-5 text-yellow-400 mr-2" />}
            title="Visual Example" 
            color="bg-yellow-900/30"
          />
        </div>
        
        <div className="flex-grow relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 opacity-100">
            <img 
              src={images[slideIndex].url} 
              alt={images[slideIndex].description} 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-sm text-white">{images[slideIndex].description}</p>
            
            <div className="flex justify-between items-center mt-2">
              <div className="flex space-x-1">
                {images.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-2 h-2 rounded-full ${
                      idx === slideIndex ? "bg-yellow-400" : "bg-gray-600"
                    }`}
                  ></div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-white/30"
                onClick={handleSlide}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                {slideIndex < images.length - 1 ? "Next Image" : "Start Over"}
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          {showContinue && (
            <div className="flex justify-end">
              <Button 
                onClick={onComplete}
                className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 animate-fade-in text-white"
              >
                Continue <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

// Quiz with correct answer required
const QuizContent = ({ 
  section,
  quizSubmitted,
  selectedAnswer,
  setSelectedAnswer,
  handleQuizSubmit,
  onComplete
}: {
  section: CourseSection,
  quizSubmitted: boolean;
  selectedAnswer: number | null;
  setSelectedAnswer: (answer: number) => void;
  handleQuizSubmit: () => void;
  onComplete: () => void;
}) => (
  <div className="h-[400px] w-full">
    <Card className="w-full h-full overflow-auto p-4 bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
      <TitleWrapper 
        icon={<HelpCircle className="h-5 w-5 text-orange-400 mr-2" />}
        title="Challenge Yourself" 
        color="bg-orange-900/30"
      />
      
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
          
          <div className="flex justify-end mt-4">
            <Button
              onClick={onComplete}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              disabled={selectedAnswer !== section.quiz.correctAnswer}
            >
              {selectedAnswer === section.quiz.correctAnswer ? (
                <>Continue <ArrowRight className="ml-2 h-4 w-4" /></>
              ) : (
                "Try Again"
              )}
            </Button>
          </div>
        </div>
      )}
    </Card>
  </div>
);
