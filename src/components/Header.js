import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">StaffToday.AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Book Demo
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Enterprise
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Pricing
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-primary">
              Get Free Search
            </button>
            <button className="btn-secondary">
              Log In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium">
                Book Demo
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium">
                Enterprise
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium">
                Pricing
              </a>
              <div className="pt-4 space-y-2">
                <button className="w-full btn-primary">
                  Get Free Search
                </button>
                <button className="w-full btn-secondary">
                  Log In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;