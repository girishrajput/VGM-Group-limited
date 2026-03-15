import React from 'react';

type ProcessStepProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
};

const ProcessStep: React.FC<ProcessStepProps> = ({ title, description, icon, index }) => {
  return (
    <div className="flex-1 text-center relative z-10 flex flex-col items-center">
      {/* Icon Circle */}
      <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white">
        {icon}
      </div>
      
      {/* Text Content */}
      <h3 className="text-lg font-bold text-slate-900 mb-2">
        {index + 1}. {title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ProcessStep;