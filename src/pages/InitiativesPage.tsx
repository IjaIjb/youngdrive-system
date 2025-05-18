// src/pages/InitiativesPage.tsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/common/Hero';
// import InitiativeCard from '../components/common/InitiativeCard';
import Button from '../components/common/Button';
import { initiatives } from '../data/initiatives';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const InitiativesPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [expandedInitiative, setExpandedInitiative] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Our Initiatives | Youngdrive";
    
    // Check if there's a hash in the URL
    if (location.hash) {
      const id = location.hash.substring(1);
      setActiveTab(id);
      setExpandedInitiative(id);
      
      // Scroll to the initiative section
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleInitiativeToggle = (id: string) => {
    setExpandedInitiative(expandedInitiative === id ? null : id);
  };

  return (
    <>
      <Hero
        title="Our Initiatives"
        subtitle="Sustainable solutions led by youth across Africa"
        backgroundImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Key Focus Areas</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We focus on four transformative areas where youth can drive sustainable change
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {initiatives.map((initiative) => (
              <div 
                key={initiative.id}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeTab === initiative.id 
                    ? 'border-primary bg-primary bg-opacity-5' 
                    : 'border-gray-200 hover:border-primary'
                }`}
                onClick={() => setActiveTab(initiative.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary bg-opacity-10 rounded-full">
                    {initiative.icon === 'FaLaptopCode' && <span className="text-primary text-2xl">💻</span>}
                    {initiative.icon === 'FaBookOpen' && <span className="text-primary text-2xl">📚</span>}
                    {initiative.icon === 'FaSeedling' && <span className="text-primary text-2xl">🌱</span>}
                    {initiative.icon === 'FaVenusMars' && <span className="text-primary text-2xl">⚧️</span>}
                  </div>
                  <h3 className="text-lg font-bold">{initiative.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-8 mt-12">
            {initiatives.map((initiative) => (
              <div 
                key={initiative.id} 
                id={initiative.id}
                className={`transition-all duration-500 ${activeTab && activeTab !== initiative.id ? 'hidden' : ''}`}
              >
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-6 cursor-pointer bg-gray-50"
                    onClick={() => handleInitiativeToggle(initiative.id)}
                  >
                    <h3 className="text-2xl font-bold text-gray-900">{initiative.name}</h3>
                    <button 
                      className="p-2 rounded-full bg-primary bg-opacity-10 text-primary"
                      aria-label={expandedInitiative === initiative.id ? "Collapse" : "Expand"}
                    >
                      {expandedInitiative === initiative.id ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>
                  
                  <div className={`transition-all duration-500 overflow-hidden ${
                    expandedInitiative === initiative.id ? 'max-h-[2000px]' : 'max-h-0'
                  }`}>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <img 
                            src={initiative.imageUrl} 
                            alt={initiative.name} 
                            className="w-full h-64 object-cover rounded-lg mb-4"
                          />
                          <div className="mb-6">
                            <h4 className="font-bold text-gray-800 mb-2">Goal:</h4>
                            <p className="text-gray-700">{initiative.goal}</p>
                          </div>
                          <div className="mb-6">
                            <h4 className="font-bold text-gray-800 mb-2">Progress:</h4>
                            <div className="bg-gray-200 rounded-full h-6 overflow-hidden">
                              <div 
                                className="bg-primary h-full rounded-full flex items-center justify-center text-white text-sm font-medium"
                                style={{ width: `${initiative.progress}%` }}
                              >
                                {initiative.progress}%
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                              {initiative.currentProgress.toLocaleString()} of {initiative.totalGoal.toLocaleString()} goal reached
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-gray-700 mb-6">{initiative.description}</p>
                          
                          <div className="mb-6">
                            <h4 className="font-bold text-gray-800 mb-2">Key Activities:</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                              {initiative.activities.map((activity, index) => (
                                <li key={index}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* <div className="bg-primary bg-opacity-10 p-6 rounded-lg">
                            <h4 className="font-bold text-gray-800 mb-2">Success Story</h4>
                            <div className="italic text-gray-700 mb-4">
                              {initiative.id === 'ai-for-africa' && 
                                "\"Through Youngdrive's Python bootcamp, I developed an app that helps farmers in my village predict optimal planting times based on weather data. Now I'm teaching others!\" — Emmanuel, Rwanda"}
                              {initiative.id === 'education-for-all' && 
                                "\"The GRE prep sessions and application support from Youngdrive helped me secure a full scholarship to study Environmental Engineering in Canada.\" — Fatima, Nigeria"}
                              {initiative.id === 'climate-action' && 
                                "\"Our youth-led tree planting initiative has transformed our community. We've planted 5,000 trees and established a nursery that provides income for local women.\" — David, Kenya"}
                              {initiative.id === 'gender-advocacy' && 
                                "\"The microloan and financial literacy training I received helped me expand my tailoring business from 1 to 5 employees. Now I mentor other young women entrepreneurs.\" — Grace, Tanzania"}
                            </div>
                            <Button to="/stories" variant="outline-primary" size="sm">
                              Read More Stories
                            </Button>
                          </div> */}
                          
                          <div className="mt-8">
                            <Button to="/get-involved" variant="primary">
                              Get Involved with {initiative.name}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Impact Measurement</h2>
              <p className="text-lg mb-6 text-white opacity-90">
                We're committed to transparent, data-driven approaches to measure our impact across all initiatives:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Quantitative Metrics:</span> We track specific targets like "# of youth trained" and "trees planted" to measure direct outputs.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Qualitative Assessment:</span> Through surveys and interviews, we capture changes in knowledge, attitudes, and behaviors.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Long-term Tracking:</span> We follow up with participants 6, 12, and 24 months after programs to measure sustained impact.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Transparency:</span> Annual impact reports are published on our website and shared with all stakeholders.
                  </p>
                </li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Start Your Own Initiative</h3>
              <p className="text-gray-300 mb-6">
                Have an idea for a youth-led initiative in your community? Youngdrive can provide mentorship, resources, and a platform to amplify your impact.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">1</div>
                  <p className="text-white">Submit your initiative idea</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">2</div>
                  <p className="text-white">Receive feedback and mentorship</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">3</div>
                  <p className="text-white">Get connected to resources and funding</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">4</div>
                  <p className="text-white">Launch and scale your impact</p>
                </div>
              </div>
              <Button to="/get-involved#start-initiative" variant="accent">
                Submit Your Initiative
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InitiativesPage;