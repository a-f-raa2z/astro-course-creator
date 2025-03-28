
import { useLocation } from "react-router-dom";
import CourseView from "@/components/CourseView";
import { Course } from "@/types/course";

const CoursePage = () => {
  const location = useLocation();
  const course = location.state?.course;

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold text-white mb-4">Course Not Found</h1>
        <p className="text-purple-300 mb-6">
          We couldn't load your personalized astronomy course. Please return to the home page
          and complete the assessment again.
        </p>
        <a
          href="/"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg"
        >
          Return to Home
        </a>
      </div>
    );
  }

  return (
    <div className="bg-space min-h-screen py-12">
      <div className="course-container">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">{course.title}</h1>
          <p className="text-purple-300 text-lg">{course.description}</p>
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
