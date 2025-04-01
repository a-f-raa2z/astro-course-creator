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
  Gamepad2
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { aiCourseData } from "@/utils/courses";

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
    navigate("/ai-course-start", { 
      state: { 
        course: aiCourseData,
        initialSectionIndex: index 
      } 
    });
  };
  
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
  
  const getSectionImage = () => {
    switch (title) {
      case "Intro of Artificial Intelligence":
        return "/lovable-uploads/d3507279-5142-4833-b3ff-7603ecd9be87.png"; // Brain with digital elements
      case "Machine Learning":
        return "/lovable-uploads/46e4fa94-5626-45ca-b547-dd52d6d65789.png"; // Object detection in traffic
      case "Deep Learning":
        return "/lovable-uploads/3d8b75cf-5e69-49ac-9444-9c3f6c33fb4c.png"; // Neural network visualization
      case "Generative AI":
        return "/lovable-uploads/930c9c02-d768-4457-9ff9-0304dc9579c7.png"; // Person using AI art generation
      case "Chatbots":
        return "/lovable-uploads/3215a500-d237-40e1-aecb-2a9e2b64ee10.png"; // Chat AI interface
      case "Robots and Automation":
        return "/lovable-uploads/a8856a2f-8eb5-4bfc-91c3-b4baf426b804.png"; // Cute robot
      case "AI for Music":
        return "/lovable-uploads/dac0c33f-58a2-44f3-81eb-5f00fda40b1b.png"; // Robotic hand playing piano
      case "AI for Arts":
        return "/lovable-uploads/930c9c02-d768-4457-9ff9-0304dc9579c7.png"; // Reusing the generative AI image
      default:
        return null;
    }
  };
  
  const sectionImage = getSectionImage();
  
  return (
    <Card className="cosmic-card overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all border-blue-500/20 w-full">
      <div className="md:flex">
        {sectionImage && (
          <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
            <img 
              src={sectionImage}
              alt={`${title} illustration`}
              className="w-full h-full object-cover object-center transition-transform hover:scale-105"
            />
          </div>
        )}
        <div className={sectionImage ? "md:w-2/3" : "w-full"}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl text-blue-100 flex items-center">
                {getSectionIcon()}
                {title}
              </CardTitle>
              <span className={`text-xs px-2 py-1 rounded-full text-white border 
                ${progress === 100 
                  ? 'bg-green-900/50 border-green-500/50' 
                  : progress > 0 
                  ? 'bg-blue-900/50 border-blue-500/50' 
                  : 'bg-purple-900/50 border-purple-500/50'}`}>
                {progress === 100 ? 'Completed' : progress > 0 ? 'In Progress' : 'Not Started'}
              </span>
            </div>
          </CardHeader>
          
          <CardContent>
            <p className="text-gray-300 mb-4">{description}</p>
            
            <div className="mb-3">
              <div className="flex justify-between text-xs text-blue-300 mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress 
                value={progress} 
                className="h-2 bg-blue-900/30" 
                {...(progress === 100 ? { 
                  className: "h-2 bg-blue-900/30 [&>div]:bg-green-500" 
                } : {})}
              />
            </div>
            
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
                className={`
                  ${progress === 100 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : progress > 0 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-purple-600 hover:bg-purple-700'} 
                  text-white
                `}
                size="sm"
              >
                {progress === 100 ? 'Review' : progress > 0 ? 'Continue' : 'Explore'} 
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default AISectionCard;
