import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/construction-hero.jpg" 
          alt="Construction site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
          The Only 360 AI<br />
          Recruitment Agency,<br />
          Specializing in AU<br />
          Construction
        </h1>
        
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg sm:text-xl text-gray-200 mb-4">
            <strong>No ATS. No integrations.</strong> StaffToday isn't automation, it's placements.
          </p>
          <p className="text-lg sm:text-xl text-gray-200">
            Hand our AI recruiters a job description; they'll source, contact, & phone-screen candidates. Just like a human recruiter.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary text-lg px-8 py-4">
            Claim Your Free Search
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            Login to Dashboard
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;