
import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Star, ChevronUp, Sparkles } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

interface XPPopupProps {
  xpPoints: number;
  level: number;
  levelProgress: number;
}

export const XPPopup = ({ xpPoints, level, levelProgress }: XPPopupProps) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [previousXp, setPreviousXp] = useState(xpPoints);
  const [gainedXp, setGainedXp] = useState(0);
  
  // Detect XP changes to trigger animation
  useEffect(() => {
    if (xpPoints > previousXp && previousXp !== 0) {
      setGainedXp(xpPoints - previousXp);
      setShowAnimation(true);
      const timer = setTimeout(() => setShowAnimation(false), 3000);
      return () => clearTimeout(timer);
    }
    setPreviousXp(xpPoints);
  }, [xpPoints, previousXp]);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <div className="relative cursor-pointer">
            <div className={`flex items-center space-x-2 bg-space-cosmic-blue/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-purple-500/20 hover:bg-space-cosmic-blue/60 transition-colors ${showAnimation ? 'animate-bounce' : ''}`}>
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-200 font-semibold">{xpPoints} XP</span>
              <ChevronUp className="h-4 w-4 text-purple-300 opacity-70" />
            </div>
            {showAnimation && (
              <>
                <div className="absolute -right-1 -top-8 animate-fade-in">
                  <Badge className="bg-yellow-400 text-yellow-950 flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    +{gainedXp} XP
                  </Badge>
                </div>
                {/* More sparkle effects */}
                {[...Array(15)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute animate-twinkle" 
                    style={{
                      top: `${Math.random() * 60 - 30}px`,
                      left: `${Math.random() * 120 - 40}px`,
                      animationDelay: `${Math.random() * 0.5}s`,
                      animationDuration: `${0.8 + Math.random() * 2}s`,
                      opacity: 0.8
                    }}
                  >
                    <Sparkles className={`h-${Math.floor(Math.random() * 2) + 2} w-${Math.floor(Math.random() * 2) + 2} text-yellow-${Math.random() > 0.5 ? '300' : '200'}`} />
                  </div>
                ))}
                {/* Star particles */}
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={`star-${i}`}
                    className="absolute h-1 w-1 rounded-full bg-yellow-300 animate-ping"
                    style={{
                      top: `${Math.random() * 80 - 30}px`,
                      left: `${Math.random() * 120 - 20}px`,
                      animationDuration: `${0.4 + Math.random() * 1.5}s`,
                      animationDelay: `${Math.random() * 0.5}s`,
                      opacity: Math.random() * 0.8 + 0.3
                    }}
                  />
                ))}
                {/* Additional sparkle particles that move upward */}
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={`sparkle-${i}`}
                    className="absolute h-1.5 w-1.5 rounded-full bg-yellow-200"
                    style={{
                      top: `${Math.random() * 40}px`,
                      left: `${Math.random() * 100 - 10}px`,
                      animation: `sparkle ${1 + Math.random() * 2}s forwards`,
                      animationDelay: `${Math.random() * 0.8}s`
                    }}
                  />
                ))}
              </>
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
    </div>
  );
};
