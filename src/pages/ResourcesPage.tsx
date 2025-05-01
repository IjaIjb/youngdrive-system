// src/pages/ResourcesPage.tsx
import { useEffect, useState } from 'react';
import Hero from '../components/common/Hero';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { FaDownload, FaVideo, FaHeadphones, FaBook, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import NewsletterSection from '../components/sections/NewsletterSection';

// Mock data for resources
const resources = [
  {
    id: 'python-beginners',
    title: 'Python for Beginners Toolkit',
    type: 'toolkit',
    category: 'tech',
    description: 'A comprehensive guide to getting started with Python programming, including basic concepts, exercises, and project ideas.',
    downloadLink: '#',
    fileSize: '2.4 MB'
  },
  {
    id: 'data-vis-guide',
    title: 'Data Visualization with PowerBI',
    type: 'guide',
    category: 'tech',
    description: 'Learn how to create powerful data visualizations using Microsoft PowerBI to communicate insights effectively.',
    downloadLink: '#',
    fileSize: '3.1 MB'
  },
  {
    id: 'climate-action-toolkit',
    title: 'Youth Climate Action Toolkit',
    type: 'toolkit',
    category: 'climate',
    description: 'Resources for young climate activists, including campaign strategies, community engagement tips, and educational materials.',
    downloadLink: '#',
    fileSize: '5.2 MB'
  },
  {
    id: 'tree-planting-guide',
    title: 'Community Tree Planting Guide',
    type: 'guide',
    category: 'climate',
    description: 'Step-by-step instructions for organizing and implementing successful tree planting initiatives in your community.',
    downloadLink: '#',
    fileSize: '4.7 MB'
  },
  {
    id: 'scholarship-guide',
    title: 'African Scholarship Guide 2024',
    type: 'guide',
    category: 'education',
    description: 'Comprehensive directory of scholarships available to African students, with application tips and deadlines.',
    downloadLink: '#',
    fileSize: '6.3 MB'
  },
  {
    id: 'gre-prep',
    title: 'GRE Preparation Resources',
    type: 'toolkit',
    category: 'education',
    description: 'Study materials, practice tests, and strategies for acing the GRE exam on a budget.',
    downloadLink: '#',
    fileSize: '4.2 MB'
  },
  {
    id: 'women-entrepreneurship',
    title: 'Women Entrepreneurship Starter Pack',
    type: 'toolkit',
    category: 'gender',
    description: 'Resources for women starting businesses, including business plan templates, funding sources, and mentorship opportunities.',
    downloadLink: '#',
    fileSize: '3.8 MB'
  },
  {
    id: 'gender-advocacy',
    title: 'Gender Equity Advocacy Guide',
    type: 'guide',
    category: 'gender',
    description: 'Strategies and tools for advocating for gender equity in various settings, from schools to workplaces.',
    downloadLink: '#',
    fileSize: '2.9 MB'
  }
];

// Mock data for workshops
const workshops = [
  {
    id: 'ai-ethics',
    title: 'AI Ethics in African Context',
    date: '2024-05-15',
    speaker: 'Fatima Nkosi',
    type: 'webinar',
    category: 'tech',
    description: 'Exploring the ethical considerations of AI development and deployment in African contexts.',
    videoLink: '#',
    duration: '1h 45m'
  },
  {
    id: 'python-data',
    title: 'Python for Data Analysis Workshop',
    date: '2024-04-10',
    speaker: 'Kwame Osei',
    type: 'workshop',
    category: 'tech',
    description: 'Hands-on workshop on using Python for data analysis, from basic concepts to advanced techniques.',
    videoLink: '#',
    duration: '2h 30m'
  },
  {
    id: 'climate-podcast',
    title: 'Green Futures Africa Podcast: Episode 3',
    date: '2024-03-22',
    speaker: 'David Mwangi & Guests',
    type: 'podcast',
    category: 'climate',
    description: 'Discussion on innovative climate solutions being implemented by youth across East Africa.',
    audioLink: '#',
    duration: '45m'
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy for Communities',
    date: '2024-02-18',
    speaker: 'Sarah Kimani',
    type: 'webinar',
    category: 'climate',
    description: 'Practical approaches to implementing small-scale renewable energy solutions in rural communities.',
    videoLink: '#',
    duration: '1h 15m'
  },
  {
    id: 'scholarship-webinar',
    title: 'International Scholarship Application Strategies',
    date: '2024-01-25',
    speaker: 'Samuel Okafor',
    type: 'workshop',
    category: 'education',
    description: 'Tips and strategies for applying to international scholarships, including essay writing and interview preparation.',
    videoLink: '#',
    duration: '2h'
  },
  {
    id: 'digital-education',
    title: 'Digital Tools for Educators',
    date: '2023-12-07',
    speaker: 'Amina Diallo',
    type: 'workshop',
    category: 'education',
    description: 'Introduction to digital tools and platforms that can enhance teaching and learning in various contexts.',
    videoLink: '#',
    duration: '1h 50m'
  },
  {
    id: 'women-leadership',
    title: 'Women in Leadership: Breaking Barriers',
    date: '2023-11-15',
    speaker: 'Grace Muthumbi',
    type: 'podcast',
    category: 'gender',
    description: 'Conversation with successful women leaders about challenges, strategies, and advice for aspiring young women.',
    audioLink: '#',
    duration: '55m'
  },
  {
    id: 'financial-literacy',
    title: 'Financial Literacy for Young Women',
    date: '2023-10-20',
    speaker: 'Esther Okumu',
    type: 'webinar',
    category: 'gender',
    description: 'Essential financial literacy concepts and practical tips for young women to achieve financial independence.',
    videoLink: '#',
    duration: '1h 30m'
  }
];

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('downloadables');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = "Resources | Youngdrive";
  }, []);

  const filteredResources = resources.filter(resource => {
    const matchesCategory = categoryFilter === 'all' || resource.category === categoryFilter;
    const matchesType = typeFilter === 'all' || resource.type === typeFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesType && matchesSearch;
  });

  const filteredWorkshops = workshops.filter(workshop => {
    const matchesCategory = categoryFilter === 'all' || workshop.category === categoryFilter;
    const matchesType = typeFilter === 'all' || workshop.type === typeFilter;
    const matchesSearch = workshop.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          workshop.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          workshop.speaker.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <>
      <Hero
        title="Resources"
        subtitle="Tools, guides, and educational materials to support your journey"
        backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Knowledge Resources</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Access free educational materials, toolkits, recorded workshops, and more to support your initiatives
            </p>
          </div>
          
          <div className="mb-8">
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab('downloadables')}
                className={`px-6 py-2 text-sm font-medium rounded-l-lg border border-gray-200 ${
                  activeTab === 'downloadables' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Downloadable Resources
              </button>
              <button
                onClick={() => setActiveTab('recordings')}
                className={`px-6 py-2 text-sm font-medium rounded-r-lg border-t border-b border-r border-gray-200 ${
                  activeTab === 'recordings' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Workshops & Recordings
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <div className="font-medium text-gray-700 mr-2">Filter by:</div>
            
            <div>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                <option value="all">All Categories</option>
                <option value="tech">Technology & AI</option>
                <option value="climate">Climate Action</option>
                <option value="education">Education</option>
                <option value="gender">Gender Equity</option>
              </select>
            </div>
            
            <div>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                <option value="all">All Types</option>
                {activeTab === 'downloadables' ? (
                  <>
                    <option value="toolkit">Toolkits</option>
                    <option value="guide">Guides</option>
                  </>
                ) : (
                  <>
                    <option value="webinar">Webinars</option>
                    <option value="workshop">Workshops</option>
                    <option value="podcast">Podcasts</option>
                  </>
                )}
              </select>
            </div>
          </div>
          
          {activeTab === 'downloadables' ? (
            <>
              {filteredResources.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No resources found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {filteredResources.map((resource) => (
                    <Card key={resource.id} className="h-full flex flex-col">
                      <div className="p-4 bg-gray-100 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                        <FaBook className="text-3xl text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{resource.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs font-medium rounded-full">
                          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                        </span>
                        <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                          {resource.category === 'tech' && 'Technology & AI'}
                          {resource.category === 'climate' && 'Climate Action'}
                          {resource.category === 'education' && 'Education'}
                          {resource.category === 'gender' && 'Gender Equity'}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-6">{resource.description}</p>
                      <div className="mt-auto">
                        <div className="text-sm text-gray-500 mb-3">File size: {resource.fileSize}</div>
                        <Button 
                          to={resource.downloadLink} 
                          variant="outline-primary" 
                          className="flex items-center justify-center"
                          fullWidth
                        >
                          <FaDownload className="mr-2" /> Download Resource
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              {filteredWorkshops.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No recordings found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {filteredWorkshops.map((workshop) => (
                    <Card key={workshop.id} className="h-full flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-4 bg-gray-100 rounded-lg w-16 h-16 flex items-center justify-center">
                          {workshop.type === 'podcast' ? (
                            <FaHeadphones className="text-3xl text-primary" />
                          ) : (
                            <FaVideo className="text-3xl text-primary" />
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs font-medium rounded-full">
                            {workshop.type.charAt(0).toUpperCase() + workshop.type.slice(1)}
                          </span>
                          <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                            {workshop.category === 'tech' && 'Technology & AI'}
                            {workshop.category === 'climate' && 'Climate Action'}
                            {workshop.category === 'education' && 'Education'}
                            {workshop.category === 'gender' && 'Gender Equity'}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{workshop.title}</h3>
                      <p className="text-gray-700 mb-4">{workshop.description}</p>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-1 text-primary" />
                          <span>{new Date(workshop.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric'
                          })}</span>
                        </div>
                        <div>
                          <span className="font-medium">Speaker:</span> {workshop.speaker}
                        </div>
                        <div>
                          <span className="font-medium">Duration:</span> {workshop.duration}
                        </div>
                      </div>
                      <div className="mt-auto">
                        <Button 
                          to={workshop.videoLink || workshop.audioLink || '#'} 
                          variant="outline-primary" 
                          className="flex items-center justify-center"
                          fullWidth
                        >
                          {workshop.type === 'podcast' ? (
                            <>
                              <FaHeadphones className="mr-2" /> Listen Now
                            </>
                          ) : (
                            <>
                              <FaVideo className="mr-2" /> Watch Recording
                            </>
                          )}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
          
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Don't see what you're looking for? Let us know what resources would be helpful for your work.
            </p>
            <Button to="/contact" variant="primary">
              Request a Resource
            </Button>
          </div>
        </div>
      </section>

      <section className="section bg-primary bg-opacity-10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Live Workshops</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Join our interactive sessions to learn new skills and connect with other changemakers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="h-full flex flex-col">
              <div className="bg-primary text-white text-center py-2 rounded-t-lg">
                <span className="text-sm font-medium">Upcoming</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Introduction to AI for Social Good</h3>
                <p className="text-gray-700 mb-4">
                  Learn how AI can be leveraged to address social and environmental challenges in Africa.
                </p>
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-primary" />
                    <span>May 20, 2024 | 2:00 PM - 4:00 PM EAT</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">Presenter:</span> 
                    <span>Fatima Nkosi, Technology & AI Lead</span>
                  </div>
                  <div>
                    <span className="px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs font-medium rounded-full">
                      Virtual Workshop
                    </span>
                  </div>
                </div>
                <Button 
                  to="#" 
                  variant="primary" 
                  fullWidth
                >
                  Register Now
                </Button>
              </div>
            </Card>
            
            <Card className="h-full flex flex-col">
              <div className="bg-primary text-white text-center py-2 rounded-t-lg">
                <span className="text-sm font-medium">Upcoming</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Grant Writing for Youth Initiatives</h3>
                <p className="text-gray-700 mb-4">
                  Practical workshop on writing effective grant proposals for youth-led community projects.
                </p>
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-primary" />
                    <span>June 5, 2024 | 10:00 AM - 12:30 PM EAT</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">Presenter:</span> 
                    <span>Mary Njeri, Fundraising Specialist</span>
                  </div>
                  <div>
                    <span className="px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs font-medium rounded-full">
                      Virtual Workshop
                    </span>
                  </div>
                </div>
                <Button 
                  to="#" 
                  variant="primary" 
                  fullWidth
                >
                  Register Now
                </Button>
              </div>
            </Card>
            
            <Card className="h-full flex flex-col">
              <div className="bg-primary text-white text-center py-2 rounded-t-lg">
                <span className="text-sm font-medium">Upcoming</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Youth Climate Advocacy: From Local to Global</h3>
                <p className="text-gray-700 mb-4">
                  Learn strategies for effective climate advocacy at different levels of governance.
                </p>
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-primary" />
                    <span>June 15, 2024 | 3:00 PM - 5:00 PM EAT</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">Presenter:</span> 
                    <span>David Mwangi & Panel of Youth Activists</span>
                  </div>
                  <div>
                    <span className="px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs font-medium rounded-full">
                      Virtual Panel Discussion
                    </span>
                  </div>
                </div>
                <Button 
                  to="#" 
                  variant="primary" 
                  fullWidth
                >
                  Register Now
                </Button>
              </div>
            </Card>
          </div>
          
          <div className="text-center">
            <Button to="#" variant="outline-primary">
              View All Upcoming Events
            </Button>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Resource Library for Educators</h2>
              <p className="text-gray-700 mb-6">
                We provide specialized resources for educators who want to incorporate technology, environmental education, and gender equity into their teaching.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Lesson Plans:</span> Ready-to-use curriculums on tech, climate, and gender topics.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Activity Guides:</span> Interactive exercises to engage students in SDG topics.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Presentations:</span> Slides and materials for classroom teaching.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Assessment Tools:</span> Ways to measure learning and impact.
                    </div>
                  </li>
                </ul>
              </div>
              <Button to="#" variant="primary">
                Access Educator Resources
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Classroom learning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Student working on computer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Climate education activity" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Girls in STEM class" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
    </>
  );
};

export default ResourcesPage;