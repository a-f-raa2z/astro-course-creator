
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AICoursePage from "./pages/AICoursePage";
import AICourseStartPage from "./pages/AICourseStartPage";
import AstronomyCoursePage from "./pages/AstronomyCoursePage";
import AstronomyCourseStartPage from "./pages/AstronomyCourseStartPage";
import AstronomyQuizModePage from "./pages/AstronomyQuizModePage";
import CourseStartPage from "./pages/CourseStartPage";
import CoursePage from "./pages/Course";
import NotFound from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-course" element={<AICoursePage />} />
        <Route path="/ai-course-start" element={<AICourseStartPage />} />
        <Route path="/astronomy-course" element={<AstronomyCoursePage />} />
        <Route path="/astronomy-course-start" element={<AstronomyCourseStartPage />} />
        <Route path="/astronomy-quiz" element={<AstronomyQuizModePage />} />
        <Route path="/course/start" element={<CourseStartPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
