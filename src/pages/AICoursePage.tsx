
import { useLocation, Link } from "react-router-dom";
import CourseView from "@/components/CourseView";
import { Course } from "@/types/course";
import { generateMockCourse } from "@/utils/courseData";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Clock, Calendar, Star, Home } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import AISectionCard from "@/components/AISectionCard";

const AICoursePage = () => {
  const location = useLocation();
  // Use the passed course from state, or generate a default example course
  const course = location.state?.course || generateMockCourse("artificial intelligence", "intermediate", "visual");
  const { toast } = useToast();
  const [isAddedToCalendar, setIsAddedToCalendar] = useState(false);
  
  // Mock data - in a real app, these would come from the user's progress
  const estimatedHours = course.sections.length * 2; // 2 hours per section average
  const userScore = localStorage.getItem(`${course.id}-xp`) ? parseInt(localStorage.getItem(`${course.id}-xp`) || "0") : 0;
  const courseProgress = localStorage.getItem(`${course.id}-completed`) ? 
    (JSON.parse(localStorage.getItem(`${course.id}-completed`) || "[]").length / (course.sections.length * 6)) * 100 : 0;
  
  // Section data for the five new sections
  const sectionData = [
    {
      title: "Introduction to AI",
      description: "Explore the foundational concepts of artificial intelligence, its history, and the key principles that drive modern AI systems."
    },
    {
      title: "Machine Learning Basics",
      description: "Discover the core concepts of machine learning, including supervised and unsupervised learning, training data, and model evaluation."
    },
    {
      title: "Neural Networks",
      description: "Learn about artificial neural networks, their structure, how they mimic human brain function, and their role in deep learning."
    },
    {
      title: "Natural Language Processing",
      description: "Examine how AI understands and generates human language, enabling applications like chatbots, translation, and text analysis."
    },
    {
      title: "AI Ethics and the Future",
      description: "Understand the ethical considerations in AI development, bias in algorithms, and how artificial intelligence may shape our future."
    }
  ];
  
  const handleAddToCalendar = () => {
    // In a real app, this would integrate with the user's calendar via API
    // For now, we'll just show a toast
    toast({
      title: "Added to calendar",
      description: `${course.title} has been added to your learning schedule`,
    });
    setIsAddedToCalendar(true);
  };

  return (
    <div className="bg-space min-h-screen py-12">
      <div className="course-container max-w-5xl mx-auto px-4">
        <header className="mb-10">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-400 mr-3" />
              <h1 className="text-4xl font-bold text-white">Personalized Journey to Master AI</h1>
            </div>
            <Link to="/">
              <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-900/20 hover:text-blue-200">
                <Home className="mr-2 h-4 w-4" /> Home
              </Button>
            </Link>
          </div>
          
          <p className="text-blue-300 text-lg">A comprehensive journey through the wonders of AI, tailored to your specific interests and learning preferences.</p>
          
          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <Link to="/ai-course-start" state={{ course }}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
                <BookOpen className="mr-2" />
                Start Course
              </Button>
            </Link>
          </div>
        </header>
        
        {/* Learning Plan Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Your Learning Plan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Course Duration Card */}
            <Card className="cosmic-card p-5">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600/30 p-3 rounded-full mr-3">
                  <Clock className="h-6 w-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-blue-100">Course Duration</h3>
              </div>
              <p className="text-blue-200 mb-3">Estimated completion time:</p>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-white">{estimatedHours}</span>
                <span className="text-blue-300 ml-2">hours</span>
              </div>
              <p className="text-blue-400 text-sm mt-2">
                {Math.ceil(estimatedHours / 2)} days at 2 hours/day
              </p>
            </Card>
            
            {/* Calendar Integration Card */}
            <Card className="cosmic-card p-5">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600/30 p-3 rounded-full mr-3">
                  <Calendar className="h-6 w-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-blue-100">Schedule Learning</h3>
              </div>
              <p className="text-blue-200 mb-4">Add this course to your learning calendar</p>
              <Button 
                onClick={handleAddToCalendar}
                className={`w-full ${isAddedToCalendar ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                disabled={isAddedToCalendar}
              >
                {isAddedToCalendar ? 'Added to Calendar' : 'Add to Calendar'}
              </Button>
            </Card>
            
            {/* Scores and Progress Card */}
            <Card className="cosmic-card p-5">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-600/30 p-3 rounded-full mr-3">
                  <Star className="h-6 w-6 text-yellow-300" />
                </div>
                <h3 className="text-xl font-semibold text-blue-100">Your Progress</h3>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-200">XP Earned:</span>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="text-lg font-bold text-white">{userScore}</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-xs text-blue-300 mb-1">
                  <span>Course Progress</span>
                  <span>{Math.round(courseProgress)}%</span>
                </div>
                <Progress value={courseProgress} className="h-2" />
              </div>
              <div className="text-blue-400 text-sm">
                {courseProgress < 10 ? "Just getting started!" : 
                 courseProgress < 50 ? "Making good progress!" :
                 courseProgress < 90 ? "Almost there!" : "Course nearly complete!"}
              </div>
            </Card>
          </div>
        </div>
        
        {/* New section for the five section cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Course Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectionData.map((section, index) => (
              <AISectionCard 
                key={index}
                title={section.title}
                description={section.description}
                index={index}
              />
            ))}
          </div>
        </div>
        
        <CourseView course={course} />
        
        <footer className="mt-16 pt-8 border-t border-blue-500/20">
          <p className="text-blue-300 text-center">
            This course was personalized based on your interests in 
            <span className="text-blue-400 font-medium"> {course.forInterest || "artificial intelligence"}</span>, 
            at a <span className="text-blue-400 font-medium">{course.forLevel || "intermediate"}</span> level,
            with a <span className="text-blue-400 font-medium">{course.forLearningStyle || "visual"}</span> learning style.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AICoursePage;
