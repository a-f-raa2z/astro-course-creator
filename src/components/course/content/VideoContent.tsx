import React, { useState, useEffect } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight, ArrowLeft, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TitleWrapper } from "./TitleWrapper";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "react-router-dom";
import { KeyPointsView } from "./KeyPointsView";
import { CompletionView } from "./CompletionView";

interface VideoContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const VideoContent = ({ section, onComplete, onPrevious, isFirstContent }: VideoContentProps) => {
  const [videoWatched, setVideoWatched] = useState(false);
  const [showKeyPoints, setShowKeyPoints] = useState(false);
  const [showCompletionView, setShowCompletionView] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const { toast } = useToast();
  const location = useLocation();
  
  const isAICourse = location.pathname.includes('ai-course');
  
  const getVideoDescription = (sectionTitle: string, index: number) => {
    const descriptionMap: Record<string, string[]> = {
      "The Inner Planets": [
        "Explore Mercury, Venus, Earth, and Mars - the four terrestrial planets closest to the Sun.",
        "A deeper look at these rocky worlds and their unique characteristics."
      ],
      "Earth": [
        "Our home planet - the blue marble of the Solar System and the only known world with abundant liquid water.",
        "Earth's complex systems and how they interact to support life."
      ],
      "The Moon": [
        "Earth's natural satellite and our closest celestial neighbor.",
        "How the Moon influences Earth and the important role it plays in our solar system."
      ],
      "The Moon in Our Skies": [
        "Understanding the Moon's phases and how they affect Earth.",
        "Exploring the Moon's orbit and its fascinating relationship with our planet."
      ],
      "Mercury": [
        "Discover the smallest and innermost planet in our Solar System - a rocky world with extreme temperatures.",
        "Learn about Mercury's unusual orbit and the MESSENGER mission that mapped its surface."
      ]
    };
    
    const descriptions = descriptionMap[sectionTitle];
    if (descriptions && index < descriptions.length) {
      return descriptions[index];
    }
    
    return index === 0
      ? "A comprehensive overview of our cosmic neighborhood and the celestial bodies within it."
      : "Additional insights into this fascinating cosmic subject.";
  };
  
  const getVideoSources = () => {
    const sources = [];
    
    if (section.title === "The Inner Planets") {
      return [
        {
          url: "https://www.youtube.com/embed/05E1uMh15QQ",
          title: "Main Lesson: The Inner Planets",
          description: "Learn about Mercury, Venus, Earth, and Mars - the four rocky planets closest to the Sun."
        }
      ];
    }
    
    if (section.title === "Earth") {
      return [
        {
          url: "https://www.youtube.com/embed/HCDVN7DCzYE",
          title: "Main Lesson: Earth",
          description: "Explore our home planet - the blue marble of the Solar System and the only known world with abundant liquid water."
        }
      ];
    }
    
    if (section.title === "The Moon" || section.title === "The Moon in Our Skies") {
      return [
        {
          url: "https://www.youtube.com/embed/lhKMQIRdaeo",
          title: "Main Lesson",
          description: "Learn about Earth's natural satellite and how it formed."
        },
        {
          url: "https://www.youtube.com/embed/cxrLRbkOwKs",
          title: "Our Moon",
          description: "Exploring the Moon's features and its influence on Earth."
        }
      ];
    }
    
    if (section.title === "Mercury") {
      return [
        {
          url: "https://www.youtube.com/embed/0KBjnNuhRHs",
          title: "Main Lesson: Mercury",
          description: "Explore the smallest planet in our Solar System - a cratered world closest to the Sun."
        },
        {
          url: "https://www.youtube.com/embed/rX_NCCpw5Uo",
          title: "Mercury Up Close",
          description: "A detailed look at Mercury's features, composition, and the missions that have explored it."
        }
      ];
    }
    
    if (section.title === "The Moon's Unseen Face") {
      return [
        {
          url: "https://www.youtube.com/embed/kJkVegBsNyE",
          title: "Main Lesson: The Moon's Unseen Face",
          description: "Discover the mysteries of the far side of the Moon - the hemisphere we never see from Earth."
        }
      ];
    }
    
    if (section.title === "Roving over Mars") {
      return [
        {
          url: "https://www.youtube.com/embed/OO5CTBBgtXs",
          title: "Mars Rovers Overview",
          description: "An introduction to the Mars rovers and their missions to explore the Red Planet."
        },
        {
          url: "https://www.youtube.com/embed/WrTHX8t0yl8",
          title: "Perseverance Rover",
          description: "Learn about NASA's most advanced Mars rover and its search for signs of ancient life."
        },
        {
          url: "https://www.youtube.com/embed/iK64wy0b2ic",
          title: "Mars Rover Technology",
          description: "Explore the incredible technology that allows rovers to navigate and study the Martian surface."
        }
      ];
    }
    
    if (section.videoUrl) {
      sources.push({
        url: section.videoUrl,
        title: "Main Lesson",
        description: getVideoDescription(section.title, 0)
      });
    }
    
    if (section.mainLesson2Url) {
      sources.push({
        url: section.mainLesson2Url,
        title: "Main Lesson 2", 
        description: getVideoDescription(section.title, 1)
      });
    }
    
    return sources;
  };
  
