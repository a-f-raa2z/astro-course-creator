
import { AssessmentQuestion, Course } from "@/types/course";

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "interest",
    question: "What aspect of astronomy fascinates you the most?",
    description: "Drag the option to fill in the blank.",
    template: "I am most fascinated by ___.",
    blanks: [
      { id: "stars", text: "stars and stellar evolution", value: "stars" },
      { id: "planets", text: "planets and solar systems", value: "planets" },
      { id: "galaxies", text: "galaxies and deep space", value: "galaxies" },
      { id: "cosmology", text: "cosmology and the early universe", value: "cosmology" },
      { id: "space-tech", text: "space technology and exploration", value: "space-tech" }
    ]
  },
  {
    id: "level",
    question: "What's your current level of astronomy knowledge?",
    description: "Drag the option to fill in the blank.",
    template: "My astronomy knowledge level is ___.",
    blanks: [
      { id: "beginner", text: "beginner - I know the basics", value: "beginner" },
      { id: "intermediate", text: "intermediate - I understand core concepts", value: "intermediate" },
      { id: "advanced", text: "advanced - I'm looking to deepen expertise", value: "advanced" }
    ]
  },
  {
    id: "learning-style",
    question: "How do you prefer to learn new concepts?",
    description: "Drag the option to fill in the blank.",
    template: "I learn best through ___ content.",
    blanks: [
      { id: "visual", text: "visual - images and diagrams", value: "visual" },
      { id: "interactive", text: "interactive - hands-on activities", value: "interactive" },
      { id: "conceptual", text: "conceptual - theoretical explanations", value: "conceptual" },
      { id: "practical", text: "practical - real-world applications", value: "practical" }
    ]
  }
];

