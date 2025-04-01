
import { Course, CourseSection } from "@/types/course";
import { generateCourseMetadata } from "./courseGeneratorUtils";

// Define the AI course sections
export const aiCourseSections: CourseSection[] = [
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
      },
      {
        question: "Which field focuses on making computers understand and generate human language?",
        options: [
          "Computer Vision",
          "Natural Language Processing",
          "Robotics",
          "Evolutionary Computing"
        ],
        correctAnswer: 1
      },
      {
        question: "What was the name of the IBM computer system that defeated chess champion Garry Kasparov in 1997?",
        options: [
          "Watson",
          "AlphaGo",
          "Deep Blue",
          "ENIAC"
        ],
        correctAnswer: 2
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
      },
      {
        question: "Which of the following is an example of unsupervised learning?",
        options: [
          "Email spam detection",
          "Image classification",
          "Customer segmentation based on purchasing behavior",
          "Predicting house prices"
        ],
        correctAnswer: 2
      },
      {
        question: "What technique is used to avoid overfitting in machine learning models?",
        options: [
          "Increasing model complexity",
          "Using more parameters",
          "Regularization",
          "Using all available features"
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
      },
      {
        question: "What is backpropagation in neural networks?",
        options: [
          "A method to initialize weights",
          "An algorithm to update weights based on error gradients",
          "A technique to reduce dimensionality",
          "A way to normalize input data"
        ],
        correctAnswer: 1
      },
      {
        question: "Which of these is NOT a common activation function in deep learning?",
        options: [
          "ReLU (Rectified Linear Unit)",
          "Sigmoid",
          "Hyperbolic Tangent (tanh)",
          "Polynomial"
        ],
        correctAnswer: 3
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
        "Discriminative models use neural networks, while generative models use decision trees",
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
          "Discriminative models use neural networks, while generative models use decision trees",
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
      },
      {
        question: "Which generative AI model type was used to create DALL-E and Midjourney?",
        options: [
          "Recurrent Neural Networks",
          "Transformers",
          "Diffusion Models",
          "Long Short-Term Memory networks"
        ],
        correctAnswer: 2
      },
      {
        question: "What ethical concern is most specific to generative AI?",
        options: [
          "Data privacy",
          "Algorithmic bias",
          "Deepfakes and synthetic content",
          "Energy consumption"
        ],
        correctAnswer: 2
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
      },
      {
        question: "Which type of chatbot would be most suitable for highly regulated industries like healthcare?",
        options: [
          "Open-domain generative chatbots",
          "Retrieval-based chatbots with verified knowledge bases",
          "Social media chatbots",
          "Entertainment chatbots"
        ],
        correctAnswer: 1
      },
      {
        question: "What is 'context window' in relation to chatbots?",
        options: [
          "The user interface that displays the conversation",
          "The amount of previous conversation the chatbot can access for understanding context",
          "The physical dimensions of the chatbot's avatar",
          "The timeframe in which a chatbot responds to queries"
        ],
        correctAnswer: 1
      }
    ]
  }
];

// Generate the AI course with the given parameters
export function generateAICourse(level: string, learningStyle: string): Course {
  const metadata = generateCourseMetadata("ai", level, learningStyle);
  
  return {
    ...metadata,
    sections: aiCourseSections
  };
}

// Create the default AI course
export const aiCourseData = generateAICourse("intermediate", "visual");
