import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'frosted-glass py-3 border-b border-border' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-navy dark:bg-white rounded-lg flex items-center justify-center mr-2">
                <span className="text-teal font-bold">UV</span>
              </div>
              <span className="text-navy dark:text-white font-montserrat font-bold text-xl">UnityVault</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="nav-link">Features</a>
          <a href="#use-cases" className="nav-link">Use Cases</a>
          <a href="#technology" className="nav-link">Technology</a>
          <a href="#security" className="nav-link">Security</a>
          <a href="#community" className="nav-link">Community</a>
          <a href="#roadmap" className="nav-link">Roadmap</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-navy/80 dark:text-white/80" />
            <select className="bg-transparent text-sm cursor-pointer outline-none dark:text-white">
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
          </div>
          <Button className="cta-button animate-pulse" onClick={() => window.open('#')}>
            Launch App
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            className="text-navy dark:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full frosted-glass border-t border-subtleGray/30 animate-fade-in dark:bg-navy/90">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#features" className="nav-link" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#use-cases" className="nav-link" onClick={() => setIsOpen(false)}>Use Cases</a>
            <a href="#technology" className="nav-link" onClick={() => setIsOpen(false)}>Technology</a>
            <a href="#security" className="nav-link" onClick={() => setIsOpen(false)}>Security</a>
            <a href="#community" className="nav-link" onClick={() => setIsOpen(false)}>Community</a>
            <a href="#roadmap" className="nav-link" onClick={() => setIsOpen(false)}>Roadmap</a>
            
            <div className="flex items-center gap-2 py-2">
              <Globe size={16} className="text-navy/80 dark:text-white/80" />
              <select className="bg-transparent text-sm cursor-pointer outline-none dark:text-white">
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
              </select>
            </div>
            
            <Button className="cta-button w-full" onClick={() => window.open('#')}>
              Launch App
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
