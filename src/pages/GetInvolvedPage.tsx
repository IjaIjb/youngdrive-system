// src/pages/GetInvolvedPage.tsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/common/Hero';
import Button from '../components/common/Button';
// import Card from '../components/common/Card';
import { FaHandsHelping, FaDonate, FaHandshake, FaShareAlt, FaLightbulb } from 'react-icons/fa';
import ContactSection from '../components/sections/ContactSection';

const GetInvolvedPage = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Get Involved | Youngdrive";

    // Check if there's a hash in the URL
    if (location.hash) {
      const id = location.hash.substring(1);
      setActiveSection(id);
      
      // Scroll to the section
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero
        title="Get Involved"
        subtitle="Join the movement to empower Africa's youth"
        backgroundImage="https://images.unsplash.com/photo-1559024094-4a0b798c8440?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Part of the Transformation</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              There are many ways to contribute to our mission of youth-led sustainable development in Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            <Button
              variant={activeSection === 'volunteer' ? 'primary' : 'outline-primary'}
              onClick={() => scrollToSection('volunteer')}
              fullWidth
              className="flex items-center justify-center gap-2"
            >
              <FaHandsHelping /> Volunteer
            </Button>
            <Button
              variant={activeSection === 'donate' ? 'primary' : 'outline-primary'}
              onClick={() => scrollToSection('donate')}
              fullWidth
              className="flex items-center justify-center gap-2"
            >
              <FaDonate /> Donate
            </Button>
            <Button
              variant={activeSection === 'partner' ? 'primary' : 'outline-primary'}
              onClick={() => scrollToSection('partner')}
              fullWidth
              className="flex items-center justify-center gap-2"
            >
              <FaHandshake /> Partner
            </Button>
            <Button
              variant={activeSection === 'share' ? 'primary' : 'outline-primary'}
              onClick={() => scrollToSection('share')}
              fullWidth
              className="flex items-center justify-center gap-2"
            >
              <FaShareAlt /> Spread the Word
            </Button>
            <Button
              variant={activeSection === 'start-initiative' ? 'primary' : 'outline-primary'}
              onClick={() => scrollToSection('start-initiative')}
              fullWidth
              className="flex items-center justify-center gap-2"
            >
              <FaLightbulb /> Start Initiative
            </Button>
          </div>
          
          <div className="space-y-24">
            <div id="volunteer" className={`scroll-mt-24 transition-opacity duration-500 ${activeSection && activeSection !== 'volunteer' ? 'opacity-50' : 'opacity-100'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaHandsHelping className="text-4xl text-primary" />
                    <h2 className="text-3xl font-bold">Volunteer</h2>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Share your skills, time, and passion to help us empower African youth. Whether you're in Africa or anywhere else in the world, there are many ways to contribute.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-4">Volunteer Opportunities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Mentor:</span> Guide young people in your area of expertise (tech, business, climate action, etc.).
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Workshop Facilitator:</span> Lead online or in-person workshops on relevant skills.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Project Supporter:</span> Help with specific initiatives based on your skills (design, writing, research, etc.).
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Event Volunteer:</span> Support our events, hackathons, and community activities.
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <Button to="#volunteer-form" variant="primary">
                    Apply to Volunteer
                  </Button>
                </div>
                
                <div id="volunteer-form" className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Volunteer Application</h3>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="firstName" className="block font-medium mb-1 text-gray-700">First Name *</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block font-medium mb-1 text-gray-700">Last Name *</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block font-medium mb-1 text-gray-700">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="location" className="block font-medium mb-1 text-gray-700">Location *</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="City, Country"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="skills" className="block font-medium mb-1 text-gray-700">Skills & Expertise *</label>
                      <textarea
                        id="skills"
                        name="skills"
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tell us about your skills, experience, and areas of expertise"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="interests" className="block font-medium mb-1 text-gray-700">Areas of Interest *</label>
                      <select
                        id="interests"
                        name="interests"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select an area</option>
                        <option value="tech">Tech Africa</option>
                        <option value="education">Education for All</option>
                        <option value="climate">Climate Action</option>
                        <option value="gender">Gender Advocacy</option>
                        <option value="stories">Africa Story Initiative</option>
                        <option value="general">General Support</option>
                      </select>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="availability" className="block font-medium mb-1 text-gray-700">Availability *</label>
                      <select
                        id="availability"
                        name="availability"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select availability</option>
                        <option value="1-2">1-2 hours/week</option>
                        <option value="3-5">3-5 hours/week</option>
                        <option value="5-10">5-10 hours/week</option>
                        <option value="10+">10+ hours/week</option>
                        <option value="project">Project-based only</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="motivation" className="block font-medium mb-1 text-gray-700">Why do you want to volunteer? *</label>
                      <textarea
                        id="motivation"
                        name="motivation"
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      ></textarea>
                    </div>
                    
                    <Button type="submit" variant="primary" fullWidth>
                      Submit Application
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            
            <div id="donate" className={`scroll-mt-24 transition-opacity duration-500 ${activeSection && activeSection !== 'donate' ? 'opacity-50' : 'opacity-100'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaDonate className="text-4xl text-primary" />
                    <h2 className="text-3xl font-bold">Donate</h2>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Your financial support makes our work possible. Every contribution, regardless of size, helps us empower more young leaders across Africa.
                  </p>
                  
                  <div className="bg-primary bg-opacity-10 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-4">Your Impact</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mr-4">
                          <span className="font-bold text-primary">$50</span>
                        </div>
                        <p className="text-gray-700">Trains one youth in Python or data visualization</p>
                      </li>
                      <li className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mr-4">
                          <span className="font-bold text-primary">$100</span>
                        </div>
                        <p className="text-gray-700">Provides materials for one community tree planting event</p>
                      </li>
                      <li className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mr-4">
                          <span className="font-bold text-primary">$250</span>
                        </div>
                        <p className="text-gray-700">Sponsors one young woman in our entrepreneurship program</p>
                      </li>
                      <li className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mr-4">
                          <span className="font-bold text-primary">$500</span>
                        </div>
                        <p className="text-gray-700">Funds a digital lab in an underserved school for a month</p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Make a Donation</h3>
                  <div className="mb-6">
                    <p className="text-gray-700 mb-4">Select an amount or enter a custom donation:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                      <button className="p-3 border-2 border-primary rounded-md font-bold text-primary hover:bg-primary hover:text-white transition-colors">$25</button>
                      <button className="p-3 border-2 border-primary rounded-md font-bold text-primary hover:bg-primary hover:text-white transition-colors">$50</button>
                      <button className="p-3 border-2 border-primary rounded-md font-bold text-primary hover:bg-primary hover:text-white transition-colors">$100</button>
                      <button className="p-3 border-2 border-primary rounded-md font-bold text-primary hover:bg-primary hover:text-white transition-colors">$250</button>
                    </div>
                    
                    <div className="relative mb-6">
                      <span className="absolute left-3 top-2 text-gray-600 text-lg">$</span>
                      <input
                        type="number"
                        placeholder="Enter custom amount"
                        className="w-full p-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block font-medium mb-2 text-gray-700">Donation Type</label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input type="radio" name="donationType" value="oneTime" className="mr-2" checked />
                          <span>One-time</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="donationType" value="monthly" className="mr-2" />
                          <span>Monthly</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="donationType" value="annual" className="mr-2" />
                          <span>Annual</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block font-medium mb-2 text-gray-700">Select Initiative (Optional)</label>
                      <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="general">Where Most Needed</option>
                        <option value="tech">Tech Africa</option>
                        <option value="education">Education for All</option>
                        <option value="climate">Climate Action Warriors</option>
                        <option value="gender">Gender Advocacy</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button variant="accent" fullWidth>
                    Proceed to Secure Payment
                  </Button>
                  
                  <div className="mt-4 text-center text-sm text-gray-600">
                    <p>All donations are secure and tax-deductible.</p>
                    <div className="flex justify-center mt-2 space-x-2">
                      <img src="https://via.placeholder.com/40x25" alt="Visa" className="h-6" />
                      <img src="https://via.placeholder.com/40x25" alt="Mastercard" className="h-6" />
                      <img src="https://via.placeholder.com/40x25" alt="American Express" className="h-6" />
                      <img src="https://via.placeholder.com/40x25" alt="PayPal" className="h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div id="partner" className={`scroll-mt-24 transition-opacity duration-500 ${activeSection && activeSection !== 'partner' ? 'opacity-50' : 'opacity-100'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaHandshake className="text-4xl text-primary" />
                    <h2 className="text-3xl font-bold">Partner With Us</h2>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Strategic partnerships multiply our impact. We collaborate with organizations that share our vision for youth-led sustainable development in Africa.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-4">Partnership Opportunities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Corporate Partnerships:</span> Support our initiatives through funding, in-kind donations, or employee volunteering.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Academic Institutions:</span> Collaborate on research, provide student internships, or host workshops.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">NGO Partnerships:</span> Join forces on complementary initiatives to maximize impact.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Government Collaboration:</span> Work with local and national governments on youth development policies.
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button to="#partner-form" variant="primary">
                      Become a Partner
                    </Button>
                    <Button to="/about" variant="outline-primary">
                      Learn More About Us
                    </Button>
                  </div>
                </div>
                
                <div id="partner-form" className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Partnership Inquiry</h3>
                  <form>
                    <div className="mb-4">
                      <label htmlFor="organization" className="block font-medium mb-1 text-gray-700">Organization Name *</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="contactName" className="block font-medium mb-1 text-gray-700">Contact Person *</label>
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="contactRole" className="block font-medium mb-1 text-gray-700">Role/Title *</label>
                        <input
                          type="text"
                          id="contactRole"
                          name="contactRole"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="email" className="block font-medium mb-1 text-gray-700">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block font-medium mb-1 text-gray-700">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="partnershipType" className="block font-medium mb-1 text-gray-700">Partnership Type *</label>
                      <select
                        id="partnershipType"
                        name="partnershipType"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select type</option>
                        <option value="corporate">Corporate Partnership</option>
                        <option value="academic">Academic Institution</option>
                        <option value="ngo">NGO/Non-profit</option>
                        <option value="government">Government</option>
                        <option value="foundation">Foundation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="interests" className="block font-medium mb-1 text-gray-700">Areas of Interest *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <label className="flex items-center">
                          <input type="checkbox" name="interests" value="tech" className="mr-2" />
                          <span>Tech Africa</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="interests" value="education" className="mr-2" />
                          <span>Education for All</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="interests" value="climate" className="mr-2" />
                          <span>Climate Action</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="interests" value="gender" className="mr-2" />
                          <span>Gender Advocacy</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="proposal" className="block font-medium mb-1 text-gray-700">Partnership Proposal *</label>
                      <textarea
                        id="proposal"
                        name="proposal"
                        rows={5}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Please describe how you'd like to partner with Youngdrive and what you hope to achieve through this partnership."
                        required
                      ></textarea>
                    </div>
                    
                    <Button type="submit" variant="primary" fullWidth>
                      Submit Inquiry
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            
            <div id="share" className={`scroll-mt-24 transition-opacity duration-500 ${activeSection && activeSection !== 'share' ? 'opacity-50' : 'opacity-100'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaShareAlt className="text-4xl text-primary" />
                    <h2 className="text-3xl font-bold">Spread the Word</h2>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Help us amplify our message by sharing our mission with your network. Your voice can help us reach more young people and potential supporters.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-4">Ways to Share</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Follow & Share:</span> Connect with us on social media and share our posts with your network.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Become an Ambassador:</span> Officially represent Youngdrive in your community or institution.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Host an Event:</span> Organize a local event to raise awareness about our initiatives.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Refer Supporters:</span> Introduce potential donors, volunteers, or partners to our work.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">Share on Social Media</h3>
                    <p className="text-gray-700 mb-4">
                      Connect with us and share our content to help spread our message:
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <a 
                        href="https://twitter.com" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center h-12 w-12 rounded-full bg-[#1DA1F2] text-white hover:bg-opacity-90 transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a 
                        href="https://facebook.com" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center h-12 w-12 rounded-full bg-[#1877F2] text-white hover:bg-opacity-90 transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a 
                        href="https://instagram.com" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:bg-opacity-90 transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center h-12 w-12 rounded-full bg-[#0A66C2] text-white hover:bg-opacity-90 transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://youtube.com" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FF0000] text-white hover:bg-opacity-90 transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Sample Message to Share</h4>
                      <div className="bg-gray-50 p-3 rounded-md text-gray-700 text-sm italic">
                        "Excited to support @Youngdrive in their mission to empower Africa's youth through tech, education, and climate action. Check out their incredible work at youngdrive.org #YouthEmpowerment #Africa #SDGs"
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="secondary" size="sm" fullWidth>
                        Copy Message
                      </Button>
                      <Button variant="primary" size="sm" fullWidth>
                        Share Now
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">Become an Ambassador</h3>
                    <p className="text-gray-700 mb-4">
                      Represent Youngdrive in your community and help us expand our reach:
                    </p>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>Organize awareness events in your community</div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>Connect us with potential partners and supporters</div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>Share our message on your platforms</div>
                      </li>
                    </ul>
                    <Button to="/contact" variant="outline-primary" fullWidth>
                      Apply to Become an Ambassador
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div id="start-initiative" className={`scroll-mt-24 transition-opacity duration-500 ${activeSection && activeSection !== 'start-initiative' ? 'opacity-50' : 'opacity-100'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaLightbulb className="text-4xl text-primary" />
                    <h2 className="text-3xl font-bold">Start Your Initiative</h2>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Have an idea for a youth-led initiative in your community? Youngdrive can provide mentorship, resources, and a platform to amplify your impact.
                  </p>
                  
                  <div className="bg-primary bg-opacity-10 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-4">Our Support Includes</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Mentorship:</span> Guidance from experienced team members and partners.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Seed Funding:</span> Initial resources to test and implement your idea.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Network Access:</span> Connections to potential partners and supporters.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-primary rounded-full mr-3 mt-1.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Visibility:</span> Promotion through our platform and networks.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Submit Your Initiative</h3>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block font-medium mb-1 text-gray-700">Your Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-medium mb-1 text-gray-700">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="location" className="block font-medium mb-1 text-gray-700">Location *</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="City, Country"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="initiativeName" className="block font-medium mb-1 text-gray-700">Initiative Name *</label>
                      <input
                        type="text"
                        id="initiativeName"
                        name="initiativeName"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="category" className="block font-medium mb-1 text-gray-700">Category *</label>
                      <select
                        id="category"
                        name="category"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select category</option>
                        <option value="tech">Technology & AI</option>
                        <option value="education">Education</option>
                        <option value="climate">Climate Action</option>
                        <option value="gender">Gender Equity</option>
                        <option value="entrepreneurship">Entrepreneurship</option>
                        <option value="health">Health</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="summary" className="block font-medium mb-1 text-gray-700">Initiative Summary *</label>
                      <textarea
                        id="summary"
                        name="summary"
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Briefly describe your initiative in 2-3 sentences"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="problem" className="block font-medium mb-1 text-gray-700">Problem & Solution *</label>
                      <textarea
                        id="problem"
                        name="problem"
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="What problem are you addressing and how does your initiative solve it?"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="impact" className="block font-medium mb-1 text-gray-700">Expected Impact *</label>
                      <textarea
                        id="impact"
                        name="impact"
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="How will your initiative make a difference? Who will benefit?"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="support" className="block font-medium mb-1 text-gray-700">Support Needed *</label>
                      <div className="grid grid-cols-2 gap-2">
                        <label className="flex items-center">
                          <input type="checkbox" name="support" value="mentorship" className="mr-2" />
                          <span>Mentorship</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="support" value="funding" className="mr-2" />
                          <span>Funding</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="support" value="network" className="mr-2" />
                          <span>Networking</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="support" value="training" className="mr-2" />
                          <span>Training</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="support" value="visibility" className="mr-2" />
                          <span>Visibility</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="support" value="other" className="mr-2" />
                          <span>Other</span>
                        </label>
                      </div>
                    </div>
                    
                    <Button type="submit" variant="primary" fullWidth>
                      Submit Initiative
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </>
  );
};

export default GetInvolvedPage;