
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
        return <Moon className="h-5 w-5 text-gray-300 mr-2" />;
      case "Stars":
        return <Stars className="h-5 w-5 text-yellow-300 mr-2" />;
      case "The Inner Planets":
        return <Rocket className="h-5 w-5 text-orange-400 mr-2" />;
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
  
  return (
    <Card className="cosmic-card mb-6 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all border-purple-500/20">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl text-purple-100 flex items-center">
            {getSectionIcon()}
            {title}
          </CardTitle>
          <span className="text-xs px-2 py-1 bg-purple-900/50 rounded-full text-purple-300 border border-purple-500/20">
            Section {index + 1}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 mb-4">{description}</p>
        
        {/* Progress indicator */}
        <div className="mb-3">
          <div className="flex justify-between text-xs text-purple-300 mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-purple-900/30" />
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
            className="bg-purple-600 hover:bg-purple-700 text-white"
            size="sm"
          >
            Explore <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SectionCard;
