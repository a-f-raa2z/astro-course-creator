import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, ArrowRight, ArrowLeft, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { TitleWrapper } from "./TitleWrapper";

interface ImageContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const ImageContent = ({ section, onComplete, onPrevious, isFirstContent }: ImageContentProps) => {
  const [imageCaptured, setImageCaptured] = useState(false);
  const { toast } = useToast();
  
  // Define images based on section title
  const getSectionImage = (sectionTitle: string) => {
    if (sectionTitle === "The Inner Planets") {
      return {
        url: "/lovable-uploads/4feca2b6-a656-4abf-b674-e00f9467fb87.png",
        description: "The four inner planets (Venus, Earth, Moon, and Mars) as photographed by various space missions."
      };
    }
    
    if (sectionTitle === "Earth") {
      return {
        url: "https://science.nasa.gov/wp-content/uploads/2023/06/as17-148-22727-earth-full-disk-apollo-17-1972.width-1320.jpg", 
        description: "Earth, our home planet, is the only place we know of so far that's inhabited by living things." 
      };
    }
    
    if (sectionTitle === "The Moon") {
      return {
        url: "https://science.nasa.gov/wp-content/uploads/2023/09/moon.width-1320.jpg", 
        description: "The Moon is Earth's only natural satellite and the fifth largest moon in the solar system." 
      };
    }
    
    if (sectionTitle === "The Solar System") {
      return {
        url: "https://science.nasa.gov/wp-content/uploads/2023/09/solar-system-illustration-new-horizons-trajectory.width-1320.jpg", 
        description: "The Solar System consists of the Sun and the objects that orbit it, including planets, dwarf planets, moons, asteroids, and comets." 
      };
    }
    
    if (sectionTitle === "Intro of Artificial Intelligence") {
      return {
        url: "https://images.unsplash.com/photo-1677442135073-8edf721c002b", 
        description: "AI systems analyze and process data to make predictions and decisions based on patterns they've learned." 
      };
    }
    
    if (sectionTitle === "Machine Learning") {
      return {
        url: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c", 
        description: "Machine learning models continuously improve by analyzing patterns in data to make better predictions." 
      };
    }
    
    if (sectionTitle === "Deep Learning") {
      return {
        url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d", 
        description: "Neural networks mimic human brain structure to process complex relationships between inputs and outputs." 
      };
    }
    
    if (sectionTitle === "Generative AI") {
      return {
        url: "https://images.unsplash.com/photo-1586374579358-9d19d632b6df", 
        description: "Generative AI can create realistic images, text, and other content that never existed before." 
      };
    }
    
    if (sectionTitle === "Chatbots") {
      return {
        url: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a", 
        description: "Chatbots enable natural conversations between humans and machines through text or voice interfaces." 
      };
    }
    
    if (sectionTitle === "Robots and Automation") {
      return {
        url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e", 
        description: "Robots combine physical capabilities with AI systems to perform tasks in the real world." 
      };
    }
    
    if (sectionTitle === "AI for Music") {
      return {
        url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d", 
        description: "AI music generation tools can create original compositions by learning patterns from existing music." 
      };
    }
    
    // Default image for any section without a specific image
    return {
      url: "https://science.nasa.gov/wp-content/uploads/2023/09/solar-system-illustration-new-horizons-trajectory.width-1320.jpg", 
      description: "Visual representation of " + sectionTitle + ". Capturing this image will help you remember the key concepts." 
    };
  };
  
  const sectionImage = section.image?.url && section.image?.description
    ? { url: section.image.url, description: section.image.description }
    : getSectionImage(section.title);

  const handleCapture = () => {
    setImageCaptured(true);
    toast({
      title: "Image Captured!",
      description: "Great job! You've captured this visual example."
    });
  };

  return (
    <div className="w-full h-full">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          <TitleWrapper 
            icon={<ImageIcon className="h-5 w-5 text-yellow-400 mr-2" />}
            title="Visual Guide" 
            color="bg-yellow-900/30"
          />
          <p className="text-lg text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text font-medium mb-4 px-1">
            Explore visual representations of {section.title.toLowerCase()} to enhance your understanding.
          </p>
        </div>
        
        <div className="flex-grow relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 opacity-100">
            <img 
              src={sectionImage.url} 
              alt={sectionImage.description} 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Capture button positioned in the top-right corner */}
          <div className="absolute top-4 right-4 z-10">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleCapture}
              className="bg-yellow-600/80 hover:bg-yellow-700/90 border-yellow-500 text-white"
              disabled={imageCaptured}
            >
              <Camera className="h-4 w-4 mr-2" />
              {imageCaptured ? "Captured" : "Capture Image"}
            </Button>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-sm text-white">{sectionImage.description}</p>
          </div>
        </div>
        
        <div className="p-4 flex justify-between">
          {!isFirstContent && (
            <Button 
              onClick={onPrevious}
              variant="outline"
              className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Previous
            </Button>
          )}
          
          <div className={!isFirstContent ? "ml-auto" : "ml-auto"}>
            <Button 
              onClick={onComplete}
              className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 animate-fade-in text-white"
            >
              Continue <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
