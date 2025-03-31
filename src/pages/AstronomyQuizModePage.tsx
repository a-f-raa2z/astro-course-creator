
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Rocket, BrainCircuit } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { generateMockCourse } from "@/utils/courseData";
import { Course, CourseSection } from "@/types/course";
import { QuizCard } from "@/components/quiz/QuizCard";

const AstronomyQuizModePage = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  
  useEffect(() => {
    const mockCourse = generateMockCourse("planets", "intermediate", "visual");
    setCourse(mockCourse);
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
      <div className="max-w-4xl mx-auto">
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
          Test your knowledge with these interactive quizzes. Select any card to start a quiz related to that topic.
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
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <QuizCard 
                section={section}
                contentType="introduction"
                question={`What is the main purpose of ${section.title}?`}
                onStartQuiz={() => navigate(`/astronomy-course-start`, {
                  state: { 
                    course, 
                    initialSectionIndex: sectionIndex,
                    quizMode: true
                  }
                })}
              />
              
              <QuizCard 
                section={section}
                contentType="video"
                question={`What key concepts are covered in the ${section.title} video?`}
                onStartQuiz={() => navigate(`/astronomy-course-start`, {
                  state: { 
                    course, 
                    initialSectionIndex: sectionIndex,
                    quizMode: true,
                    contentType: 'video'
                  }
                })}
              />
              
              {section.shortVideo && (
                <QuizCard 
                  section={section}
                  contentType="short-video"
                  question={`What are some interesting facts about ${section.title}?`}
                  onStartQuiz={() => navigate(`/astronomy-course-start`, {
                    state: { 
                      course, 
                      initialSectionIndex: sectionIndex,
                      quizMode: true,
                      contentType: 'short-video'
                    }
                  })}
                />
              )}
              
              <QuizCard 
                section={section}
                contentType="image"
                question={`What visual elements can you identify in the ${section.title} image?`}
                onStartQuiz={() => navigate(`/astronomy-course-start`, {
                  state: { 
                    course, 
                    initialSectionIndex: sectionIndex,
                    quizMode: true,
                    contentType: 'image'
                  }
                })}
              />
              
              {section.visualUrl && (
                <QuizCard 
                  section={section}
                  contentType="playground"
                  question={`How can you interact with the ${section.title} model?`}
                  onStartQuiz={() => navigate(`/astronomy-course-start`, {
                    state: { 
                      course, 
                      initialSectionIndex: sectionIndex,
                      quizMode: true,
                      contentType: 'playground'
                    }
                  })}
                />
              )}
              
              {section.bonusVideos && section.bonusVideos.length > 0 && (
                <QuizCard 
                  section={section}
                  contentType="bonus"
                  question={`What bonus information is provided about ${section.title}?`}
                  onStartQuiz={() => navigate(`/astronomy-course-start`, {
                    state: { 
                      course, 
                      initialSectionIndex: sectionIndex,
                      quizMode: true,
                      contentType: 'bonus'
                    }
                  })}
                />
              )}
              
              <QuizCard 
                section={section}
                contentType="quiz"
                question={`Test your ${section.title} knowledge with this quiz`}
                onStartQuiz={() => navigate(`/astronomy-course-start`, {
                  state: { 
                    course, 
                    initialSectionIndex: sectionIndex,
                    quizMode: true,
                    contentType: 'quiz'
                  }
                })}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AstronomyQuizModePage;
