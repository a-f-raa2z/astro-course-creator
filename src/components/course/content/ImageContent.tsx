
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, ArrowRight, ArrowLeft, SlidersHorizontal, Camera } from "lucide-react";
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
  const [slideIndex, setSlideIndex] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const [imageCaptured, setImageCaptured] = useState(false);
  const { toast } = useToast();
  
  // Define images based on section title
  const getSectionImages = (sectionTitle: string) => {
    if (sectionTitle === "The Inner Planets") {
      return [
        { 
          url: "https://science.nasa.gov/wp-content/uploads/2023/11/pia25016.width-1320.jpg",
          description: "The four inner planets (Mercury, Venus, Earth, and Mars) are terrestrial (rocky) worlds." 
        },
        { 
          url: "https://science.nasa.gov/wp-content/uploads/2023/11/mercury-globe-gal.width-1320.jpg", 
          description: "Mercury is the smallest and closest planet to the Sun, with extreme temperature variations."
        },
        { 
          url: "https://science.nasa.gov/wp-content/uploads/2023/11/venus.width-1320.jpg", 
          description: "Venus has a thick toxic atmosphere that traps heat, making it the hottest planet in our solar system."
        }
      ];
    }
    
    if (sectionTitle === "Earth") {
      return [
        { 
          url: "https://science.nasa.gov/wp-content/uploads/2023/06/as17-148-22727-earth-full-disk-apollo-17-1972.width-1320.jpg", 
          description: "Earth, our home planet, is the only place we know of so far that's inhabited by living things." 
        },
        { 
          url: "https://science.nasa.gov/wp-content/uploads/2023/06/iss064e027440-western-hemisphere.width-1320.jpg", 
          description: "Earth's atmosphere, oceans, and landscapes teem with life and interact in complex ways." 
        },
        { 
          url: "https://science.nasa.gov/wp-content/uploads/2023/06/iss066e117437-earth-from-space.width-1320.jpg", 
          description: "From space, Earth looks like a blue marble with swirls of white clouds." 
        }
      ];
    }
    
    if (sectionTitle === "The Moon") {
      return [
        { 
          url: "https://science.nasa.gov/wp-content/uploads/2023/09/moon.width-1320.jpg", 
          description: "The Moon is Earth's only natural satellite and the fifth largest moon in the solar system." 
        },
        { 
          url: "https://science.nasa.gov/wp-content/uploads/2023/07/as11-44-6667-apollo-11-buzz-aldrin-moon.width-1320.jpg", 
          description: "The Moon's surface is covered with impact craters, vast lava plains, and mountains." 
        },
        { 
          url: "https://science.nasa.gov/wp-content/uploads/2023/09/moon-phases.width-1320.jpg", 
          description: "The Moon goes through phases as it orbits Earth, due to the changing angle of sunlight." 
        }
      ];
    }
    
    // Default images for Solar System
    return [
      { 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Solar_System_true_color_%28captions%29.jpg/800px-Solar_System_true_color_%28captions%29.jpg", 
        description: "True color view of our solar system planets, showing their actual sizes and colors relative to each other." 
      },
      { 
        url: "https://science.nasa.gov/wp-content/uploads/2023/09/solar-system-illustration-new-horizons-trajectory.width-1320.jpg", 
        description: "Jupiter is the largest planet, more than 11 times Earth's diameter. Mercury is the smallest, just over 1/3 of Earth's size." 
      },
      { 
        url: "https://science.nasa.gov/wp-content/uploads/2023/09/pia23645.width-1320.jpg", 
        description: "The gas giants (Jupiter, Saturn, Uranus, Neptune) are primarily composed of hydrogen and helium, unlike the rocky terrestrial planets." 
      }
    ];
  };
  
  const images = getSectionImages(section.title);
  
  const handleSlide = () => {
    const nextIndex = (slideIndex + 1) % images.length;
    setSlideIndex(nextIndex);
    
    if (nextIndex === images.length - 1) {
      setShowContinue(true);
      toast({
        title: "All Images Viewed!",
        description: "You've seen all the visual examples."
      });
    }
  };

  const handleCapture = () => {
    setImageCaptured(true);
    setShowContinue(true);
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
              src={images[slideIndex].url} 
              alt={images[slideIndex].description} 
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
            <p className="text-sm text-white">{images[slideIndex].description}</p>
            
            <div className="flex justify-between items-center mt-2">
              <div className="flex space-x-1">
                {images.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-2 h-2 rounded-full ${
                      idx === slideIndex ? "bg-yellow-400" : "bg-gray-600"
                    }`}
                  ></div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-white/30"
                onClick={handleSlide}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                {slideIndex < images.length - 1 ? "Next Image" : "Start Over"}
              </Button>
            </div>
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
          
          {(showContinue || slideIndex > 0) && (
            <div className={!isFirstContent ? "" : "ml-auto"}>
              <Button 
                onClick={onComplete}
                className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 animate-fade-in text-white"
              >
                Continue <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
