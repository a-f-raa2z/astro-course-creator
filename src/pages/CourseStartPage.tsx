
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Course } from "@/types/course";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle, Youtube, Video, FileText, Image, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Define the content types for each card
type ContentType = 'introduction' | 'video' | 'keyPoints' | 'shortVideo' | 'image' | 'quiz';

const CourseStartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const course = location.state?.course;
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  // Content types to display in order
  const contentTypes: ContentType[] = ['introduction', 'video', 'keyPoints', 'shortVideo', 'image', 'quiz'];
  
  // Filter out content types that don't exist for the current section
  const getAvailableContentTypes = (sectionIndex: number) => {
    const section = course?.sections[sectionIndex];
    if (!section) return [];
    
    return contentTypes.filter(type => {
      if (type === 'shortVideo') return !!section.shortVideo;
      return true;
    });
  };

  // If no course data is available, redirect to the course page
  if (!course) {
    navigate("/course");
    return null;
  }

  const currentSection = course.sections[currentSectionIndex];
  const availableContentTypes = getAvailableContentTypes(currentSectionIndex);
  const currentContentType = availableContentTypes[currentContentIndex];
  
  const handleNextContent = () => {
    if (currentContentType === 'quiz' && !quizSubmitted) {
      toast({
        title: "Quiz not submitted",
        description: "Please submit your answer before moving on.",
        variant: "destructive"
      });
      return;
    }
    
    if (currentContentIndex < availableContentTypes.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1);
    } else if (currentSectionIndex < course.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentContentIndex(0);
      setQuizSubmitted(false);
      setSelectedAnswer(null);
      
      toast({
        title: "Section Complete!",
        description: `Moving to ${course.sections[currentSectionIndex + 1].title}`,
      });
    }
  };

  const handlePreviousContent = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(currentContentIndex - 1);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      const prevAvailableContentTypes = getAvailableContentTypes(currentSectionIndex - 1);
      setCurrentContentIndex(prevAvailableContentTypes.length - 1);
      setQuizSubmitted(false);
      setSelectedAnswer(null);
    }
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const getContentIcon = (type: ContentType) => {
    switch (type) {
      case 'introduction': return <FileText className="h-5 w-5 text-purple-400" />;
      case 'video': return <Youtube className="h-5 w-5 text-red-500" />;
      case 'keyPoints': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'shortVideo': return <Video className="h-5 w-5 text-blue-400" />;
      case 'image': return <Image className="h-5 w-5 text-yellow-400" />;
      case 'quiz': return <HelpCircle className="h-5 w-5 text-orange-400" />;
    }
  };

  const getContentTitle = (type: ContentType) => {
    switch (type) {
      case 'introduction': return 'Introduction';
      case 'video': return 'Main Lesson';
      case 'keyPoints': return 'Key Points';
      case 'shortVideo': return 'Additional Short Video';
      case 'image': return 'Visual Example';
      case 'quiz': return 'Challenge Yourself';
    }
  };

  const totalContentCount = availableContentTypes.length;
  const totalSections = course.sections.length;
  const overallProgress = ((currentSectionIndex * 100) + ((currentContentIndex + 1) * 100 / totalContentCount)) / totalSections;

  const renderContent = () => {
    switch (currentContentType) {
      case 'introduction':
        return (
          <div className="prose prose-invert max-w-none">
            <h3 className="text-lg font-semibold text-purple-200 mb-2">Introduction</h3>
            <p className="text-gray-200">{currentSection.introduction}</p>
            <div className="mt-4 p-3 rounded-md bg-blue-900/30 border border-purple-400/20">
              <h4 className="text-md font-semibold text-yellow-300 mb-1">Why Learn This?</h4>
              <p className="text-gray-300 italic">{currentSection.whyLearn}</p>
            </div>
          </div>
        );
      
      case 'video':
        return (
          <div className="prose prose-invert max-w-none">
            <h3 className="text-lg font-semibold text-purple-200 mb-3 flex items-center">
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
        );
      
      case 'keyPoints':
        return (
          <div className="prose prose-invert max-w-none">
            <h3 className="text-lg font-semibold text-purple-200 mb-2">Key Points</h3>
            <ul className="space-y-2 mb-6">
              {currentSection.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-200">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      
      case 'shortVideo':
        if (!currentSection.shortVideo) return null;
        return (
          <div className="prose prose-invert max-w-none">
            <h3 className="text-lg font-semibold text-purple-200 mb-3 flex items-center">
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
        );
      
      case 'image':
        return (
          <div className="prose prose-invert max-w-none">
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
        );
      
      case 'quiz':
        return (
          <div className="prose prose-invert max-w-none">
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
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-space min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">
            {course.title} - Section {currentSectionIndex + 1}
          </h1>
          <div className="text-purple-200">
            Card {currentContentIndex + 1} of {totalContentCount}
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <div className="flex-1">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
          </div>
          <div className="ml-4 text-sm text-purple-300">
            Section {currentSectionIndex + 1}/{totalSections}
          </div>
        </div>
        
        <Card className="cosmic-card overflow-visible mb-8 animate-fade-in">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-purple-100">{currentSection.title}</h2>
              <div className="flex items-center space-x-1">
                {availableContentTypes.map((type, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full ${currentContentIndex === index ? 'bg-purple-500' : 'bg-purple-500/30'}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex items-center mb-4 text-sm text-purple-300">
              {getContentIcon(currentContentType)}
              <span className="ml-2">{getContentTitle(currentContentType)}</span>
            </div>
            
            {renderContent()}
          </CardContent>
        </Card>
        
        <div className="flex justify-between mt-6">
          <Button 
            onClick={handlePreviousContent} 
            disabled={currentContentIndex === 0 && currentSectionIndex === 0}
            variant="outline"
            className="border-purple-400/30 text-purple-200 hover:bg-purple-900/20"
          >
            <ChevronLeft className="mr-1" /> Previous
          </Button>
          <Button 
            onClick={handleNextContent} 
            disabled={currentContentType === 'quiz' && !quizSubmitted && selectedAnswer === null}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Next <ChevronRight className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseStartPage;
