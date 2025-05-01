// src/components/common/ProgressBar.tsx
interface ProgressBarProps {
    percentage: number;
    label?: string;
    className?: string;
  }
  
  const ProgressBar = ({ percentage, label, className = '' }: ProgressBarProps) => {
    return (
      <div className={`w-full ${className}`}>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        {label && <p className="mt-1 text-sm text-gray-500">{label}</p>}
      </div>
    );
  };
  
  export default ProgressBar;