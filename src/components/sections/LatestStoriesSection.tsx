// src/components/sections/LatestStoriesSection.tsx
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { stories } from '../../data/stories';
import StoryCard from '../common/StoryCard';
import Button from '../common/Button';

const LatestStoriesSection = () => {
  // Get the most recent 3 stories based on date
  const latestStories = [...stories]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">The Africa Story Initiative</h2>
            <p className="text-gray-600 text-lg">
              Amplifying voices, inspiring change
            </p>
          </div>
          <Button to="/stories" variant="outline-primary">
            View All Stories
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
        
        <div className="mt-12 p-8 bg-primary bg-opacity-10 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Story</h3>
              <p className="text-gray-700 mb-6">
                Do you have a story of resilience, innovation, or impact? Share it with us to inspire others and potentially receive support for your initiatives.
              </p>
              <Button to="/stories#submit" variant="primary">
                Submit Your Story
              </Button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Share your story" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestStoriesSection;