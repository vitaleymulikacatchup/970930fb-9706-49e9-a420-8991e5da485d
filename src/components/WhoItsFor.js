import React from 'react';
import { Users, TrendingUp, Target, Zap } from 'lucide-react';

const WhoItsFor = () => {
  const audiences = [
    {
      icon: Users,
      title: "Businesses scaling across multi-stage construction projects",
      description: "Perfect for companies managing multiple construction phases and requiring diverse skill sets across different project stages."
    },
    {
      icon: TrendingUp,
      title: "Top 5-6 builders needing rapid site staffing",
      description: "Ideal for major construction companies that need to quickly staff multiple sites with qualified professionals."
    },
    {
      icon: Target,
      title: "Clients with recruiting advisory from construction experts",
      description: "Designed for businesses seeking strategic recruitment guidance from industry veterans who understand construction."
    },
    {
      icon: Zap,
      title: "Construction ML & top talent channeling through StaffToday",
      description: "Built for forward-thinking companies leveraging AI and machine learning to access premium construction talent."
    }
  ];

  return (
    <section className="bg-navy-gradient section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Who It's For
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built specifically for construction companies that demand excellence and efficiency in their hiring process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {audience.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Ready to transform your construction recruitment process?
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;