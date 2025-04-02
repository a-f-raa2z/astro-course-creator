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
            question: "What is a key characteristic of The Inner Planets?",
            options: ["It supports life", "It has a thick atmosphere", "It is made entirely of gas", "It has rings"],
            correctAnswer: 0
          },
          {
            question: "Which spacecraft studied The Inner Planets?",
            options: ["Pioneer 10", "Hubble", "Cassini", "Voyager 1"],
            correctAnswer: 1
          },
          {
            question: "Why are The Inner Planets important in astronomy?",
            options: ["They support alien life", "They help us understand planet formation", "They are the brightest objects", "They are farthest from Earth"],
            correctAnswer: 1
          },
          {
            question: "What challenge do scientists face studying The Inner Planets?",
            options: ["Extreme temperatures", "Lack of light", "Radiation interference", "Distance from Earth"],
            correctAnswer: 0
          },
          {
            question: "What interesting fact is associated with The Inner Planets?",
            options: ["They have ice caps", "They have liquid water", "They have magnetic fields", "They rotate backwards"],
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
        }
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
        shortVideo: "https://www.youtube.com/embed/o-f7BvJvH0w",
        additionalShortVideos: [
          "https://www.youtube.com/embed/qxzWv_jNTOE",
          "https://www.youtube.com/embed/UIQmSpJ-edg"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/mJ_fK7a8xXo",
          "https://www.youtube.com/embed/wSFv1euqVwo"
        ],
        image: {
          url: "/lovable-uploads/e0d0af9e-9849-4955-ac58-29cf798cb880.png",
          description: "A detailed view of the Moon's surface, showing craters and maria."
        },
        quiz: {
          question: "What is the dark, basaltic plains on the Moon called?",
          options: ["Craters", "Maria", "Highlands", "Rilles"],
          correctAnswer: 1
        }
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
        }
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
          question: "What is laser altimetry used for in lunar mapping?",
          options: [
            "Measuring surface temperatures",
            "Determining chemical composition",
            "Measuring surface elevations",
            "Detecting magnetic fields"
          ],
          correctAnswer: 2
        }
      },
      {
        id: "section-7",
        title: "The Moon's Unseen Face",
        introduction:
          "Discover the hidden side of the Moon and its unique characteristics.",
        whyLearn:
          "Exploring the far side of the Moon helps us understand its formation and the differences between its two hemispheres.",
        videoUrl: "https://www.youtube.com/embed/vJ3zxJ9rocw",
        keyPoints: [
          "The far side of the Moon is not visible from Earth.",
          "The far side has a thicker crust and fewer maria than the near side.",
          "The South Pole-Aitken basin is the largest impact crater in the solar system.",
          "The far side was first photographed by the Soviet Luna 3 mission.",
          "Future missions aim to establish a radio telescope on the far side."
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
          description: "A view of the far side of the Moon, showing its heavily cratered surface."
        },
        quiz: {
          question: "Which mission first photographed the far side of the Moon?",
          options: [
            "Apollo 8",
            "Luna 3",
            "Chang'e 4",
            "Surveyor 1"
          ],
          correctAnswer: 1
        }
      },
      {
        id: "section-8",
        title: "Venus",
        introduction:
          "Explore Venus, the second planet from the Sun and Earth's nearest planetary neighbor, often called Earth's 'sister planet' due to its similar size.",
        whyLearn:
          "Understanding Venus helps us appreciate the extreme greenhouse effect and how planetary evolution can take dramatically different paths.",
        videoUrl: "https://www.youtube.com/embed/BvXa1n9fjow",
        keyPoints: [
          "Venus has the thickest atmosphere of any terrestrial planet, composed primarily of carbon dioxide.",
          "Surface temperatures on Venus reach about 900°F (475°C), hot enough to melt lead.",
          "The extreme greenhouse effect makes Venus the hottest planet in our solar system.",
          "Venus rotates very slowly and in the opposite direction to most planets.",
          "Despite being farther from the Sun than Mercury, Venus is hotter due to its thick atmosphere."
        ],
        shortVideo: "https://www.youtube.com/embed/vjT10myBoZE",
        additionalShortVideos: [
          "https://www.youtube.com/embed/2GxhEOnsLY8"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/djP-IdHFQWU"
        ],
        image: {
          url: "/lovable-uploads/3215a500-d237-40e1-aecb-2a9e2b64ee10.png",
          description: "A view of Venus showing its thick, yellowish cloud cover that perpetually shrouds the planet."
        },
        quiz: {
          question: "What makes Venus the hottest planet in our solar system?",
          options: [
            "Its proximity to the Sun",
            "Its extreme greenhouse effect",
            "Volcanic activity",
            "Solar radiation"
          ],
          correctAnswer: 1
        }
      },
      {
        id: "section-9",
        title: "Mercury",
        introduction:
          "Discover Mercury, the smallest and innermost planet in our Solar System, a world of extremes and surprising complexity.",
        whyLearn:
          "Mercury's unique characteristics help us understand planetary formation and the effects of proximity to a star.",
        videoUrl: "https://www.youtube.com/embed/0KBjnNuhRHs",
        mainLesson2Url: "https://www.youtube.com/embed/rX_NCCpw5Uo",
        keyPoints: [
          "Mercury is the smallest planet in our solar system and closest to the Sun.",
          "It has virtually no atmosphere, resulting in extreme temperature variations.",
          "Mercury's day (176 Earth days) is longer than its year (88 Earth days).",
          "The planet has a surprisingly large iron core relative to its size.",
          "Mercury's surface is heavily cratered, similar to our Moon."
        ],
        shortVideo: "https://www.youtube.com/embed/uDurw7YxX3U",
        additionalShortVideos: [
          "https://www.youtube.com/embed/-DuQEeq4ZLw"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/rsa92VNVY7A",
          "https://www.youtube.com/embed/9T8lLtlZ8Xs",
          "https://www.youtube.com/embed/31HAFceuvb0",
          "https://www.youtube.com/embed/B588JHKSlEE"
        ],
        image: {
          url: "/lovable-uploads/4feca2b6-a656-4abf-b674-e00f9467fb87.png",
          description: "A detailed view of Mercury's heavily cratered surface, showing its Moon-like appearance."
        },
        quiz: {
          question: "Why does Mercury have such extreme temperature variations?",
          options: [
            "Its elliptical orbit",
            "Lack of substantial atmosphere",
            "Its slow rotation",
            "Volcanic activity"
          ],
          correctAnswer: 1
        }
      },
      {
        id: "section-10",
        title: "Messenger at Mercury",
        introduction:
          "Explore NASA's MESSENGER mission, which provided the first comprehensive study of Mercury's surface, atmosphere, and magnetic field.",
        whyLearn:
          "The MESSENGER mission revolutionized our understanding of Mercury and demonstrated the technological challenges of exploring the inner Solar System.",
        videoUrl: "https://www.youtube.com/embed/1MwGXzKjFfY",
        keyPoints: [
          "MESSENGER (MErcury Surface, Space ENvironment, GEochemistry, and Ranging) was the first spacecraft to orbit Mercury.",
          "It completed over 4,000 orbits of Mercury between 2011 and 2015.",
          "The mission discovered evidence of past volcanic activity and water ice in permanently shadowed polar craters.",
          "MESSENGER mapped the entire surface of Mercury at high resolution.",
          "The spacecraft had to withstand extreme temperatures due to Mercury's proximity to the Sun."
        ],
        shortVideo: "https://www.youtube.com/embed/tQjVO6BtT7A",
        additionalShortVideos: [
          "https://www.youtube.com/embed/U1cMS8K2uhk"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/NJAfP9QLkN8",
          "https://www.youtube.com/embed/gHn19Ce2sCE",
          "https://www.youtube.com/embed/XPy9qQq6QT4"
        ],
        image: {
          url: "/lovable-uploads/4feca2b6-a656-4abf-b674-e00f9467fb87.png",
          description: "An illustration of the MESSENGER spacecraft orbiting Mercury, showing the challenging environment it operated in."
        },
        quiz: {
          question: "What surprising discovery did the MESSENGER mission make about Mercury?",
          options: [
            "Signs of current volcanic activity",
            "Evidence of a thick atmosphere",
            "Water ice in permanently shadowed craters",
            "Signs of microbial life"
          ],
          correctAnswer: 2
        }
      },
      {
        id: "section-11",
        title: "The Sun",
        introduction:
          "The Sun is our nearest star and the center of our solar system. This section explores its incredible power, structure, and importance to life on Earth.",
        whyLearn:
          "Understanding the Sun is essential to understanding our place in the universe and how it powers all life on Earth.",
        videoUrl: "https://www.youtube.com/embed/2HoTK_Gqi2Q",
        mainLesson2Url: "https://www.youtube.com/embed/C7cqc9jHFdg",
        keyPoints: [
          "The Sun is a G-type main-sequence star at the center of our solar system.",
          "It accounts for about 99.86% of the total mass of the Solar System.",
          "The Sun's core reaches temperatures of about 15 million degrees Celsius.",
          "Solar flares and coronal mass ejections can impact Earth's magnetic field.",
          "The Sun is approximately 4.6 billion years old and is halfway through its life cycle."
        ],
        shortVideo: "https://www.youtube.com/embed/pRQwXcn5VAA",
        additionalShortVideos: [
          "https://www.youtube.com/embed/4LFxL9VEM8w"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/X40Re7j1WlI",
          "https://www.youtube.com/embed/d-z0eQOEzkE"
        ],
        image: {
          url: "/lovable-uploads/fb49e844-5050-4fb0-9560-fd65c5e4dad5.png",
          description: "The Sun in different wavelengths, showing its various atmospheric layers and features."
        },
        quiz: {
          question: "What is the approximate temperature at the Sun's core?",
          options: [
            "5,500 degrees Celsius",
            "1 million degrees Celsius",
            "15 million degrees Celsius",
            "100 million degrees Celsius"
          ],
          correctAnswer: 2
        }
      },
      {
        id: "section-12",
        title: "Close to the Sun",
        introduction:
          "This section explores the missions and spacecraft that have ventured close to our star to study its mysteries and help us understand solar activity.",
        whyLearn:
          "Learning about solar missions helps us understand how scientists gather data about the Sun's behavior and its effects on Earth and space weather.",
        videoUrl: "https://www.youtube.com/embed/B3aNeJ5s7ew",
        keyPoints: [
          "The Parker Solar Probe is the closest human-made object to the Sun, designed to study its outer corona.",
          "The Solar Orbiter mission provides unprecedented close-up observations of the Sun.",
          "Solar missions must withstand extreme temperatures and radiation.",
          "Understanding the Sun helps predict space weather that affects Earth's technology.",
          "Solar observatories use special instruments to observe different wavelengths of solar radiation."
        ],
        shortVideo: "https://www.youtube.com/embed/DO03iFYdpp8",
        additionalShortVideos: [
          "https://www.youtube.com/embed/OCKb1v7k8i0"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/_OQzGKJkQEE",
          "https://www.youtube.com/embed/W_cLSvP9qSU",
          "https://www.youtube.com/embed/48_qGtI08i8",
          "https://www.youtube.com/embed/D56oR9-J5wE",
          "https://www.youtube.com/embed/SLmWY_ycFUA"
        ],
        visualUrl: "https://solarsystem.nasa.gov/gltf_embed/2352",
        image: {
          url: "/lovable-uploads/dac0c33f-58a2-44f3-81eb-5f00fda40b1b.png",
          description: "The Parker Solar Probe approaching the Sun's corona, protected by its heat shield."
        },
        quiz: {
          question: "Which spacecraft has traveled closest to the Sun?",
          options: [
            "Voyager 1",
            "Parker Solar Probe",
            "Solar Orbiter",
            "Helios 2"
          ],
          correctAnswer: 1
        }
      },
      {
        id: "section-13",
        title: "Mars",
        introduction:
          "Mars, the fourth planet from the Sun, has captivated human imagination for centuries. Known as the Red Planet, it's the most Earth-like world in our solar system.",
        whyLearn:
          "Mars is a primary target for human exploration and possibly future colonization, making it essential to understand its environment and history.",
        videoUrl: "https://www.youtube.com/embed/E-PuUs25rJA",
        mainLesson2Url: "https://www.youtube.com/embed/wFTGP7-n3J8",
        keyPoints: [
          "Mars has a thin atmosphere composed mainly of carbon dioxide.",
          "The planet experiences seasons due to its axial tilt, similar to Earth.",
          "Evidence suggests Mars once had liquid water flowing on its surface.",
          "Mars has the largest volcano in the solar system, Olympus Mons.",
          "The red color of Mars comes from iron oxide (rust) on its surface."
        ],
        shortVideo: "https://www.youtube.com/embed/p7f8oR5ELwk",
        additionalShortVideos: [
          "https://www.youtube.com/embed/dZ3vHb6YPmA"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/wFTGP7-n3J8?list=PL2gLpWRK0QlCXPhOqQD0wqPhLIvjq0BUj"
        ],
        bonusContent2: [
          "NASA's InSight lander detected and recorded sounds of Martian winds, giving us the first 'sounds' from another planet."
        ],
        image: {
          url: "/lovable-uploads/3d8b75cf-5e69-49ac-9444-9c3f6c33fb4c.png",
          description: "The surface of Mars showing its distinctive red landscape and rocky terrain."
        },
        quiz: {
          question: "What gives Mars its distinctive red color?",
          options: [
            "Volcanic activity",
            "Iron oxide (rust) in the soil",
            "Reflection from its moons",
            "Atmospheric methane"
          ],
          correctAnswer: 1
        }
      },
      {
        id: "section-14",
        title: "Mars from Above and the Moons of Mars",
        introduction:
          "This section explores the stunning geographical features of Mars as seen from orbit, along with its two small moons, Phobos and Deimos.",
        whyLearn:
          "Understanding Mars' geography and its moons provides crucial information for future exploration missions and insights into the planet's formation.",
        videoUrl: "https://www.youtube.com/embed/wFTGP7-n3J8",
        keyPoints: [
          "Mars has two small, irregularly shaped moons: Phobos and Deimos.",
          "Valles Marineris is a vast canyon system that would stretch across the United States.",
          "The Tharsis region contains massive shield volcanoes including Olympus Mons.",
          "Mars has polar ice caps composed of water ice and dry ice (frozen CO2).",
          "Global dust storms can occasionally cover the entire Martian surface."
        ],
        shortVideo: "https://www.youtube.com/embed/Oo51KBdURMo",
        additionalShortVideos: [
          "https://www.youtube.com/embed/8rjb4fM6EC8",
          "https://www.youtube.com/embed/lHSfFieToSM",
          "https://www.youtube.com/embed/o7RJeAdDmmE",
          "https://www.youtube.com/embed/cTMiM1UZfTc",
          "https://www.youtube.com/embed/JIzw9ap13yk"
        ],
        visualGalleryUrl: "https://mars.nasa.gov/mars2020/multimedia/raw-images/",
        image: {
          url: "/lovable-uploads/444d4246-3b56-42bd-8f43-4c561d66cd37.png",
          description: "Valles Marineris, the 'Grand Canyon of Mars,' stretching over 4,000 km across the planet's surface."
        },
        quiz: {
          question: "What is the name of the largest canyon system on Mars?",
          options: [
            "Olympus Canyon",
            "Valles Marineris",
            "Hellas Basin",
            "Mariner Valley"
          ],
          correctAnswer: 1
        }
      },
      {
        id: "section-15",
        title: "Roving over Mars",
        introduction:
          "This section focuses on the robotic explorers that have landed on Mars, from the early missions to the sophisticated rovers like Curiosity and Perseverance.",
        whyLearn:
          "Mars rovers represent the cutting edge of robotic exploration and have revolutionized our understanding of the Red Planet's history and potential for past life.",
        videoUrl: "https://www.youtube.com/embed/OO5CTBBgtXs",
        mainLesson2Url: "https://www.youtube.com/embed/WrTHX8t0yl8",
        keyPoints: [
          "Rovers have confirmed that Mars once had persistent liquid water on its surface.",
          "The Perseverance rover includes instruments specifically designed to look for signs of ancient microbial life.",
          "Mars rovers use nuclear power (RTGs) to operate for years despite dust storms and harsh conditions.",
          "The Ingenuity helicopter demonstrated the first powered flight on another planet.",
          "Rovers collect samples for potential future return to Earth for detailed analysis."
        ],
        shortVideo: "https://www.youtube.com/embed/IhFK-b5yd2M",
        additionalShortVideos: [
          "https://www.youtube.com/embed/3sbbk-VlRPk",
          "https://www.youtube.com/embed/3wwcN__g3kM",
          "https://www.youtube.com/embed/mfi7-12z_nE"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/T4UKr7W-YC8",
          "https://www.youtube.com/embed/WNrTttvdIMc",
          "https://www.youtube.com/embed/CIaHiGbFybQ",
          "https://www.youtube.com/embed/iK64wy0b2ic"
        ],
        visualUrl: "https://mars.nasa.gov/gltf_embed/24881",
        image: {
          url: "/lovable-uploads/930c9c02-d768-4457-9ff9-0304dc9579c7.png",
          description: "The Mars Perseverance rover exploring the Martian surface, equipped with scientific instruments and the Ingenuity helicopter."
        },
        quiz: {
          question: "What historic achievement did the Ingenuity helicopter accomplish?",
          options: [
            "First sample return from Mars",
            "First image of Mars from orbit",
            "First powered flight on another planet",
            "First detection of methane on Mars"
          ],
          correctAnswer: 2
        }
      }
    ]
  };

  baseCourse.sections = baseCourse.sections.map(section => {
    if (!section.quizzes || section.quizzes.length < 5) {
      section.quizzes = [
        section.quiz,
        {
          question: `What is another key aspect of ${section.title}?`,
          options: ["Feature A", "Feature B", "Feature C", "Feature D"],
          correctAnswer: Math.floor(Math.random() * 4)
        },
        {
          question: `Which statement about ${section.title} is correct?`,
          options: ["Statement 1", "Statement 2", "Statement 3", "Statement 4"],
          correctAnswer: Math.floor(Math.random() * 4)
        },
        {
          question: `What's a common misconception about ${section.title}?`,
          options: ["Misconception 1", "Misconception 2", "Misconception 3", "Misconception 4"],
          correctAnswer: Math.floor(Math.random() * 4)
        },
        {
          question: `Which of these is most closely related to ${section.title}?`,
          options: ["Related concept 1", "Related concept 2", "Related concept 3", "Related concept 4"],
          correctAnswer: Math.floor(Math.random() * 4)
        }
      ];
    }
    return section;
  });

  return baseCourse;
};
