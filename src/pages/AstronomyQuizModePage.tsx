
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, BrainCircuit } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { generateMockCourse } from "@/utils/courses";
import { Course, CourseSection } from "@/types/course";
import { QuizCard } from "@/components/quiz/QuizCard";
import { ContentType } from "@/types/ContentType";

interface QuizCardData {
  section: CourseSection;
  contentType: ContentType['type'];
  sectionIndex: number;
  question: string;
  isCompleted?: boolean;
}

const AstronomyQuizModePage = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [quizCards, setQuizCards] = useState<Record<number, QuizCardData[]>>({});
  
  useEffect(() => {
    const mockCourse = generateMockCourse("planets", "intermediate", "visual");
    setCourse(mockCourse);
    
    const completedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes') || '{}');
    
    const newQuizCards: Record<number, QuizCardData[]> = {};
    
    mockCourse.sections.forEach((section, sectionIndex) => {
      const sectionCards: QuizCardData[] = [];
      
      const quizCard: QuizCardData = {
        section,
        contentType: 'quiz',
        sectionIndex,
        question: `Test your ${section.title} knowledge with this quiz`,
        isCompleted: completedQuizzes[`${sectionIndex}-quiz`] === true
      };
      sectionCards.push(quizCard);
      
      const introCard: QuizCardData = {
        section,
        contentType: 'introduction',
        sectionIndex,
        question: `What is the main purpose of ${section.title}?`,
        isCompleted: completedQuizzes[`${sectionIndex}-introduction`] === true
      };
      sectionCards.push(introCard);
      
      const videoCard: QuizCardData = {
        section,
        contentType: 'video',
        sectionIndex,
        question: `What key concepts are covered in the ${section.title} video?`,
        isCompleted: completedQuizzes[`${sectionIndex}-video`] === true
      };
      sectionCards.push(videoCard);
      
      if (section.shortVideo) {
        const shortVideoCard: QuizCardData = {
          section,
          contentType: 'short-video',
          sectionIndex,
          question: `What are some interesting facts about ${section.title}?`,
          isCompleted: completedQuizzes[`${sectionIndex}-short-video`] === true
        };
        sectionCards.push(shortVideoCard);
      }
      
      const imageCard: QuizCardData = {
        section,
        contentType: 'image',
        sectionIndex,
        question: `What visual elements can you identify in the ${section.title} image?`,
        isCompleted: completedQuizzes[`${sectionIndex}-image`] === true
      };
      sectionCards.push(imageCard);
      
      if (section.visualUrl) {
        const playgroundCard: QuizCardData = {
          section,
          contentType: 'playground',
          sectionIndex,
          question: `How can you interact with the ${section.title} model?`,
          isCompleted: completedQuizzes[`${sectionIndex}-playground`] === true
        };
        sectionCards.push(playgroundCard);
      }
      
      if (section.bonusVideos && section.bonusVideos.length > 0) {
        const bonusCard: QuizCardData = {
          section,
          contentType: 'bonus',
          sectionIndex,
          question: `What bonus information is provided about ${section.title}?`,
          isCompleted: completedQuizzes[`${sectionIndex}-bonus`] === true
        };
        sectionCards.push(bonusCard);
      }
      
      sectionCards.sort((a, b) => {
        if (a.isCompleted && !b.isCompleted) return 1;
        if (!a.isCompleted && b.isCompleted) return -1;
        return 0;
      });
      
      newQuizCards[sectionIndex] = sectionCards;
    });
    
    setQuizCards(newQuizCards);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setCourse({...mockCourse});
        
        const updatedCompletedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes') || '{}');
        const updatedQuizCards = { ...newQuizCards };
        
        Object.keys(updatedQuizCards).forEach(sectionIndexStr => {
          const sectionIndex = parseInt(sectionIndexStr);
          updatedQuizCards[sectionIndex].forEach((card, idx) => {
            const key = `${card.sectionIndex}-${card.contentType}`;
            updatedQuizCards[sectionIndex][idx].isCompleted = updatedCompletedQuizzes[key] === true;
          });
          
          updatedQuizCards[sectionIndex].sort((a, b) => {
            if (a.isCompleted && !b.isCompleted) return 1;
            if (!a.isCompleted && b.isCompleted) return -1;
            return 0;
          });
        });
        
        setQuizCards(updatedQuizCards);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  if (!course) {
    return (
      <div className="bg-space min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Loading quiz content...</p>
      </div>
    );
  }

  return (
    <div className="bg-space min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            className="mr-2 text-purple-300 hover:text-purple-100 hover:bg-purple-900/30"
            onClick={() => navigate("/")}
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-white flex items-center">
            <BrainCircuit className="mr-2 h-6 w-6 text-purple-400" />
            Astronomy Quiz Mode
          </h1>
        </div>
        
        <p className="text-gray-300 mb-4 max-w-3xl leading-relaxed">
          Test your knowledge with these interactive quizzes. Select any card to start learning and complete a quiz related to that topic.
        </p>
        
        <Separator className="my-6 bg-purple-500/20" />
        
        {course.sections.map((section, sectionIndex) => (
          <div key={section.id} className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 mr-3 text-white font-bold">
                {sectionIndex + 1}
              </span>
              {section.title}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-6">
              {quizCards[sectionIndex]?.map((card) => (
                <QuizCard 
                  key={`${card.sectionIndex}-${card.contentType}`}
                  section={card.section}
                  contentType={card.contentType}
                  sectionIndex={card.sectionIndex}
                  question={card.question}
                  onStartQuiz={() => navigate(`/astronomy-quiz-detail`, {
                    state: { 
                      course, 
                      sectionIndex: card.sectionIndex,
                      contentType: card.contentType
                    }
                  })}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AstronomyQuizModePage;
