
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
  
  // Get all video sources
  const getVideoSources = () => {
    const sources = [];
    
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
        "How the Moon's phases work and its influence on Earth."
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
          <TitleWrapper 
            icon={<Youtube className="h-5 w-5 text-red-500 mr-2" />}
            title={videoSources[currentVideoIndex]?.title || "Main Video Lesson"}
            color="bg-red-900/30"
          />
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
          <div className={!isFirstContent ? "" : "ml-auto"}>
            {!videoWatched && (
              <Button 
                onClick={handleVideoComplete}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                Complete Video <CheckCircle className="h-4 w-4 ml-2" />
              </Button>
            )}
            {showCompletionView && (
              <Button 
                onClick={handleContinue}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                {currentVideoIndex < videoSources.length - 1 ? 'Next Video' : 'Continue'} <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
