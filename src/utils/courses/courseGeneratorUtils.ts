
import { Course } from "@/types/course";

export const interestTitles: Record<string, string> = {
  stars: "Stellar Evolution: From Dust to Supernovae",
  planets: "Exploring Our Solar System and Beyond",
  galaxies: "Galaxy Formation and Cosmic Structure",
  cosmology: "The Universe's Beginning and Ultimate Fate",
  "space-tech": "Space Exploration: Technologies and Missions",
  "ai": "Artificial Intelligence: Concepts and Applications"
};

export const levelDescriptors: Record<string, string> = {
  beginner: "foundational",
  intermediate: "comprehensive",
  advanced: "advanced"
};

export function generateCourseMetadata(interest: string, level: string, learningStyle: string): {
  id: string;
  title: string;
  description: string;
  forInterest: string;
  forLevel: string;
  forLearningStyle: string;
} {
  const courseTitle = interestTitles[interest] || "Personalized Learning Journey";
  const levelAdjective = levelDescriptors[level] || "personalized";
  
  return {
    id: `course-${interest}-${level}-${Date.now()}`,
    title: courseTitle,
    description: `A ${levelAdjective} journey through the wonders of ${interest === 'ai' ? 'artificial intelligence' : 'astronomy'}, tailored to your specific interests and learning preferences.`,
    forInterest: interest,
    forLevel: level,
    forLearningStyle: learningStyle,
  };
}
