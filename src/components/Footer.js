import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-gray-800">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-white">StaffToday.AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The AI Recruitment Agency for Australian Construction
            </p>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm font-medium">Four Frame Labs Pte. Ltd.</p>
              <p className="text-gray-500 text-sm">Registered Office Address:</p>
              <p className="text-gray-500 text-sm">
                2 Venture Drive, #19-21, Vision Exchange, Singapore 608526
              </p>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">SUPPORT</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Mail className="w-4 h-4 text-gray-400" />
              <a href="mailto:support@stafftoday.ai" className="text-gray-400 hover:text-white transition-colors">
                support@stafftoday.ai
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              Questions? Billing? We're here to help.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">LEGAL</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2025 StaffToday.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;