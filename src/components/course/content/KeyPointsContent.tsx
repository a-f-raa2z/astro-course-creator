
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
          description: "You've reviewed all the key points. Great job!"
        });
      }
    }
  };
  
  const allChecked = checkedPoints.length === section.keyPoints.length;
  
  // Function to get grid columns based on number of key points
  const getGridCols = () => {
    if (section.keyPoints.length <= 2) return "grid-cols-1";
    return "grid-cols-1 md:grid-cols-2";
  };
  
  return (
    <div className="w-full h-full">
      <Card className="w-full h-full overflow-auto p-4 bg-space-cosmic-blue/20 backdrop-blur-sm border border-purple-500/20">
        <TitleWrapper 
          icon={<CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
          title="Key Points" 
          color="bg-green-900/30"
        />
        
        <p className="text-lg text-transparent bg-gradient-to-r from-green-300 to-green-100 bg-clip-text font-medium mb-4 px-1">
          After watching Solar System 101, check off the key facts you remember about our cosmic neighborhood.
        </p>
        
        <div className={`grid ${getGridCols()} gap-3 mb-4`}>
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
              
              <div className="flex items-start">
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
        
        <div className="mt-auto flex justify-between">
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
      </Card>
    </div>
  );
};