export const generateMockCourse = (interest: string, level: string, learningStyle: string): Course => {
  const interestTitles: Record<string, string> = {
    stars: "Stellar Evolution: From Dust to Supernovae",
    planets: "Exploring Our Solar System and Beyond",
    galaxies: "Galaxy Formation and Cosmic Structure",
    cosmology: "The Universe's Beginning and Ultimate Fate",
    "space-tech": "Space Exploration: Technologies and Missions",
    "ai": "Artificial Intelligence: Concepts and Applications"
  };

  const levelDescriptors: Record<string, string> = {
    beginner: "foundational",
    intermediate: "comprehensive",
    advanced: "advanced"
  };

  const courseTitle = interestTitles[interest] || "Personalized Learning Journey";
  const levelAdjective = levelDescriptors[level] || "personalized";

  if (interest === "ai") {
    return generateAICourse(level, learningStyle);
  }

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
        introduction: "This section introduces the fundamental concepts of astronomy that serve as building blocks for understanding the universe. We'll explore the basic principles that astronomers use to study celestial objects and phenomena.",
        whyLearn: "Understanding these core principles is essential as they form the foundation for all astronomical knowledge. These concepts will help you grasp how we measure the vast distances in space and understand the nature of light as our primary source of cosmic information.",
        videoUrl: "https://www.youtube.com/embed/0rHUDWjR5gg",
        keyPoints: [
          "The scale of the universe spans from subatomic particles to superclusters of galaxies",
          "Light is our primary source of information about distant objects", 
          "The electromagnetic spectrum reveals different properties of celestial objects",
          "Modern astronomy combines observations across multiple wavelengths"
        ],
        shortVideo: "https://www.youtube.com/embed/mO3Q4bRQZ3k",
        image: {
          url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
          description: "The night sky reveals countless stars, each one potentially hosting planetary systems similar or vastly different from our own."
        },
        quiz: {
          question: "Which property of light allows astronomers to determine the chemical composition of stars?",
          options: [
            "Reflection",
            "Absorption and emission spectra",
            "Luminosity",
            "Color temperature"
          ],
          correctAnswer: 1
        },
        quizzes: [
          {
            question: "Which property of light allows astronomers to determine the chemical composition of stars?",
            options: [
              "Reflection",
              "Absorption and emission spectra",
              "Luminosity",
              "Color temperature"
            ],
            correctAnswer: 1
          },
          {
            question: "What is the primary force that shapes the large-scale structure of the universe?",
            options: [
              "Electromagnetic force",
              "Strong nuclear force",
              "Weak nuclear force",
              "Gravity"
            ],
            correctAnswer: 3
          },
          {
            question: "Which type of telescope is best for observing objects that emit radio waves?",
            options: [
              "Refracting telescope",
              "Reflecting telescope",
              "Radio telescope",
              "X-ray telescope"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-2",
        title: "The Inner Planets",
        introduction: "In this section, we'll explore Mercury, Venus, Earth, and Mars - the four terrestrial planets closest to the Sun that make up the inner solar system.",
        whyLearn: "The inner planets offer valuable insights into the formation of rocky worlds and provide important comparisons to understand what makes Earth uniquely habitable.",
        videoUrl: "https://www.youtube.com/embed/05E1uMh15QQ",
        keyPoints: [
          "The inner planets (Mercury, Venus, Earth, Mars) are mostly composed of rock and metal",
          "Each inner planet has unique characteristics that influence its environment",
          "Earth is the only inner planet confirmed to currently support life",
          "The inner planets formed from similar materials but evolved very differently"
        ],
        shortVideo: "https://www.youtube.com/embed/_rzAbPtUamA",
        additionalShortVideos: ["https://www.youtube.com/embed/4qCczin1Muo"],
        image: {
          url: "https://science.nasa.gov/wp-content/uploads/2023/11/pia25016.width-1320.jpg",
          description: "The four inner planets (Mercury, Venus, Earth, and Mars) are terrestrial (rocky) worlds."
        },
        quiz: {
          question: "Which inner planet has the longest day, lasting approximately 116 Earth days?",
          options: [
            "Mercury",
            "Venus",
            "Earth",
            "Mars"
          ],
          correctAnswer: 0
        },
        quizzes: [
          {
            question: "Which inner planet has the longest day, lasting approximately 116 Earth days?",
            options: [
              "Mercury",
              "Venus",
              "Earth",
              "Mars"
            ],
            correctAnswer: 0
          },
          {
            question: "Which inner planet has a surface temperature hot enough to melt lead?",
            options: [
              "Mercury",
              "Venus",
              "Earth",
              "Mars"
            ],
            correctAnswer: 1
          },
          {
            question: "Which inner planet has the largest volcano in the solar system?",
            options: [
              "Mercury",
              "Venus",
              "Earth",
              "Mars"
            ],
            correctAnswer: 3
          }
        ]
      },
      {
        id: "section-3",
        title: "Earth",
        introduction: "Our home planet - Earth is the blue marble of the Solar System and the only known world with abundant liquid water and thriving ecosystems.",
        whyLearn: "Understanding Earth as a planet helps us appreciate both its uniqueness and its place in the cosmic context, while providing insights into planetary science and climate systems.",
        videoUrl: "https://www.youtube.com/embed/HCDVN7DCzYE",
        keyPoints: [
          "Earth is the only planet known to support life, with a unique atmosphere and hydrosphere",
          "Our planet has a protective magnetic field generated by its molten iron core",
          "Earth's surface is dynamic, with active plate tectonics shaping continents and oceans",
          "The climate system involves complex interactions between land, oceans, atmosphere, and life"
        ],
        shortVideo: "https://www.youtube.com/embed/HRwNdMoNUq4",
        additionalShortVideos: ["https://www.youtube.com/embed/eCj5KgfRRGQ"],
        bonusVideos: [
          "https://www.youtube.com/embed/videoseries?list=PL50KW6aT4Ugw65Ex89Z2XrBxQVZLdyOZ9",
          "https://www.youtube.com/embed/mrYjJ9Jl9dA?list=PL2gLpWRK0QlCXPhOqQD0wqPhLIvjq0BUj"
        ],
        visualUrl: "https://world-geography-games.com/en/world_earth.html",
        image: {
          url: "https://science.nasa.gov/wp-content/uploads/2023/06/as17-148-22727-earth-full-disk-apollo-17-1972.width-1320.jpg",
          description: "Earth, our home planet, is the only place we know of so far that's inhabited by living things."
        },
        quiz: {
          question: "What percentage of Earth's surface is covered by water?",
          options: [
            "50%",
            "60%",
            "71%",
            "85%"
          ],
          correctAnswer: 2
        },
        quizzes: [
          {
            question: "What percentage of Earth's surface is covered by water?",
            options: [
              "50%",
              "60%",
              "71%",
              "85%"
            ],
            correctAnswer: 2
          },
          {
            question: "What is the primary gas in Earth's atmosphere?",
            options: [
              "Oxygen",
              "Carbon dioxide",
              "Nitrogen",
              "Argon"
            ],
            correctAnswer: 2
          },
          {
            question: "What causes Earth's seasons?",
            options: [
              "Variations in distance from the Sun",
              "Changes in the Sun's energy output",
              "Earth's axial tilt relative to its orbital plane",
              "Ocean current patterns"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-4",
        title: "The Moon",
        introduction: "Earth's natural satellite and our closest celestial neighbor, the Moon has fascinated humanity throughout history and continues to be a focus of scientific study and exploration.",
        whyLearn: "The Moon provides insights into Earth's history, the evolution of rocky bodies, and serves as a potential stepping stone for future human exploration of the solar system.",
        videoUrl: "https://www.youtube.com/embed/6AviDjR9mmo",
        keyPoints: [
          "The Moon is Earth's only natural satellite and the fifth largest moon in the solar system",
          "Its formation likely resulted from a massive collision between Earth and a Mars-sized body",
          "The Moon has no atmosphere and experiences extreme temperature variations",
          "Lunar exploration has provided valuable scientific data and technological advancements"
        ],
        shortVideo: "https://www.youtube.com/embed/rVMvzH1FxfE",
        additionalShortVideos: ["https://www.youtube.com/embed/fTok7usLXb4"],
        visualUrl: "https://eyes.nasa.gov/apps/solar-system/#/earth/moons/moon",
        image: {
          url: "https://science.nasa.gov/wp-content/uploads/2023/09/moon.width-1320.jpg",
          description: "The Moon is Earth's only natural satellite and the fifth largest moon in the solar system."
        },
        quiz: {
          question: "What causes the Moon to always show the same face to Earth?",
          options: [
            "The Moon doesn't rotate at all",
            "The Moon's rotation period equals its orbital period around Earth",
            "Earth's gravity prevents the Moon from rotating",
            "The Moon's axis is perfectly aligned with Earth's axis"
          ],
          correctAnswer: 1
        },
        quizzes: [
          {
            question: "What causes the Moon to always show the same face to Earth?",
            options: [
              "The Moon doesn't rotate at all",
              "The Moon's rotation period equals its orbital period around Earth",
              "Earth's gravity prevents the Moon from rotating",
              "The Moon's axis is perfectly aligned with Earth's axis"
            ],
            correctAnswer: 1
          },
          {
            question: "What are the dark patches visible on the Moon's surface?",
            options: [
              "Large lakes",
              "Ancient volcanic plains (maria)",
              "Shadows from mountains",
              "Forests"
            ],
            correctAnswer: 1
          },
          {
            question: "How long does it take for the Moon to complete one orbit around Earth?",
            options: [
              "1 day",
              "7 days",
              "27.3 days",
              "365 days"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-5",
        title: "Practical Applications",
        introduction: "Astronomy isn't just theoretical—it has practical applications that impact our daily lives and potential future as a spacefaring civilization.",
        whyLearn: "Understanding the practical applications of astronomy reveals how cosmic knowledge directly benefits society, technology development, and our species' long-term survival.",
        videoUrl: "https://www.youtube.com/embed/HSJJxYu9ong",
        keyPoints: [
          "Spin-off technologies from astronomical research",
          "Space weather and its impact on Earth's technology",
          "Asteroid detection and planetary defense",
          "Future of human space exploration and potential colonization"
        ],
        shortVideo: "https://www.youtube.com/embed/r_qwxV7JEhM",
        image: {
          url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
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
        },
        quizzes: [
          {
            question: "How does astronomical research on solar activity benefit life on Earth?",
            options: [
              "It helps predict climate change over millennia",
              "It enables more accurate weather forecasting",
              "It provides early warnings for solar storms that could damage power grids and satellites",
              "It determines optimal growing seasons for agriculture"
            ],
            correctAnswer: 2
          },
          {
            question: "Which NASA program is focused on returning humans to the Moon as a stepping stone to Mars?",
            options: [
              "Apollo",
              "Gemini",
              "Artemis",
              "Mercury"
            ],
            correctAnswer: 2
          },
          {
            question: "Which of these technologies was NOT initially developed for space exploration but later adapted for everyday use?",
            options: [
              "Smartphone cameras",
              "Memory foam",
              "Water purification systems",
              "Social media platforms"
            ],
            correctAnswer: 3
          }
        ]
      }
    ]
  };
};

export const astronomyCourseData = generateMockCourse("planets", "intermediate", "visual");
export const aiCourseData = generateAICourse("intermediate", "visual");

function generateAICourse(level: string, learningStyle: string): Course {
  const levelAdjective = level === "beginner" ? "foundational" : level === "advanced" ? "advanced" : "comprehensive";
  
  return {
    id: `course-ai-${level}-${Date.now()}`,
    title: "Artificial Intelligence: Concepts and Applications",
    description: `A ${levelAdjective} journey through the world of artificial intelligence, tailored to your learning preferences.`,
    forInterest: "ai",
    forLevel: level,
    forLearningStyle: learningStyle,
    sections: [
      {
        id: "section-ai-1",
        title: "Introduction to AI",
        introduction: "This section introduces the fundamental concepts of artificial intelligence and machine learning. We'll explore the history, key terminology, and core principles.",
        whyLearn: "Understanding these fundamentals is essential as they form the foundation for all AI knowledge. These concepts will help you grasp the big picture of AI development and application.",
        videoUrl: "https://www.youtube.com/embed/mJeNghZXtMo",
        keyPoints: [
          "AI refers to systems or machines that mimic human intelligence",
          "Machine Learning is a subset of AI focused on data learning",
          "Neural networks are computing systems inspired by biological brains",
          "Deep Learning uses multiple layers of neural networks for complex tasks"
        ],
        shortVideo: "https://www.youtube.com/embed/ad79nYk2keg",
        image: {
          url: "https://images.unsplash.com/photo-1677442135073-8edf721c002b",
          description: "AI systems analyze and process data to make predictions and decisions based on patterns they've learned."
        },
        quiz: {
          question: "Which of the following is NOT a major type of machine learning?",
          options: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Predictive Learning",
            "Reinforcement Learning"
          ],
          correctAnswer: 2
        },
        quizzes: [
          {
            question: "Which of the following is NOT a major type of machine learning?",
            options: [
              "Supervised Learning",
              "Unsupervised Learning",
              "Predictive Learning",
              "Reinforcement Learning"
            ],
            correctAnswer: 2
          },
          {
            question: "What year was the term 'Artificial Intelligence' first coined?",
            options: [
              "1943",
              "1956",
              "1969",
              "1981"
            ],
            correctAnswer: 1
          },
          {
            question: "Which of these is an example of narrow AI?",
            options: [
              "HAL 9000 from 2001: A Space Odyssey",
              "A chess-playing program",
              "A fully autonomous robot with consciousness",
              "A system that can solve any intellectual task a human can"
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "section-ai-2",
        title: "Machine Learning Fundamentals",
        introduction: "Machine learning is at the core of modern AI applications. This section covers how machines learn from data and make predictions.",
        whyLearn: "Machine learning drives most practical AI applications today. Understanding these concepts will help you recognize how AI systems learn and improve over time.",
        videoUrl: "https://www.youtube.com/embed/Gv9_4yMHFhI",
        keyPoints: [
          "Data preparation is critical for effective machine learning",
          "Feature selection impacts model performance significantly",
          "Algorithms learn patterns from training data to make predictions",
          "Model evaluation helps measure performance and prevent overfitting"
        ],
        shortVideo: "https://www.youtube.com/embed/YFxVHBcGi7k",
        image: {
          url: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c",
          description: "Machine learning models continuously improve by analyzing patterns in data to make better predictions."
        },
        quiz: {
          question: "What is overfitting in machine learning?",
          options: [
            "When a model performs poorly on both training and test data",
            "When a model performs well on training data but poorly on new data",
            "When a model takes too long to train",
            "When a model requires too much computing power"
          ],
          correctAnswer: 1
        },
        quizzes: [
          {
            question: "What is overfitting in machine learning?",
            options: [
              "When a model performs poorly on both training and test data",
              "When a model performs well on training data but poorly on new data",
              "When a model takes too long to train",
              "When a model requires too much computing power"
            ],
            correctAnswer: 1
          },
          {
            question: "Which of these is NOT a common machine learning algorithm?",
            options: [
              "Decision Trees",
              "Neural Networks",
              "Quantum Regression",
              "Support Vector Machines"
            ],
            correctAnswer: 2
          },
          {
            question: "What is the primary goal of the training phase in supervised learning?",
            options: [
              "To minimize the number of features",
              "To maximize computational efficiency",
              "To minimize prediction error on training data",
              "To identify hidden patterns without labeled data"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-ai-3",
        title: "Neural Networks & Deep Learning",
        introduction: "Neural networks form the basis of deep learning, enabling AI to perform complex tasks like image and speech recognition.",
        whyLearn: "Deep learning powers the most advanced AI applications today. Understanding neural networks is essential for working with cutting-edge AI technologies.",
        videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
        keyPoints: [
          "Artificial neurons (perceptrons) are the building blocks of neural networks",
          "Deep networks contain multiple hidden layers between input and output",
          "Backpropagation adjusts weights to minimize prediction error",
          "Activation functions introduce non-linearity essential for complex learning"
        ],
        shortVideo: "https://www.youtube.com/embed/B1xF0ETssYE",
        image: {
          url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
          description: "Neural networks mimic human brain structure to process complex relationships between inputs and outputs."
        },
        quiz: {
          question: "Which component allows neural networks to learn non-linear relationships?",
          options: [
            "Weights",
            "Biases",
            "Activation functions",
            "Loss functions"
          ],
          correctAnswer: 2
        },
        quizzes: [
          {
            question: "Which component allows neural networks to learn non-linear relationships?",
            options: [
              "Weights",
              "Biases",
              "Activation functions",
              "Loss functions"
            ],
            correctAnswer: 2
          },
          {
            question: "What is a convolutional neural network (CNN) primarily used for?",
            options: [
              "Text processing",
              "Image recognition",
              "Time series forecasting",
              "Reinforcement learning"
            ],
            correctAnswer: 1
          },
          {
            question: "Which of these is NOT a common activation function?",
            options: [
              "ReLU",
              "Sigmoid",
              "Tanh",
              "MaxPool"
            ],
            correctAnswer: 3
          }
        ]
      },
      {
        id: "section-ai-4",
        title: "Natural Language Processing",
        introduction: "Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language.",
        whyLearn: "NLP applications are transforming how we interact with technology. Understanding these concepts helps you make sense of chatbots, translation services, and text analysis tools.",
        videoUrl: "https://www.youtube.com/embed/CMrHM8a3hqw",
        keyPoints: [
          "Text preprocessing cleans and standardizes language data",
          "Word embeddings convert text into numerical representations",
          "Recurrent neural networks process sequential data like sentences",
          "Transformer models like BERT and GPT have revolutionized NLP tasks"
        ],
        shortVideo: "https://www.youtube.com/embed/9OkrPdDKc3c",
        image: {
          url: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9",
          description: "Natural Language Processing enables computers to understand and generate human language, powering chatbots and translation services."
        },
        quiz: {
          question: "What NLP model architecture introduced the concept of 'attention' mechanisms?",
          options: [
            "Recurrent Neural Networks",
            "Convolutional Neural Networks",
            "Transformer Models",
            "Generative Adversarial Networks"
          ],
          correctAnswer: 2
        },
        quizzes: [
          {
            question: "What NLP model architecture introduced the concept of 'attention' mechanisms?",
            options: [
              "Recurrent Neural Networks",
              "Convolutional Neural Networks",
              "Transformer Models",
              "Generative Adversarial Networks"
            ],
            correctAnswer: 2
          },
          {
            question: "Which of these is NOT a common step in text preprocessing?",
            options: [
              "Tokenization",
              "Lemmatization",
              "Stop word removal",
              "Quantization"
            ],
            correctAnswer: 3
          },
          {
            question: "What is the primary purpose of word embeddings like Word2Vec?",
            options: [
              "To compress text data",
              "To represent words as numerical vectors that capture semantic meaning",
              "To translate between languages",
              "To count word frequencies"
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "section-ai-5",
        title: "AI Ethics & Future Trends",
        introduction: "As AI grows more powerful, we must consider its ethical implications and the future direction of the field.",
        whyLearn: "Understanding AI ethics is essential for responsible development and deployment of AI systems. This knowledge helps you navigate the societal impacts of AI technologies.",
        videoUrl: "https://www.youtube.com/embed/HSJJxYu9ong",
        keyPoints: [
          "AI bias can reflect and amplify existing social inequalities",
          "Transparency and explainability are crucial for trustworthy AI",
          "Privacy concerns arise from AI's data requirements",
          "Future AI development may lead to artificial general intelligence (AGI)"
        ],
        shortVideo: "https://www.youtube.com/embed/mjR5Sxj26DY",
        image: {
          url: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1",
          description: "AI ethics considers how artificial intelligence impacts society, addressing issues like bias, privacy, and transparency."
        },
        quiz: {
          question: "Which of the following is NOT one of the common ethical challenges in AI development?",
          options: [
            "Algorithmic bias",
            "Privacy concerns",
            "Accessibility for all users",
            "Job displacement"
          ],
          correctAnswer: 2
        },
        quizzes: [
          {
            question: "Which of the following is NOT one of the common ethical challenges in AI development?",
            options: [
              "Algorithmic bias",
              "Privacy concerns",
              "Accessibility for all users",
              "Job displacement"
            ],
            correctAnswer: 2
          },
          {
            question: "What is algorithmic bias?",
            options: [
              "When an AI system favors certain mathematical operations",
              "When an AI produces unfair outcomes for certain groups",
              "When an AI runs more slowly over time",
              "When an AI uses too much computing power"
            ],
            correctAnswer: 1
          },
          {
            question: "Which term describes AI systems that can perform any intellectual task that a human can?",
            options: [
              "Narrow AI",
              "Artificial General Intelligence (AGI)",
              "Machine Learning",
              "Expert Systems"
            ],
            correctAnswer: 1
          }
        ]
      }
    ]
  };
}
