
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Course, CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, CheckCircle, Youtube, Video, Star, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CourseViewProps {
  course: Course;
}

const SectionCard = ({ 
  section, 
  index, 
  isActive, 
  isCompleted,
  isLocked, 
  onClick 
}: { 
  section: CourseSection; 
  index: number; 
  isActive: boolean;
  isCompleted: boolean;
  isLocked: boolean;
  onClick: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${index !== 0 ? 'mt-4' : ''}`}>
      {/* Timeline connector */}
      {index !== 0 && (
        <div className={`absolute left-6 -top-4 w-0.5 h-4 ${isLocked ? 'bg-gray-400' : isCompleted ? 'bg-green-500' : 'bg-purple-500'}`}></div>
      )}
      
      <Card 
        className={`cosmic-card overflow-visible transition-all duration-300 ${
          isActive ? 'border-purple-400 shadow-purple-300/20 shadow-lg' : 
          isLocked ? 'opacity-70 grayscale-[30%]' : ''
        }`}
      >
        <Collapsible open={isOpen && !isLocked} onOpenChange={setIsOpen} disabled={isLocked}>
          <div className="flex flex-row items-center justify-between p-4">
            <div className="flex items-center">
              {/* Timeline node */}
              <div 
                className={`flex items-center justify-center w-12 h-12 rounded-full mr-3 
                  ${isLocked ? 'bg-gray-700' : isCompleted ? 'bg-green-600' : 'bg-purple-600'}`}
              >
                {isCompleted ? (
                  <CheckCircle className="h-6 w-6 text-white" />
                ) : isLocked ? (
                  <Lock className="h-5 w-5 text-gray-400" />
                ) : (
                  <span className="text-white text-lg font-bold">{index + 1}</span>
                )}
              </div>
              
              <div>
                <CardTitle className={`text-lg ${isLocked ? 'text-gray-400' : 'text-purple-100'}`}>
                  {section.title}
                </CardTitle>
                {isCompleted && (
                  <div className="flex items-center mt-1 text-xs text-green-400">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    <span>Completed</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center">
              {isActive && !isLocked && (
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="mr-2 bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClick();
                  }}
                >
                  Continue
                </Button>
              )}
              
              {!isLocked && (
                <CollapsibleTrigger className="p-2 hover:bg-purple-700/20 rounded-lg transition-all cursor-pointer">
                  {isOpen ? 
                    <ChevronUp className="h-5 w-5 text-purple-300" /> : 
                    <ChevronDown className="h-5 w-5 text-purple-300" />
                  }
                </CollapsibleTrigger>
              )}
            </div>
          </div>
          
          <CollapsibleContent>
            <CardContent className="pt-0 pb-4 px-4">
              <div className="ml-12"> {/* Align with the section title */}
                <div className="prose prose-invert max-w-none">
                  <div className="mb-4">
                    <p className="text-gray-300 text-sm">{section.introduction}</p>
                  </div>
                  
                  <div className="my-3 space-y-2">
                    <h4 className="text-sm font-semibold text-purple-300">What you'll learn:</h4>
                    <ul className="space-y-1">
                      {section.keyPoints.slice(0, 2).map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                          <span className="text-gray-300 text-sm">{point}</span>
                        </li>
                      ))}
                      {section.keyPoints.length > 2 && (
                        <li className="text-purple-400 text-sm">+ {section.keyPoints.length - 2} more key points</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Youtube className="h-4 w-4 text-red-500" />
                      <span>Main video lesson</span>
                    </div>
                    
                    {section.shortVideo && (
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <Video className="h-4 w-4 text-blue-400" />
                        <span>Bonus video</span>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>Interactive quiz</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  );
};

const CourseView = ({ course }: CourseViewProps) => {
  // Mock data - in a real app, this would come from user progress tracking
  const lastCompletedIndex = 1; // Sections 0 and 1 are completed
  const currentActiveIndex = 2; // Section 2 is active
  
  const navigate = useNavigate();
  
  const handleSectionClick = (sectionIndex: number) => {
    // Navigate to the course start page with the selected section
    navigate("/course-start", { 
      state: { 
        course, 
        initialSectionIndex: sectionIndex 
      } 
    });
  };

  return (
    <div className="space-y-0 px-4 max-w-3xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl text-purple-100 font-bold mb-2">Course Timeline</h2>
        <p className="text-gray-300">Follow your learning path through {course.title}</p>
      </div>
      
      <div className="relative pl-6 pb-10">
        {course.sections.map((section, index) => {
          const isCompleted = index <= lastCompletedIndex;
          const isActive = index === currentActiveIndex;
          const isLocked = index > currentActiveIndex + 1;
          
          return (
            <SectionCard 
              key={section.id} 
              section={section} 
              index={index} 
              isActive={isActive}
              isCompleted={isCompleted}
              isLocked={isLocked}
              onClick={() => handleSectionClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CourseView;
