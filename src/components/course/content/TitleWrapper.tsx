
import React from "react";

interface TitleWrapperProps {
  icon: React.ReactNode;
  title: string;
  color: string;
}

export const TitleWrapper = ({ icon, title, color }: TitleWrapperProps) => (
  <div className="mb-4">
    <div className={`inline-block px-3 py-2 rounded-md ${color} border border-purple-400/30`}>
      <h3 className="text-lg font-semibold text-white flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h3>
    </div>
  </div>
);
