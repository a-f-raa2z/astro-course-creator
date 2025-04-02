
import React from "react";

interface TitleWrapperProps {
  icon?: React.ReactNode;
  title: string;
  color?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const TitleWrapper = ({ 
  icon, 
  title, 
  color = "bg-purple-900/30", 
  subtitle,
  children 
}: TitleWrapperProps) => (
  <div className="h-full flex flex-col">
    <div className="mb-4">
      <div className={`inline-block px-3 py-2 rounded-md ${color} border border-purple-400/30`}>
        <h3 className="text-lg font-semibold text-white flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </h3>
        {subtitle && <p className="text-sm text-purple-200 mt-1">{subtitle}</p>}
      </div>
    </div>
    {children}
  </div>
);
