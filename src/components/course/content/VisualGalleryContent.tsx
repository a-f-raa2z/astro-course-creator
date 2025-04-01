
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, ArrowRight, ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TitleWrapper } from "./TitleWrapper";

interface VisualGalleryContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const VisualGalleryContent = ({ section, onComplete, onPrevious, isFirstContent }: VisualGalleryContentProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const getGalleryImages = () => {
    // For Section 5 - The Moon (we can make this more dynamic if needed)
    if (section.title.includes("Moon") && section.visualGalleryUrl === "https://unsplash.com/s/photos/supermoon") {
      return [
        {
          url: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200&auto=format&fit=crop",
          title: "Full Moon",
          description: "A stunning view of the full moon rising over the horizon."
        },
        {
          url: "https://images.unsplash.com/photo-1532693748080-db766088bfc5?q=80&w=1200&auto=format&fit=crop",
          title: "Super Moon",
          description: "A beautiful supermoon appears larger and brighter than typical full moons."
        },
        {
          url: "https://images.unsplash.com/photo-1517729329959-f9d2d7887545?q=80&w=1200&auto=format&fit=crop",
          title: "Blood Moon",
          description: "A lunar eclipse gives the Moon a reddish appearance, known as a 'Blood Moon'."
        },
        {
          url: "https://images.unsplash.com/photo-1504013078537-d5cb53f0e46b?q=80&w=1200&auto=format&fit=crop",
          title: "Moon and Clouds",
          description: "The moon visible through wisps of clouds creates a mystical atmosphere."
        }
      ];
    }
    
    // Default fallback
    return [
      {
        url: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200&auto=format&fit=crop",
        title: "Visual Gallery",
        description: "A collection of images related to this topic to enhance your understanding."
      }
    ];
  };
  
  const galleryImages = getGalleryImages();
  
  const nextImage = () => {
    if (galleryImages.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (galleryImages.length > 1) {
      setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    }
  };

  const showNavigation = galleryImages.length > 1;

  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
          <TitleWrapper 
            icon={<ImageIcon className="h-5 w-5 text-green-400 mr-2" />}
            title="Visual Gallery" 
            color="bg-green-900/30"
          />
          <p className="text-lg text-transparent bg-gradient-to-r from-green-300 to-green-100 bg-clip-text font-medium mb-4 px-1">
            Browse through these stunning images of {section.title} to enhance your understanding.
          </p>
        </div>
        
        <div className="flex-grow relative">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={galleryImages[currentImageIndex].url} 
              alt={galleryImages[currentImageIndex].title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          
          {showNavigation && (
            <>
              {/* Image navigation controls */}
              <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 pointer-events-none">
                <Button 
                  onClick={prevImage} 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-black/30 border-white/20 hover:bg-black/50 pointer-events-auto"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </Button>
                
                <Button 
                  onClick={nextImage} 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-black/30 border-white/20 hover:bg-black/50 pointer-events-auto"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </Button>
              </div>

              {/* Indicator dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {galleryImages.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex ? "bg-white scale-125" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-xl font-semibold text-white">{galleryImages[currentImageIndex].title}</h3>
            <p className="text-sm text-white/80">{galleryImages[currentImageIndex].description}</p>
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
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
            >
              Continue <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
