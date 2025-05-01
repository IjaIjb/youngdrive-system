// src/components/sections/ImpactStatsSection.tsx
import { useInView } from 'react-intersection-observer';
import CounterAnimation from '../common/CounterAnimation';
import { FaUserGraduate, FaTree, FaHandsHelping, FaGlobe } from 'react-icons/fa';

const ImpactStatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <FaUserGraduate className="text-4xl text-primary" />,
      count: 10000,
      label: 'Youth Trained',
      description: 'Equipped with tech and leadership skills',
    },
    {
      icon: <FaGlobe className="text-4xl text-primary" />,
      count: 100,
      label: 'Communities Impacted',
      description: 'Across 15 African countries',
    },
    {
      icon: <FaTree className="text-4xl text-primary" />,
      count: 5000,
      label: 'Trees Planted',
      description: 'Through youth-led environmental initiatives',
    },
    {
      icon: <FaHandsHelping className="text-4xl text-primary" />,
      count: 50,
      label: 'Partners',
      description: 'Collaborating for sustainable development',
    },
  ];

  return (
    <section className="section bg-gray-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Measurable change driven by youth leadership across Africa
          </p>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-soft text-center"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {inView && (
                  <CounterAnimation 
                    end={stat.count} 
                    duration={2000} 
                    suffix={stat.count >= 1000 ? '+' : ''} 
                  />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;