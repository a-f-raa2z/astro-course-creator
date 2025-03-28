import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Course, CourseSection } from "@/types/course";

export type ContentType = 'introduction' | 'video' | 'keyPoints' | 'shortVideo' | 'image' | 'quiz' | 'bonus';

export const useGameLearning = (course: Course) => {
  const { toast } = useToast();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [xpPoints, setXpPoints] = useState(() => {
    const savedXp = localStorage.getItem(`${course.id}-xp`);
    return savedXp ? parseInt(savedXp, 10) : 0;
  });
  const [completedContents, setCompletedContents] = useState<string[]>(() => {
    const saved = localStorage.getItem(`${course.id}-completed`);
    return saved ? JSON.parse(saved) : [];
  });
  
  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem(`${course.id}-xp`, xpPoints.toString());
    localStorage.setItem(`${course.id}-completed`, JSON.stringify(completedContents));
  }, [xpPoints, completedContents, course.id]);
  
  // Content types to display in order
  const contentTypes: ContentType[] = ['introduction', 'video', 'keyPoints', 'shortVideo', 'image', 'bonus', 'quiz'];
  
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

  // Mark current content as completed and award XP
  const markContentAsCompleted = () => {
    const contentKey = `${currentSectionIndex}-${currentContentIndex}`;
    if (!completedContents.includes(contentKey)) {
      setCompletedContents(prev => [...prev, contentKey]);
      
      // Award XP based on content type
      let pointsToAdd = 5; // Base points
      
      if (currentContentType === 'quiz' && quizSubmitted) {
        // Bonus points for correct quiz answers
        if (selectedAnswer === currentSection.quiz.correctAnswer) {
          pointsToAdd = 20;
          toast({
            title: `+${pointsToAdd} XP gained!`,
            description: "Excellent! Correct answer bonus!",
          });
        } else {
          pointsToAdd = 5;
          toast({
            title: `+${pointsToAdd} XP gained!`,
            description: "Keep practicing to improve!",
          });
        }
      } else if (currentContentType === 'video') {
        pointsToAdd = 10;
        toast({
          title: `+${pointsToAdd} XP gained!`,
          description: "Video content completed!",
        });
      } else {
        toast({
          title: `+${pointsToAdd} XP gained!`,
          description: "Keep learning to earn more rewards",
        });
      }
      
      setXpPoints(prev => prev + pointsToAdd);
    }
  };

  const handleNextContent = () => {
    // If it's a quiz and not submitted but has a selected answer, submit it first
    if (currentContentType === 'quiz' && !quizSubmitted && selectedAnswer !== null) {
      handleQuizSubmit();
      return;
    }
    
    // Mark current content as completed and award XP
    markContentAsCompleted();
    
    // Reset quiz state if we're moving from a quiz
    if (currentContentType === 'quiz') {
      setQuizSubmitted(false);
      setSelectedAnswer(null);
    }
    
    // Simple navigation logic - move to next content or section
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
        title: "🎉 Course Complete! 🎉",
        description: "Congratulations! You've completed the entire course!",
      });
      
      // Add special achievement for completing course
      if (!completedContents.includes('course-complete')) {
        setCompletedContents(prev => [...prev, 'course-complete']);
        setXpPoints(prev => prev + 50);
        
        toast({
          title: "Achievement Unlocked: Course Master",
          description: "+50 XP Bonus for completing the entire course!",
        });
      }
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
      
      // Show appropriate toast based on answer correctness
      if (selectedAnswer === currentSection.quiz.correctAnswer) {
        toast({
          title: "Correct Answer!",
          description: "Great job! You got it right.",
        });
      } else {
        toast({
          title: "Keep Learning",
          description: "That's not quite right, but you're making progress!",
        });
      }
    } else {
      toast({
        title: "No answer selected",
        description: "Please select an answer before submitting.",
        variant: "destructive"
      });
    }
  };

  // Calculate total content count across all sections
  const getTotalContentCount = () => {
    return course.sections.reduce((total, section, idx) => {
      const types = getAvailableContentTypes(idx);
      return total + types.length;
    }, 0);
  };
  
  const totalContentCount = availableContentTypes.length;
  const totalSections = course.sections.length;
  const overallProgress = ((currentSectionIndex * 100) + ((currentContentIndex + 1) * 100 / totalContentCount)) / totalSections;

  // Calculate user's current level based on XP
  const level = Math.floor(xpPoints / 50) + 1;
  
  // Calculate progress to next level
  const xpForNextLevel = level * 50;
  const xpForCurrentLevel = (level - 1) * 50;
  const levelProgress = ((xpPoints - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100;

  return {
    currentSectionIndex,
    setCurrentSectionIndex,
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
    handleQuizSubmit,
    xpPoints,
    level,
    levelProgress,
    completedContents,
    setCurrentContentIndex
  };
};
