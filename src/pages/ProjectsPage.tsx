// src/pages/ProjectsPage.tsx
import { useEffect, useState } from 'react';
import Hero from '../components/common/Hero';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { projects } from '../data/projects';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import NewsletterSection from '../components/sections/NewsletterSection';

const ProjectsPage = () => {
  const [filter, setFilter] = useState<'all' | 'planned' | 'active' | 'completed'>('all');
  
  useEffect(() => {
    document.title = "Our Projects | Youngdrive";
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'planned': return 'bg-blue-100 text-blue-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Hero
        title="Our Projects"
        subtitle="Time-bound initiatives addressing specific challenges across Africa"
        backgroundImage="https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current & Upcoming Projects</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              While our initiatives represent our ongoing work, these projects are specific, time-bound efforts to address particular challenges
            </p>
          </div>
          
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg border border-gray-200 ${
                  filter === 'all' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('planned')}
                className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 ${
                  filter === 'planned' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Planned
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 ${
                  filter === 'active' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg border-t border-b border-r border-gray-200 ${
                  filter === 'completed' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Completed
              </button>
            </div>
          </div>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found with the selected filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="h-full flex flex-col">
                  <div className="relative h-48 md:h-60 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={project.imageUrl} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.name}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="flex flex-col space-y-2 mb-6 text-gray-600">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-primary" />
                      <span>
                        {new Date(project.timeline.start).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long'
                        })} - {new Date(project.timeline.end).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-primary" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  
                  {project.callToAction && (
                    <div className="mt-auto">
                      <Button 
                        to={project.callToAction.link} 
                        variant="outline-primary" 
                        fullWidth
                      >
                        {project.callToAction.text}
                      </Button>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Methodology</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              How we design and implement our projects for maximum impact and sustainability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Community-Centered Design</h3>
              <p className="text-gray-700">
                We begin by deeply understanding community needs through participatory methods, ensuring solutions address real challenges faced by local populations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Youth Leadership</h3>
              <p className="text-gray-700">
                Local youth are not just beneficiaries but active leaders in project design, implementation, and evaluation, building their capacity while ensuring relevance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Sustainable Impact</h3>
              <p className="text-gray-700">
                Projects are designed with sustainability in mind, with clear handover plans, local capacity building, and ongoing support mechanisms.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-soft">
            <h3 className="text-2xl font-bold mb-6 text-center">Project Life Cycle</h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary" aria-hidden="true"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-12">
                  <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">1</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold mb-2">Needs Assessment & Research</h4>
                    <p className="text-gray-700">
                      We conduct thorough research and community consultations to identify specific needs and opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center mb-12">
                  <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">2</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold mb-2">Co-Design & Planning</h4>
                    <p className="text-gray-700">
                      Working with local youth and stakeholders, we collaboratively design project parameters, goals, and implementation strategies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center mb-12">
                  <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">3</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold mb-2">Implementation & Monitoring</h4>
                    <p className="text-gray-700">
                      Projects are implemented with continuous monitoring to allow for adaptation and course correction.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center mb-12">
                  <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">4</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold mb-2">Evaluation & Learning</h4>
                    <p className="text-gray-700">
                      We rigorously assess outcomes and impacts, documenting lessons learned for future initiatives.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">5</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold mb-2">Scaling & Sustainability</h4>
                    <p className="text-gray-700">
                      Successful projects are scaled or replicated, with mechanisms to ensure long-term sustainability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary bg-opacity-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Propose a Project</h2>
              <p className="text-gray-700 mb-6">
                Have an idea for a youth-led project that aligns with our mission? We're always looking for innovative initiatives to support.
              </p>
              <p className="text-gray-700 mb-6">
                If you have a well-defined project concept that addresses specific challenges in your community through technology, education, climate action, or gender equity, we want to hear from you.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-soft mb-6">
                <h3 className="text-xl font-bold mb-4">What We Look For</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>Youth-led initiatives with clear community impact</div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>Innovative approaches to addressing SDG-related challenges</div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>Projects with potential for scale or replication</div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>Clear objectives, timeline, and budget</div>
                  </li>
                </ul>
              </div>
              <Button to="/get-involved#start-initiative" variant="primary">
                Submit Your Project Idea
              </Button>
            </div>
            
            {/* <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Project Spotlight</h3>
              <div className="mb-4 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Women entrepreneurs" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Financial Inclusion for Women</h4>
              <p className="text-gray-700 mb-4">
                This project has provided microloans and financial literacy training to over 500 young women entrepreneurs across rural Kenya, Rwanda, and Ghana.
              </p>
              <div className="flex justify-between items-center text-gray-600 text-sm mb-4">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-1" />
                  <span>Jan 2024 - Dec 2025</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-1" />
                  <span className="text-green-600 font-medium">Active</span>
                </div>
              </div>
              <div className="mb-4">
                <h5 className="font-bold mb-2">Impact Highlights:</h5>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <div className="p-1 bg-primary rounded-full mr-2 mt-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <div>500+ women supported with microloans</div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-primary rounded-full mr-2 mt-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <div>300+ new businesses started</div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-primary rounded-full mr-2 mt-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <div>85% repayment rate on microloans</div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-primary rounded-full mr-2 mt-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <div>1,200+ community members indirectly benefiting</div>
                  </li>
                </ul>
              </div>
              <Button to="/get-involved" variant="outline-primary" fullWidth>
                Support This Project
              </Button>
            </div> */}
          </div>
        </div>
      </section>
      
      <NewsletterSection />
    </>
  );
};

export default ProjectsPage;