
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { RotateCw, ArrowRight, ArrowLeft, Lightbulb, FileText, Sun, Circle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { TitleWrapper } from "./TitleWrapper";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

interface IntroductionContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const IntroductionContent = ({ section, onComplete, onPrevious, isFirstContent }: IntroductionContentProps) => {
  const [flipped, setFlipped] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const handleFlip = () => {
    setFlipped(!flipped);
    if (!flipped) {
      toast({
        title: "Card Flipped!",
        description: "Now you can continue to the next content."
      });
    }
  };
  
  // Custom introductions based on section title
  const getCustomIntroduction = (sectionTitle: string) => {
    switch (sectionTitle) {
      // Astronomy course introductions
      case "The Solar System":
        return "Get ready to blast off on a journey through our cosmic neighborhood! The Solar System is more than just the Sun and a few planets—it's a dynamic, swirling collection of celestial bodies, from asteroids to comets and distant dwarf planets. Turn to page 50 as we uncover the wonders of this vast space family and learn how everything orbits the mighty Sun at the center.";
      case "The Inner Planets":
      case "Planets":
        return "Let's zoom in a little closer to the Sun and meet the rocky worlds that make up the inner planets: Mercury, Venus, Earth, and Mars. These terrestrial planets are full of extremes—from scorching heat to red dust storms—and they each tell a different story about what it means to be part of our solar system's front row. Dive into the main video and bonus shorts to explore these fascinating worlds.";
      case "Earth":
        return "Our home planet is a rare gem in the Solar System—alive with oceans, air, and ecosystems teeming with life. But how well do you really know Earth? Through stunning visuals and science-packed videos, explore the planet's layers, landforms, and its place in the larger cosmic dance. Then, test your Earth knowledge with the interactive visual guide linked below.";
      case "The Moon":
        return "Our closest neighbor in space, the Moon has captured human imagination for centuries. From its mysterious dark side to its role in tides and eclipses, the Moon is more than just a pretty face in the night sky. These videos offer a closer look at its phases, surface features, and why it continues to be a key part of Earth's story. Take it further with NASA's interactive moon explorer tool.";
      
      // AI course introductions
      case "Intro of Artificial Intelligence":
        return "Welcome to the fascinating world of Artificial Intelligence! This introductory section will demystify what AI actually is, beyond the hype and science fiction. We'll explore the core concepts, historical milestones, and the fundamental principles that power AI systems today. By the end of this section, you'll understand the difference between narrow AI and general AI, and how machines are programmed to simulate human-like intelligence. From the Turing Test to modern neural networks, you'll gain a solid foundation in AI's evolution and current state. You'll also learn about key ethical considerations that shape responsible AI development and deployment.";
      case "Machine Learning":
        return "Machine Learning is the engine that drives modern AI. In this section, we'll dive into how computers can learn patterns from data without being explicitly programmed. You'll discover the three main types of machine learning: supervised, unsupervised, and reinforcement learning. We'll explore real-world applications, from recommendation systems to fraud detection, and understand how algorithms improve over time with more data. You'll learn about the critical role of data preparation, feature selection, and model evaluation. By the end of this section, you'll be able to identify which machine learning approaches are best suited for different problems and understand the basic workflow of building and training models.";
      case "Deep Learning":
        return "Deep Learning represents a revolutionary approach to AI that mimics the neural networks of the human brain. This section will take you through the building blocks of neural networks, from neurons and layers to activation functions. You'll learn how deep learning has transformed computer vision, natural language processing, and speech recognition. We'll demystify concepts like backpropagation and gradient descent that make these powerful systems work. You'll discover how convolutional neural networks (CNNs) revolutionized image recognition, how recurrent neural networks (RNNs) process sequential data, and how transformer models have created breakthroughs in language understanding. By the end of this section, you'll appreciate how deep learning enables machines to perceive and interpret the world in increasingly human-like ways.";
      case "Generative AI":
        return "Generative AI is reshaping how we create content and solve problems. In this section, we'll explore how AI systems can generate new images, text, music, and more that never existed before. You'll learn about the architecture of models like GANs, VAEs, and transformers that power tools such as DALL-E, Midjourney, and ChatGPT. By the end of this section, you'll understand both the creative potential and ethical considerations of these powerful generative systems. We'll examine how these models are trained, their limitations, and emerging applications across creative industries. You'll also gain insight into important concepts like prompt engineering that help users get the most out of generative AI tools. Most importantly, we'll discuss the implications of AI-generated content for copyright, authenticity, and the future of human creativity.";
      case "Chatbots":
        return "Conversational AI has transformed how we interact with technology. This section explores the evolution of chatbots from simple rule-based systems to sophisticated conversational agents. You'll learn about the natural language processing techniques that enable machines to understand and generate human language. We'll examine the architecture of modern chatbots, including intent recognition, entity extraction, dialogue management, and response generation, along with best practices for designing effective conversational experiences. You'll discover how large language models have revolutionized chatbot capabilities, enabling more natural, contextual conversations. We'll also discuss practical applications across customer service, healthcare, education, and personal assistance, as well as the challenges of maintaining conversation coherence, ensuring factual accuracy, and creating chatbots that are helpful, harmless, and honest.";
      case "Robots and Automation":
        return "Robotics represents AI embodied in the physical world. In this section, we'll explore how AI enables robots to perceive their environment, make decisions, and take actions. You'll learn about the sensor technologies that serve as a robot's 'senses,' control systems that enable movement, and the AI algorithms that power a robot's 'brain.' We'll examine applications across industries, from manufacturing and healthcare to agriculture and space exploration, and discuss how automation is reshaping our economy and society. You'll understand the difference between industrial robots, collaborative robots (cobots), and autonomous mobile robots. We'll also cover the basics of robot kinematics, path planning, and computer vision for robotics. By the end of this section, you'll appreciate the unique challenges of creating machines that can safely and effectively operate in unstructured, real-world environments alongside humans.";
      case "AI for Music":
        return "AI is revolutionizing how music is created, produced, and experienced. This section explores how artificial intelligence is being used to compose original melodies, generate harmonies, and even mimic the styles of famous musicians. You'll learn about the neural networks behind music generation, auto-tuning, and mastering algorithms powered by AI. We'll also examine how streaming platforms use recommendation systems to personalize music discovery, and discuss the creative partnership between human musicians and artificial intelligence. You'll discover tools that can generate custom backing tracks, suggest chord progressions, or complete musical phrases based on a few notes. We'll explore the technical challenges of representing and processing audio data, and how models like WaveNet and Jukebox have pushed the boundaries of AI-generated sound. Throughout this section, we'll consider how AI tools can augment human creativity rather than replace it, opening new possibilities for musical expression and collaboration.";
      case "AI for Arts":
        return "Visual arts are undergoing a renaissance through AI technologies. This section explores how algorithms can generate stunning images, assist in creative processes, and even develop new artistic styles. You'll learn about the technical foundations of image generation models like DALL-E, Midjourney, and Stable Diffusion, as well as style transfer algorithms. We'll examine how artists are incorporating AI as a collaborative tool in their workflows, and discuss questions about creativity, authorship, and the future relationship between human and machine artistry. You'll understand how diffusion models work to generate images from text descriptions, how GANs can create photorealistic faces that never existed, and how neural style transfer can reimagine photographs in the style of famous painters. We'll also explore AI applications in animation, 3D modeling, and digital art curation. By the end of this section, you'll be equipped to think critically about AI's role in expanding artistic possibilities while preserving the human elements that give art its meaning and value.";
      default:
        return section.introduction;
    }
  };
  
  // Determine if section should show solar system diagram
  const shouldShowSolarSystemDiagram = section.title === "The Solar System";
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card className="w-full h-full flex flex-col p-4 bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <TitleWrapper 
          icon={<FileText className="h-5 w-5 text-purple-400 mr-2" />}
          title="Introduction" 
          color="bg-purple-800/50"
        />
        
        {/* 4:3 Flashcard container */}
        <div className="flex-1 flex items-center justify-center p-2">
          <div className="w-full h-full relative">
            <div className={`w-full h-full perspective-1000 transition-all duration-700 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
              {/* Front of flashcard */}
              <div className={`absolute inset-0 backface-hidden rounded-xl bg-purple-900/30 p-4 border border-purple-500/30 shadow-lg ${flipped ? 'opacity-0' : 'opacity-100'}`}>
                <div className="h-full overflow-auto prose prose-invert max-w-none">
                  <p className="text-gray-200">{getCustomIntroduction(section.title)}</p>
                  
                  {/* Solar System Diagram - Only show for Solar System section */}
                  {shouldShowSolarSystemDiagram && (
                    <>
                      <div className="mt-4 relative h-24 md:h-32 flex items-center justify-center">
                        {/* Sun */}
                        <div className="absolute w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse z-30">
                          <Sun className="h-8 w-8 text-yellow-300" />
                        </div>
                        
                        {/* Mercury */}
                        <div className="absolute w-28 h-28 rounded-full border border-gray-400/30 flex items-center justify-center">
                          <div className="absolute w-2 h-2 bg-gray-300 rounded-full" style={{ transform: 'translateX(14px)' }}></div>
                        </div>
                        
                        {/* Venus */}
                        <div className="absolute w-36 h-36 rounded-full border border-gray-400/30 flex items-center justify-center">
                          <div className="absolute w-3 h-3 bg-orange-300 rounded-full" style={{ transform: 'translateX(-18px)' }}></div>
                        </div>
                        
                        {/* Earth */}
                        <div className="absolute w-44 h-44 rounded-full border border-gray-400/30 flex items-center justify-center">
                          <div className="absolute w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center" style={{ transform: 'translateX(22px)' }}>
                            <div className="absolute w-1.5 h-1.5 bg-gray-200 rounded-full" style={{ transform: 'translateX(5px)' }}></div>
                          </div>
                        </div>
                        
                        {/* Mars */}
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
              
              {/* Back of flashcard */}
              <div className={`absolute inset-0 backface-hidden rounded-xl bg-yellow-900/20 p-4 border border-yellow-500/20 shadow-lg rotate-y-180 ${flipped ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-full overflow-auto">
                  <div className="flex items-center mb-2">
                    <Lightbulb className="h-5 w-5 text-yellow-400 mr-2" />
                    <h3 className="text-lg font-medium text-yellow-300">Why Learn This?</h3>
                  </div>
                  <p className="text-gray-300 italic">{section.whyLearn}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Flip button positioned below the flashcard */}
        <div className="mt-4 flex justify-center">
          <Button 
            onClick={handleFlip}
            variant="outline"
            className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
          >
            <RotateCw className="h-4 w-4 mr-2" /> Flip Card
          </Button>
        </div>
        
        {/* Navigation buttons at the bottom */}
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
              className={`bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all ${flipped ? 'opacity-100 animate-pulse' : 'opacity-50'}`}
              disabled={!flipped}
            >
              Continue <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

