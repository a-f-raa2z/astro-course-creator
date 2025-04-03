import { Course } from "@/types/course";

export const assessmentQuestions = [
  {
    id: "interest",
    question: "What aspect of space interests you most?",
    description: "This helps us tailor the content to your preferences.",
    options: [
      {
        id: "planets",
        label: "Planets and moons",
        icon: "Planet"
      },
      {
        id: "stars",
        label: "Stars and galaxies",
        icon: "Stars"
      },
      {
        id: "exploration",
        label: "Space exploration",
        icon: "Rocket"
      },
      {
        id: "phenomena",
        label: "Cosmic phenomena",
        icon: "Zap"
      }
    ]
  },
  {
    id: "level",
    question: "How would you describe your knowledge of astronomy?",
    description: "We'll adjust the complexity of the content accordingly.",
    options: [
      {
        id: "beginner",
        label: "Beginner",
        icon: "Sparkles"
      },
      {
        id: "intermediate",
        label: "Intermediate",
        icon: "Star"
      },
      {
        id: "advanced",
        label: "Advanced",
        icon: "Telescope"
      },
      {
        id: "expert",
        label: "Expert",
        icon: "Binary"
      }
    ]
  },
  {
    id: "learningStyle",
    question: "How do you prefer to learn?",
    description: "We'll emphasize content that matches your learning style.",
    options: [
      {
        id: "visual",
        label: "Visual learning",
        icon: "Eye"
      },
      {
        id: "reading",
        label: "Reading text",
        icon: "BookOpen"
      },
      {
        id: "interactive",
        label: "Interactive exercises",
        icon: "Mouse"
      },
      {
        id: "video",
        label: "Video content",
        icon: "Video"
      }
    ]
  }
];

