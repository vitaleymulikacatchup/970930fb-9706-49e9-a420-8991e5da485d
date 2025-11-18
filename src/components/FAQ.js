import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqs = [
    {
      question: "Do you post job ads or work for candidates or clients?",
      answer: "We work exclusively for our clients. StaffToday.AI doesn't post job ads - instead, we proactively source and contact candidates directly using our AI-powered recruitment system."
    },
    {
      question: "How fast can you source candidates?",
      answer: "Our AI system can begin sourcing candidates within hours of receiving your job requirements. Most searches produce qualified candidates within 24-48 hours, with initial screening completed within the first week."
    },
    {
      question: "What is the typical process or workflow?",
      answer: "1. You provide job requirements and specifications 2. Our AI begins sourcing and initial screening 3. We present qualified candidates with detailed profiles 4. You review and select candidates for interviews 5. We coordinate interviews and provide ongoing support throughout the hiring process."
    },
    {
      question: "Do I need recruiters on my end to use StaffToday.AI?",
      answer: "No, you don't need internal recruiters. Our AI-powered system handles the entire recruitment process, from sourcing to initial screening. You simply review the qualified candidates we present and make your hiring decisions."
    },
    {
      question: "How much are your placement fees?",
      answer: "Our fees are competitive and based on successful placements. We offer transparent pricing with no upfront costs - you only pay when we successfully place a candidate. Contact us for detailed pricing information tailored to your specific needs."
    },
    {
      question: "What happens after a candidate is hired?",
      answer: "We provide ongoing support during the onboarding process and offer replacement guarantees. Our team monitors the placement success and provides additional support if needed to ensure long-term satisfaction for both parties."
    },
    {
      question: "Can I use StaffToday for alongside recruiters?",
      answer: "Absolutely! StaffToday.AI complements your existing recruitment efforts. Many clients use our service alongside their internal teams or other recruitment partners to maximize their talent pipeline and reduce time-to-hire."
    },
    {
      question: "What roles can you source?",
      answer: "We specialize in Australian construction roles including carpenters, electricians, plumbers, site managers, project managers, builders, solar installers, gas fitters, and other skilled trades and construction professionals."
    }
  ];

  return (
    <section className="bg-navy-gradient section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  {openItems[index] ? (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openItems[index] && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Still have questions? We're here to help.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;