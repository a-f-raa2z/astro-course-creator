
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Course, CourseSection } from "@/types/course";
import { ContentType } from "@/types/ContentType";
import { GameContentRenderer } from "@/components/course/GameContentRenderer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GameProgress } from "@/components/course/GameProgress";
import { XPPopup } from "@/components/course/XPPopup";
import { useToast } from "@/hooks/use-toast";
import { GameContentTabs } from "@/components/course/GameContentTabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const AICourseStartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course as Course | null;
  const initialSectionIndex = location.state?.initialSectionIndex || 0;
  const [currentSectionIndex, setCurrentSectionIndex] = useState(initialSectionIndex);
  const [currentSection, setCurrentSection] = useState<CourseSection | null>(null);
  const [contentList, setContentList] = useState<ContentType[]>([]);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [showXPPopup, setShowXPPopup] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);
  const [completedContents, setCompletedContents] = useState<string[]>([]);
  const [showSectionTransition, setShowSectionTransition] = useState(false);
  const [nextSectionTitle, setNextSectionTitle] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (course && course.sections && course.sections.length > 0) {
      setCurrentSection(course.sections[currentSectionIndex]);
    }
  }, [course, currentSectionIndex]);

  useEffect(() => {
    if (currentSection) {
      // Create base content list with standard items
      const baseContentList: ContentType[] = [
        { id: 'introduction', type: 'introduction' as const, title: 'Introduction', completed: false },
        { id: 'video', type: 'video' as const, title: 'Video Lesson', completed: false },
        { id: 'key-points', type: 'key-points' as const, title: 'Key Points', completed: false },
      ];
      
      // Add Fun Facts tab only if there are any short videos
      const hasFunFacts = currentSection.shortVideo || 
        (currentSection.additionalShortVideos && currentSection.additionalShortVideos.length > 0);
        
      if (hasFunFacts) {
        baseContentList.push({ 
          id: 'short-video', 
          type: 'short-video' as const, 
          title: 'Fun Facts', 
          completed: false 
        });
      }
      
      // Add Image
      baseContentList.push({ 
        id: 'image', 
        type: 'image' as const, 
        title: 'Image', 
        completed: false 
      });
      
      // Add playground if available
      if (currentSection.visualUrl) {
        baseContentList.push({ 
          id: 'playground', 
          type: 'playground' as const, 
          title: 'Interactive Playground', 
          completed: false 
        });
      }
      
      // Add bonus content if available
      if (currentSection.bonusVideos && currentSection.bonusVideos.length > 0) {
        baseContentList.push({ 
          id: 'bonus', 
          type: 'bonus' as const, 
          title: 'Bonus Content', 
          completed: false 
        });
      }
      
      // Always add Quiz last
      baseContentList.push({ 
        id: 'quiz', 
        type: 'quiz' as const, 
        title: 'Knowledge Check', 
        completed: false 
      });
      
      setContentList(baseContentList);
    }
  }, [currentSection]);

  const handleNextContent = () => {
    const updatedContentList = [...contentList];
    updatedContentList[currentContentIndex] = { ...updatedContentList[currentContentIndex], completed: true };
    setContentList(updatedContentList);

    // Mark as completed in our tracking array
    const contentKey = `${currentSectionIndex}-${currentContentIndex}`;
    if (!completedContents.includes(contentKey)) {
      setCompletedContents([...completedContents, contentKey]);
    }

    if (currentContentIndex < contentList.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1);
    } else {
      // Check if there's a next section
      if (currentSectionIndex < (course?.sections?.length || 0) - 1) {
        // Show transition screen
        setShowSectionTransition(true);
        setNextSectionTitle(course?.sections[currentSectionIndex + 1]?.title || "Next Section");
        showXP(50);
      } else {
        // Course completed
        toast({
          title: "Course Completed!",
          description: "Congratulations! You've completed the course.",
          variant: "default"
        });
        navigate("/");
      }
    }
  };

  const handleStartNextSection = () => {
    setCurrentSectionIndex(currentSectionIndex + 1);
    setCurrentContentIndex(0);
    setShowSectionTransition(false);
  };

  const handlePreviousContent = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(currentContentIndex - 1);
    }
  };

  const handleTabChange = (index: number) => {
    setCurrentContentIndex(index);
  };

  const showXP = (xp: number) => {
    setXpEarned(xp);
    setShowXPPopup(true);
    setTimeout(() => {
      setShowXPPopup(false);
    }, 2000);
  };

  // Custom introductions based on AI section title
  const getCustomAIIntroduction = (sectionTitle: string) => {
    switch (sectionTitle) {
      case "Intro of Artificial Intelligence":
      case "Introduction to AI":
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
        return currentSection?.introduction || "Welcome to this exciting section of the AI course! Let's explore the concepts and applications together.";
    }
  };

  if (!course || !currentSection) {
    return <div className="min-h-screen bg-space text-white flex items-center justify-center">Loading...</div>;
  }

  const currentContentType = contentList[currentContentIndex]?.type || ('introduction' as const);

  // Update the section's introduction with a custom one if it's the introduction type
  if (currentContentType === 'introduction' && currentSection) {
    currentSection.introduction = getCustomAIIntroduction(currentSection.title);
  }

  return (
    <div className="min-h-screen bg-space text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <Button variant="ghost" onClick={() => navigate("/ai-course", { state: { course } })} className="text-white hover:bg-space-cosmic-blue/40">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Course
          </Button>
        </div>

        <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
        <h2 className="text-xl text-gray-300 mb-4">{currentSection.title}</h2>

        <GameProgress 
          overallProgress={(currentSectionIndex / (course.sections.length || 1)) * 100}
          currentSectionIndex={currentSectionIndex}
          totalSections={course.sections.length}
        />

        {/* Content Tabs Navigation */}
        <div className="mt-6 mb-4">
          <GameContentTabs
            contentTypes={contentList.map(content => content.type)}
            currentContentIndex={currentContentIndex}
            onTabClick={handleTabChange}
            completedContents={completedContents}
            sectionIndex={currentSectionIndex}
          />
        </div>

        <Card className="w-full mb-4 p-4 bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
          <GameContentRenderer
            contentType={currentContentType as ContentType['type']}
            currentSection={currentSection}
            quizSubmitted={false}
            selectedAnswer={null}
            setSelectedAnswer={() => {}}
            handleQuizSubmit={() => {}}
            handleNextContent={handleNextContent}
            handlePreviousContent={handlePreviousContent}
            isFirstContent={currentContentIndex === 0 && currentSectionIndex === 0}
            showSectionTransition={showSectionTransition}
            nextSectionTitle={nextSectionTitle}
            onStartNextSection={handleStartNextSection}
          />
        </Card>

        {!showSectionTransition && (
          <div className="flex justify-between">
            <Button
              onClick={handlePreviousContent}
              disabled={currentContentIndex === 0}
              className="bg-space-cosmic-blue hover:bg-space-deep-blue text-white"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={handleNextContent}
              className="bg-space-cosmic-blue hover:bg-space-deep-blue text-white"
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
      {showXPPopup && <XPPopup xpPoints={xpEarned} level={1} levelProgress={0} />}
    </div>
  );
};

export default AICourseStartPage;