export const aiCourseData: Course = {
  id: "ai-101",
  title: "Introduction to Artificial Intelligence",
  description:
    "Explore the fascinating world of artificial intelligence, from basic concepts to cutting-edge applications. Learn about machine learning, neural networks, and how AI is shaping our future.",
  forInterest: "artificial intelligence",
  forLevel: "intermediate",
  forLearningStyle: "visual",
  sections: [
    {
      id: "ai-section-1",
      title: "Intro of Artificial Intelligence",
      introduction:
        "An overview of what AI is, its history, and why it's important in today's world.",
      whyLearn:
        "Understanding AI fundamentals helps appreciate its capabilities, limitations, and ethical implications.",
      videoUrl: "https://www.youtube.com/embed/oV74Najm6Nc",
      keyPoints: [
        "AI refers to systems that can perform tasks requiring human intelligence.",
        "The term 'Artificial Intelligence' was coined in 1956 at Dartmouth College.",
        "AI can be narrow (specific tasks) or general (human-like intelligence).",
        "Machine learning is a subset of AI focused on learning from data.",
        "Ethics and responsible AI development are crucial considerations."
      ],
      shortVideo: "https://www.youtube.com/embed/LZ8sZnNQ6JA",
      additionalShortVideos: [
        "https://www.youtube.com/embed/a0_lo_GDcFw",
        "https://www.youtube.com/embed/kWmX3pd1f10"
      ],
      bonusVideos: [
        "https://www.youtube.com/embed/5pRE-J053xU",
        "https://www.youtube.com/embed/ad79nYk2keg"
      ],
      image: {
        url: "/lovable-uploads/d3507279-5142-4833-b3ff-7603ecd9be87.png",
        description: "A visual representation of artificial intelligence concepts."
      },
      quiz: {
        question: "Which of these is NOT a type of AI?",
        options: ["Narrow AI", "General AI", "Super AI", "Natural AI"],
        correctAnswer: 3
      }
    },
    {
      id: "ai-section-2",
      title: "Machine Learning",
      introduction:
        "Explore how machines can learn from data to make predictions or decisions without being explicitly programmed.",
      whyLearn:
        "Machine learning powers many modern applications, from recommendation systems to predictive analytics.",
      videoUrl: "https://www.youtube.com/embed/HcqpanDadyQ",
      keyPoints: [
        "Machine learning algorithms improve through experience and data.",
        "Supervised learning uses labeled data to make predictions.",
        "Unsupervised learning finds patterns in unlabeled data.",
        "Reinforcement learning learns through trial and error with rewards.",
        "Feature selection and engineering are crucial for ML performance."
      ],
      shortVideo: "https://www.youtube.com/embed/f_uwKZIAeM0",
      additionalShortVideos: [
        "https://www.youtube.com/embed/IpGxLWOIZy4",
        "https://www.youtube.com/embed/EuK2wsuUJQ0"
      ],
      bonusVideos: [
        "https://www.youtube.com/embed/NMIUCZgezE8",
        "https://www.youtube.com/embed/40riCqvRoMs"
      ],
      image: {
        url: "/lovable-uploads/46e4fa94-5626-45ca-b547-dd52d6d65789.png",
        description: "A diagram showing different machine learning approaches."
      },
      quiz: {
        question: "Which learning type uses labeled training data?",
        options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Transfer Learning"],
        correctAnswer: 1
      }
    },
    {
      id: "ai-section-3",
      title: "Deep Learning",
      introduction:
        "Discover neural networks and how they're revolutionizing AI capabilities through multi-layered learning.",
      whyLearn:
        "Deep learning has enabled breakthroughs in computer vision, natural language processing, and more.",
      videoUrl: "https://www.youtube.com/embed/DooxDIRAkPA",
      keyPoints: [
        "Deep learning uses neural networks with multiple layers.",
        "Each layer in a neural network extracts different features from data.",
        "Deep learning requires large amounts of data and computational power.",
        "Convolutional neural networks excel at image recognition tasks.",
        "Recurrent neural networks are designed for sequential data like text."
      ],
      shortVideo: "https://www.youtube.com/embed/6M5VXKLf4D4",
      additionalShortVideos: [
        "https://www.youtube.com/embed/O5xeyoRL95U",
        "https://www.youtube.com/embed/ILsA4nyG7I0"
      ],
      bonusVideos: [
        "https://www.youtube.com/embed/oJNHXPs0XDk",
        "https://www.youtube.com/embed/zBdrhfjt0K4"
      ],
      image: {
        url: "/lovable-uploads/3d8b75cf-5e69-49ac-9444-9c3f6c33fb4c.png",
        description: "A visual representation of deep neural networks."
      },
      quiz: {
        question: "Which neural network type is specially designed for image processing?",
        options: ["Recurrent Neural Network", "Convolutional Neural Network", "Generative Adversarial Network", "Transformer Network"],
        correctAnswer: 1
      }
    },
    {
      id: "ai-section-4",
      title: "Generative AI",
      introduction:
        "Explore how AI can create new content like images, music, text, and more.",
      whyLearn:
        "Generative AI is transforming creative industries and enabling new forms of human-AI collaboration.",
      videoUrl: "https://www.youtube.com/embed/4zMLIe2tLLI",
      keyPoints: [
        "Generative AI creates new content based on patterns in training data.",
        "Generative Adversarial Networks (GANs) use competing neural networks.",
        "Diffusion models gradually transform noise into coherent content.",
        "Text-to-image models like DALL-E and Stable Diffusion create images from descriptions.",
        "Large Language Models can generate human-like text conversations."
      ],
      shortVideo: "https://www.youtube.com/embed/yi3WnBJ3Jds",
      additionalShortVideos: [
        "https://www.youtube.com/embed/WTl4XbOUgAk",
        "https://www.youtube.com/embed/1CIpzeNxIhU"
      ],
      bonusVideos: [
        "https://www.youtube.com/embed/8BG8gGtq-Mg",
        "https://www.youtube.com/embed/R_f-v6prMqI"
      ],
      visualUrl: "https://editor.p5js.org/ml5/full/jE-5p5XhK",
      image: {
        url: "/lovable-uploads/930c9c02-d768-4457-9ff9-0304dc9579c7.png",
        description: "Examples of AI-generated artwork and design."
      },
      quiz: {
        question: "What do GANs consist of?",
        options: [
          "A generator and a discriminator",
          "A compiler and an interpreter",
          "An encoder and a decoder",
          "A transformer and a processor"
        ],
        correctAnswer: 0
      }
    },
    {
      id: "ai-section-5",
      title: "Chatbots",
      introduction:
        "Learn how conversational AI works and how it's changing how we interact with technology.",
      whyLearn:
        "Chatbots and virtual assistants are becoming ubiquitous in customer service, personal assistance, and more.",
      videoUrl: "https://www.youtube.com/embed/pX2qR_UPDGo",
      keyPoints: [
        "Modern chatbots use natural language processing to understand context.",
        "Large language models power the most advanced conversational AI systems.",
        "Intent recognition helps chatbots understand what users want to achieve.",
        "Entity extraction identifies specific information in user queries.",
        "Dialog management handles the flow of conversation."
      ],
      shortVideo: "https://www.youtube.com/embed/sgUFDbj4qos",
      additionalShortVideos: [
        "https://www.youtube.com/embed/KNJ19rIgBi4",
        "https://www.youtube.com/embed/9n7pPEO8xbY"
      ],
      bonusVideos: [
        "https://www.youtube.com/embed/aiwv-rJwS_c",
        "https://www.youtube.com/embed/PjoP3RNIxA4"
      ],
      image: {
        url: "/lovable-uploads/3215a500-d237-40e1-aecb-2a9e2b64ee10.png",
        description: "A visual representation of conversational AI systems."
      },
      quiz: {
        question: "What technology allows chatbots to understand the meaning of text?",
        options: [
          "Computer vision",
          "Natural language processing",
          "Blockchain",
          "Quantum computing"
        ],
        correctAnswer: 1
      }
    },
    {
      id: "ai-section-6",
      title: "Robots and Automation",
      introduction:
        "Discover how AI is empowering physical machines to perform complex tasks and interact with the world.",
      whyLearn:
        "Robotics and automation are transforming manufacturing, healthcare, logistics, and everyday life.",
      videoUrl: "https://www.youtube.com/embed/sOEg_YZQsTI",
      keyPoints: [
        "Robots combine AI with mechanical engineering for physical interaction.",
        "Computer vision helps robots perceive and navigate their environment.",
        "Reinforcement learning allows robots to learn complex physical tasks.",
        "Collaborative robots (cobots) work alongside humans safely.",
        "Autonomous vehicles use multiple AI technologies to navigate."
      ],
      shortVideo: "https://www.youtube.com/embed/fn3KWM1kuAw",
      additionalShortVideos: [
        "https://www.youtube.com/embed/hSh_UFS1jdA",
        "https://www.youtube.com/embed/jnEBWHkGIhE"
      ],
      bonusVideos: [
        "https://www.youtube.com/embed/cYUdE5fkxck",
        "https://www.youtube.com/embed/ysomllz9J5A"
      ],
      image: {
        url: "/lovable-uploads/a8856a2f-8eb5-4bfc-91c3-b4baf426b804.png",
        description: "A robot working in an automated environment."
      },
      quiz: {
        question: "Which term describes robots designed to work safely alongside humans?",
        options: [
          "Autonomous robots",
          "Humanoid robots",
          "Collaborative robots",
          "Android robots"
        ],
        correctAnswer: 2
      }
    },
    {
      id: "ai-section-7",
      title: "AI for Music",
      introduction:
        "Explore how AI is creating new sounds, helping musicians compose, and transforming the music industry.",
      whyLearn:
        "AI music tools are creating new possibilities for creation, production, and discovery.",
      videoUrl: "https://www.youtube.com/embed/T44KYYTuSIE",
      keyPoints: [
        "AI can generate original musical compositions in various styles.",
        "Neural networks can be trained on specific genres or artists.",
        "AI assists with mixing, mastering, and music production.",
        "Music recommendation systems use AI to personalize playlists.",
        "Some AI tools can separate vocals from instrumental tracks."
      ],
      shortVideo: "https://www.youtube.com/embed/plC7CiOE2UU",
      additionalShortVideos: [
        "https://www.youtube.com/embed/33xGQATVL5Y",
        "https://www.youtube.com/embed/vgYS-dI1I2s"
      ],
      bonusVideos: [
        "https://www.youtube.com/embed/uPBO5kjW3yk",
        "https://www.youtube.com/embed/vNqAufuXPAI"
      ],
      visualUrl: "https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw",
      image: {
        url: "/lovable-uploads/dac0c33f-58a2-44f3-81eb-5f00fda40b1b.png",
        description: "AI-generated musical notation and audio visualization."
      },
      quiz: {
        question: "What can AI music tools do?",
        options: [
          "Only generate simple melodies",
          "Compose music but can't perform it",
          "Generate complete compositions in various styles",
          "Only remix existing music"
        ],
        correctAnswer: 2
      }
    },
    {
      id: "ai-section-8",
      title: "AI for Arts",
      introduction:
        "Discover how AI is creating new artistic possibilities and transforming creative expression.",
      whyLearn:
        "AI art tools are enabling new forms of creativity and challenging our understanding of art.",
      videoUrl: "https://www.youtube.com/embed/9Mxw_ilpvwA",
      keyPoints: [
        "AI can generate original images, paintings, and designs.",
        "Text-to-image models transform descriptions into visual art.",
        "Style transfer allows applying artistic styles to photographs.",
        "AI art raises questions about creativity and authorship.",
        "Artists are incorporating AI as a collaborative creative tool."
      ],
      shortVideo: "https://www.youtube.com/embed/I-EIVlHvHRM",
      additionalShortVideos: [
        "https://www.youtube.com/embed/9bcQwYCtg8Y",
        "https://www.youtube.com/embed/cu3GPkcc5w4"
      ],
      bonusVideos: [
        "https://www.youtube.com/embed/ga9_QlpfG8U",
        "https://www.youtube.com/embed/JRclN2qpzUc"
      ],
      visualUrl: "https://experiments.withgoogle.com/collection/ai",
      image: {
        url: "/lovable-uploads/930c9c02-d768-4457-9ff9-0304dc9579c7.png",
        description: "Examples of AI-generated artwork in various styles."
      },
      quiz: {
        question: "What is 'style transfer' in AI art?",
        options: [
          "Copying an artist's signature",
          "Applying the visual style of one image to another",
          "Transferring ownership of digital art",
          "Converting between art mediums"
        ],
        correctAnswer: 1
      }
    }
  ]
};

