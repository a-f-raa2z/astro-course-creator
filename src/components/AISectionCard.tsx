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
  Paintbrush
} from "lucide-react";
import { Progress as ProgressBar } from "@/components/ui/progress";

interface AISectionCardProps {
  title: string;
  description: string;
  index: number;
  progress?: number;
}

const AISectionCard = ({ title, description, index, progress = 0 }: AISectionCardProps) => {
  const navigate = useNavigate();
  
  const handleStartSection = () => {
    // Mock course for demonstration purposes
    const mockCourse = {
      id: `ai-section-${index}`,
      title: title,
      description: description,
      sections: [],
    };
    
    navigate("/ai-course-start", { state: { course: mockCourse } });
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
          <ProgressBar value={progress} className="h-2 bg-blue-900/30" />
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
