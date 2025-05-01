// src/components/sections/TeamSection.tsx
import { team } from '../../data/team';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const TeamSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Passionate individuals dedicated to empowering Africa's youth
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.id} className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-full w-48 h-48 mx-auto">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              
              <div className="flex justify-center space-x-3">
                {member.socialLinks?.linkedin && (
                  <a 
                    href={member.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
                {member.socialLinks?.twitter && (
                  <a 
                    href={member.socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                )}
                {member.socialLinks?.email && (
                  <a 
                    href={member.socialLinks.email} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary transition-colors"
                  >
                    <FaEnvelope size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
