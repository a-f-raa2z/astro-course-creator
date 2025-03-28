
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Rocket } from "lucide-react";
import { generateMockCourse } from "@/utils/courseData";

interface SectionCardProps {
  title: string;
  description: string;
  index: number;
  videoUrl?: string;
  shortVideoUrls?: string[];
  visualUrl?: string | null;
  bonusUrls?: string[];
}

const SectionCard = ({ 
  title, 
  description, 
  index,
  videoUrl,
  shortVideoUrls,
  visualUrl,
  bonusUrls
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
  
  return (
    <Card className="cosmic-card mb-6 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all border-purple-500/20">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl text-purple-100 flex items-center">
            <Rocket className="h-5 w-5 text-purple-400 mr-2" />
            {title}
          </CardTitle>
          <span className="text-xs px-2 py-1 bg-purple-900/50 rounded-full text-purple-300 border border-purple-500/20">
            Section {index + 1}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 mb-4">{description}</p>
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
