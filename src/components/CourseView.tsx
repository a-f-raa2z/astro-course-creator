
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Course, CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  Youtube, 
  Video, 
  Star, 
  Lock,
  MapPin,
  FileText,
  Image as ImageIcon,
  HelpCircle 
} from "lucide-react";
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

  // Content icons map for each section
  const contentIcons = [
    { icon: <FileText className="h-4 w-4 text-purple-300" />, label: "Introduction" },
    { icon: <Youtube className="h-4 w-4 text-red-500" />, label: "Video Lesson" },
    { icon: <CheckCircle className="h-4 w-4 text-green-500" />, label: "Key Points" },
    ...(section.shortVideo ? [{ icon: <Video className="h-4 w-4 text-blue-400" />, label: "Bonus Video" }] : []),
    { icon: <ImageIcon className="h-4 w-4 text-yellow-400" />, label: "Visual Example" },
    { icon: <HelpCircle className="h-4 w-4 text-orange-400" />, label: "Quiz" }
  ];

  return (
    <div className={`relative ${index !== 0 ? 'mt-8' : ''}`}>
      {/* Map style connection line */}
      {index !== 0 && (
        <div className={`absolute left-6 -top-8 w-0.5 h-8 ${
          isLocked ? 'bg-gray-400 dashed-line' : 
          isCompleted ? 'bg-green-500' : 'bg-purple-500'
        }`}></div>
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
              {/* Map pin node */}
              <div 
                className={`flex items-center justify-center w-12 h-12 rounded-full mr-3 
                  ${isLocked ? 'bg-gray-700' : isCompleted ? 'bg-green-600' : 'bg-purple-600'}`}
              >
                {isCompleted ? (
                  <CheckCircle className="h-6 w-6 text-white" />
                ) : isLocked ? (
                  <Lock className="h-5 w-5 text-gray-400" />
                ) : (
                  <MapPin className="h-6 w-6 text-white" />
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
              {/* Content type indicators */}
              <div className="hidden sm:flex mr-3 space-x-1">
                {contentIcons.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-1 bg-space-cosmic-blue/30 rounded-md" 
                    title={item.label}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
              
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
                  
                  {/* Content type details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {contentIcons.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300 bg-space-cosmic-blue/20 p-2 rounded-lg">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                    ))}
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
        <h2 className="text-xl text-purple-100 font-bold mb-2">Learning Map</h2>
        <p className="text-gray-300">Navigate through {course.title} space journey</p>
      </div>
      
      {/* Course map with glow effect */}
      <div className="relative pl-6 pb-10">
        {/* Decorative star elements */}
        <div className="absolute w-4 h-4 rounded-full bg-yellow-400/30 blur-sm left-20 top-10 animate-star-pulse"></div>
        <div className="absolute w-3 h-3 rounded-full bg-blue-400/30 blur-sm left-40 top-40 animate-star-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-2 h-2 rounded-full bg-purple-400/30 blur-sm right-20 top-20 animate-star-pulse" style={{ animationDelay: '2s' }}></div>
        
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
