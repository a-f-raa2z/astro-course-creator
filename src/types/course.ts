
export interface AssessmentAnswer {
  id: string;
  text: string;
  value: string;
}

export interface BlankOption {
  id: string;
  text: string;
  value: string;
}

export interface AssessmentQuestion {
  id: string;
  question: string;
  description?: string;
  answers?: AssessmentAnswer[];
  template?: string;
  blanks?: BlankOption[];
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
  whyLearn: string; // Added this for why we learn this section
  videoUrl: string;
  keyPoints: string[];
  keyPointsIntro?: string; // Added intro text for key points
  shortVideo?: string;
  shortVideoIntro?: string; // Added intro text for short videos
  additionalShortVideos?: string[]; // Added missing property
  visualUrl?: string; // Added missing property
  visualIntro?: string; // Added intro text for visual playground
  bonusVideos?: string[]; // Added missing property
  bonusIntro?: string; // Added intro text for bonus content
  image: {
    url: string;
    description: string;
    intro?: string; // Added intro text for image
  };
  quiz: QuizQuestion;
  quizIntro?: string; // Added intro text for quiz
  quizzes?: QuizQuestion[]; // Added to support multiple quiz questions
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
