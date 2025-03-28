
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Course, CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, CheckCircle, Youtube, Video } from "lucide-react";

interface CourseViewProps {
  course: Course;
}

const SectionCard = ({ section, index }: { section: CourseSection; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  return (
    <Card className="cosmic-card mb-6 overflow-visible">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex flex-row items-start justify-between p-6 pb-2">
          <CardTitle className="text-xl text-purple-100">
            <span className="inline-block w-8 h-8 mr-3 rounded-full bg-purple-600 text-white text-center leading-8">
              {index + 1}
            </span>
            {section.title}
          </CardTitle>
          <CollapsibleTrigger className="p-2 hover:bg-purple-700/20 rounded-lg transition-all cursor-pointer">
            {isOpen ? 
              <ChevronUp className="h-5 w-5 text-purple-300" /> : 
              <ChevronDown className="h-5 w-5 text-purple-300" />
            }
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <CardContent className="pt-4">
            <div className="prose prose-invert max-w-none">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Introduction</h3>
                <p className="text-gray-200">{section.introduction}</p>
                <p className="text-gray-300 mt-2 italic">{section.whyLearn}</p>
              </div>
              
              <div className="my-6 rounded-lg overflow-hidden">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">
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

              <h3 className="text-lg font-semibold text-purple-200 mt-8 mb-2">Key Points</h3>
              <ul className="space-y-2 mb-6">
                {section.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-200">{point}</span>
                  </li>
                ))}
              </ul>
              
              {section.shortVideo && (
                <div className="my-8 rounded-lg overflow-hidden">
                  <h3 className="text-lg font-semibold text-purple-200 mb-3">
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
              )}
              
              <div className="my-6">
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
              
              <div className="mt-8 bg-purple-900/20 rounded-lg p-5 border border-purple-500/30">
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
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

const CourseView = ({ course }: CourseViewProps) => {
  return (
    <div className="space-y-4">
      {course.sections.map((section, index) => (
        <SectionCard key={section.id} section={section} index={index} />
      ))}
    </div>
  );
};

export default CourseView;
