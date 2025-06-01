// src/components/sections/NewsletterSection.tsx
import { useState } from 'react';
import Button from '../common/Button';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, we would handle form submission here
    console.log('Newsletter sign up:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="section  ">
    {/* <section className="section bg-primary text-white"> */}
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8  opacity-90">
            Join our newsletter to receive updates on programs, success stories, and opportunities.
          </p>
          
          {submitted ? (
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Thank You!</h3>
              <p>You've successfully subscribed to our newsletter.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow p-3 rounded-md text-gray-800 border border-primary focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <Button type="submit" variant="accent">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
