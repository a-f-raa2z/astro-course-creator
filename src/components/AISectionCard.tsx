
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Brain } from "lucide-react";

interface AISectionCardProps {
  title: string;
  description: string;
  index: number;
}

const AISectionCard = ({ title, description, index }: AISectionCardProps) => {
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
  
  return (
    <Card className="cosmic-card mb-6 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all border-blue-500/20">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl text-blue-100 flex items-center">
            <Brain className="h-5 w-5 text-blue-400 mr-2" />
            {title}
          </CardTitle>
          <span className="text-xs px-2 py-1 bg-blue-900/50 rounded-full text-blue-300 border border-blue-500/20">
            Section {index + 1}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 mb-4">{description}</p>
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
