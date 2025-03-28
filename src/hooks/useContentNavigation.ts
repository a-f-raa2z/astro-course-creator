
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Course, CourseSection } from "@/types/course";
import { ContentType } from "@/pages/CourseStartPage";

export const useContentNavigation = (course: Course) => {
  const { toast } = useToast();
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

  const currentSection = course.sections[currentSectionIndex];
  const availableContentTypes = getAvailableContentTypes(currentSectionIndex);
  const currentContentType = availableContentTypes[currentContentIndex];
  
  const handleNextContent = () => {
    if (currentContentType === 'quiz' && !quizSubmitted && selectedAnswer !== null) {
      // If it's a quiz and not submitted but has a selected answer, submit it first
      setQuizSubmitted(true);
      return;
    }
    
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
    } else {
      // Course completed
      toast({
        title: "Course Complete!",
        description: "You've completed all sections of this course.",
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

  const totalContentCount = availableContentTypes.length;
  const totalSections = course.sections.length;
  const overallProgress = ((currentSectionIndex * 100) + ((currentContentIndex + 1) * 100 / totalContentCount)) / totalSections;

  return {
    currentSectionIndex,
    currentContentIndex,
    currentSection,
    currentContentType,
    availableContentTypes,
    totalContentCount,
    totalSections,
    overallProgress,
    quizSubmitted,
    selectedAnswer,
    handleNextContent,
    handlePreviousContent,
    setSelectedAnswer,
    handleQuizSubmit
  };
};
