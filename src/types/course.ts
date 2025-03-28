
export interface AssessmentAnswer {
  id: string;
  text: string;
  value: string;
}

export interface AssessmentQuestion {
  id: string;
  question: string;
  description?: string;
  answers: AssessmentAnswer[];
}

export interface Assessment {
  interest: string;
  level: string;
  learningStyle: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface CourseSection {
  id: string;
  title: string;
  introduction: string;
  videoUrl: string;
  keyPoints: string[];
  shortVideo?: string;
  image: {
    url: string;
    description: string;
  };
  quiz: QuizQuestion;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  sections: CourseSection[];
  forInterest?: string;
  forLevel?: string;
  forLearningStyle?: string;
}
