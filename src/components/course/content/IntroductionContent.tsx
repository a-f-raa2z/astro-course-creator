
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { RotateCw, ArrowRight, Lightbulb, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { TitleWrapper } from "./TitleWrapper";

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
    <div className="h-[400px] w-full">
      <div className={`relative w-full h-full transition-transform duration-700 ${flipped ? 'rotate-y-180' : ''}`} style={{ perspective: '1000px' }}>
        {/* Front of card */}
        <div className={`absolute w-full h-full backface-hidden ${flipped ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}>
          <Card className="w-full h-full overflow-auto p-4 bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
            <TitleWrapper 
              icon={<FileText className="h-5 w-5 text-purple-400 mr-2" />}
              title="Introduction" 
              color="bg-purple-800/50"
            />
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200">{section.introduction}</p>
            </div>
            
            <div className="absolute bottom-4 right-4">
              <Button 
                onClick={handleFlip}
                className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2"
              >
                <RotateCw className="h-4 w-4" /> Flip Card
              </Button>
            </div>
          </Card>
        </div>
        
        {/* Back of card */}
        <div className={`absolute w-full h-full backface-hidden rotate-y-180 ${flipped ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
          <Card className="w-full h-full overflow-auto p-4 bg-purple-900/20 backdrop-blur-sm border border-purple-500/20">
            <TitleWrapper 
              icon={<Lightbulb className="h-5 w-5 text-yellow-400 mr-2" />}
              title="Why Learn This?" 
              color="bg-yellow-800/30"
            />
            
            <p className="text-gray-300 italic">{section.whyLearn}</p>
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <Button 
                onClick={handleFlip}
                variant="outline"
                className="border-purple-500/30 text-purple-300"
              >
                <RotateCw className="h-4 w-4 mr-2" /> Flip Back
              </Button>
              
              <Button 
                onClick={onComplete}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                Continue <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
