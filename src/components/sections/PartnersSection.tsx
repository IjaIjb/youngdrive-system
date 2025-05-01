// src/components/sections/PartnersSection.tsx
const PartnersSection = () => {
    const partners = [
      { name: 'Partner 1', logo: 'https://via.placeholder.com/150' },
      { name: 'Partner 2', logo: 'https://via.placeholder.com/150' },
      { name: 'Partner 3', logo: 'https://via.placeholder.com/150' },
      { name: 'Partner 4', logo: 'https://via.placeholder.com/150' },
      { name: 'Partner 5', logo: 'https://via.placeholder.com/150' },
    ];
  
    return (
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Collaborating with organizations that share our vision for youth-led development
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-16 md:h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PartnersSection;
  