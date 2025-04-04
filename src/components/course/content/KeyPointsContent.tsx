
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { CheckCircle, CheckSquare, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { TitleWrapper } from "./TitleWrapper";

interface KeyPointsContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const KeyPointsContent = ({ section, onComplete, onPrevious, isFirstContent }: KeyPointsContentProps) => {
  const [checkedPoints, setCheckedPoints] = useState<number[]>([]);
  const { toast } = useToast();
  
  const handleCheck = (idx: number) => {
    if (checkedPoints.includes(idx)) {
      setCheckedPoints(checkedPoints.filter(i => i !== idx));
    } else {
      const newCheckedPoints = [...checkedPoints, idx];
      setCheckedPoints(newCheckedPoints);
      
      if (newCheckedPoints.length === section.keyPoints.length) {
        toast({
          title: "All Points Checked!",
          description: "You've successfully remembered all the key points. Great job!"
        });
      }
    }
  };
  
  const allChecked = checkedPoints.length === section.keyPoints.length;
  
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
                className={`
                  transition-all ${allChecked 
                    ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" 
                    : "bg-gray-700 text-gray-300 cursor-not-allowed"
                  }
                `}
                disabled={!allChecked}
              >
                <CheckSquare className="h-4 w-4 mr-2" />
                {allChecked ? "Continue" : `Check all points (${checkedPoints.length}/${section.keyPoints.length})`}
              </Button>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <TitleWrapper 
              icon={<CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
              title="Key Points to Remember" 
              color="bg-green-900/30"
            />
          </div>
          
          <p className="text-lg text-transparent bg-gradient-to-r from-green-300 to-green-100 bg-clip-text font-medium mb-4 px-1">
            Check off each key point from the lesson to confirm you remember it before moving on.
          </p>
        </div>
        
        <div className="p-4 flex-grow overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {section.keyPoints.map((point, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col p-4 rounded-md h-full transition-all duration-300 ${
                  checkedPoints.includes(idx) 
                    ? "border-green-500/50 bg-green-900/20" 
                    : "border-purple-500/20 bg-space-cosmic-blue/10"
                } border cursor-pointer group relative overflow-hidden`}
                onClick={() => handleCheck(idx)}
              >
                {/* Check overlay */}
                {checkedPoints.includes(idx) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-green-900/40 z-10">
                    <Check className="h-16 w-16 text-green-400 opacity-70" />
                  </div>
                )}
                
                <div className="flex items-start h-full">
                  <Checkbox 
                    id={`point-${idx}`} 
                    checked={checkedPoints.includes(idx)}
                    onCheckedChange={() => handleCheck(idx)}
                    className="mr-2 mt-1 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                  />
                  <label 
                    htmlFor={`point-${idx}`} 
                    className={`text-gray-200 ${checkedPoints.includes(idx) ? "line-through text-gray-400" : ""} group-hover:text-white transition-colors`}
                  >
                    {point}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
