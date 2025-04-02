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
        url: "/lovable-uploads/f93fad87-6e1c-4755-aaca-5118c9b978f9.png",
        description: "The four inner planets of our solar system: Venus, Earth, Moon, and Mars shown to scale."
      };
    }
    
    if (sectionTitle === "Earth") {
      return {
        url: "/lovable-uploads/34bde558-8d2c-41ff-bd25-b4c545393355.png", // Updated Earth image
        description: "Earth as seen from space, showing North America, Central America, and parts of South America with blue oceans, white cloud patterns, and the diverse terrain of the continental landmasses."
      };
    }
    
    if (sectionTitle === "The Moon" || sectionTitle === "The Moon in Our Skies") {
      return {
        url: "/lovable-uploads/54548175-965e-4d7f-ae75-071e6b49cb4d.png", 
        description: "Earth rising above the lunar surface, as seen from the Moon. This iconic view shows our planet suspended in the blackness of space above the barren lunar landscape." 
      };
    }
    
    if (sectionTitle === "The Moon's Unseen Face") {
      return {
        url: "/lovable-uploads/52a450ef-41cd-45ec-90a2-c256e58d0d6a.png", 
        description: "Side-by-side comparison of the Moon's near side (left) that we can see from Earth and the far side (right) that remained unknown until spacecraft flew around the Moon." 
      };
    }
    
    if (sectionTitle === "Mapping the Moon") {
      return {
        url: "/lovable-uploads/1afadff6-a4c9-48c7-a8d6-5fe1fcecc2dd.png", 
        description: "View of Earth rising over the lunar surface, showing the Moon's cratered landscape in the foreground with footprints visible from astronaut exploration." 
      };
    }
    
    if (sectionTitle === "The Solar System") {
      return {
        url: "https://science.nasa.gov/wp-content/uploads/2023/09/solar-system-illustration-new-horizons-trajectory.width-1320.jpg", 
        description: "The Solar System consists of the Sun and the objects that orbit it, including planets, dwarf planets, moons, asteroids, and comets." 
      };
    }
    
    if (sectionTitle === "Venus") {
      return {
        url: "/lovable-uploads/b87f40a8-a8d2-42de-943b-b6f586bc75b1.png", 
        description: "Venus, with its thick, golden cloud cover illuminated by the Sun. Although similar in size to Earth, Venus has a harsh, hot environment with a thick atmosphere primarily composed of carbon dioxide, making it the hottest planet in our solar system."
      };
    }
    
    if (sectionTitle === "Mercury") {
      return {
        url: "/lovable-uploads/eec8c514-41eb-4020-ad57-6841a15298df.png", 
        description: "Mercury shown in two views: a grayscale image showing its cratered surface (left) and a false-color image highlighting its chemical composition (right)." 
      };
    }
    
    if (sectionTitle === "Messenger at Mercury") {
      return {
        url: "/lovable-uploads/8da06395-44da-4447-93f0-da38fbbbff6c.png", 
        description: "NASA's MESSENGER spacecraft orbiting Mercury, shown against the backdrop of the planet's cratered surface." 
      };
    }
    
    if (sectionTitle === "The Sun") {
      return {
        url: "/lovable-uploads/0f346c00-bd6b-4610-aa4e-83dec78f53e3.png", 
        description: "The Sun seen in visible light, showing its perfect spherical shape and surface features like sunspots." 
      };
    }
    
    if (sectionTitle === "Close to the Sun") {
      return {
        url: "/lovable-uploads/6d50892d-4935-4033-bcfc-2a998579227e.png", 
        description: "The Parker Solar Probe approaching the Sun's corona, shown against the backdrop of a dramatic solar flare eruption." 
      };
    }
    
    if (sectionTitle === "Mars") {
      return {
        url: "/lovable-uploads/28ccf6bc-b95b-4b54-b78c-1be5f91a5be6.png", 
        description: "A full view of Mars showing its distinctive red surface and features like Valles Marineris, one of the largest canyons in the Solar System." 
      };
    }
    
    if (sectionTitle === "Mars from Above and the Moons of Mars") {
      return {
        url: "/lovable-uploads/973bc422-9419-49ac-ae95-89d2b36f2df8.png", 
        description: "Mars with its two small moons Phobos and Deimos, which are likely captured asteroids rather than formed alongside the planet." 
      };
    }
    
    if (sectionTitle === "Roving over Mars") {
      return {
        url: "/lovable-uploads/71f04c7c-c819-40bc-9de0-5f293ddadf89.png", 
        description: "A Mars rover exploring the red planet's surface, equipped with scientific instruments to study the Martian environment." 
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
          {/* Navigation buttons row - placed between tabs and title */}
          <div className="flex justify-between items-center mb-4">
            <div>
              {!isFirstContent && (
                <Button 
                  onClick={onPrevious}
                  variant="outline"
                  size="sm"
                  className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" /> Previous
                </Button>
              )}
            </div>
            
            <div>
              <Button 
                onClick={onComplete}
                size="sm"
                className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white"
              >
                Continue <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <TitleWrapper 
              icon={<ImageIcon className="h-5 w-5 text-yellow-400 mr-2" />}
              title="Visual Guide" 
              color="bg-yellow-900/30"
            />
          </div>
          
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
      </Card>
    </div>
  );
};
