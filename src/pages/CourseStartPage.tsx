
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Course, CourseSection } from "@/types/course";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle, Youtube, Video } from "lucide-react";

const CourseStartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // If no course data is available, redirect to the course page
  if (!course) {
    navigate("/course");
    return null;
  }

  const currentSection = course.sections[currentSectionIndex];
  
  const handleNext = () => {
    if (currentSectionIndex < course.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setQuizSubmitted(false);
      setSelectedAnswer(null);
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setQuizSubmitted(false);
      setSelectedAnswer(null);
    }
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  return (
    <div className="bg-space min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">
            {course.title} - Section {currentSectionIndex + 1}
          </h1>
          <div className="flex space-x-2">
            <Button 
              onClick={handlePrevious} 
              disabled={currentSectionIndex === 0}
              variant="outline"
              className="border-purple-400/30 text-purple-200 hover:bg-purple-900/20"
            >
              <ChevronLeft className="mr-1" /> Previous
            </Button>
            <Button 
              onClick={handleNext} 
              disabled={currentSectionIndex === course.sections.length - 1}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Next <ChevronRight className="ml-1" />
            </Button>
          </div>
        </div>
        
        <div className="mb-4 w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-purple-600 h-2 rounded-full"
            style={{ width: `${((currentSectionIndex + 1) / course.sections.length) * 100}%` }}
          ></div>
        </div>
        
        <Card className="cosmic-card overflow-visible mb-8 animate-fade-in">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-purple-100 mb-4">{currentSection.title}</h2>
            
            <div className="prose prose-invert max-w-none">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Introduction</h3>
                <p className="text-gray-200">{currentSection.introduction}</p>
                <p className="text-gray-300 mt-2 italic">{currentSection.whyLearn}</p>
              </div>
              
              <div className="my-6 rounded-lg overflow-hidden">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">
                  <Youtube className="inline-block mr-2 text-red-500" />
                  Main Lesson
                </h3>
                <div className="aspect-video">
                  <iframe 
                    className="w-full h-full rounded-lg"
                    src={currentSection.videoUrl}
                    title={`Video for ${currentSection.title}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-purple-200 mt-8 mb-2">Key Points</h3>
              <ul className="space-y-2 mb-6">
                {currentSection.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-200">{point}</span>
                  </li>
                ))}
              </ul>
              
              {currentSection.shortVideo && (
                <div className="my-8 rounded-lg overflow-hidden">
                  <h3 className="text-lg font-semibold text-purple-200 mb-3">
                    <Video className="inline-block mr-2 text-blue-400" />
                    Additional Short Video
                  </h3>
                  <div className="aspect-video">
                    <iframe 
                      className="w-full h-full rounded-lg"
                      src={currentSection.shortVideo}
                      title={`Short video for ${currentSection.title}`}
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
                    src={currentSection.image.url} 
                    alt={currentSection.image.description} 
                    className="w-full object-cover h-64"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-sm text-white">{currentSection.image.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-purple-900/20 rounded-lg p-5 border border-purple-500/30">
                <h3 className="text-lg font-semibold text-yellow-300 mb-4">Challenge Yourself</h3>
                <p className="mb-4 text-white">{currentSection.quiz.question}</p>
                
                <div className="space-y-2 mb-4">
                  {currentSection.quiz.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => !quizSubmitted && setSelectedAnswer(idx)}
                      disabled={quizSubmitted}
                      className={`w-full text-left p-3 rounded-md transition-all ${
                        selectedAnswer === idx
                          ? quizSubmitted
                            ? idx === currentSection.quiz.correctAnswer
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
                      {selectedAnswer === currentSection.quiz.correctAnswer
                        ? "✓ Correct! Well done."
                        : `✗ Not quite. The correct answer is: ${currentSection.quiz.options[currentSection.quiz.correctAnswer]}`}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseStartPage;
