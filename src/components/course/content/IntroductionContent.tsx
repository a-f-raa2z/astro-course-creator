
import React from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TitleWrapper } from "./TitleWrapper";

interface IntroductionContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const IntroductionContent = ({ section, onComplete, onPrevious, isFirstContent }: IntroductionContentProps) => {
  const getCustomIntroduction = (sectionTitle: string) => {
    const defaultPlaceholder = "Welcome to this section of the course! Here you'll learn the fundamental concepts, key principles, and practical applications of this topic. This overview will help you understand why this knowledge is valuable and how it connects to the broader field of study.";
    
    switch (sectionTitle) {
      case "The Solar System":
        return "Get ready to blast off on a journey through our cosmic neighborhood! The Solar System is more than just the Sun and a few planets—it's a dynamic, swirling collection of celestial bodies, from asteroids to comets and distant dwarf planets. Turn to page 50 as we uncover the wonders of this vast space family and learn how everything orbits the mighty Sun at the center.";
      case "The Inner Planets":
      case "Planets":
        return "Let's zoom in a little closer to the Sun and meet the rocky worlds that make up the inner planets: Mercury, Venus, Earth, and Mars. These terrestrial planets are full of extremes—from scorching heat to red dust storms—and they each tell a different story about what it means to be part of our solar system's front row. Dive into the main video and bonus shorts to explore these fascinating worlds.";
      case "Earth":
        return "Our home planet is a rare gem in the Solar System—alive with oceans, air, and ecosystems teeming with life. But how well do you really know Earth? Through stunning visuals and science-packed videos, explore the planet's layers, landforms, and its place in the larger cosmic dance. Then, test your Earth knowledge with the interactive visual guide linked below.";
      case "The Moon":
        return "Our closest neighbor in space, the Moon has captured human imagination for centuries. From its mysterious dark side to its role in tides and eclipses, the Moon is more than just a pretty face in the night sky. These videos offer a closer look at its phases, surface features, and why it continues to be a key part of Earth's story. Take it further with NASA's interactive moon explorer tool.";
      
      case "Intro of Artificial Intelligence":
      case "Introduction to AI":
        return "This section introduces the fundamental concepts of artificial intelligence. We'll explore what AI is, its history, and its impact on our world today. Welcome to the fascinating world of Artificial Intelligence! This section will demystify AI beyond the science fiction hype. You'll learn about the core concepts that power today's AI systems, from the Turing Test to neural networks. We'll explore the difference between narrow AI (designed for specific tasks) and general AI (human-like intelligence across domains). This foundation will help you understand AI's evolution from early rule-based systems to today's learning-capable algorithms. You'll also discover key ethical considerations including bias, privacy, and the impact of automation on society. After completing this section, you'll have a solid grasp of AI's capabilities, limitations, and its growing role in our daily lives.";
      case "Machine Learning":
        return "Machine Learning is the engine that drives modern AI. In this section, you'll discover how computers learn patterns from data without explicit programming. We'll cover the three main types: supervised learning (trained on labeled data), unsupervised learning (finding patterns in unlabeled data), and reinforcement learning (learning through trial and error). You'll explore real-world applications from recommendation systems to fraud detection, and understand how algorithms improve with more data. The section also covers the critical ML workflow: data preparation, feature selection, model training, and evaluation. You'll learn about common algorithms like decision trees, random forests, and support vector machines, and when to apply each one. By the end, you'll understand how ML transforms raw data into valuable insights and predictions that power modern AI systems.";
      case "Deep Learning":
        return "Deep Learning represents the cutting edge of AI that mimics the human brain's neural networks. This section breaks down the building blocks of neural networks including neurons, layers, weights, and activation functions. You'll learn how deep learning has revolutionized computer vision (enabling facial recognition and object detection), natural language processing (powering translation and sentiment analysis), and speech recognition. We'll demystify key concepts like backpropagation (how networks learn from mistakes) and gradient descent (finding optimal solutions). You'll understand specialized architectures like Convolutional Neural Networks (CNNs) for image analysis, Recurrent Neural Networks (RNNs) for sequential data, and transformers that power large language models. The section also covers practical aspects like GPU acceleration, transfer learning, and the massive datasets required for training. By the end, you'll appreciate how deep learning enables machines to perceive and interpret the world in increasingly human-like ways.";
      case "Generative AI":
        return "Generative AI is reshaping how we create content and solve problems. This section explores how AI systems generate new images, text, music, and more that never existed before. You'll learn about the architecture behind groundbreaking models like DALL-E, Midjourney, and ChatGPT, including Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), and transformer-based large language models. We'll examine the training process involving massive datasets and computational resources, and how techniques like diffusion models create increasingly realistic outputs. The section covers practical applications in creative fields, product design, content creation, and software development. You'll gain insight into prompt engineering—the art of crafting effective instructions to guide these models. Importantly, we'll discuss ethical considerations including copyright concerns, potential for misuse, and questions around authenticity and attribution in AI-generated content. By the end, you'll understand both the creative potential and responsible use of these powerful generative systems.";
      case "Chatbots":
        return "Conversational AI has transformed how we interact with technology. This section explores chatbots from simple rule-based systems to sophisticated AI assistants. You'll learn the natural language processing techniques that enable machines to understand human language, including intent recognition (identifying what users want), entity extraction (pulling out key information), and context management (maintaining conversation flow). We'll cover the evolution from early pattern-matching bots to modern neural network-powered assistants capable of open-domain conversation. The section examines chatbot architecture including dialogue management systems, response generation, and the role of large language models in creating more natural interactions. You'll discover practical applications across customer service (reducing wait times and handling routine inquiries), healthcare (symptom checking and appointment scheduling), education (personalized tutoring), and personal assistance. We'll also address key challenges like maintaining conversation coherence, ensuring factual accuracy, and developing chatbots that are helpful, harmless, and honest. By the end, you'll understand how to design effective conversational experiences and the future potential of human-AI collaboration through natural language interfaces.";
      case "Robots and Automation":
        return "Robotics represents AI embodied in the physical world. This section explores how AI enables robots to perceive their environment, make decisions, and take actions. You'll learn about the sensor technologies that serve as a robot's 'senses'—from cameras and LiDAR to touch and proximity sensors—and how they gather data about the world. We'll cover control systems that enable precise movement, from industrial robot arms to autonomous vehicles and humanoid robots. The section examines the AI algorithms that power a robot's 'brain', including computer vision for object recognition, simultaneous localization and mapping (SLAM) for navigation, and reinforcement learning for skill acquisition. You'll explore applications across manufacturing (assembly and quality control), healthcare (surgical assistance and care robots), agriculture (harvesting and monitoring), logistics (warehouse automation), and even space exploration. We'll differentiate between industrial robots optimized for repetitive tasks, collaborative robots (cobots) designed to work alongside humans, and fully autonomous systems. The section also addresses the unique challenges of creating machines that can safely operate in unstructured, dynamic environments while adapting to unexpected situations. By the end, you'll understand both the current capabilities and future potential of intelligent robots working alongside humans.";
      case "AI for Music":
        return "AI is revolutionizing music creation, production, and discovery. This section explores how AI technologies are transforming every aspect of the music industry. You'll learn about music generation systems that can compose original melodies, harmonies, and even complete songs in various styles and genres. We'll cover the neural networks behind these creative tools, including recurrent neural networks (RNNs) for sequential note prediction and transformer models for understanding musical structure. The section examines AI applications in music production—from intelligent mixing and mastering tools to vocal synthesis and auto-tuning algorithms. You'll discover how streaming platforms use recommendation algorithms to analyze listening patterns and suggest new music tailored to individual tastes. We'll explore tools for musicians that can generate backing tracks, suggest chord progressions, and even collaborate interactively with human performers. The section addresses technical challenges in representing and processing audio data, including spectrograms, MIDI encoding, and symbolic music representation. We'll also examine pioneering models like OpenAI's Jukebox and Google's MusicLM that are pushing boundaries in music generation. Throughout, we'll consider the creative partnership between human musicians and AI tools, emphasizing how technology can augment rather than replace human creativity, opening new possibilities for musical expression and collaboration.";
      case "AI for Arts":
        return "Visual arts are experiencing a renaissance through AI technologies. This section explores how algorithms can generate stunning images, assist in creative processes, and develop entirely new artistic styles. You'll learn about the technical foundations of image generation models like DALL-E, Midjourney, and Stable Diffusion that can create visual art from text descriptions. We'll cover the mathematics behind diffusion models that gradually transform random noise into coherent images, and how Generative Adversarial Networks (GANs) create photorealistic imagery through competitive training. The section examines neural style transfer algorithms that can reimagine photographs in the style of famous painters, and AI systems that can generate novel 3D models and animations. You'll discover how artists are incorporating these tools into their creative workflows—using AI for initial concept generation, style exploration, or as creative collaborators in the artistic process. We'll address how galleries and museums are using AI for art curation, restoration, and analysis of historical works. The section explores fundamental questions about creativity, authorship, and the evolving relationship between human and machine artistry. We'll discuss how AI is not replacing human creativity but rather expanding the artistic palette with new tools and possibilities. By the end, you'll be equipped to think critically about AI's role in visual arts while appreciating its potential to augment human expression and open new frontiers in artistic exploration.";
      default:
        return section.introduction || defaultPlaceholder;
    }
  };
  
