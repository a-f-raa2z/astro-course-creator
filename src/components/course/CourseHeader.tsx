
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Course } from "@/types/course";

interface CourseHeaderProps {
  course: Course;
  onBackClick: () => void;
}

export const CourseHeader: React.FC<CourseHeaderProps> = ({ 
  course,
  onBackClick
}) => {
  return (
    <div className="mb-4">
      <Button 
        variant="ghost" 
        onClick={onBackClick} 
        className="text-white hover:bg-space-cosmic-blue/40"
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Course
      </Button>
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
    </div>
  );
};
