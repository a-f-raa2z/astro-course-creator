
import React, { useState } from "react";
import { CourseSection } from "@/types/course";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle, XCircle, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TitleWrapper } from "./TitleWrapper";
import { motion } from "framer-motion";

interface TrueFalseContentProps {
  section: CourseSection;
  onComplete: () => void;
  onPrevious: () => void;
  isFirstContent: boolean;
}

export const TrueFalseContent = ({ section, onComplete, onPrevious, isFirstContent }: TrueFalseContentProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const getTrueFalseQuestion = (sectionTitle: string) => {
    switch (sectionTitle) {
      case "The Solar System":
        return {
          question: "Pluto is still officially classified as the ninth planet in our solar system.",
          answer: false,
          explanation: "False – Pluto was reclassified as a dwarf planet in 2006."
        };
      case "The Inner Planets":
        return {
          question: "The inner planets all have solid, rocky surfaces.",
          answer: true,
          explanation: "True – Mercury, Venus, Earth, and Mars all have solid, rocky surfaces."
        };
      case "Earth":
        return {
          question: "Earth's atmosphere is made mostly of oxygen.",
          answer: false,
          explanation: "False – It's mostly nitrogen (about 78%)."
        };
      case "The Moon":
        return {
          question: "The Moon has no atmosphere, which is why footprints can last for millions of years.",
          answer: true,
          explanation: "True – With no atmosphere, there's no wind or weather to erode the footprints."
        };
      case "The Moon in Our Skies":
        return {
          question: "The Moon appears larger near the horizon because it's physically closer to Earth at that time.",
          answer: false,
          explanation: "False – That's an optical illusion called the \"Moon illusion.\""
        };
      case "Mapping the Moon":
        return {
          question: "We've mapped the entire surface of the Moon using spacecraft and telescopes.",
          answer: true,
          explanation: "True – Various missions and telescopes have mapped the entire lunar surface."
        };
      case "The Moon's Unseen Face":
        return {
          question: "The far side of the Moon is always dark.",
          answer: false,
          explanation: "False – It gets just as much sunlight as the near side."
        };
      case "Venus":
        return {
          question: "A day on Venus is longer than a year on Venus.",
          answer: true,
          explanation: "True – Venus rotates so slowly that its day is longer than its year."
        };
      case "Mercury":
        return {
          question: "Mercury has the most extreme temperature swings in the solar system.",
          answer: true,
          explanation: "True – Mercury can swing from 800°F (430°C) during the day to -290°F (-180°C) at night."
        };
      case "Messenger at Mercury":
        return {
          question: "NASA's MESSENGER mission was the first to orbit Mercury.",
          answer: true,
          explanation: "True – MESSENGER was the first spacecraft to orbit Mercury from 2011-2015."
        };
      case "The Sun":
        return {
          question: "The Sun is the largest star in our galaxy.",
          answer: false,
          explanation: "False – It's big, but many stars are much larger."
        };
      case "Close to the Sun":
        return {
          question: "The Parker Solar Probe is getting closer to the Sun than any spacecraft before it.",
          answer: true,
          explanation: "True – It's designed to fly closer to the Sun than any previous mission."
        };
      case "Mars":
        return {
          question: "You could survive on Mars by just wearing a heavy jacket and a helmet.",
          answer: false,
          explanation: "False – Mars has a thin, unbreathable atmosphere and freezing temperatures."
        };
      case "Mars from Above and the Moons of Mars":
        return {
          question: "Mars has two tiny, oddly shaped moons named Phobos and Deimos.",
          answer: true,
          explanation: "True – These small, irregularly shaped moons are likely captured asteroids."
        };
      case "Roving over Mars":
        return {
          question: "The Mars rover Perseverance has a tiny helicopter named Ingenuity.",
          answer: true,
          explanation: "True – Ingenuity was the first aircraft to fly on another planet."
        };
      default:
        return {
          question: "The Solar System contains eight official planets.",
          answer: true,
          explanation: "True – Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune."
        };
    }
  };
  
  const trueFalseQuestion = getTrueFalseQuestion(section.title);
  
  const handleAnswerSelect = (answer: boolean) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
  };
  
  const handleContinue = () => {
    setSelectedAnswer(null);
    setShowAnswer(false);
    onComplete();
  };
  
  const getBackgroundColor = () => {
    if (!showAnswer || selectedAnswer === null) return "";
    
    return selectedAnswer === trueFalseQuestion.answer 
      ? "bg-green-900/20 border border-green-500/30" 
      : "bg-red-900/20 border border-red-500/30";
  };

  const getSectionImage = () => {
    switch (section.title) {
      case "The Solar System":
        return "/lovable-uploads/ad48c8d7-8aae-41a6-95ac-22af96b8a45a.png";
      case "The Inner Planets":
        return "/lovable-uploads/0228ba3e-a126-45c3-a728-10da3a418e4e.png";
      case "Earth":
        return "/lovable-uploads/34bde558-8d2c-41ff-bd25-b4c545393355.png";
      case "The Moon":
        return "/lovable-uploads/54548175-965e-4d7f-ae75-071e6b49cb4d.png";
      case "The Moon in Our Skies":
        return "/lovable-uploads/f04bd424-c991-4a08-8792-e83af1f09539.png";
      case "The Moon's Unseen Face":
        return "/lovable-uploads/52a450ef-41cd-45ec-90a2-c256e58d0d6a.png";
      case "Mapping the Moon":
        return "/lovable-uploads/1afadff6-a4c9-48c7-a8d6-5fe1fcecc2dd.png";
      case "Venus":
        return "/lovable-uploads/b87f40a8-a8d2-42de-943b-b6f586bc75b1.png";
      case "Mercury":
        return "/lovable-uploads/98ea4cdd-0d5e-49fd-bc16-139cdce24388.png";
      case "Messenger at Mercury":
        return "/lovable-uploads/bee533e9-3edc-4aa8-8fd6-2ee0683ab436.png";
      case "The Sun":
        return "/lovable-uploads/17b434e9-217c-4068-8b8b-1c628209901d.png";
      case "Close to the Sun":
        return "/lovable-uploads/6d50892d-4935-4033-bcfc-2a998579227e.png";
      case "Mars":
        return "/lovable-uploads/28ccf6bc-b95b-4b54-b78c-1be5f91a5be6.png";
      case "Mars from Above and the Moons of Mars":
        return "/lovable-uploads/973bc422-9419-49ac-ae95-89d2b36f2df8.png";
      case "Roving over Mars":
        return "/lovable-uploads/71f04c7c-c819-40bc-9de0-5f293ddadf89.png";
      default:
        return "/lovable-uploads/ad48c8d7-8aae-41a6-95ac-22af96b8a45a.png";
    }
  };
  
  const sectionImage = getSectionImage();
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card className={`w-full h-full flex flex-col p-4 backdrop-blur-sm transition-colors ${getBackgroundColor()}`}>
        <TitleWrapper 
          icon={<HelpCircle className="h-5 w-5 text-purple-400 mr-2" />}
          title="Preview Your Knowledge: What Do You Already Know?" 
          color="bg-purple-800/50"
        />
        
        <div className="flex-1 overflow-auto p-2 flex flex-col justify-center items-center">
          <div className="max-w-xl mx-auto text-center">
            <div className="mb-6 flex flex-col items-center">
              {sectionImage && (
                <div className="w-48 h-48 mb-4 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-lg shadow-purple-500/20">
                  <img 
                    src={sectionImage} 
                    alt={section.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold text-white mt-3">{trueFalseQuestion.question}</h3>
            </div>
            
            {!showAnswer ? (
              <div className="flex gap-4 justify-center mt-6">
                <Button 
                  onClick={() => handleAnswerSelect(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                >
                  <CheckCircle className="h-6 w-6 mr-2" />
                  True
                </Button>
                <Button 
                  onClick={() => handleAnswerSelect(false)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
                >
                  <XCircle className="h-6 w-6 mr-2" />
                  False
                </Button>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6"
              >
                <div className={`p-6 rounded-lg flex items-center ${
                  selectedAnswer === trueFalseQuestion.answer 
                    ? "bg-green-900/30 border border-green-500/30" 
                    : "bg-red-900/30 border border-red-500/30"
                }`}>
                  {selectedAnswer === trueFalseQuestion.answer ? (
                    <CheckCircle className="h-8 w-8 text-green-400 mr-4 flex-shrink-0" />
                  ) : (
                    <XCircle className="h-8 w-8 text-red-400 mr-4 flex-shrink-0" />
                  )}
                  <div>
                    <h4 className={`text-lg font-medium ${
                      selectedAnswer === trueFalseQuestion.answer ? "text-green-300" : "text-red-300"
                    }`}>
                      {selectedAnswer === trueFalseQuestion.answer ? "Correct!" : "Not quite right"}
                    </h4>
                    <p className="text-white">{trueFalseQuestion.explanation}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        
        <div className="mt-4 flex justify-between">
          {!isFirstContent && (
            <Button 
              onClick={onPrevious}
              variant="outline"
              className="border-purple-500/30 text-purple-300 hover:bg-purple-900/30"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Previous
            </Button>
          )}
          <div className={!isFirstContent ? "" : "ml-auto"}>
            {showAnswer && (
              <Button 
                onClick={handleContinue}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all"
              >
                Continue <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
