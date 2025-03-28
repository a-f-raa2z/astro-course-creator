
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QuestionCard from "@/components/QuestionCard";
import LoadingAnimation from "@/components/LoadingAnimation";
import CourseView from "@/components/CourseView";
import { Assessment, Course } from "@/types/course";
import { assessmentQuestions, generateMockCourse } from "@/utils/courseData";

const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [assessment, setAssessment] = useState<Assessment>({
    interest: "",
    level: "",
    learningStyle: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [generatedCourse, setGeneratedCourse] = useState<Course | null>(null);

  const handleAnswer = (questionId: string, answer: string) => {
    // Update assessment with the answer
    setAssessment((prev) => ({
      ...prev,
      [questionId]: answer,
    }));

    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      // Move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Start course generation
      setIsLoading(true);
      
      // Simulate API call with a delay
      setTimeout(() => {
        const course = generateMockCourse(
          assessment.interest,
          assessment.level,
          assessment.learningStyle
        );
        setGeneratedCourse(course);
        setIsLoading(false);
      }, 4000);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const startOver = () => {
    setCurrentQuestionIndex(0);
    setAssessment({
      interest: "",
      level: "",
      learningStyle: "",
    });
    setGeneratedCourse(null);
  };

  // Show loading animation while generating the course
  if (isLoading) {
    return (
      <div className="min-h-screen bg-space flex items-center justify-center p-4">
        <LoadingAnimation onComplete={() => setIsLoading(false)} />
      </div>
    );
  }

  // Show the generated course if available
  if (generatedCourse) {
    return (
      <div className="min-h-screen bg-space">
        <div className="course-container py-8">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{generatedCourse.title}</h1>
              <p className="text-purple-300">{generatedCourse.description}</p>
            </div>
            <Button 
              variant="outline" 
              onClick={startOver}
              className="border-purple-400/30 text-purple-200 hover:bg-purple-900/20"
            >
              Start New Course
            </Button>
          </div>
          <CourseView course={generatedCourse} />
        </div>
      </div>
    );
  }

  // Show assessment questions
  return (
    <div className="min-h-screen bg-space flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-white mb-2">Cosmic Learning Journey</h1>
        <p className="text-xl text-purple-300">Let's discover the perfect astronomy course for you</p>
      </div>
      
      {assessmentQuestions[currentQuestionIndex] && (
        <QuestionCard 
          question={assessmentQuestions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          onPrevious={handlePrevious}
          isFirst={currentQuestionIndex === 0}
          isLast={currentQuestionIndex === assessmentQuestions.length - 1}
        />
      )}
    </div>
  );
};

export default Index;
