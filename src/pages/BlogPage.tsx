// src/pages/BlogPage.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/common/Hero';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { blogPosts } from '../data/blog';
import { FaCalendarAlt, FaUser, FaTag, FaSearch } from 'react-icons/fa';
import NewsletterSection from '../components/sections/NewsletterSection';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  useEffect(() => {
    document.title = "Blog | Youngdrive";
  }, []);

  // Get unique categories from blog posts
  const allCategories = [...new Set(blogPosts.flatMap(post => post.categories))];

  // Filter blog posts based on search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      categoryFilter === 'all' || 
      post.categories.includes(categoryFilter);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Hero
        title="Blog"
        subtitle="Insights, stories, and updates from our community"
        backgroundImage="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
                <div className="h-1 w-20 bg-primary"></div>
              </div>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 text-lg">No blog posts found matching your criteria.</p>
                  <Button 
                    variant="outline-primary" 
                    className="mt-4" 
                    onClick={() => {
                      setSearchQuery('');
                      setCategoryFilter('all');
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              ) : (
                <div className="space-y-10">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                          <div className="h-48 md:h-full w-full">
                            <img 
                              src={post.imageUrl} 
                              alt={post.title} 
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.categories.map((category, index) => (
                              <span 
                                key={index} 
                                className="px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs font-medium rounded-full cursor-pointer"
                                onClick={() => setCategoryFilter(category)}
                              >
                                {category}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-2xl font-bold mb-2 text-gray-900">{post.title}</h3>
                          <p className="text-gray-700 mb-4">{post.excerpt}</p>
                          
                          <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4 gap-4">
                            <div className="flex items-center">
                              <FaCalendarAlt className="mr-1 text-primary" />
                              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric'
                              })}</span>
                            </div>
                            <div className="flex items-center">
                              <FaUser className="mr-1 text-primary" />
                              <span>{post.author.name}</span>
                            </div>
                          </div>
                          
                          <Link to={`/blog/${post.id}`} className="text-primary font-medium hover:underline inline-flex items-center">
                            Read More <span className="ml-1">→</span>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Search</h3>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaSearch className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search articles..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    <div 
                      className={`px-3 py-2 rounded-md cursor-pointer ${
                        categoryFilter === 'all' 
                          ? 'bg-primary text-white' 
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setCategoryFilter('all')}
                    >
                      All Categories
                    </div>
                    {allCategories.map((category, index) => (
                      <div 
                        key={index}
                        className={`px-3 py-2 rounded-md cursor-pointer ${
                          categoryFilter === category 
                            ? 'bg-primary text-white' 
                            : 'hover:bg-gray-100'
                        }`}
                        onClick={() => setCategoryFilter(category)}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Featured Post</h3>
                  <Card className="overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt="Building Ethical AI Frameworks for African Challenges" 
                      className="w-full h-40 object-cover mb-4"
                    />
                    <h4 className="text-lg font-bold mb-2">Building Ethical AI Frameworks for African Challenges</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      How young African developers are ensuring AI technologies address local needs while respecting cultural contexts.
                    </p>
                    <Link to="/blog/african-ai-ethics" className="text-primary font-medium hover:underline text-sm">
                      Read Article →
                    </Link>
                  </Card>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {[...new Set(blogPosts.flatMap(post => post.tags))].slice(0, 10).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full cursor-pointer hover:bg-gray-200"
                        onClick={() => setSearchQuery(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-primary bg-opacity-10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-700 mb-4">
                    Stay updated with our latest articles, events, and opportunities.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <Button type="submit" variant="primary" fullWidth>
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
    </>
  );
};

export default BlogPage;