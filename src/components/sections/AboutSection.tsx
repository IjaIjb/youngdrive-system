// src/components/sections/AboutSection.tsx
// import { Link } from 'react-router-dom';
import Button from '../common/Button';

const AboutSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-gray-700 text-lg mb-6">
              Youngdrive mobilizes Africa's youth to tackle the continent's greatest challenges through innovation, education, and collective action—one SDG at a time.
            </p>
            <p className="text-gray-700 mb-6">
              We believe in the power of youth as catalysts for sustainable development through technology, education, climate action, and gender equity.
            </p>
            <Button to="/about" variant="primary">
              Learn More About Us
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 md:h-72 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Youth tech workshop" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-40 md:h-72 rounded-lg overflow-hidden mt-8">
              <img 
                src="/istockphoto-1462151889-612x612.webp" 
                alt="Climate action project" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-40 md:h-72 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Education project" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-40 md:h-72 rounded-lg overflow-hidden mt-8">
              <img 
                src="/premium_photo-1707155465798-dd7c3e9c0d6c.avif" 
                alt="Entrepreneurship workshop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;