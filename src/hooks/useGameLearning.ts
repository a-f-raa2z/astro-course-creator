import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Course, CourseSection } from "@/types/course";
import { ContentType } from "@/types/ContentType";

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
  
  const getAvailableContentTypes = (section: CourseSection): ContentType['type'][] => {
    if (!section) {
      return ['introduction'];
    }
    
    if (section.title === "The Solar System") {
      return [
        'introduction',
        'video',
        'fun-facts',
        'quiz'
      ];
    }
    
    if (section.title === "The Inner Planets") {
      return [
        'introduction',
        'video',
        'bonus',
        'quiz'
      ];
    }
    
    if (section.title === "Earth") {
      return [
        'introduction',
        'video',
        'bonus',
        'playground',
        'quiz'
      ];
    }
    
    if (section.title === "Mapping the Moon") {
      return [
        'introduction',
        'video',
        'fun-facts',
        'bonus',
        'playground',
        'visual-gallery',
        'quiz'
      ];
    }
    
    if (section.title === "Venus") {
      return [
        'introduction',
        'video',
        'fun-facts',
        'visual-gallery',
        'quiz'
      ];
    }
    
    if (section.title === "Mercury") {
      return [
        'introduction',
        'video',
        'image',
        'fun-facts',
        'bonus',
        'quiz'
      ];
    }
    
    if (section.title === "The Moon" || section.title === "The Moon in Our Skies" || section.title === "The Moon's Unseen Face") {
      return [
        'introduction', 
        'video', 
        'fun-facts',
        'playground',
        'bonus',
        'visual-gallery',
        'quiz'
      ];
    }
    
    if (section.title === "Roving over Mars") {
      return [
        'introduction',
        'video',
        'fun-facts',
        'bonus',
        'quiz'
      ];
    }
    
    const contentTypes: ContentType['type'][] = ['introduction', 'video'];
    
    if (section.shortVideo) {
      contentTypes.push('short-video');
    }
    
    if (section.image && section.title !== "The Moon" && section.title !== "Roving over Mars") {
      contentTypes.push('image');
    }
    
    if (section.visualUrl) {
      contentTypes.push('playground');
    }
    
    if ((section.bonusVideos && section.bonusVideos.length > 0) || 
        (section.bonusContent2 && section.bonusContent2.length > 0)) {
      contentTypes.push('bonus');
    }
    
    if (section.funFacts && section.funFacts.length > 0) {
      contentTypes.push('fun-facts');
    }
    
    if (section.visualGalleryUrl) {
      contentTypes.push('visual-gallery');
    }
    
    contentTypes.push('quiz');
    
    return contentTypes;
  };

  const generateQuizzesForSection = (section: CourseSection): any[] => {
    const existingQuizzes = section.quizzes || [];
    if (existingQuizzes.length === 5) {
      return existingQuizzes;
    }
    
    const quizzes = existingQuizzes.length > 0 ? [...existingQuizzes] : [section.quiz];
    
    if (section.title === "Venus") {
      return [
        {
          question: "Which planet is called Earth's twin?",
          options: ["Mars", "Mercury", "Venus", "Jupiter"],
          correctAnswer: 2
        },
        {
          question: "Why is Venus hotter than Mercury?",
          options: ["It's closer to the Sun", "It has more lava", "Thick atmosphere traps heat", "It's made of fire"],
          correctAnswer: 2
        },
        {
          question: "What's a wild weather fact about Venus?",
          options: ["It snows", "It has acid rain", "It has blizzards", "It's always sunny"],
          correctAnswer: 1
        },
        {
          question: "How long is a day on Venus compared to Earth?",
          options: ["Shorter", "Same", "Longer", "24 hours"],
          correctAnswer: 2
        },
        {
          question: "What direction does Venus rotate?",
          options: ["East to West", "It doesn't", "West to East", "Backwards"],
          correctAnswer: 3
        }
      ];
    }
    
    if (section.title === "Mercury") {
      return [
        {
          question: "Which planet is closest to the Sun?",
          options: ["Venus", "Earth", "Mars", "Mercury"],
          correctAnswer: 3
        },
        {
          question: "What's surprising about Mercury's temperature?",
          options: ["Always hot", "Cold all the time", "Extreme hot and cold", "Covered in snow"],
          correctAnswer: 2
        },
        {
          question: "Does Mercury have any moons?",
          options: ["One", "Two", "None", "Five"],
          correctAnswer: 2
        },
        {
          question: "What is Mercury's surface like?",
          options: ["Gas", "Ocean", "Rocky with craters", "Lush forests"],
          correctAnswer: 2
        },
        {
          question: "How long does Mercury take to orbit the Sun?",
          options: ["365 days", "88 days", "180 days", "24 hours"],
          correctAnswer: 1
        }
      ];
    }
    
    if (section.title === "Messenger at Mercury") {
      return [
        {
          question: "What was MESSENGER's job?",
          options: ["Take selfies", "Map Mercury", "Fly to Mars", "Study the Moon"],
          correctAnswer: 1
        },
        {
          question: "What did MESSENGER discover on Mercury?",
          options: ["Aliens", "Volcanoes", "Ice", "Canyons"],
          correctAnswer: 2
        },
        {
          question: "How did MESSENGER end its mission?",
          options: ["Landed safely", "Flew to Venus", "Crashed into Mercury", "Got lost in space"],
          correctAnswer: 2
        },
        {
          question: "Why was it hard for MESSENGER to orbit Mercury?",
          options: ["Too much wind", "High gravity", "Close to Sun's heat", "Too small"],
          correctAnswer: 2
        },
        {
          question: "What's one cool fact from MESSENGER's mission?",
          options: ["Mercury has no gravity", "Mercury is shrinking", "Mercury has clouds", "Mercury has rings"],
          correctAnswer: 1
        }
      ];
    }
    
    if (section.title === "Close to the Sun") {
      return [
        {
          question: "Which spacecraft is flying closest to the Sun?",
          options: ["Hubble", "Voyager", "Parker Solar Probe", "Juno"],
          correctAnswer: 2
        },
        {
          question: "What does the Parker Solar Probe study?",
          options: ["Sun's surface", "Sun's corona", "Earth's shadow", "Jupiter's storms"],
          correctAnswer: 1
        },
        {
          question: "What's a danger for spacecraft near the Sun?",
          options: ["Aliens", "Asteroids", "Extreme heat", "Lack of gravity"],
          correctAnswer: 2
        },
        {
          question: "What special shield protects the Parker Probe?",
          options: ["Iron", "Gold foil", "Carbon heat shield", "Ice armor"],
          correctAnswer: 2
        },
        {
          question: "Why go near the Sun?",
          options: ["For selfies", "To measure time", "To understand solar storms", "To block light"],
          correctAnswer: 2
        }
      ];
    }
    
    if (section.title === "Roving over Mars") {
      return [
        {
          question: "What's the purpose of Mars rovers?",
          options: ["Drive humans", "Look for life", "Take over Mars", "Build malls"],
          correctAnswer: 1
        },
        {
          question: "Which rover landed in 2021?",
          options: ["Opportunity", "Spirit", "Curiosity", "Perseverance"],
          correctAnswer: 3
        },
        {
          question: "How do rovers get energy?",
          options: ["Solar panels", "Batteries", "Nuclear power", "Both A & C"],
          correctAnswer: 3
        },
        {
          question: "What did Mars rovers find that excited scientists?",
          options: ["Gold", "Ancient water clues", "Aliens", "Moon rocks"],
          correctAnswer: 1
        },
        {
          question: "What cool skill does Perseverance have?",
          options: ["Takes selfies", "Launches drones", "Talks", "Builds robots"],
          correctAnswer: 1
        }
      ];
    }
    
    if (quizzes.length < 5) {
      const additionalQuizzes = generateGenericQuizzes(section, 5 - quizzes.length);
      quizzes.push(...additionalQuizzes);
    }
    
    return quizzes;
  };
  
  const generateGenericQuizzes = (section: CourseSection, count: number): any[] => {
    const quizzes = [];
    const title = section.title;
    
    switch (title) {
      case "Mercury":
        quizzes.push(
          {
            question: "What is Mercury's position in the solar system?",
            options: ["Second planet", "First planet", "Third planet", "Fourth planet"],
            correctAnswer: 1
          },
          {
            question: "Why does Mercury have such extreme temperature variations?",
            options: ["No atmosphere", "Very thin atmosphere", "No magnetic field", "Very slow rotation"],
            correctAnswer: 0
          },
          {
            question: "How long is a day on Mercury?",
            options: ["24 hours", "59 Earth days", "88 Earth days", "176 Earth days"],
            correctAnswer: 1
          },
          {
            question: "What is the surface of Mercury similar to?",
            options: ["Earth's deserts", "Mars' surface", "Earth's Moon", "Venus' surface"],
            correctAnswer: 2
          }
        );
        break;
        
      case "Mars":
        quizzes.push(
          {
            question: "What gives Mars its reddish appearance?",
            options: ["Iron oxide (rust)", "Methane gas", "Sulfur compounds", "Reflected sunlight"],
            correctAnswer: 0
          },
          {
            question: "Which is the largest volcano in the solar system, located on Mars?",
            options: ["Mauna Loa", "Olympus Mons", "Tharsis Montes", "Elysium Mons"],
            correctAnswer: 1
          },
          {
            question: "How many moons does Mars have?",
            options: ["None", "One", "Two", "Three"],
            correctAnswer: 2
          },
          {
            question: "What are the names of Mars' moons?",
            options: ["Ganymede and Callisto", "Phobos and Deimos", "Titan and Enceladus", "Europa and Io"],
            correctAnswer: 1
          }
        );
        break;
        
      case "Jupiter":
        quizzes.push(
          {
            question: "What is Jupiter primarily composed of?",
            options: ["Rock and metal", "Hydrogen and helium", "Ice and water", "Methane and ammonia"],
            correctAnswer: 1
          },
          {
            question: "What is the Great Red Spot on Jupiter?",
            options: ["A volcanic eruption", "A storm system", "An impact crater", "A sea of liquid iron"],
            correctAnswer: 1
          },
          {
            question: "How many moons does Jupiter have?",
            options: ["4", "16", "67", "79+"],
            correctAnswer: 3
          },
          {
            question: "What is Jupiter's rank in size among the planets?",
            options: ["Largest", "Second largest", "Third largest", "Fourth largest"],
            correctAnswer: 0
          }
        );
        break;
        
      default:
        for (let i = 0; i < count; i++) {
          quizzes.push({
            question: `Question ${i+1} about ${title}?`,
            options: ["Option A", "Option B", "Option C", "Option D"],
            correctAnswer: i % 4
          });
        }
    }
    
    return quizzes.slice(0, count);
  };

  const currentSection = course?.sections[currentSectionIndex] || null;
  const availableContentTypes = currentSection ? getAvailableContentTypes(currentSection) : ['introduction'];
  const currentContentType = availableContentTypes[currentContentIndex] || 'introduction';

  const addXpPoints = (points: number, message: string) => {
    setXpPoints(prev => prev + points);
    toast({
      title: `+${points} XP gained!`,
      description: message,
    });
  };

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
      } else if (currentContentType === 'playground') {
        pointsToAdd = 15;
        toast({
          title: `+${pointsToAdd} XP gained!`,
          description: "Interactive playground completed! Great job!",
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
    if (!currentSection) return;
    
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
    if (!currentSection) return;
    
    if (currentContentIndex > 0) {
      setCurrentContentIndex(prevIndex => prevIndex - 1);
      setQuizSubmitted(false);
      setSelectedAnswer(null);
    } else if (currentSectionIndex > 0) {
      const prevSectionIndex = currentSectionIndex - 1;
      setCurrentSectionIndex(prevSectionIndex);
      const prevSection = course.sections[prevSectionIndex];
      if (prevSection) {
        const prevAvailableContentTypes = getAvailableContentTypes(prevSection);
        setCurrentContentIndex(prevAvailableContentTypes.length - 1);
      }
      setQuizSubmitted(false);
      setSelectedAnswer(null);
    }
  };

  const handleQuizSubmit = () => {
    if (!currentSection) return;
    
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
    setCurrentContentIndex,
    addXpPoints
  };
};