export const generateMockCourse = (
  interest: string,
  level: string,
  learningStyle: string
): Course => {
  const baseCourse: Course = {
    id: "astronomy-101",
    title: "Astronomy: Exploring Our Universe",
    description:
      "Embark on a cosmic journey through our solar system and beyond. Discover planets, moons, stars, and the mysteries of space in this comprehensive astronomy course.",
    forInterest: interest,
    forLevel: level,
    forLearningStyle: learningStyle,
    sections: [
      {
        id: "section-1",
        title: "The Solar System",
        introduction:
          "An overview of the planets, asteroids, and comets that make up our solar system.",
        whyLearn:
          "Understanding the solar system helps us appreciate our place in the cosmos and the unique conditions that support life on Earth.",
        videoUrl: "https://www.youtube.com/embed/libKVRa01L8",
        keyPoints: [
          "The solar system consists of the Sun, planets, moons, asteroids, and comets.",
          "Planets are divided into inner, rocky planets and outer, gas giant planets.",
          "The asteroid belt lies between Mars and Jupiter.",
          "The Oort cloud is a distant region where comets originate.",
          "Gravity is the force that holds the solar system together."
        ],
        shortVideo: "https://www.youtube.com/embed/ht0ncjEkzLc",
        additionalShortVideos: [
          "https://www.youtube.com/embed/wt0dkj1k4xk",
          "https://www.youtube.com/embed/K0kJ6DypF3I"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/DMlqjCq-mSs",
          "https://www.youtube.com/embed/hewYl4wByRQ"
        ],
        image: {
          url: "/lovable-uploads/ad48c8d7-8aae-41a6-95ac-22af96b8a45a.png",
          description: "A visual representation of the solar system, showing the orbits of the planets around the Sun."
        },
        quiz: {
          question: "Which planet is known as the 'Red Planet'?",
          options: ["Earth", "Mars", "Venus", "Jupiter"],
          correctAnswer: 1
        },
        quizzes: [
          {
            question: "Which planet is known as the 'Red Planet'?",
            options: ["Earth", "Mars", "Venus", "Jupiter"],
            correctAnswer: 1
          },
          {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Saturn", "Jupiter", "Neptune"],
            correctAnswer: 2
          },
          {
            question: "Where is the asteroid belt located?",
            options: ["Between Earth and Mars", "Between Mars and Jupiter", "Between Jupiter and Saturn", "Beyond Neptune"],
            correctAnswer: 1
          },
          {
            question: "What is the Oort cloud?",
            options: ["A dust cloud near Venus", "A region where comets originate", "An atmospheric feature on Jupiter", "A nebula outside our solar system"],
            correctAnswer: 1
          },
          {
            question: "How many planets are in our solar system?",
            options: ["7", "8", "9", "10"],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "section-2",
        title: "The Inner Planets",
        introduction:
          "A closer look at Mercury, Venus, Earth, and Mars - the four terrestrial planets closest to the Sun.",
        whyLearn:
          "Studying the inner planets helps us understand the conditions necessary for life and the geological processes that shape planetary surfaces.",
        videoUrl: "https://www.youtube.com/embed/QtdjMLbqmCw",
        keyPoints: [
          "The inner planets are rocky and dense, with solid surfaces.",
          "Mercury is the smallest planet and closest to the Sun.",
          "Venus has a thick atmosphere and is extremely hot.",
          "Earth is the only known planet with liquid water on its surface.",
          "Mars has a thin atmosphere and evidence of past liquid water."
        ],
        shortVideo: "https://www.youtube.com/embed/KY2j8SOB9bc",
        additionalShortVideos: [
          "https://www.youtube.com/embed/NsBqJ59W4WM",
          "https://www.youtube.com/embed/bmJ0ROH-Ezs"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/qjF47wVvXA0",
          "https://www.youtube.com/embed/mgQMw47oXT4"
        ],
        image: {
          url: "/lovable-uploads/0228ba3e-a126-45c3-a728-10da3a418e4e.png",
          description: "A comparison of the sizes and features of the inner planets."
        },
        quiz: {
          question: "Which inner planet has the thickest atmosphere?",
          options: ["Mercury", "Venus", "Earth", "Mars"],
          correctAnswer: 1
        },
        quizzes: [
          {
            question: "If you were on a spaceship touring The Inner Planets, what would blow your mind the most?",
            options: ["An endless night", "Crazy dust storms", "A sea of lava", "A swirling gas tornado"],
            correctAnswer: 2
          },
          {
            question: "Which mission would be your ultimate backstage pass to explore The Inner Planets?",
            options: ["New Horizons", "Curiosity", "Apollo", "Voyager"],
            correctAnswer: 1
          },
          {
            question: "Why do scientists geek out over The Inner Planets?",
            options: ["It holds secrets about how our solar system was born", "It's full of alien life", "It's made of gold", "It glows in rainbow colors"],
            correctAnswer: 0
          },
          {
            question: "What's the biggest challenge of exploring The Inner Planets?",
            options: ["Too many selfie spots", "Running out of snacks", "Crazy radiation and temperature swings", "Finding parking for your spaceship"],
            correctAnswer: 2
          },
          {
            question: "What's a weird but true fact about The Inner Planets?",
            options: ["It has a heartbeat", "It rains diamonds", "It spins backwards", "It sings in radio waves"],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-3",
        title: "Earth",
        introduction:
          "Our home planet - the blue marble of the Solar System and the only known world with abundant liquid water.",
        whyLearn:
          "Understanding Earth's systems is crucial for addressing environmental challenges and ensuring a sustainable future.",
        videoUrl: "https://www.youtube.com/embed/J8HA2J5OOUU",
        keyPoints: [
          "Earth has a diverse climate and a wide range of ecosystems.",
          "The atmosphere protects Earth from harmful solar radiation.",
          "The water cycle distributes water around the planet.",
          "Plate tectonics shape Earth's surface and cause earthquakes and volcanoes.",
          "Life on Earth depends on the interaction of the atmosphere, hydrosphere, and lithosphere."
        ],
        shortVideo: "https://www.youtube.com/embed/Ip2nUDygKWs",
        additionalShortVideos: [
          "https://www.youtube.com/embed/ZHjNJBzsH-w",
          "https://www.youtube.com/embed/D6iazvCuVA4"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/vIrwimxsU-s",
          "https://www.youtube.com/embed/HjtjJ5vvIjM"
        ],
        image: {
          url: "/lovable-uploads/6e29dd9e-5707-44ae-81af-d52de51f84e6.png",
          description: "A stunning view of Earth from space, showcasing its oceans, continents, and atmosphere."
        },
        quiz: {
          question: "What is the primary gas in Earth's atmosphere?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          correctAnswer: 1
        },
        quizzes: [
          {
            question: "Which layer of Earth protects us from getting sunburned?",
            options: ["Crust", "Mantle", "Outer Core", "Ozone Layer"],
            correctAnswer: 3
          },
          {
            question: "Which planet is known as the \"Blue Marble\"?",
            options: ["Venus", "Mars", "Earth", "Jupiter"],
            correctAnswer: 2
          },
          {
            question: "What causes the seasons on Earth?",
            options: ["Earth's distance from the Sun", "Moon's gravity", "Earth's tilted axis", "Ocean tides"],
            correctAnswer: 2
          },
          {
            question: "How long does it take Earth to orbit the Sun?",
            options: ["30 days", "180 days", "365 days", "24 hours"],
            correctAnswer: 2
          },
          {
            question: "Which part of Earth experiences 24 hours of daylight in summer?",
            options: ["Equator", "South Pole", "North Pole", "Tropics"],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-4",
        title: "The Moon",
        introduction:
          "Earth's natural satellite and our closest celestial neighbor.",
        whyLearn:
          "Studying the Moon helps us understand the early history of the solar system and the processes that shape planetary bodies.",
        videoUrl: "https://www.youtube.com/embed/F326bq6WwYg",
        keyPoints: [
          "The Moon is tidally locked to Earth, so we only see one side.",
          "The Moon has no atmosphere and extreme temperature variations.",
          "The lunar surface is covered in craters and maria (dark, basaltic plains).",
          "The Moon likely formed from debris after a giant impact on Earth.",
          "Future lunar missions aim to establish a permanent human presence on the Moon."
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/mJ_fK7a8xXo",
          "https://www.youtube.com/embed/wSFv1euqVwo"
        ],
        image: {
          url: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
          description: "A detailed topographical map of the Moon's surface showing major craters and maria."
        },
        quiz: {
          question: "What is the dark, basaltic plains on the Moon called?",
          options: ["Craters", "Maria", "Highlands", "Rilles"],
          correctAnswer: 1
        },
        quizzes: [
          {
            question: "What causes moon phases?",
            options: ["Moon changing shape", "Earth's shadow", "Moon’s orbit around Earth", "Sunlight moving"],
            correctAnswer: 2
          },
          {
            question: "Which mission first landed humans on the Moon?",
            options: ["Voyager", "Apollo 11", "Challenger", "Gemini 4"],
            correctAnswer: 1
          },
          {
            question: "Why do we always see the same side of the Moon?",
            options: ["It’s flat", "It rotates really fast", "Tidal locking", "It doesn’t rotate"],
            correctAnswer: 2
          },
          {
            question: "What is the surface of the Moon mostly made of?",
            options: ["Ice", "Gas", "Dust and rock", "Metal"],
            correctAnswer: 2
          },
          {
            question: "How long does it take the Moon to orbit Earth?",
            options: ["1 day", "7 days", "27.3 days", "365 days"],
            correctAnswer: 2
          }
        ]
        
      },
      {
        id: "section-5",
        title: "The Moon in Our Skies",
        introduction:
          "Explore the phases of the Moon and its influence on Earth's tides.",
        whyLearn:
          "Understanding the Moon's phases and its effects on Earth helps us appreciate the interconnectedness of celestial bodies.",
        videoUrl: "https://www.youtube.com/embed/NC-ORyFvj8I",
        keyPoints: [
          "The Moon's phases are caused by the changing angles at which we view its illuminated surface.",
          "The Moon's gravity causes tides on Earth.",
          "Eclipses occur when the Sun, Earth, and Moon align.",
          "The Moon's orbit is elliptical, so its distance from Earth varies.",
          "The Moon has a synchronous rotation, so it always shows the same face to Earth."
        ],
        shortVideo: "https://www.youtube.com/embed/lK9-J99qVd0",
        additionalShortVideos: [
          "https://www.youtube.com/embed/MtAT-Gn1N5w",
          "https://www.youtube.com/embed/mz19W2R-K-w"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/mJ_fK7a8xXo",
          "https://www.youtube.com/embed/wSFv1euqVwo"
        ],
        image: {
          url: "/lovable-uploads/e0d0af9e-9849-4955-ac58-29cf798cb880.png",
          description: "A diagram showing the different phases of the Moon."
        },
        quiz: {
          question: "What causes the phases of the Moon?",
          options: [
            "Earth's shadow",
            "The Moon's rotation",
            "Changing angles of sunlight",
            "Volcanic activity"
          ],
          correctAnswer: 2
        },
        quizzes: [
          {
            question: "What causes a lunar eclipse?",
            options: ["Sun blocks the Moon", "Moon moves behind Mars", "Earth's shadow covers the Moon", "The Moon disappears"],
            correctAnswer: 2
          },
          {
            question: "What effect does the Moon have on Earth?",
            options: ["Earthquakes", "Wind", "Tides", "Rain"],
            correctAnswer: 2
          },
          {
            question: "What's a full moon?",
            options: ["The Moon is closest to the Sun", "The Moon is invisible", "The Moon is fully lit", "The Moon rotates"],
            correctAnswer: 2
          },
          {
            question: "How often do we see a full moon?",
            options: ["Once a week", "Every night", "About once a month", "Once a year"],
            correctAnswer: 2
          },
          {
            question: "What do we call two full moons in one month?",
            options: ["Double moon", "Supermoon", "Blue moon", "Luna duo"],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-6",
        title: "Mapping the Moon",
        introduction:
          "Learn about the history of lunar cartography and how we've mapped the Moon's surface.",
        whyLearn:
          "Mapping the Moon is essential for planning future lunar missions and understanding its geological features.",
        videoUrl: "https://www.youtube.com/embed/Q96vJaduGJA",
        keyPoints: [
          "Early lunar maps were based on telescopic observations.",
          "The first detailed lunar maps were created in the 17th century.",
          "Modern lunar maps are based on satellite imagery and laser altimetry.",
          "Lunar maps are used to identify potential landing sites for future missions.",
          "The Moon's far side was first mapped by the Soviet Luna 3 mission."
        ],
        shortVideo: "https://www.youtube.com/embed/rdlS-QEUlSQ",
        additionalShortVideos: [
          "https://www.youtube.com/embed/o-f7BvJvH0w",
          "https://www.youtube.com/embed/qxzWv_jNTOE"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/mJ_fK7a8xXo",
          "https://www.youtube.com/embed/wSFv1euqVwo"
        ],
        image: {
          url: "/lovable-uploads/e0d0af9e-9849-4955-ac58-29cf798cb880.png",
          description: "A detailed map of the Moon's surface, showing craters, maria, and other features."
        },
        quiz: {
          question: "What is a lunar crater?",
          options: [
            "A Moon mountain",
            "A Moon lake",
            "A hole from an impact",
            "A volcano"
          ],
          correctAnswer: 2
        },
        quizzes: [
          {
            question: "What is a lunar crater?",
            options: [
              "A Moon mountain",
              "A Moon lake",
              "A hole from an impact",
              "A volcano"
            ],
            correctAnswer: 2
          },
          {
            question: "Which missions helped us map the Moon?",
            options: ["Mars Rover", "Apollo missions", "Hubble Telescope", "ISS"],
            correctAnswer: 1
          },
          {
            question: "What tool do scientists use to map the Moon?",
            options: ["Binoculars", "Seismographs", "Radar", "Lasers"],
            correctAnswer: 2
          },
          {
            question: "Why map the Moon?",
            options: ["To build houses", "For selfies", "To understand its surface", "To find treasure"],
            correctAnswer: 2
          },
          {
            question: "What part of the Moon do we map less?",
            options: ["Near side", "Middle", "Equator", "Far side"],
            correctAnswer: 3
          }
        ]
      },
      {
        id: "section-7",
        title: "The Moon's Unseen Face",
        introduction:
          "Discover the fascinating far side of the Moon, which remained a mystery until the space age.",
        whyLearn:
          "Understanding the far side of the Moon provides insights into lunar formation and evolution.",
        videoUrl: "https://www.youtube.com/embed/6AviDjR9mmo",
        keyPoints: [
          "The far side of the Moon was first photographed by the Soviet Luna 3 probe in 1959.",
          "The far side has more craters and fewer maria than the near side.",
          "The crust on the far side is thicker than on the near side.",
          "Radio telescopes on the far side would be shielded from Earth's radio interference.",
          "Future missions plan to explore and potentially establish bases on the far side."
        ],
        shortVideo: "https://www.youtube.com/embed/6z-Dr-Dsj14",
        additionalShortVideos: [
          "https://www.youtube.com/embed/mCzchPx3yF8",
          "https://www.youtube.com/embed/0tEygSxIP1M"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/VkAVfsw5xSQ",
          "https://www.youtube.com/embed/LdMgLBBlQVU"
        ],
        image: {
          url: "/lovable-uploads/52a450ef-41cd-45ec-90a2-c256e58d0d6a.png",
          description: "A composite image of the far side of the Moon based on data from lunar orbiters."
        },
        quiz: {
          question: "When was the far side of the Moon first photographed?",
          options: ["1959", "1969", "1976", "1989"],
          correctAnswer: 0
        },
        quizzes: [
          {
            question: "Why don't we see the far side of the Moon?",
            options: ["It's invisible", "It's always nighttime", "Tidal locking", "It's too fast"],
            correctAnswer: 2
          },
          {
            question: "Which mission first photographed the far side?",
            options: ["Apollo 13", "Luna 3", "Gemini 7", "Curiosity"],
            correctAnswer: 1
          },
          {
            question: "What's different about the far side?",
            options: ["No gravity", "More oceans", "More craters", "Green mountains"],
            correctAnswer: 2
          },
          {
            question: "Why is it harder to explore the far side?",
            options: ["Too bright", "Too cold", "No direct signal from Earth", "Aliens live there"],
            correctAnswer: 2
          },
          {
            question: "What do we call the side we never see?",
            options: ["Hidden moon", "Moon cave", "Backside", "Dark side"],
            correctAnswer: 3
          }
        ]
      },
      {
        id: "section-8",
        title: "Venus",
        introduction:
          "Explore Earth's hellish twin - a world of extreme temperatures, crushing pressure, and acid clouds.",
        whyLearn:
          "Venus provides a stark example of how planetary evolution can diverge dramatically, offering insights into climate change and atmospheric science.",
        videoUrl: "https://www.youtube.com/embed/BvXa1n9fjow",
        keyPoints: [
          "Venus is the hottest planet in our solar system, despite not being closest to the Sun.",
          "Its thick atmosphere creates an extreme greenhouse effect, with surface temperatures over 900°F (475°C).",
          "Venus rotates backwards compared to most planets.",
          "The atmospheric pressure on Venus is 92 times that of Earth.",
          "Venus has more volcanoes than any other planet in our solar system."
        ],
        shortVideo: "https://www.youtube.com/embed/i0TgvV_npF0",
        additionalShortVideos: [
          "https://www.youtube.com/embed/HB97G8yg8Jg",
          "https://www.youtube.com/embed/VGeD3v8EY68"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/D0C3ZcLQpGY",
          "https://www.youtube.com/embed/Lt0rqBnQK_A"
        ],
        image: {
          url: "/lovable-uploads/b87f40a8-a8d2-42de-943b-b6f586bc75b1.png",
          description: "A false-color image of Venus's surface, revealing its volcanic features and mountain ranges."
        },
        quiz: {
          question: "Which feature is NOT true of Venus?",
          options: [
            "It has the longest day of any planet",
            "It has a magnetic field similar to Earth's",
            "It has the most volcanoes in the solar system",
            "It has clouds of sulfuric acid"
          ],
          correctAnswer: 1
        },
        quizzes: [
          {
            question: "Which planet is called Earth's twin?",
            options: ["Mars", "Mercury", "Venus", "Jupiter"],
            correctAnswer: 2
          },
          {
            question: "Why is Venus hotter than Mercury?",
            options: ["It’s closer to the Sun", "It has more lava", "Thick atmosphere traps heat", "It's made of fire"],
            correctAnswer: 2
          },
          {
            question: "What’s a wild weather fact about Venus?",
            options: ["It snows", "It has acid rain", "It has blizzards", "It’s always sunny"],
            correctAnswer: 1
          },
          {
            question: "How long is a day on Venus compared to Earth?",
            options: ["Shorter", "Same", "Longer", "24 hours"],
            correctAnswer: 2
          },
          {
            question: "What direction does Venus rotate?",
            options: ["East to West", "It doesn't", "West to East", "Backwards"],
            correctAnswer: 3
          }
        ]
        
      },
      {
        id: "section-9",
        title: "Mercury",
        introduction:
          "Examine the smallest planet in our solar system and the closest to the Sun.",
        whyLearn:
          "Mercury's extreme temperatures and unusual rotation provide insights into how planets form and evolve in challenging environments.",
        videoUrl: "https://www.youtube.com/embed/P3GkZe4wNSg",
        keyPoints: [
          "Mercury has virtually no atmosphere and experiences extreme temperature variations.",
          "Its day (one rotation) is about 59 Earth days, while its year is 88 Earth days.",
          "Mercury has a large iron core, making up about 60% of its volume.",
          "The planet's surface is heavily cratered, similar to our Moon.",
          "Mercury has ice in permanently shadowed craters at its poles, despite its proximity to the Sun."
        ],
        shortVideo: "https://www.youtube.com/embed/4PdJXnK1Ggw",
        additionalShortVideos: [
          "https://www.youtube.com/embed/4c4J4Fu54JY",
          "https://www.youtube.com/embed/mnUSSPaVFiM"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/H7H1c3UJhOA",
          "https://www.youtube.com/embed/1esou5rq70o"
        ],
        image: {
          url: "/lovable-uploads/98ea4cdd-0d5e-49fd-bc16-139cdce24388.png",
          description: "Close-up view of Mercury's heavily cratered surface captured during MESSENGER mission flybys."
        },
        quiz: {
          question: "What makes Mercury's orbit unique?",
          options: [
            "It's perfectly circular",
            "It has the most eccentric orbit of all planets",
            "It crosses other planetary orbits",
            "It takes longer than Venus's orbit"
          ],
          correctAnswer: 1
        }
      },
      {
        id: "section-10",
        title: "Messenger at Mercury",
        introduction:
          "Explore the discoveries made by NASA's MESSENGER mission, the first spacecraft to orbit Mercury.",
        whyLearn:
          "The MESSENGER mission revolutionized our understanding of Mercury, revealing its composition, structure, and geological history.",
        videoUrl: "https://www.youtube.com/embed/soTVpBM-Uq0",
        keyPoints: [
          "MESSENGER (MErcury Surface, Space ENvironment, GEochemistry, and Ranging) orbited Mercury from 2011 to 2015.",
          "It discovered evidence of past volcanic activity on Mercury.",
          "The mission confirmed the presence of water ice at Mercury's poles.",
          "MESSENGER found that Mercury's magnetic field is offset from the planet's center.",
          "The spacecraft mapped Mercury's surface in unprecedented detail before its planned crash into the planet."
        ],
        shortVideo: "https://www.youtube.com/embed/Z_BqMT_m9vc",
        additionalShortVideos: [
          "https://www.youtube.com/embed/5bDJTXoTPSw",
          "https://www.youtube.com/embed/ugCbbpTzysk"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/DsJ9Cu1SjZg",
          "https://www.youtube.com/embed/obBqRfm1JBo"
        ],
        image: {
          url: "/lovable-uploads/bee533e9-3edc-4aa8-8fd6-2ee0683ab436.png",
          description: "Artist's rendering of the MESSENGER spacecraft in orbit around Mercury."
        },
        quiz: {
          question: "What was one major discovery of the MESSENGER mission?",
          options: [
            "Mercury has a thick atmosphere",
            "Mercury has active volcanoes",
            "Mercury has polar ice deposits",
            "Mercury has a large moon"
          ],
          correctAnswer: 2
        }
      },
      {
        id: "section-11",
        title: "The Sun",
        introduction:
          "Dive into the heart of our solar system - the Sun, a dynamic star that powers life on Earth.",
        whyLearn:
          "Understanding the Sun helps us appreciate its crucial role in sustaining life and its potential impacts on Earth through space weather.",
        videoUrl: "https://www.youtube.com/embed/2HoTK_Gqi2Q",
        keyPoints: [
          "The Sun contains 99.8% of the solar system's mass.",
          "It fuses hydrogen into helium, releasing enormous energy in the process.",
          "The Sun's core reaches temperatures of about 15 million degrees Celsius (27 million degrees Fahrenheit).",
          "Solar flares and coronal mass ejections can impact Earth's magnetic field and technology.",
          "The Sun is approximately 4.6 billion years old and halfway through its life cycle."
        ],
        shortVideo: "https://www.youtube.com/embed/oHHSSJDJ4oo",
        additionalShortVideos: [
          "https://www.youtube.com/embed/b22HKFMIfWo",
          "https://www.youtube.com/embed/6tmbeLTHC_0"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/l3QQQu7QLoM",
          "https://www.youtube.com/embed/kS57VH3QN1g"
        ],
        image: {
          url: "/lovable-uploads/17b434e9-217c-4068-8b8b-1c628209901d.png",
          description: "A high-resolution image of the Sun showing its dynamic surface features, including sunspots and solar flares."
        },
        quiz: {
          question: "What process powers the Sun?",
          options: [
            "Chemical combustion",
            "Nuclear fusion",
            "Nuclear fission",
            "Electromagnetic induction"
          ],
          correctAnswer: 1
        }
      },
      {
        id: "section-12",
        title: "Close to the Sun",
        introduction:
          "Learn about NASA's Parker Solar Probe and other missions designed to study our nearest star up close.",
        whyLearn:
          "Solar missions help us understand space weather, which can affect satellites, power grids, and communications on Earth.",
        videoUrl: "https://www.youtube.com/embed/LkaLfbuB_6E",
        keyPoints: [
          "The Parker Solar Probe is designed to fly closer to the Sun than any spacecraft before it.",
          "Its heat shield protects it from temperatures of up to 1,370°C (2,500°F).",
          "The probe will help scientists understand how the solar corona is heated and how solar wind is accelerated.",
          "Solar Orbiter, a ESA/NASA mission, complements Parker by providing detailed images of the Sun's poles.",
          "These missions aim to improve our ability to predict solar storms that can affect Earth."
        ],
        shortVideo: "https://www.youtube.com/embed/XBudjihQKsw",
        additionalShortVideos: [
          "https://www.youtube.com/embed/UY1YcZGKJ6c",
          "https://www.youtube.com/embed/TUhhlF8oTUo"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/2DlzQbq3gMc",
          "https://www.youtube.com/embed/l3QQQu7QLoM"
        ],
        image: {
          url: "/lovable-uploads/6d50892d-4935-4033-bcfc-2a998579227e.png",
          description: "Artist's rendering of the Parker Solar Probe approaching the Sun with its heat shield deployed."
        },
        quiz: {
          question: "What is the main purpose of the Parker Solar Probe?",
          options: [
            "To land on the Sun",
            "To study solar wind and coronal heating",
            "To detect alien signals near the Sun",
            "To collect solar material for return to Earth"
          ],
          correctAnswer: 1
        }
      },
      {
        id: "section-13",
        title: "Mars",
        introduction:
          "Journey to the Red Planet, a world of canyons, volcanoes, and dried-up riverbeds that once flowed with water.",
        whyLearn:
          "Mars provides valuable insights into planetary evolution and is the focus of future human exploration and potential settlement.",
        videoUrl: "https://www.youtube.com/embed/D8pnmwOXhoY",
        keyPoints: [
          "Mars is home to Olympus Mons, the largest volcano in the solar system.",
          "Valles Marineris is a vast canyon system that would stretch across the United States if placed on Earth.",
          "Evidence suggests Mars once had flowing water and a thicker atmosphere.",
          "The planet has two small moons, Phobos and Deimos, likely captured asteroids.",
          "Mars experiences seasons similar to Earth due to its axial tilt."
        ],
        shortVideo: "https://www.youtube.com/embed/d4mYB7iKJYQ",
        additionalShortVideos: [
          "https://www.youtube.com/embed/ZEyAs3NWH4A",
          "https://www.youtube.com/embed/xnDEZxO-ZsI"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/N9p6y3_c4DI",
          "https://www.youtube.com/embed/KRgm5wCeff4"
        ],
        image: {
          url: "/lovable-uploads/28ccf6bc-b95b-4b54-b78c-1be5f91a5be6.png",
          description: "A composite image showing the diverse terrain of Mars, including its polar ice caps and volcanic regions."
        },
        quiz: {
          question: "What gives Mars its reddish appearance?",
          options: [
            "Volcanic activity",
            "Iron oxide (rust) on its surface",
            "Reflection from its moons",
            "Atmospheric gases"
          ],
          correctAnswer: 1
        }
      },
      {
        id: "section-14",
        title: "Mars from Above and the Moons of Mars",
        introduction:
          "Examine Mars through the eyes of orbiting spacecraft and learn about its two tiny moons.",
        whyLearn:
          "Orbital observations of Mars reveal its global patterns and history, while studying its moons provides clues about the early solar system.",
        videoUrl: "https://www.youtube.com/embed/wFTGP7-n3J8",
        keyPoints: [
          "Orbiting spacecraft have mapped the entire surface of Mars in high resolution.",
          "These maps reveal ancient river valleys, impact craters, and potential landing sites for missions.",
          "Phobos, the larger moon, orbits so close to Mars that it rises in the west and sets in the east twice a day.",
          "Deimos appears similar in size to a bright star when viewed from Mars.",
          "Both moons are irregularly shaped and may be captured asteroids."
        ],
        shortVideo: "https://www.youtube.com/embed/Oo51KBdURMo",
        additionalShortVideos: [
          "https://www.youtube.com/embed/Oo51KBdURMo",
          "https://www.youtube.com/embed/8rjb4fM6EC8",
          "https://www.youtube.com/embed/o7RJeAdDmmE",
          "https://www.youtube.com/embed/cTMiM1UZfTc",
          "https://www.youtube.com/embed/lHSfFieToSM",
        ],
        image: {
          url: "/lovable-uploads/973bc422-9419-49ac-ae95-89d2b36f2df8.png",
          description: "High-resolution image of Mars from orbit, showing its varied topography, alongside images of Phobos and Deimos."
        },
        quiz: {
          question: "What is unusual about Phobos's orbit around Mars?",
          options: [
            "It orbits incredibly slowly",
            "It orbits backwards compared to most moons",
            "It orbits faster than Mars rotates",
            "It has an extremely elliptical orbit"
          ],
          correctAnswer: 2
        }
      },
      {
        id: "section-15",
        title: "Roving over Mars",
        introduction:
          "Follow the journeys of the robotic explorers that have traveled across the Martian surface.",
        whyLearn:
          "Mars rovers provide ground-level insights that complement orbital data, helping scientists understand the planet's history and potential for past or present life.",
        videoUrl: "https://www.youtube.com/embed/sMrPy8GMRwY",
        keyPoints: [
          "Sojourner, the first Mars rover, landed in 1997 and operated for 83 days.",
          "Spirit and Opportunity, the twin rovers, far exceeded their 90-day missions, with Opportunity operating for over 14 years.",
          "Curiosity carries sophisticated laboratory instruments to analyze Martian soil and rocks.",
          "Perseverance, which landed in 2021, is searching for signs of ancient microbial life.",
          "The Ingenuity helicopter demonstrated the first powered flight on another planet."
        ],
        shortVideo: "https://www.youtube.com/embed/qXdNiA-dYZs",
        additionalShortVideos: [
          "https://www.youtube.com/embed/Ai2HmvAXcU0",
          "https://www.youtube.com/embed/DUaHcV3Lw9Q"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/LgCXgFeWz3Q",
          "https://www.youtube.com/embed/jEXoMpmfJcM"
        ],
        image: {
          url: "/lovable-uploads/71f04c7c-c819-40bc-9de0-5f293ddadf89.png",
          description: "A self-portrait of the Curiosity rover on the surface of Mars, with Mount Sharp in the background."
        },
        quiz: {
          question: "Which Mars rover carried a helicopter?",
          options: [
            "Spirit",
            "Opportunity",
            "Curiosity",
            "Perseverance"
          ],
          correctAnswer: 3
        }
      }
    ]
  };
  
  return baseCourse;
};
