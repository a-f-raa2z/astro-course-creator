
import React from "react";

interface QuizIntroProps {
  introText: string;
}

export const QuizIntro: React.FC<QuizIntroProps> = ({ introText }) => {
  return (
    <div className="mb-6">
      <p className="text-purple-300">{introText}</p>
    </div>
  );
};