  const videoSources = getVideoSources();
  const currentVideoUrl = videoSources[currentVideoIndex]?.url || "";
  
  useEffect(() => {
    setVideoWatched(false);
    setShowKeyPoints(false);
    setShowCompletionView(false);
  }, [currentVideoIndex]);

  const handleVideoComplete = () => {
    setVideoWatched(true);
    
    toast({
      title: "Video Completed!",
      description: "Great job! Here are the key points to remember from this lesson."
    });
    setShowKeyPoints(true);
  };

  const handleAllPointsChecked = () => {
    setShowKeyPoints(false);
    setShowCompletionView(true);
  };

  const handleContinue = () => {
    if (currentVideoIndex < videoSources.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      onComplete();
    }
  };
  
  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };
  
  const handleReviewKeyPoints = () => {
    if (!isAICourse) {
      setShowKeyPoints(true);
      setShowCompletionView(false);
    }
  };

  const hasMultipleVideos = videoSources.length > 1;

  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="p-4">
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
              {!videoWatched ? (
                <Button 
                  onClick={handleVideoComplete}
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                >
                  Complete Video <CheckCircle className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                showCompletionView && (
                  <Button 
                    onClick={handleContinue}
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                  >
                    {currentVideoIndex < videoSources.length - 1 ? 'Next Video' : 'Continue'} <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                )
              )}
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <TitleWrapper 
              icon={<Youtube className="h-5 w-5 text-red-500 mr-2" />}
              title={videoSources[currentVideoIndex]?.title || "Main Video Lesson"}
              color="bg-red-900/30"
            />
          </div>
          
          <p className="text-lg text-transparent bg-gradient-to-r from-red-300 to-red-100 bg-clip-text font-medium mb-4 px-1">
            {videoSources[currentVideoIndex]?.description || "Learn about this fascinating topic."}
          </p>
        </div>
        
        {!videoWatched ? (
          <div className="flex-grow relative">
            <AspectRatio ratio={16/9} className="h-full">
              <iframe 
                className="w-full h-full"
                src={currentVideoUrl}
                title={`Video for ${section.title}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </AspectRatio>
            
            {hasMultipleVideos && (
              <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 pointer-events-none">
                {currentVideoIndex > 0 && (
                  <Button 
                    onClick={handlePreviousVideo} 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full bg-black/30 border-white/20 hover:bg-black/50 pointer-events-auto"
                    aria-label="Previous video"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </Button>
                )}
                
                {currentVideoIndex < videoSources.length - 1 && (
                  <div className="ml-auto">
                    <Button 
                      onClick={() => setCurrentVideoIndex(currentVideoIndex + 1)} 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full bg-black/30 border-white/20 hover:bg-black/50 pointer-events-auto"
                      aria-label="Next video"
                    >
                      <ChevronRight className="h-6 w-6 text-white" />
                    </Button>
                  </div>
                )}
              </div>
            )}
            
            {hasMultipleVideos && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {videoSources.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentVideoIndex ? "bg-white scale-125" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : showKeyPoints ? (
          <KeyPointsView 
            keyPoints={section.keyPoints} 
            onAllPointsChecked={handleAllPointsChecked} 
          />
        ) : showCompletionView ? (
          <CompletionView 
            sectionTitle={section.title}
            onReviewKeyPoints={handleReviewKeyPoints}
            onRewatchVideo={() => {
              setVideoWatched(false);
              setShowKeyPoints(false);
              setShowCompletionView(false);
            }}
            onContinue={handleContinue}
            showKeyPointsButton={!isAICourse}
          />
        ) : null}
      </Card>
    </div>
  );
};
