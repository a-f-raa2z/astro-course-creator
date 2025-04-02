
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
  whyLearn: string;
  videoUrl: string;
  keyPoints: string[];
  keyPointsIntro?: string;
  shortVideo?: string;
  shortVideoIntro?: string;
  additionalShortVideos?: string[];
  visualUrl?: string;
  visualIntro?: string;
  bonusVideos?: string[];
  bonusIntro?: string;
  image?: {
    url: string;
    description: string;
    intro?: string;
  };
  quiz: QuizQuestion;
  quizIntro?: string;
  quizzes: QuizQuestion[];
  mainLesson2Url?: string;
  interactiveUrl2?: string;
  bonusContent2?: string[];
  visualGalleryUrl?: string;
  funFacts?: string[];
  funFacts2?: string[];
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
