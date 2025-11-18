import React from 'react';
import { CheckCircle } from 'lucide-react';

const DeliveryTeams = () => {
  const traditionalServices = [
    "Business Coaching",
    "Recruitment Strategy",
    "Market Analysis",
    "Planning Initiatives",
    "Delivery Consulting",
    "Referral Hiring"
  ];

  const staffTodayServices = [
    "AI-Powered Sourcing",
    "Automated Candidate Screening",
    "Advanced Candidate Screening",
    "Automated Quality Reports",
    "Strategic Talent Consulting",
    "Advanced Candidate Tracking"
  ];

  return (
    <section className="bg-navy-gradient section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built for <span className="text-green-400">Delivery Teams</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Traditional recruiting is time-consuming and expensive. <strong>StaffToday.AI</strong> delivers results faster, 
            more efficiently, and with better outcomes than traditional recruitment methods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Traditional Staffing */}
          <div className="bg-red-900/20 backdrop-blur-sm rounded-xl p-8 border border-red-500/30">
            <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">
              Traditional Staffing
            </h3>
            <ul className="space-y-4">
              {traditionalServices.map((service, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* StaffToday AI */}
          <div className="bg-green-900/20 backdrop-blur-sm rounded-xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">
              StaffToday.AI
            </h3>
            <ul className="space-y-4">
              {staffTodayServices.map((service, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Experience the difference AI-powered recruitment can make for your construction projects.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Start Your Free Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeliveryTeams;