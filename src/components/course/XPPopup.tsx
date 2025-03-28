
import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Star } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

interface XPPopupProps {
  xpPoints: number;
  level: number;
  levelProgress: number;
}

export const XPPopup = ({ xpPoints, level, levelProgress }: XPPopupProps) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [previousXp, setPreviousXp] = useState(xpPoints);
  
  // Detect XP changes to trigger animation
  useEffect(() => {
    if (xpPoints > previousXp && previousXp !== 0) {
      setShowAnimation(true);
      const timer = setTimeout(() => setShowAnimation(false), 2000);
      return () => clearTimeout(timer);
    }
    setPreviousXp(xpPoints);
  }, [xpPoints, previousXp]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative cursor-pointer">
          <div className={`flex items-center space-x-2 bg-space-cosmic-blue/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-purple-500/20 hover:bg-space-cosmic-blue/60 transition-colors ${showAnimation ? 'animate-bounce' : ''}`}>
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="text-yellow-200 font-semibold">{xpPoints} XP</span>
          </div>
          {showAnimation && (
            <div className="absolute -right-1 -top-2 animate-fade-in">
              <Badge className="bg-yellow-400 text-yellow-950">+{xpPoints - previousXp} XP</Badge>
            </div>
          )}
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
  );
};
