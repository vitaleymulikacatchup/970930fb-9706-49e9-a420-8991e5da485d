import React from 'react';

const Specializes = () => {
  const specializations = [
    {
      title: "Carpenters",
      image: "/images/carpenter.jpg",
      description: "Skilled carpenters for residential and commercial projects"
    },
    {
      title: "Builders & Site Managers",
      image: "/images/site-manager.jpg",
      description: "Experienced site managers and project builders"
    },
    {
      title: "Plumbers & Gas Fitters",
      image: "/images/plumber.jpg",
      description: "Licensed plumbers and gas fitting specialists"
    },
    {
      title: "Electricians & Solar Installers",
      image: "/images/electrician.jpg",
      description: "Certified electricians and renewable energy specialists"
    }
  ];

  return (
    <section className="bg-navy-gradient section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            StaffToday <span className="text-gradient">AI</span> Specializes In...
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built Precise Recruitment AI designed to source the best talent for your construction projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specializations.map((spec, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl card-hover">
              <div className="aspect-w-4 aspect-h-5 bg-gray-800">
                <img 
                  src={spec.image} 
                  alt={spec.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {spec.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {spec.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializes;