// src/pages/AboutPage.tsx
import { useEffect } from 'react';
import Hero from '../components/common/Hero';
import TeamSection from '../components/sections/TeamSection';
import NewsletterSection from '../components/sections/NewsletterSection';
import { FaRocket, FaEye, FaHandshake, FaUsers } from 'react-icons/fa';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | Youngdrive";
  }, []);

  return (
    <>
      <Hero
        title="About Youngdrive"
        subtitle="Our mission, vision, and the story behind our movement"
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="inline-block p-3 bg-primary bg-opacity-10 rounded-lg mb-4">
                  <FaRocket className="text-3xl text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-700 text-lg">
                  "Youngdrive mobilizes Africa's youth to tackle the continent's greatest challenges through innovation, education, and collective action—one SDG at a time."
                </p>
              </div>
              
              <div className="mb-8">
                <div className="inline-block p-3 bg-primary bg-opacity-10 rounded-lg mb-4">
                  <FaEye className="text-3xl text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-700 text-lg">
                  "An Africa where young people are the architects of inclusive, sustainable development."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="African youth in tech workshop" 
                className="rounded-lg shadow-lg"
              />
              {/* <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-md w-64">
                <p className="text-gray-600 italic">
                  "Young Africans aren't just the future—they're the present, actively solving today's challenges."
                </p>
                <p className="text-primary font-bold mt-2">— Kwame Osei, Founder</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              How a small group of students grew into a Pan-African movement
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* <div className="relative border-l-4 border-primary pl-6 pb-10">
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-2 top-2"></div>
              <div className="mb-6">
                <span className="text-sm font-bold text-gray-500 block mb-1">2020</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">The Beginning</h3>
                <p className="text-gray-700">
                  Youngdrive began as a small collective of students passionate about AI's potential to solve local problems in Nairobi, Kenya. Led by Kwame Osei, the group organized weekend coding workshops for underserved youth.
                </p>
              </div>
            </div> */}
            
            <div className="relative border-l-4 border-primary pl-6 pb-10">
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-2 top-2"></div>
              <div className="mb-6">
                <span className="text-sm font-bold text-gray-500 block mb-1">2021</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">The Beginning</h3>
                <p className="text-gray-700">
             Youngdrive began as a small collective of students passionate about inclusion of youth people in leadership and other spheres of live with potential to solve local problems in Nigeria. Led by Tomiwa Adegbite, the group organized training programs, skilling workshops for underserved youth. After seeing how technology education transformed lives, we expanded our focus to include climate action and education initiatives. Our first campaign mobilized over 500 youth participants.
                </p>
              </div>
            </div>
            
            <div className="relative border-l-4 border-primary pl-6 pb-10">
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-2 top-2"></div>
              <div className="mb-6">
                <span className="text-sm font-bold text-gray-500 block mb-1">2024</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Expanding the Vision: The Africa Story Initiative</h3>
                <p className="text-gray-700">
                 Recognizing that powerful stories drive change, we launched the Africa Story Initiative to amplify voices of resilience and innovation across the continent, raising awareness and funds for grassroots solutions.
                </p>
              </div>
            </div>
            
            <div className="relative border-l-4 border-primary pl-6 pb-10">
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-2 top-2"></div>
              <div className="mb-6">
                <span className="text-sm font-bold text-gray-500 block mb-1">2025</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pan-African Expansion</h3>
                <p className="text-gray-700">
                Through strategic partnerships with universities and NGOs, Youngdrive plans to expand to 15 African countries, running programs in tech education, environmental conservation, and gender equity. 
                </p>
              </div>
            </div>
            
            <div className="relative pl-6">
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-2 top-2"></div>
              <div>
                <span className="text-sm font-bold text-gray-500 block mb-1">Today</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">The Movement Continues</h3>
                <p className="text-gray-700">
                Today, Youngdrive is a thriving movement committed to transforming their communities. Our initiatives have trained thousands in tech skills, support youths’ involvement in SDGs and climate action, and advanced gender equity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              How we're making a meaningful impact across Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-4">
                <FaUsers className="text-4xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Youth-Led Development</h3>
              <p className="text-gray-700">
                We believe in empowering youth not just as beneficiaries, but as leaders and decision-makers. Our programs are designed by youth, for youth, ensuring solutions address real needs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-4">
                <FaHandshake className="text-4xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Partnership Approach</h3>
              <p className="text-gray-700">
                We collaborate with local communities, government agencies, and international organizations to leverage resources and expertise for maximum impact and sustainability.
              </p>
            </div>
          </div>
          
          <div className="mt-10 p-8 bg-primary bg-opacity-10 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Our Theory of Change</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <h4 className="text-lg font-bold text-primary mb-2">Inputs</h4>
                <p className="text-gray-700">Youth + Technology + Training + Resources</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <h4 className="text-lg font-bold text-primary mb-2">Activities</h4>
                <p className="text-gray-700">Workshops + Advocacy + Mentorship + Projects</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <h4 className="text-lg font-bold text-primary mb-2">Outcomes</h4>
                <p className="text-gray-700">Skills + Jobs + Policies + Community Action</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <h4 className="text-lg font-bold text-primary mb-2">Impact</h4>
                <p className="text-gray-700">Sustainable Development Goals Achieved</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <TeamSection /> */}
      
      <NewsletterSection />
    </>
  );
};

export default AboutPage;