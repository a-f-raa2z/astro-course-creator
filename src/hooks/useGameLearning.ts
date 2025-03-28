import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Course, CourseSection } from "@/types/course";

export type ContentType = 'introduction' | 'video' | 'keyPoints' | 'shortVideo' | 'image' | 'playground' | 'bonus' | 'quiz';

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
  
  useEffect(() => {
    localStorage.setItem(`${course.id}-xp`, xpPoints.toString());
    localStorage.setItem(`${course.id}-completed`, JSON.stringify(completedContents));
  }, [xpPoints, completedContents, course.id]);
  
  const contentTypes: ContentType[] = ['introduction', 'video', 'keyPoints', 'shortVideo', 'image', 'playground', 'bonus', 'quiz'];
  
  const getAvailableContentTypes = (section: CourseSection): ContentType[] => {
    const contentTypes: ContentType[] = ['introduction', 'video', 'keyPoints'];
    
    if (section.shortVideo) {
      contentTypes.push('shortVideo');
    }
    
    contentTypes.push('image');
    
    if (section.title === "Earth" || section.title === "The Moon") {
      contentTypes.push('playground');
    }
    
    if (section.bonusVideos && section.bonusVideos.length > 0) {
      contentTypes.push('bonus');
    }
    
    contentTypes.push('quiz');
    
    return contentTypes;
  };

  const currentSection = course.sections[currentSectionIndex];
  const availableContentTypes = getAvailableContentTypes(currentSection);
  const currentContentType = availableContentTypes[currentContentIndex];

  const markContentAsCompleted = () => {
    const contentKey = `${currentSectionIndex}-${currentContentIndex}`;
    if (!completedContents.includes(contentKey)) {
      setCompletedContents(prev => [...prev, contentKey]);
      
      let pointsToAdd = 5;
      
      if (currentContentType === 'quiz' && quizSubmitted) {
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
    if (currentContentType === 'quiz' && !quizSubmitted && selectedAnswer !== null) {
      handleQuizSubmit();
      return;
    }
    
    markContentAsCompleted();
    
    if (currentContentType === 'quiz') {
      setQuizSubmitted(false);
      setSelectedAnswer(null);
    }
    
    if (currentContentIndex < availableContentTypes.length - 1) {
      setCurrentContentIndex(prevIndex => prevIndex + 1);
    } else if (currentSectionIndex < course.sections.length - 1) {
      setCurrentSectionIndex(prevIndex => prevIndex + 1);
      setCurrentContentIndex(0);
      
      toast({
        title: "Section Complete!",
        description: `Moving to ${course.sections[currentSectionIndex + 1].title}`,
      });
    } else {
      toast({
        title: "🎉 Course Complete! 🎉",
        description: "Congratulations! You've completed the entire course!",
      });
      
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
      setCurrentContentIndex(prevIndex => prevIndex - 1);
      setQuizSubmitted(false);
      setSelectedAnswer(null);
    } else if (currentSectionIndex > 0) {
      const prevSectionIndex = currentSectionIndex - 1;
      setCurrentSectionIndex(prevSectionIndex);
      const prevAvailableContentTypes = getAvailableContentTypes(course.sections[prevSectionIndex]);
      setCurrentContentIndex(prevAvailableContentTypes.length - 1);
      setQuizSubmitted(false);
      setSelectedAnswer(null);
    }
  };

  const handleQuizSubmit = () => {
    if (selectedAnswer !== null) {
      setQuizSubmitted(true);
      
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

  const getTotalContentCount = () => {
    return course.sections.reduce((total, section, idx) => {
      const types = getAvailableContentTypes(section);
      return total + types.length;
    }, 0);
  };
  
  const totalContentCount = availableContentTypes.length;
  const totalSections = course.sections.length;
  const overallProgress = ((currentSectionIndex * 100) + ((currentContentIndex + 1) * 100 / totalContentCount)) / totalSections;

  const level = Math.floor(xpPoints / 50) + 1;
  
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
