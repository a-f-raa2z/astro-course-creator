
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ListChecks } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface KeyPointsViewProps {
  keyPoints: string[];
  onAllPointsChecked: () => void;
}

export const KeyPointsView = ({ keyPoints, onAllPointsChecked }: KeyPointsViewProps) => {
  const [checkedPoints, setCheckedPoints] = useState<number[]>([]);
  const { toast } = useToast();
  
  const handleCheck = (idx: number) => {
    if (checkedPoints.includes(idx)) {
      setCheckedPoints(checkedPoints.filter(i => i !== idx));
    } else {
      const newCheckedPoints = [...checkedPoints, idx];
      setCheckedPoints(newCheckedPoints);
      
      if (newCheckedPoints.length === keyPoints.length) {
        toast({
          title: "All Points Checked!",
          description: "You've mastered the key concepts of this lesson."
        });
        onAllPointsChecked();
      }
    }
  };
  
  const allChecked = checkedPoints.length === keyPoints.length;

  return (
    <div className="flex-grow p-4 overflow-y-auto">
      <div className="bg-purple-900/30 rounded-lg p-4 mb-4 border border-purple-500/30">
        <h3 className="text-xl font-semibold text-purple-100 flex items-center mb-4">
          <ListChecks className="h-5 w-5 mr-2 text-purple-300" />
          Key Points to Remember
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {keyPoints.map((point, idx) => (
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

      <div className="flex justify-end">
        <Button 
          onClick={onAllPointsChecked}
          className={`
            transition-all ${allChecked 
              ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" 
              : "bg-gray-700 text-gray-300 cursor-not-allowed"
            }
          `}
          disabled={!allChecked}
        >
          {allChecked ? "Continue" : `Check all points (${checkedPoints.length}/${keyPoints.length})`}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
