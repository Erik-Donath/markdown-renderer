import React from "react";

interface TooltipButtonProps {
  action: () => void;
  icon: React.ReactNode;
  children: string;
}

const TooltipButton: React.FC<TooltipButtonProps> = ({
  action,
  icon,
  children,
}) => {
  return (
    <button
      onClick={action}
      className="group relative p-2 rounded-lg transition-colors duration-200 hover:bg-gray-200"
    >
      {icon}
      <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-xs opacity-0 group-hover:opacity-100 bg-gray-700 text-white px-2 py-1 rounded-md transition-opacity duration-200">
        {children}
      </span>
    </button>
  );
};

export default TooltipButton;
