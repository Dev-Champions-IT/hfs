import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-900/80 shadow-lg 
        ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-black/100 backdrop-blur-sm'}
      `}
    >
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img
            src={Logo}
            alt="HFS Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
          />
         
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['About', 'Services', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-300 hover:text-[#CECA64] transition-colors font-medium"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['About', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#CECA64] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
