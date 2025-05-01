// src/components/sections/FeaturedInitiativesSection.tsx
// import { Link } from 'react-router-dom';
import { initiatives } from '../../data/initiatives';
import InitiativeCard from '../common/InitiativeCard';
import Button from '../common/Button';

const FeaturedInitiativesSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Initiatives</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We focus on four key areas where youth can drive transformative change across Africa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {initiatives.map((initiative) => (
            <InitiativeCard key={initiative.id} initiative={initiative} featured={true} />
          ))}
        </div>
        
        <div className="text-center">
          <Button to="/initiatives" variant="outline-primary">
            Explore All Initiatives
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInitiativesSection;