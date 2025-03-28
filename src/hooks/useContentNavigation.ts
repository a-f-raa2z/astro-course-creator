
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
    // If it's a quiz and not submitted but has a selected answer, submit it first
    if (currentContentType === 'quiz' && !quizSubmitted && selectedAnswer !== null) {
      setQuizSubmitted(true);
      return;
    }
    
    // If it's a quiz and no answer is selected, show toast
    if (currentContentType === 'quiz' && !quizSubmitted && selectedAnswer === null) {
      toast({
        title: "Quiz not submitted",
        description: "Please select and submit your answer before moving on.",
        variant: "destructive"
      });
      return;
    }
    
    // Reset quiz state if we're moving from a quiz
    if (currentContentType === 'quiz') {
      setQuizSubmitted(false);
      setSelectedAnswer(null);
    }
    
    // Move to next content or section
    if (currentContentIndex < availableContentTypes.length - 1) {
      // Move to next content card within the same section
      setCurrentContentIndex(prevIndex => prevIndex + 1);
    } else if (currentSectionIndex < course.sections.length - 1) {
      // Move to the first content card of the next section
      setCurrentSectionIndex(prevIndex => prevIndex + 1);
      setCurrentContentIndex(0);
      
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
      // Move to previous content card within the same section
      setCurrentContentIndex(prevIndex => prevIndex - 1);
      setQuizSubmitted(false);
      setSelectedAnswer(null);
    } else if (currentSectionIndex > 0) {
      // Move to the last content card of the previous section
      const prevSectionIndex = currentSectionIndex - 1;
      setCurrentSectionIndex(prevSectionIndex);
      const prevAvailableContentTypes = getAvailableContentTypes(prevSectionIndex);
      setCurrentContentIndex(prevAvailableContentTypes.length - 1);
      setQuizSubmitted(false);
      setSelectedAnswer(null);
    }
  };

  const handleQuizSubmit = () => {
    if (selectedAnswer !== null) {
      setQuizSubmitted(true);
    } else {
      toast({
        title: "No answer selected",
        description: "Please select an answer before submitting.",
        variant: "destructive"
      });
    }
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
