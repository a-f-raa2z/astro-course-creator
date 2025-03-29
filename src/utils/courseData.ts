
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
        title: "The Solar System",
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
        title: "Intro of Artificial Intelligence",
        introduction: "This section introduces the fundamental concepts of artificial intelligence. We'll explore what AI is, its history, and its impact on our world today.",
        whyLearn: "Understanding AI fundamentals is essential as they form the foundation for all AI knowledge. These concepts will help you grasp the big picture of AI development and application.",
        videoUrl: "https://www.youtube.com/embed/ad79nYk2keg",
        keyPoints: [
          "AI refers to systems or machines that mimic human intelligence",
          "Machine Learning is a subset of AI focused on data learning",
          "Neural networks are computing systems inspired by biological brains",
          "AI can be narrow (specialized) or general (broad capabilities)"
        ],
        shortVideo: "https://www.youtube.com/embed/FCvK8Bbc0HU",
        additionalShortVideos: ["https://www.youtube.com/embed/bs7DxD9XGwA"],
        bonusVideos: ["https://www.youtube.com/embed/RzkD_rTEBYs"],
        visualUrl: "https://sightengine.com/ai-or-not?version=2024Q3",
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
        title: "Machine Learning",
        introduction: "Machine learning is at the core of modern AI applications. This section explores how machines can learn from data and make predictions without being explicitly programmed.",
        whyLearn: "Machine learning drives most practical AI applications today. Understanding these concepts will help you recognize how AI systems learn and improve over time.",
        videoUrl: "https://www.youtube.com/embed/ukzFI9rgwfU",
        keyPoints: [
          "Machine learning algorithms learn patterns from training data",
          "Supervised learning requires labeled data for training",
          "Unsupervised learning identifies patterns without labeled data",
          "Reinforcement learning uses rewards to guide learning"
        ],
        shortVideo: "https://www.youtube.com/embed/PeMlggyqz0Y",
        additionalShortVideos: [
          "https://www.youtube.com/embed/59bMh59JQDo",
          "https://www.youtube.com/embed/MYWpaNYAo0o"
        ],
        bonusVideos: ["https://www.youtube.com/embed/T2qQGqZxkD0"],
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
        title: "Deep Learning",
        introduction: "Deep learning is a specialized form of machine learning that uses multi-layered neural networks to model complex patterns. This section explores how deep learning powers many modern AI applications.",
        whyLearn: "Deep learning powers the most advanced AI applications today. Understanding neural networks is essential for working with cutting-edge AI technologies.",
        videoUrl: "https://www.youtube.com/embed/bfmFfD2RIcg",
        keyPoints: [
          "Deep learning uses neural networks with multiple hidden layers",
          "Each layer in a neural network extracts different features",
          "Deep learning excels at processing unstructured data like images and text",
          "Training deep neural networks requires significant data and computational resources"
        ],
        shortVideo: "https://www.youtube.com/embed/kQl45ophSVQ",
        additionalShortVideos: ["https://www.youtube.com/embed/xZ0Bdg5yOuk"],
        bonusVideos: ["https://www.youtube.com/embed/WXuK6gekU1Y"],
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
            question: "How many layers must a neural network have to be considered 'deep'?",
            options: [
              "At least 2 layers",
              "At least 3 layers including input and output",
              "More than 3 hidden layers",
              "More than 10 layers"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-ai-4",
        title: "Generative AI",
        introduction: "Generative AI creates new content including text, images, music, and more. This section explores how generative models work and their applications across different domains.",
        whyLearn: "Generative AI is transforming creative work and content creation. Understanding these technologies helps you appreciate their capabilities and limitations.",
        videoUrl: "https://www.youtube.com/embed/NRmAXDWJVnU",
        keyPoints: [
          "Generative AI creates new content based on patterns in training data",
          "GANs (Generative Adversarial Networks) use competing neural networks",
          "Transformer models like GPT underpin large language models",
          "Ethical considerations include copyright, bias, and misinformation"
        ],
        shortVideo: "https://www.youtube.com/embed/5O-_1zR04Yc",
        additionalShortVideos: ["https://www.youtube.com/embed/JUFdC-Jcuvo"],
        visualUrl: "https://rosebud.ai/p/abc075c1-8054-426c-a68b-942da1ec77d7",
        image: {
          url: "https://images.unsplash.com/photo-1586374579358-9d19d632b6df",
          description: "Generative AI can create realistic images, text, and other content that never existed before."
        },
        quiz: {
          question: "What is the primary difference between discriminative and generative models?",
          options: [
            "Discriminative models classify inputs, while generative models create new outputs",
            "Generative models require less data than discriminative models",
            "Generative models require less data than discriminative models",
            "Generative models use neural networks, while generative models use decision trees",
            "Generative models are supervised, while discriminative models are unsupervised"
          ],
          correctAnswer: 0
        },
        quizzes: [
          {
            question: "What is the primary difference between discriminative and generative models?",
            options: [
              "Discriminative models classify inputs, while generative models create new outputs",
              "Generative models require less data than discriminative models",
              "Generative models use neural networks, while generative models use decision trees",
              "Generative models are supervised, while discriminative models are unsupervised"
            ],
            correctAnswer: 0
          },
          {
            question: "Which of these is NOT a common type of generative AI?",
            options: [
              "Generative Adversarial Networks (GANs)",
              "Variational Autoencoders (VAEs)",
              "Diffusion Models",
              "Supervised Vector Machines (SVMs)"
            ],
            correctAnswer: 3
          },
          {
            question: "What is 'prompt engineering' in the context of generative AI?",
            options: [
              "Designing the neural network architecture",
              "Creating effective instructions for AI to generate desired outputs",
              "Fixing bugs in AI code",
              "Setting up the hardware for AI training"
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "section-ai-5",
        title: "Chatbots",
        introduction: "Chatbots are AI systems designed to converse with humans through text or speech. This section explores how modern conversational AI works and its applications.",
        whyLearn: "Conversational AI is becoming ubiquitous in customer service, personal assistants, and many other domains. Understanding chatbots helps you interact with and potentially develop these systems.",
        videoUrl: "https://www.youtube.com/embed/o9-ObGgfpEk",
        keyPoints: [
          "Modern chatbots use large language models trained on vast text data",
          "Chatbots can be rule-based or use machine learning approaches",
          "Contextual understanding is key to natural-sounding conversations",
          "Challenges include maintaining coherence, factuality, and appropriate responses"
        ],
        shortVideo: "https://www.youtube.com/embed/56AOfobY6do",
        additionalShortVideos: ["https://www.youtube.com/embed/gmUHEvrpYoU"],
        bonusVideos: ["https://www.youtube.com/embed/X-AWdfSFCHQ"],
        visualUrl: "https://play.aidungeon.com/scenario/BspAiw_VrLtr/how-it-ends",
        image: {
          url: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
          description: "Chatbots enable natural conversations between humans and machines through text or voice interfaces."
        },
        quiz: {
          question: "What is the Turing Test designed to evaluate?",
          options: [
            "The computational power of an AI system",
            "The ability of an AI to mimic human conversation convincingly",
            "The factual accuracy of an AI's responses",
            "The speed at which an AI can process information"
          ],
          correctAnswer: 1
        },
        quizzes: [
          {
            question: "What is the Turing Test designed to evaluate?",
            options: [
              "The computational power of an AI system",
              "The ability of an AI to mimic human conversation convincingly",
              "The factual accuracy of an AI's responses",
              "The speed at which an AI can process information"
            ],
            correctAnswer: 1
          },
          {
            question: "Which of these is NOT typically a component of a chatbot system?",
            options: [
              "Natural Language Understanding (NLU)",
              "Dialogue Management",
              "Physical Robotics Interface",
              "Response Generation"
            ],
            correctAnswer: 2
          },
          {
            question: "What causes chatbot 'hallucinations'?",
            options: [
              "Electrical interference in the server",
              "Generating content that seems plausible but is factually incorrect",
              "Users asking deliberately confusing questions",
              "Insufficient memory allocation"
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "section-ai-6",
        title: "Robots and Automation",
        introduction: "Robotics combines AI with physical systems to interact with the real world. This section explores how AI enables robots and automation systems to perform various tasks.",
        whyLearn: "Robots and automation are transforming industries from manufacturing to healthcare. Understanding these technologies helps you appreciate their capabilities and future potential.",
        videoUrl: "https://www.youtube.com/embed/eLl2d2cmHHQ",
        keyPoints: [
          "Robots use sensors to perceive their environment and actuators to interact with it",
          "AI enables robots to make decisions based on environmental data",
          "Automation can range from simple rule-based systems to complex AI-driven processes",
          "Robots are increasingly being used in healthcare, manufacturing, agriculture, and more"
        ],
        shortVideo: "https://www.youtube.com/embed/uWObkOV71ZI",
        additionalShortVideos: [
          "https://www.youtube.com/embed/vQhqYXGExWY",
          "https://www.youtube.com/embed/jD5y1eQ3Y_o"
        ],
        bonusVideos: ["https://www.youtube.com/embed/f2aocKWrPG8"],
        image: {
          url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
          description: "Robots combine physical capabilities with AI systems to perform tasks in the real world."
        },
        quiz: {
          question: "Which of the following is NOT a common type of industrial robot?",
          options: [
            "Articulated robots",
            "Cartesian robots",
            "Collaborative robots (cobots)",
            "Cognitive robots"
          ],
          correctAnswer: 3
        },
        quizzes: [
          {
            question: "Which of the following is NOT a common type of industrial robot?",
            options: [
              "Articulated robots",
              "Cartesian robots",
              "Collaborative robots (cobots)",
              "Cognitive robots"
            ],
            correctAnswer: 3
          },
          {
            question: "What is a key difference between automation and robotics?",
            options: [
              "Automation always involves physical movement while robotics doesn't",
              "Robotics requires AI while automation doesn't",
              "Automation focuses on replacing repetitive processes while robotics involves machines that can interact with the environment",
              "Robotics is only used in manufacturing while automation is used across industries"
            ],
            correctAnswer: 2
          },
          {
            question: "What is the primary challenge for robots operating in unstructured environments?",
            options: [
              "Battery life",
              "Network connectivity",
              "Perception and adaptation to changing conditions",
              "User interface design"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-ai-7",
        title: "AI for Music",
        introduction: "AI is transforming music creation, production, and distribution. This section explores how AI helps compose, mix, master, and even perform music.",
        whyLearn: "AI music technologies are creating new possibilities for creators and listeners alike. Understanding these tools helps you appreciate their creative potential.",
        videoUrl: "https://www.youtube.com/embed/Ey75Xw_ikqs",
        keyPoints: [
          "AI can compose original music by learning patterns from existing compositions",
          "Neural networks can generate melodies, harmonies, and rhythmic structures",
          "AI tools assist human musicians rather than replacing them",
          "Ethical considerations include copyright, attribution, and artistic authenticity"
        ],
        shortVideo: "https://www.youtube.com/embed/_uLBlSKckos",
        additionalShortVideos: ["https://www.youtube.com/embed/csAMFh7vsqw"],
        bonusVideos: ["https://www.youtube.com/embed/1oj0Usyy_ds"],
        visualUrl: "https://labs.google/fx/tools/music-fx",
        image: {
          url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
          description: "AI music generation tools can create original compositions by learning patterns from existing music."
        },
        quiz: {
          question: "Which of these is NOT typically a feature of AI music generation systems?",
          options: [
            "Melody generation",
            "Harmony creation",
            "Live instrumentation",
            "Style transfer"
          ],
          correctAnswer: 2
        },
        quizzes: [
          {
            question: "Which of these is NOT typically a feature of AI music generation systems?",
            options: [
              "Melody generation",
              "Harmony creation",
              "Live instrumentation",
              "Style transfer"
            ],
            correctAnswer: 2
          },
          {
            question: "What is the primary data source for training AI music generation systems?",
            options: [
              "Sheet music notation",
              "Audio recordings",
              "MIDI files",
              "Instrument recordings"
            ],
            correctAnswer: 2
          }
        ]
      }
    ]
  };
}
