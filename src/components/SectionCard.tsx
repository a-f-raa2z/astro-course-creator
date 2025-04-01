
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
    // Generate a course object with this section's data
    const mockCourse = generateMockCourse("planets", "intermediate", "visual");
    
    // Update the specific section with our data
    if (index < mockCourse.sections.length) {
      // Add video URLs to the appropriate section
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
    
    // Navigate to the astronomy course start page with the course and initial section
    navigate("/astronomy-course-start", { 
      state: { 
        course: mockCourse,
        initialSectionIndex: index
      } 
    });
  };
  
  // Get appropriate icon based on section title
  const getSectionIcon = () => {
    switch (title) {
      case "The Solar System":
        return <Sun className="h-5 w-5 text-yellow-400 mr-2" />;
      case "Earth":
        return <Globe className="h-5 w-5 text-blue-400 mr-2" />;
      case "The Moon":
      case "The Moon in Our Skies":
      case "Mapping the Moon":
      case "The Moon's Unseen Face":
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
  
  // Get section background image based on section title
  const getSectionImage = () => {
    switch (title) {
      case "The Solar System":
        return "/lovable-uploads/ad48c8d7-8aae-41a6-95ac-22af96b8a45a.png";
      case "The Inner Planets":
        return "/lovable-uploads/0228ba3e-a126-45c3-a728-10da3a418e4e.png";
      case "Earth":
        return "/lovable-uploads/6e29dd9e-5707-44ae-81af-d52de51f84e6.png";
      case "The Moon":
        return "/lovable-uploads/e0d0af9e-9849-4955-ac58-29cf798cb880.png";
      case "The Moon in Our Skies":
      case "Mapping the Moon":
      case "The Moon's Unseen Face":
        return "/lovable-uploads/e0d0af9e-9849-4955-ac58-29cf798cb880.png";
      case "Venus":
        return "/lovable-uploads/3215a500-d237-40e1-aecb-2a9e2b64ee10.png";
      case "Mercury":
      case "Messenger at Mercury":
        return "/lovable-uploads/4feca2b6-a656-4abf-b674-e00f9467fb87.png";
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
