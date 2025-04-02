
import React, { useState, useEffect } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, ArrowRight, ArrowLeft, ChevronRight, ChevronLeft, ExternalLink } from "lucide-react";
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
  const [isExternalResource, setIsExternalResource] = useState(false);
  const [externalUrl, setExternalUrl] = useState("");
  
  useEffect(() => {
    // Check if the visualGalleryUrl is an external website
    if (section.visualGalleryUrl && (
        section.visualGalleryUrl.includes('planetary.org') || 
        section.visualGalleryUrl.includes('nasa.gov')
      )) {
      setIsExternalResource(true);
      setExternalUrl(section.visualGalleryUrl);
    } else {
      setIsExternalResource(false);
    }
  }, [section.visualGalleryUrl]);
  
  const getGalleryImages = () => {
    // For Mapping the Moon section
    if (section.title === "Mapping the Moon") {
      return [
        {
          url: "/lovable-uploads/1afadff6-a4c9-48c7-a8d6-5fe1fcecc2dd.png",
          title: "Earth Rising Over Lunar Surface",
          description: "This iconic view shows our blue planet Earth rising above the barren lunar landscape with footprints visible in the lunar soil."
        },
        {
          url: "/lovable-uploads/3215a500-d237-40e1-aecb-2a9e2b64ee10.png",
          title: "Moon Surface Features",
          description: "A detailed map showing the main features of the lunar surface visible from Earth's northern hemisphere."
        },
        {
          url: "/lovable-uploads/7a35184a-10f3-440e-92ac-90fd4cd6cf61.png",
          title: "Moon Craters",
          description: "A closer look at some of the most significant craters on the lunar surface and their formations."
        }
      ];
    }
    
    // For Moon sections
    if (section.title === "The Moon" || section.title === "The Moon in Our Skies") {
      return [
        {
          url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=1200&auto=format&fit=crop",
          title: "Full Supermoon",
          description: "A magnificent supermoon shining bright against a dark, starry night sky."
        },
        {
          url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
          title: "Supermoon Over Mountains",
          description: "A supermoon rising above a misty mountain range, creating a breathtaking landscape view."
        },
        {
          url: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1200&auto=format&fit=crop",
          title: "Desert Supermoon",
          description: "A dramatic supermoon illuminating a desert landscape, casting shadows across the sand dunes."
        },
        {
          url: "/lovable-uploads/54548175-965e-4d7f-ae75-071e6b49cb4d.png",
          title: "Earth Rising from Lunar Surface",
          description: "This iconic view shows our blue planet Earth rising above the barren lunar landscape."
        },
        {
          url: "/lovable-uploads/52a450ef-41cd-45ec-90a2-c256e58d0d6a.png",
          title: "Near Side vs Far Side of the Moon",
          description: "Side-by-side comparison showing the familiar near side of the Moon (left) and the rarely seen far side (right)."
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
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              >
                Continue <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <TitleWrapper 
              icon={<ImageIcon className="h-5 w-5 text-green-400 mr-2" />}
              title="Visual Gallery" 
              color="bg-green-900/30"
            />
          </div>
          
          <p className="text-lg text-transparent bg-gradient-to-r from-green-300 to-green-100 bg-clip-text font-medium mb-4 px-1">
            Browse through these stunning images of {section.title} to enhance your understanding.
          </p>
          
          {isExternalResource && (
            <div className="mb-4 flex justify-center">
              <Button 
                variant="outline"
                className="bg-green-900/30 border-green-500/30 text-green-300 hover:bg-green-800/50"
                onClick={() => window.open(externalUrl, "_blank")}
              >
                <ExternalLink className="h-4 w-4 mr-2" /> 
                View Complete Gallery on External Site
              </Button>
            </div>
          )}
        </div>
        
        <div className="flex-grow relative">
          <div className="w-full h-full flex items-center justify-center">
            {isExternalResource ? (
              <div className="text-center p-6">
                <img 
                  src={galleryImages[currentImageIndex].url} 
                  alt={galleryImages[currentImageIndex].title}
                  className="max-w-full max-h-[60vh] object-contain mx-auto mb-6"
                />
                <p className="text-white text-lg mb-4">
                  For additional {section.title} imagery and interactive content, visit the external resource:
                </p>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => window.open(externalUrl, "_blank")}
                >
                  <ExternalLink className="h-5 w-5 mr-2" /> 
                  Visit Full Gallery
                </Button>
              </div>
            ) : (
              <img 
                src={galleryImages[currentImageIndex].url} 
                alt={galleryImages[currentImageIndex].title}
                className="max-w-full max-h-full object-contain"
              />
            )}
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
      </Card>
    </div>
  );
};
