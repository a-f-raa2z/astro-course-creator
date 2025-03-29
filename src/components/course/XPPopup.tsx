
import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Star, ChevronUp } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

interface XPPopupProps {
  xpPoints: number;
  level: number;
  levelProgress: number;
}

export const XPPopup = ({ xpPoints, level, levelProgress }: XPPopupProps) => {
  // Removed animation state and related effects to eliminate the XP gain popup

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <div className="cursor-pointer">
            <div className="flex items-center space-x-2 bg-space-cosmic-blue/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-purple-500/20 hover:bg-space-cosmic-blue/60 transition-colors">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-200 font-semibold">{xpPoints} XP</span>
              <ChevronUp className="h-4 w-4 text-purple-300 opacity-70" />
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-64 cosmic-card text-purple-100 p-4 border-purple-500/30">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-purple-100">Level {level}</h3>
              <span className="text-sm text-purple-200">{xpPoints} XP Total</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-purple-200">
                <span>Progress to Level {level + 1}</span>
                <span>{Math.round(levelProgress)}%</span>
              </div>
              <div className="w-full bg-purple-900/50 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-purple-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${levelProgress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="mt-3 text-sm text-purple-200">
              <p>Keep learning to earn XP and level up!</p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
