
import { AssessmentQuestion, Course } from "@/types/course";
import { assessmentQuestions } from "./assessmentQuestions";
import { generateAstronomyCourse, astronomyCourseData } from "./astronomyCourseData";
import { generateAICourse, aiCourseData } from "./aiCourseData";

// Export the utility function to generate a mock course based on user preferences
export const generateMockCourse = (interest: string, level: string, learningStyle: string): Course => {
  if (interest === "ai") {
    return generateAICourse(level, learningStyle);
  }
  return generateAstronomyCourse(interest, level, learningStyle);
};

// Export all the necessary data and functions
export {
  assessmentQuestions,
  astronomyCourseData,
  aiCourseData,
  generateAstronomyCourse,
  generateAICourse
};
