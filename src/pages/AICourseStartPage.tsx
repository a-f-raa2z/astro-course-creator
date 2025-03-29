import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Course, CourseSection } from "@/types/course";
import { ContentType } from "@/types/ContentType";
import GameContentRenderer from "@/components/course/GameContentRenderer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GameProgress from "@/components/course/GameProgress";
import XPPopup from "@/components/course/XPPopup";

const AICourseStartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course as Course | null;
  const initialSectionIndex = location.state?.initialSectionIndex || 0;
  const [currentSectionIndex, setCurrentSectionIndex] = useState(initialSectionIndex);
  const [currentSection, setCurrentSection] = useState<CourseSection | null>(null);
  const [contentList, setContentList] = useState<ContentType[]>([]);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [showXPPopup, setShowXPPopup] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);

  useEffect(() => {
    if (course && course.sections && course.sections.length > 0) {
      setCurrentSection(course.sections[currentSectionIndex]);
    }
  }, [course, currentSectionIndex]);

  useEffect(() => {
    if (currentSection) {
      const newContentList: ContentType[] = [
        { id: 'introduction', type: 'introduction', title: 'Introduction', completed: false },
        { id: 'key-points', type: 'key-points', title: 'Key Points', completed: false },
        { id: 'video', type: 'video', title: 'Video Lesson', completed: false },
        ...(currentSection.shortVideo ? [{ id: 'short-video-1', type: 'short-video', title: 'Short Video 1', completed: false }] : []),
        ...(currentSection.additionalShortVideos && currentSection.additionalShortVideos.length > 0
          ? currentSection.additionalShortVideos.map((_, index) => ({
            id: `short-video-${index + 2}`,
            type: 'short-video',
            title: `Short Video ${index + 2}`,
            completed: false,
          }))
          : []),
        ...(currentSection.visualUrl ? [{ id: 'playground', type: 'playground', title: 'Interactive Playground', completed: false }] : []),
        { id: 'quiz', type: 'quiz', title: 'Quiz', completed: false },
        ...(currentSection.bonusVideos && currentSection.bonusVideos.length > 0
          ? currentSection.bonusVideos.map((_, index) => ({
            id: `bonus-${index + 1}`,
            type: 'bonus',
            title: `Bonus Content ${index + 1}`,
            completed: false,
          }))
          : []),
        { id: 'image', type: 'image', title: 'Image', completed: false },
      ];
      setContentList(newContentList);
    }
  }, [currentSection]);

  const handleNextContent = () => {
    const updatedContentList = [...contentList];
    updatedContentList[currentContentIndex] = { ...updatedContentList[currentContentIndex], completed: true };
    setContentList(updatedContentList);

    if (currentContentIndex < contentList.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1);
    } else {
      // Move to the next section or complete the course
      if (currentSectionIndex < (course?.sections?.length || 0) - 1) {
        setCurrentSectionIndex(currentSectionIndex + 1);
        setCurrentContentIndex(0); // Reset content index to the beginning
        showXP(50);
      } else {
        // Course completed
        alert("Congratulations! You've completed the course.");
        navigate("/");
      }
    }
  };

  const handlePreviousContent = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(currentContentIndex - 1);
    }
  };

  const showXP = (xp: number) => {
    setXpEarned(xp);
    setShowXPPopup(true);
    setTimeout(() => {
      setShowXPPopup(false);
    }, 2000);
  };

  if (!course || !currentSection) {
    return <div className="min-h-screen bg-space text-white flex items-center justify-center">Loading...</div>;
  }

  const currentContentType = contentList[currentContentIndex];

  return (
    <div className="min-h-screen bg-space text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <Button variant="ghost" onClick={() => navigate("/ai-course", { state: { course } })} className="text-white hover:bg-space-cosmic-blue/40">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Course
          </Button>
        </div>

        <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
        <h2 className="text-xl text-gray-300 mb-4">{currentSection.title}</h2>

        <GameProgress contentList={contentList} currentContentIndex={currentContentIndex} />

        <div className="mb-4">
          <GameContentRenderer
            contentType={currentContentType}
            section={currentSection}
            course={course}
          />
        </div>

        <div className="flex justify-between">
          <Button
            onClick={handlePreviousContent}
            disabled={currentContentIndex === 0}
            className="bg-space-cosmic-blue hover:bg-space-deep-blue text-white"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button
            onClick={handleNextContent}
            className="bg-space-cosmic-blue hover:bg-space-deep-blue text-white"
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      {showXPPopup && <XPPopup xp={xpEarned} />}
    </div>
  );
};

export default AICourseStartPage;
