
import { AssessmentQuestion, Course } from "@/types/course";

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "interest",
    question: "What aspect of astronomy fascinates you the most?",
    description: "This helps us focus your course on what you're passionate about.",
    answers: [
      { id: "stars", text: "Stars and stellar evolution", value: "stars" },
      { id: "planets", text: "Planets and solar system", value: "planets" },
      { id: "galaxies", text: "Galaxies and deep space", value: "galaxies" },
      { id: "cosmology", text: "Cosmology and the early universe", value: "cosmology" },
      { id: "space-tech", text: "Space technology and exploration", value: "space-tech" }
    ]
  },
  {
    id: "level",
    question: "What's your current level of astronomy knowledge?",
    description: "We'll adjust the content to match your experience.",
    answers: [
      { id: "beginner", text: "Beginner - I know the basics", value: "beginner" },
      { id: "intermediate", text: "Intermediate - I understand core concepts", value: "intermediate" },
      { id: "advanced", text: "Advanced - I'm looking to deepen expertise", value: "advanced" }
    ]
  },
  {
    id: "learning-style",
    question: "How do you prefer to learn new concepts?",
    description: "We'll emphasize content that matches your learning style.",
    answers: [
      { id: "visual", text: "Visual - I learn best with images and diagrams", value: "visual" },
      { id: "interactive", text: "Interactive - I prefer hands-on activities", value: "interactive" },
      { id: "conceptual", text: "Conceptual - I enjoy deep theoretical explanations", value: "conceptual" },
      { id: "practical", text: "Practical - Show me real-world applications", value: "practical" }
    ]
  }
];

export const generateMockCourse = (interest: string, level: string, learningStyle: string): Course => {
  // Map interests to course themes
  const interestTitles: Record<string, string> = {
    stars: "Stellar Evolution: From Dust to Supernovae",
    planets: "Exploring Our Solar System and Beyond",
    galaxies: "Galaxy Formation and Cosmic Structure",
    cosmology: "The Universe's Beginning and Ultimate Fate",
    "space-tech": "Space Exploration: Technologies and Missions"
  };

  // Determine complexity based on level
  const levelDescriptors: Record<string, string> = {
    beginner: "foundational",
    intermediate: "comprehensive",
    advanced: "advanced"
  };

  // Create course title based on interest and level
  const courseTitle = interestTitles[interest] || "Personalized Astronomy Journey";
  const levelAdjective = levelDescriptors[level] || "personalized";

  return {
    id: `course-${interest}-${level}-${Date.now()}`,
    title: courseTitle,
    description: `A ${levelAdjective} journey through the wonders of astronomy, tailored to your specific interests and learning preferences.`,
    forInterest: interest,
    forLevel: level,
    forLearningStyle: learningStyle,
    sections: [
      {
        id: "section-1",
        title: "Foundations and Core Principles",
        introduction: "This section introduces key concepts that will form the foundation of your astronomy journey. Understanding these principles is essential before diving deeper into specialized topics.",
        videoUrl: "https://www.youtube.com/embed/0rHUDWjR5gg",
        keyPoints: [
          "The scale of cosmic distances and how they're measured",
          "Basic principles of observational astronomy", 
          "How light and electromagnetic spectrum inform our understanding of space",
          "Tools and technologies used in modern astronomy"
        ],
        image: {
          url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
          description: "The night sky reveals billions of stars in our Milky Way galaxy, each one a potential host for planetary systems."
        },
        quiz: {
          question: "What is the primary tool astronomers use to study distant objects in space?",
          options: [
            "Microscopes",
            "Telescopes that capture various wavelengths of light",
            "Rovers and physical exploration",
            "Sound wave detection equipment"
          ],
          correctAnswer: 1
        }
      },
      {
        id: "section-2",
        title: "Celestial Observations",
        introduction: "Learning to observe the night sky is both a practical skill and a gateway to deeper astronomical understanding. This section covers techniques for successful stargazing.",
        videoUrl: "https://www.youtube.com/embed/1sZ15SUeS9w",
        keyPoints: [
          "Identifying major constellations and celestial landmarks",
          "Understanding celestial coordinates and star charts",
          "Techniques for naked-eye, binocular, and telescope observations",
          "Planning optimal observation sessions based on location and timing"
        ],
        image: {
          url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
          description: "Mountain observatories provide ideal conditions for astronomical observations away from light pollution."
        },
        quiz: {
          question: "Why do astronomers often prefer observing the night sky during a new moon?",
          options: [
            "The moon's gravity affects telescope accuracy",
            "Stars are brighter during the new moon phase",
            "Less light pollution from moonlight allows better visibility of dim objects",
            "The new moon phase causes more meteors to enter Earth's atmosphere"
          ],
          correctAnswer: 2
        }
      },
      {
        id: "section-3",
        title: "Cosmic Phenomena",
        introduction: "The universe is filled with spectacular phenomena that challenge our understanding of physics. In this section, we explore some of the most fascinating cosmic events.",
        videoUrl: "https://www.youtube.com/embed/G0V3j-itfBU",
        keyPoints: [
          "The life cycle of stars from formation to various end states",
          "Black holes, neutron stars, and other extreme objects",
          "Galaxy formation and evolution throughout cosmic history",
          "Transient phenomena like supernovae and gamma-ray bursts"
        ],
        image: {
          url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
          description: "Nebulae are stellar nurseries where new stars are born from cosmic gas and dust."
        },
        quiz: {
          question: "What cosmic event results from the complete gravitational collapse of a massive star?",
          options: [
            "Planetary nebula",
            "Supernova explosion",
            "Solar flare",
            "Aurora borealis"
          ],
          correctAnswer: 1
        }
      },
      {
        id: "section-4",
        title: "Current Research and Discoveries",
        introduction: "Astronomy is a rapidly evolving field with new discoveries announced regularly. This section highlights recent breakthroughs and active areas of research.",
        videoUrl: "https://www.youtube.com/embed/bUIU1kWk6HU",
        keyPoints: [
          "Latest findings from space telescopes and observatories",
          "Exoplanet discoveries and the search for habitable worlds",
          "Advances in understanding dark matter and dark energy",
          "Gravitational wave astronomy and multi-messenger observations"
        ],
        image: {
          url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
          description: "Space telescopes like James Webb allow us to peer deeper into the universe than ever before."
        },
        quiz: {
          question: "Which recent technological advancement has allowed astronomers to directly detect gravitational waves?",
          options: [
            "The Hubble Space Telescope",
            "LIGO (Laser Interferometer Gravitational-Wave Observatory)",
            "The International Space Station",
            "Radio telescope arrays"
          ],
          correctAnswer: 1
        }
      },
      {
        id: "section-5",
        title: "Practical Applications",
        introduction: "Astronomy isn't just theoretical—it has practical applications that impact our daily lives and potential future as a spacefaring civilization.",
        videoUrl: "https://www.youtube.com/embed/HSJJxYu9ong",
        keyPoints: [
          "Spin-off technologies from astronomical research",
          "Space weather and its impact on Earth's technology",
          "Asteroid detection and planetary defense",
          "Future of human space exploration and potential colonization"
        ],
        image: {
          url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
          description: "Satellite technologies developed for astronomy now provide critical services for communication, navigation, and Earth observation."
        },
        quiz: {
          question: "How does astronomical research on solar activity benefit life on Earth?",
          options: [
            "It helps predict climate change over millennia",
            "It enables more accurate weather forecasting",
            "It provides early warnings for solar storms that could damage power grids and satellites",
            "It determines optimal growing seasons for agriculture"
          ],
          correctAnswer: 2
        }
      }
    ]
  };
};
