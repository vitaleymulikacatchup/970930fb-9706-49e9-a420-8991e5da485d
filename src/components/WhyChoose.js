import React from 'react';
import { Users, Target, Zap, Award, TrendingUp, Globe, Clock, CheckCircle } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: Users,
      title: "Dedicated Desk Pairing",
      description: "AI recruiters paired with human oversight for optimal results"
    },
    {
      icon: Target,
      title: "Australian Expertise",
      description: "Deep understanding of Australian construction market dynamics"
    },
    {
      icon: Zap,
      title: "Lightning ML Sourcing",
      description: "Advanced machine learning algorithms for rapid candidate identification"
    },
    {
      icon: Award,
      title: "Guaranteed Results",
      description: "Performance-based approach with measurable outcomes"
    },
    {
      icon: TrendingUp,
      title: "Improved Email Outreach",
      description: "Personalized communication strategies that get responses"
    },
    {
      icon: Globe,
      title: "Visa Screening",
      description: "Comprehensive visa and work authorization verification"
    },
    {
      icon: Clock,
      title: "Vetted Candidates Rapidly",
      description: "Streamlined screening process for faster placements"
    },
    {
      icon: CheckCircle,
      title: "Job Reference Verification",
      description: "Thorough background and reference checking process"
    }
  ];

  return (
    <section className="bg-navy-gradient section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Should You Choose <span className="text-gradient">StaffToday.AI</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another recruitment platform. We're your dedicated AI-powered construction recruitment partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 card-hover">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;