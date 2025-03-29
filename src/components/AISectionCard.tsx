
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  ChevronRight, 
  Brain, 
  Database, 
  Network, 
  Lightbulb, 
  Bot, 
  Factory, 
  Music, 
  Paintbrush,
  FileText,
  Youtube,
  Video,
  Star,
  Gamepad2,
  Leaf
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface AISectionCardProps {
  title: string;
  description: string;
  index: number;
  progress?: number;
  videoUrl?: string;
  shortVideoUrls?: string[];
  visualUrl?: string | null;
  bonusUrls?: string[];
}

const AISectionCard = ({ 
  title, 
  description, 
  index, 
  progress = 0,
  videoUrl,
  shortVideoUrls,
  visualUrl,
  bonusUrls
}: AISectionCardProps) => {
  const navigate = useNavigate();
  
  const handleStartSection = () => {
    // Mock course for demonstration purposes
    const mockCourse = {
      id: `ai-section-${index}`,
      title: title,
      description: description,
      sections: [],
    };
    
    navigate("/ai-course-start", { state: { course: mockCourse, initialSectionIndex: index } });
  };
  
  // Get appropriate icon based on section title
  const getSectionIcon = () => {
    switch (title) {
      case "Intro of Artificial Intelligence":
        return <Brain className="h-5 w-5 text-blue-400 mr-2" />;
      case "Machine Learning":
        return <Database className="h-5 w-5 text-green-400 mr-2" />;
      case "Deep Learning":
        return <Network className="h-5 w-5 text-yellow-400 mr-2" />;
      case "Generative AI":
        return <Lightbulb className="h-5 w-5 text-purple-400 mr-2" />;
      case "Chatbots":
        return <Bot className="h-5 w-5 text-pink-400 mr-2" />;
      case "Robots and Automation":
        return <Factory className="h-5 w-5 text-orange-400 mr-2" />;
      case "AI for Music":
        return <Music className="h-5 w-5 text-indigo-400 mr-2" />;
      case "AI for Arts":
        return <Paintbrush className="h-5 w-5 text-rose-400 mr-2" />;
      case "AI for Environment":
        return <Leaf className="h-5 w-5 text-green-500 mr-2" />;
      default:
        return <Brain className="h-5 w-5 text-blue-400 mr-2" />;
    }
  };
  
  return (
    <Card className="cosmic-card mb-6 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all border-blue-500/20">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl text-blue-100 flex items-center">
            {getSectionIcon()}
            {title}
          </CardTitle>
          <span className="text-xs px-2 py-1 bg-blue-900/50 rounded-full text-blue-300 border border-blue-500/20">
            Section {index + 1}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 mb-4">{description}</p>
        
        {/* Progress indicator */}
        <div className="mb-3">
          <div className="flex justify-between text-xs text-blue-300 mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-blue-900/30" />
        </div>
        
        {/* Content type icons - similar to astronomy course */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          <div className="bg-blue-900/30 p-2 rounded flex items-center justify-center" title="Introduction">
            <FileText className="h-4 w-4 text-blue-300" />
          </div>
          <div className="bg-red-900/30 p-2 rounded flex items-center justify-center" title="Video Lesson">
            <Youtube className="h-4 w-4 text-red-400" />
          </div>
          <div className="bg-blue-900/30 p-2 rounded flex items-center justify-center" title="Short Videos">
            <Video className="h-4 w-4 text-blue-400" />
          </div>
          {bonusUrls && bonusUrls.length > 0 && (
            <div className="bg-yellow-900/30 p-2 rounded flex items-center justify-center" title="Bonus Content">
              <Star className="h-4 w-4 text-yellow-400" />
            </div>
          )}
          {visualUrl && (
            <div className="bg-green-900/30 p-2 rounded flex items-center justify-center" title="Interactive Playground">
              <Gamepad2 className="h-4 w-4 text-green-400" />
            </div>
          )}
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={handleStartSection}
            className="bg-blue-600 hover:bg-blue-700 text-white"
            size="sm"
          >
            Explore <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AISectionCard;
