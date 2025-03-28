
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
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card className="w-full h-full flex flex-col p-4 bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <TitleWrapper 
          icon={<FileText className="h-5 w-5 text-purple-400 mr-2" />}
          title="Introduction" 
          color="bg-purple-800/50"
        />
        
        <p className="text-sm text-gray-300 ml-1 mb-4">
          Welcome to Solar System Learning! We'll explore planets, moons, asteroids, and other fascinating celestial objects in our cosmic neighborhood.
        </p>
        
        {/* 4:3 Flashcard container */}
        <div className="flex-1 flex items-center justify-center p-2">
          <div className="w-full h-full relative">
            <div className={`w-full h-full perspective-1000 transition-all duration-700 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
              {/* Front of flashcard */}
              <div className={`absolute inset-0 backface-hidden rounded-xl bg-purple-900/30 p-4 border border-purple-500/30 shadow-lg ${flipped ? 'opacity-0' : 'opacity-100'}`}>
                <div className="h-full overflow-auto prose prose-invert max-w-none">
                  <p className="text-gray-200">{section.introduction}</p>
                  
                  {/* Solar System Diagram */}
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
