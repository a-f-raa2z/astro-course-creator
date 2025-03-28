
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { RotateCw, ArrowRight, Lightbulb, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { TitleWrapper } from "./TitleWrapper";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface IntroductionContentProps {
  section: CourseSection;
  onComplete: () => void;
}

export const IntroductionContent = ({ section, onComplete }: IntroductionContentProps) => {
  const [flipped, setFlipped] = useState(false);
  const { toast } = useToast();
  
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
    <div className="w-full">
      <AspectRatio ratio={1}>
        <Card className="w-full h-full flex flex-col p-4 bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
          <TitleWrapper 
            icon={<FileText className="h-5 w-5 text-purple-400 mr-2" />}
            title="Introduction" 
            color="bg-purple-800/50"
          />
          
          {/* 4:3 Flashcard container */}
          <div className="flex-1 flex items-center justify-center p-2">
            <div className="w-full max-w-md mx-auto">
              <AspectRatio ratio={4/3} className="relative">
                <div className={`w-full h-full perspective-1000 transition-all duration-700 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
                  {/* Front of flashcard */}
                  <div className={`absolute inset-0 backface-hidden rounded-xl bg-purple-900/30 p-4 border border-purple-500/30 shadow-lg ${flipped ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="h-full overflow-auto prose prose-invert max-w-none">
                      <p className="text-gray-200">{section.introduction}</p>
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
              </AspectRatio>
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
            <div></div> {/* Empty div for spacing */}
            <Button 
              onClick={onComplete}
              className={`bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all ${flipped ? 'opacity-100 animate-pulse' : 'opacity-50'}`}
              disabled={!flipped}
            >
              Continue <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </Card>
      </AspectRatio>
    </div>
  );
};
