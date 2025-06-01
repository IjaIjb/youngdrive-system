// src/components/common/InitiativeCard.tsx
import { FaLaptopCode, FaBookOpen, FaSeedling, FaVenusMars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from './Card';
import ProgressBar from './ProgressBar';
import { Initiative } from '../../types/initiative';

interface InitiativeCardProps {
  initiative: Initiative;
  featured?: boolean;
}

const InitiativeCard = ({ initiative, featured = false }: InitiativeCardProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaLaptopCode':
        return <FaLaptopCode size={featured ? 48 : 32} className="text-primary" />;
      case 'FaBookOpen':
        return <FaBookOpen size={featured ? 48 : 32} className="text-primary" />;
      case 'FaSeedling':
        return <FaSeedling size={featured ? 48 : 32} className="text-primary" />;
      case 'FaVenusMars':
        return <FaVenusMars size={featured ? 48 : 32} className="text-primary" />;
      default:
        return <FaLaptopCode size={featured ? 48 : 32} className="text-primary" />;
    }
  };

  if (featured) {
    return (
      <Card className="initiative-card transition-all duration-300 flex flex-col justify-between h-full">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            {getIcon(initiative.icon)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{initiative.name}</h3>
            <p className="text-gray-600 mt-1">{initiative.description}</p>
          </div>
        </div>
        <Link to={`/initiatives#${initiative.id}`} className="text-primary font-medium hover:underline mt-4">
          Learn more
        </Link>
      </Card>
    );
  }

  return (
    <Card className="initiative-card transition-all duration-300 h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            {getIcon(initiative.icon)}
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{initiative.name}</h3>
        </div>
        
        <p className="text-gray-700 mb-4">{initiative.description}</p>
        
        <div className="mb-6">
          <h4 className="font-bold text-gray-800 mb-2">Goal:</h4>
          <p className="text-gray-700">{initiative.goal}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="font-bold text-gray-800 mb-2">Activities:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {initiative.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-700">Progress:</span>
            <span className="font-bold text-primary">{initiative.progress}%</span>
          </div>
          <ProgressBar 
            percentage={initiative.progress} 
            label={`${initiative.currentProgress.toLocaleString()} of ${initiative.totalGoal.toLocaleString()}`} 
          />
        </div>
      </div>
    </Card>
  );
};

export default InitiativeCard;