// src/pages/StoriesPage.tsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/common/Hero';
import StoryCard from '../components/common/StoryCard';
import Button from '../components/common/Button';
import { stories } from '../data/stories';
import NewsletterSection from '../components/sections/NewsletterSection';

const StoriesPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    title: '',
    story: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "The Africa Story Initiative | Youngdrive";

    // Scroll to submit form if hash is present
    if (location.hash === '#submit') {
      setTimeout(() => {
        const element = document.getElementById('submit-story');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit the form data to a server
    console.log('Story submission:', formData);
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      country: '',
      title: '',
      story: '',
      consent: false,
    });
  };

  return (
    <>
      <Hero
        title="The Africa Story Initiative"
        subtitle="Amplifying voices, inspiring change"
        backgroundImage="https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      {/* <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Stories</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Powerful narratives of resilience, innovation, and impact from across Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section> */}

      <section className="section bg-primary bg-opacity-10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Power of Stories</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Why we believe in the transformative impact of sharing experiences and solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inspire Action</h3>
              <p className="text-gray-700">
                Stories of resilience and innovation inspire others to believe in their own capacity to create change. A story from one community can spark action in another.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect Resources</h3>
              <p className="text-gray-700">
                When we share stories of local champions, we help connect them to funding, mentorship, and partnerships that can scale their impact beyond their communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Change Narratives</h3>
              <p className="text-gray-700">
                By highlighting youth-led solutions across Africa, we challenge deficit narratives and showcase the continent's innovation, resilience, and leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="submit-story" className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Share Your Story</h2>
              <p className="text-gray-700 mb-6">
                Do you have a story of resilience, innovation, or impact? Share it with us to inspire others and potentially receive support for your initiatives.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">How It Works</h3>
                <ol className="space-y-3 list-decimal list-inside text-gray-700">
                  <li>Submit your story using the form</li>
                  <li>Our team reviews and may contact you for more details</li>
                  <li>Selected stories are featured on our platform and social media</li>
                  <li>Stories with solutions may receive crowdfunding support</li>
                </ol>
              </div>
              
              <div className="bg-primary bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Tips for Powerful Stories</h3>
                <ul className="space-y-3 list-disc list-inside text-gray-700">
                  <li>Be authentic and speak from personal experience</li>
                  <li>Include challenges, solutions, and outcomes</li>
                  <li>Share both struggles and triumphs</li>
                  <li>Be specific about how support could help</li>
                  <li>Include photos if possible (can be sent later)</li>
                </ul>
              </div>
            </div>
            
            <div>
              {submitted ? (
                <div className="bg-primary bg-opacity-10 p-8 rounded-lg text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-gray-700 mb-4">
                    Your story has been submitted successfully. Our team will review it and may contact you for additional information.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Selected stories will be featured on our platform and social media channels to inspire others.
                  </p>
                  <Button 
                    variant="primary" 
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Story
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-soft">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block font-medium mb-1 text-gray-700">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-medium mb-1 text-gray-700">Your Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="country" className="block font-medium mb-1 text-gray-700">Country *</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select a country</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="title" className="block font-medium mb-1 text-gray-700">Story Title *</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="story" className="block font-medium mb-1 text-gray-700">Your Story *</label>
                    <textarea
                      id="story"
                      name="story"
                      value={formData.story}
                      onChange={handleChange}
                      rows={6}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                      placeholder="Share your experience, challenges, solutions, and the impact you've made or hope to make..."
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 mr-2"
                        required
                      />
                      <span className="text-sm text-gray-700">
                        I consent to Youngdrive sharing my story on their website, social media, and with partners to raise awareness and potentially mobilize resources. *
                      </span>
                    </label>
                  </div>
                  
                  <Button type="submit" variant="primary" fullWidth>
                    Submit Your Story
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
    </>
  );
};

export default StoriesPage;