
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Flag } from "lucide-react";

interface SectionTransitionProps {
  currentSectionTitle: string;
  nextSectionTitle: string;
  onStartNextSection: () => void;
}

export const SectionTransition = ({ 
  currentSectionTitle, 
  nextSectionTitle, 
  onStartNextSection 
}: SectionTransitionProps) => {
  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full overflow-hidden flex flex-col bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <Award className="h-20 w-20 text-yellow-400 mb-6 animate-pulse" />
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Section Complete!
          </h2>
          
          <div className="max-w-md mb-8">
            <p className="text-xl text-purple-200 mb-2">
              Congratulations! You've completed:
            </p>
            <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text mb-8">
              {currentSectionTitle}
            </div>
            
            <p className="text-lg text-purple-200 mb-2">
              Ready to continue your journey with:
            </p>
            <div className="flex items-center justify-center mb-8">
              <Flag className="h-6 w-6 text-purple-400 mr-2" />
              <span className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text">
                {nextSectionTitle}
              </span>
            </div>
          </div>
          
          <Button 
            onClick={onStartNextSection}
            className="px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
            size="lg"
          >
            Start Next Section <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
};
