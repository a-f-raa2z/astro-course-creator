
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Course, CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

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
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <CardTitle className="text-xl text-purple-100">
          <span className="inline-block w-8 h-8 mr-3 rounded-full bg-nebula-purple text-white text-center leading-8">
            {index + 1}
          </span>
          {section.title}
        </CardTitle>
        <CollapsibleTrigger 
          className="p-2 hover:bg-purple-700/20 rounded-lg transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 
            <ChevronUp className="h-5 w-5 text-purple-300" /> : 
            <ChevronDown className="h-5 w-5 text-purple-300" />
          }
        </CollapsibleTrigger>
      </CardHeader>
      <Collapsible open={isOpen}>
        <CollapsibleContent>
          <CardContent className="pt-4">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-lg font-semibold text-purple-200 mb-2">Introduction</h3>
              <p className="text-gray-200 mb-6">{section.introduction}</p>
              
              <div className="my-6 aspect-video">
                <iframe 
                  className="w-full h-full rounded-lg"
                  src={section.videoUrl}
                  title={`Video for ${section.title}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
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
              
              <div className="my-6">
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
              
              <div className="mt-8 bg-nebula-purple/20 rounded-lg p-5 border border-purple-500/30">
                <h3 className="text-lg font-semibold text-star-yellow mb-4">Challenge Yourself</h3>
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
                          : "bg-space-cosmic-blue/50 hover:bg-space-cosmic-blue/70 border border-purple-400/20"
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
                    className="cosmic-button"
                  >
                    Submit Answer
                  </Button>
                )}
                
                {quizSubmitted && (
                  <div className="mt-4 p-3 rounded-md bg-space-cosmic-blue/30 border border-purple-400/20">
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