  const shouldShowSolarSystemDiagram = section.title === "The Solar System";
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card className="w-full h-full flex flex-col p-4 bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <TitleWrapper 
          icon={<BookOpen className="h-5 w-5 text-purple-400 mr-2" />}
          title="Overview" 
          color="bg-purple-800/50"
        />
        
        <div className="flex-1 overflow-auto p-2">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-200">{getCustomIntroduction(section.title)}</p>
            
            {shouldShowSolarSystemDiagram && (
              <>
                <div className="mt-4 relative h-24 md:h-32 flex items-center justify-center">
                  <div className="absolute w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse z-30">
                    <div className="h-8 w-8 text-yellow-300">☀️</div>
                  </div>
                  
                  <div className="absolute w-28 h-28 rounded-full border border-gray-400/30 flex items-center justify-center">
                    <div className="absolute w-2 h-2 bg-gray-300 rounded-full" style={{ transform: 'translateX(14px)' }}></div>
                  </div>
                  
                  <div className="absolute w-36 h-36 rounded-full border border-gray-400/30 flex items-center justify-center">
                    <div className="absolute w-3 h-3 bg-orange-300 rounded-full" style={{ transform: 'translateX(-18px)' }}></div>
                  </div>
                  
                  <div className="absolute w-44 h-44 rounded-full border border-gray-400/30 flex items-center justify-center">
                    <div className="absolute w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center" style={{ transform: 'translateX(22px)' }}>
                      <div className="absolute w-1.5 h-1.5 bg-gray-200 rounded-full" style={{ transform: 'translateX(5px)' }}></div>
                    </div>
                  </div>
                  
                  <div className="absolute w-52 h-52 rounded-full border border-gray-400/30 flex items-center justify-center">
                    <div className="absolute w-3 h-3 bg-red-500 rounded-full" style={{ transform: 'translateX(-26px)' }}></div>
                  </div>
                </div>
                
                <h4 className="text-purple-300 mt-2">Our Solar System</h4>
                <p className="text-sm text-gray-300">The solar system consists of the Sun and everything that orbits around it, including planets, moons, asteroids, comets, and other celestial objects.</p>
              </>
            )}
          </div>
        </div>
        
        <div className="mt-4 flex justify-between">
          {!isFirstContent && (
            <Button 
              onClick={onPrevious}
              variant="outline"
              className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Previous
            </Button>
          )}
          <div className={!isFirstContent ? "" : "ml-auto"}>
            <Button 
              onClick={onComplete}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all"
            >
              Continue <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

