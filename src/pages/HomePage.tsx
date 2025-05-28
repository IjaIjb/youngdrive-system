// src/pages/HomePage.tsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Hero from '../components/common/Hero';
import Button from '../components/common/Button';
import AboutSection from '../components/sections/AboutSection';
import FeaturedInitiativesSection from '../components/sections/FeaturedInitiativesSection';
// import ImpactStatsSection from '../components/sections/ImpactStatsSection';
import LatestStoriesSection from '../components/sections/LatestStoriesSection';
import NewsletterSection from '../components/sections/NewsletterSection';
import PartnersSection from '../components/sections/PartnersSection';

const HomePage = () => {
  useEffect(() => {
    document.title = "Youngdrive | Empowering Youth to Drive Africa's SDG Transformation";
  }, []);

  return (
    <>
      <Hero
        title={
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              Empowering Africa's Youth to Drive <span className="text-accent">Sustainable Change</span>
            </h1>
          </div>
        }
        subtitle="Through technology, education, and advocacy, we equip young leaders with the tools to transform Africa's future."
        backgroundImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
        fullHeight
      >
        <div className="flex flex-wrap gap-4 mt-8">
          <Button to="/get-involved" variant="accent" size="lg">
            Join the Movement
          </Button>
          <Button to="/stories"  size="lg">
            Share Your Story
          </Button>
        </div>
      </Hero>

      {/* <ImpactStatsSection /> */}
      
      <FeaturedInitiativesSection />
      
      <AboutSection />
      
      <LatestStoriesSection />

      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready to Get Involved?</h2>
              <p className="text-lg mb-6 text-white opacity-90">
                Whether you're a student, professional, educator, or organization, there are many ways to contribute to our mission of youth-led sustainable development.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white bg-opacity-10 p-5 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Volunteer</h3>
                  <p className="text-white opacity-90 mb-3">Share your skills and time with young Africans.</p>
                  <Link to="/get-involved#volunteer" className="flex items-center text-accent hover:underline">
                    Learn more <FaArrowRight className="ml-2" />
                  </Link>
                </div>
                <div className="bg-white bg-opacity-10 p-5 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Donate</h3>
                  <p className="text-white opacity-90 mb-3">Support our programs and initiatives financially.</p>
                  <Link to="/get-involved#donate" className="flex items-center text-accent hover:underline">
                    Learn more <FaArrowRight className="ml-2" />
                  </Link>
                </div>
                <div className="bg-white bg-opacity-10 p-5 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Partner</h3>
                  <p className="text-white opacity-90 mb-3">Collaborate with us on projects and initiatives.</p>
                  <Link to="/get-involved#partner" className="flex items-center text-accent hover:underline">
                    Learn more <FaArrowRight className="ml-2" />
                  </Link>
                </div>
                <div className="bg-white bg-opacity-10 p-5 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Spread the Word</h3>
                  <p className="text-white opacity-90 mb-3">Share our mission with your network.</p>
                  <Link to="/get-involved#share" className="flex items-center text-accent hover:underline">
                    Learn more <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              <Button to="/get-involved" variant="accent">
                Explore All Ways to Help
              </Button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Volunteers working together" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <PartnersSection />
      
      <NewsletterSection />
    </>
  );
};

export default HomePage;