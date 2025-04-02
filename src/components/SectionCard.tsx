import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Rocket, FileText, Youtube, CheckCircle, HelpCircle, Video, 
  Image, Gamepad2, Star, Sun, Globe, Moon, Stars, Telescope, Satellite } from "lucide-react";
import { generateMockCourse } from "@/utils/courseData";
import { Progress } from "@/components/ui/progress";

interface SectionCardProps {
  title: string;
  description: string;
  index: number;
  videoUrl?: string;
  shortVideoUrls?: string[];
  visualUrl?: string | null;
  bonusUrls?: string[];
  progress?: number;
}

const SectionCard = ({ 
  title, 
  description, 
  index,
  videoUrl,
  shortVideoUrls,
  visualUrl,
  bonusUrls,
  progress = 0
}: SectionCardProps) => {
  const navigate = useNavigate();
  
  const handleStartSection = () => {
    const mockCourse = generateMockCourse("planets", "intermediate", "visual");
    
    if (index < mockCourse.sections.length) {
      if (videoUrl) {
        mockCourse.sections[index].videoUrl = videoUrl;
      }
      
      if (shortVideoUrls && shortVideoUrls.length > 0) {
        mockCourse.sections[index].shortVideo = shortVideoUrls[0];
        
        if (shortVideoUrls.length > 1) {
          mockCourse.sections[index].additionalShortVideos = shortVideoUrls.slice(1);
        }
      }
      
      if (visualUrl) {
        mockCourse.sections[index].visualUrl = visualUrl;
      }
      
      if (bonusUrls && bonusUrls.length > 0) {
        mockCourse.sections[index].bonusVideos = bonusUrls;
      }
    }
    
    navigate("/astronomy-course-start", { 
      state: { 
        course: mockCourse,
        initialSectionIndex: index
      } 
    });
  };
  
  const getSectionIcon = () => {
    switch (title) {
      case "The Solar System":
        return <Sun className="h-5 w-5 text-yellow-400 mr-2" />;
      case "Earth":
        return <Globe className="h-5 w-5 text-blue-400 mr-2" />;
      case "The Moon":
      case "The Moon in Our Skies":
      case "The Moon's Unseen Face":
      case "Mapping the Moon":
        return <Moon className="h-5 w-5 text-gray-300 mr-2" />;
      case "Stars":
        return <Stars className="h-5 w-5 text-yellow-300 mr-2" />;
      case "The Inner Planets":
        return <Rocket className="h-5 w-5 text-orange-400 mr-2" />;
      case "Venus":
        return <Globe className="h-5 w-5 text-yellow-200 mr-2" />;
      case "Mercury":
      case "Messenger at Mercury":
        return <Globe className="h-5 w-5 text-orange-300 mr-2" />;
      case "The Sun":
      case "Close to the Sun":
        return <Sun className="h-5 w-5 text-yellow-500 mr-2" />;
      case "Mars":
      case "Mars from Above and the Moons of Mars":
      case "Roving over Mars":
        return <Globe className="h-5 w-5 text-red-500 mr-2" />;
      case "Telescopes":
        return <Telescope className="h-5 w-5 text-purple-400 mr-2" />;
      case "Space Exploration":
        return <Rocket className="h-5 w-5 text-red-400 mr-2" />;
      case "Satellites":
        return <Satellite className="h-5 w-5 text-blue-300 mr-2" />;
      default:
        return <Rocket className="h-5 w-5 text-purple-400 mr-2" />;
    }
  };
  
  const getSectionImage = () => {
    switch (title) {
      case "The Solar System":
        return "/lovable-uploads/ad48c8d7-8aae-41a6-95ac-22af96b8a45a.png";
      case "The Inner Planets":
        return "/lovable-uploads/0228ba3e-a126-45c3-a728-10da3a418e4e.png";
      case "Earth":
        return "/lovable-uploads/33c5fd2a-7ff7-4d34-9ef0-f9b065b5caa5.png";
      case "The Moon":
      case "The Moon in Our Skies":
        return "/lovable-uploads/54548175-965e-4d7f-ae75-071e6b49cb4d.png";
      case "The Moon's Unseen Face":
      case "Mapping the Moon":
        return "/lovable-uploads/52a450ef-41cd-45ec-90a2-c256e58d0d6a.png";
      case "Venus":
        return "/lovable-uploads/9a4d825b-6142-476f-b40c-2adbc7b34524.png";
      case "Mercury":
        return "/lovable-uploads/eec8c514-41eb-4020-ad57-6841a15298df.png";
      case "Messenger at Mercury":
        return "/lovable-uploads/8da06395-44da-4447-93f0-da38fbbbff6c.png";
      case "The Sun":
        return "/lovable-uploads/0f346c00-bd6b-4610-aa4e-83dec78f53e3.png";
      case "Close to the Sun":
        return "/lovable-uploads/6d50892d-4935-4033-bcfc-2a998579227e.png";
      case "Mars":
        return "/lovable-uploads/28ccf6bc-b95b-4b54-b78c-1be5f91a5be6.png";
      case "Mars from Above and the Moons of Mars":
        return "/lovable-uploads/973bc422-9419-49ac-ae95-89d2b36f2df8.png";
      case "Roving over Mars":
        return "/lovable-uploads/71f04c7c-c819-40bc-9de0-5f293ddadf89.png";
      default:
        return "/lovable-uploads/ad48c8d7-8aae-41a6-95ac-22af96b8a45a.png";
    }
  };
  
  const sectionImage = getSectionImage();
  
  return (
    <Card className="cosmic-card overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all border-purple-500/20 w-full">
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
        <div className="md:w-2/3">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl text-purple-100 flex items-center">
                {getSectionIcon()}
                {title}
              </CardTitle>
              <span className={`text-xs px-2 py-1 rounded-full text-white border 
                ${progress === 100 
                  ? 'bg-green-900/50 border-green-500/50' 
                  : progress > 0 
                  ? 'bg-purple-900/50 border-purple-500/50' 
                  : 'bg-blue-900/50 border-blue-500/50'}`}>
                {progress === 100 ? 'Completed' : progress > 0 ? 'In Progress' : 'Not Started'}
              </span>
            </div>
          </CardHeader>
          
          <CardContent>
            <p className="text-gray-300 mb-4">{description}</p>
            
            <div className="mb-3">
              <div className="flex justify-between text-xs text-purple-300 mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress 
                value={progress} 
                className="h-2 bg-purple-900/30" 
                {...(progress === 100 ? { 
                  className: "h-2 bg-purple-900/30 [&>div]:bg-green-500" 
                } : {})}
              />
            </div>
            
            <div className="grid grid-cols-5 gap-2 mb-4">
              <div className="bg-purple-900/30 p-2 rounded flex items-center justify-center" title="Introduction">
                <FileText className="h-4 w-4 text-purple-300" />
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
                    ? 'bg-purple-600 hover:bg-purple-700' 
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

export default SectionCard;
