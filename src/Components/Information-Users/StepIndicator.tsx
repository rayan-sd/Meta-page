import React from 'react';
import "./../../scss/StepIndicator.scss";

// interface StepIndicatorProps {
//   steps: number;
//   currentStep: number;
// }

// const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
//   return (
//     <div className="step-indicator">
//       {[...Array(steps)].map((_, i) => (
//         <div key={i} className={`step-indicator__circle ${currentStep === i + 1 ? 'step-indicator__circle--active' : ''}`}></div>
//       ))}
//     </div>
//   );
// };

// export default StepIndicator;


interface StepIndicatorProps {
  steps: number;
  currentStep: number;
  onStepClick: (step: number) => void;  // New callback prop
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="step-indicator">
      {[...Array(steps)].map((_, i) => (
        <div 
          key={i} 
          className={`step-indicator__circle ${currentStep === i + 1 ? 'step-indicator__circle--active' : ''}`} 
          onClick={() => onStepClick(i + 1)}  // Add onClick handler here
        >
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
