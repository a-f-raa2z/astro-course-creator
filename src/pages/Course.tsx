
import { useLocation, Link } from "react-router-dom";
import CourseView from "@/components/CourseView";
import { Course } from "@/types/course";
import { generateMockCourse } from "@/utils/courseData";
import { Button } from "@/components/ui/button";
import { BookOpen, Rocket, MapPin } from "lucide-react";

const CoursePage = () => {
  const location = useLocation();
  // Use the passed course from state, or generate a default example course
  const course = location.state?.course || generateMockCourse("planets", "intermediate", "visual");

  return (
    <div className="bg-space min-h-screen py-12">
      <div className="course-container max-w-5xl mx-auto px-4">
        <header className="mb-10">
          <div className="flex items-center mb-3">
            <Rocket className="h-8 w-8 text-purple-400 mr-3" />
            <h1 className="text-4xl font-bold text-white">{course.title}</h1>
          </div>
          
          <p className="text-purple-300 text-lg">{course.description}</p>
          
          <div className="mt-6 flex space-x-4">
            <Link to="/course-start" state={{ course }}>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
                <BookOpen className="mr-2" />
                Start Course
              </Button>
            </Link>
            
            <div className="flex items-center text-purple-300 bg-space-cosmic-blue/30 px-4 py-2 rounded-lg border border-purple-500/20">
              <MapPin className="h-5 w-5 mr-2 text-purple-400" />
              <span>Space Learning Journey</span>
            </div>
          </div>
        </header>
        
        <CourseView course={course} />
        
        <footer className="mt-16 pt-8 border-t border-purple-500/20">
          <p className="text-purple-300 text-center">
            This course was personalized based on your interests in 
            <span className="text-purple-400 font-medium"> {course.forInterest}</span>, 
            at a <span className="text-purple-400 font-medium">{course.forLevel}</span> level,
            with a <span className="text-purple-400 font-medium">{course.forLearningStyle}</span> learning style.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CoursePage;
