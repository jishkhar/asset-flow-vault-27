
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Link } from 'react-router-dom';

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
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo-link">
            <div className="logo-container">
              <span className="logo-text">UV</span>
            </div>
            <span className="brand-name">UnityVault</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-menu">
            <a href="#features" className="nav-link">Features</a>
            <a href="#use-cases" className="nav-link">Use Cases</a>
            <a href="#technology" className="nav-link">Technology</a>
            <a href="#security" className="nav-link">Security</a>
            <a href="#community" className="nav-link">Community</a>
            <a href="#roadmap" className="nav-link">Roadmap</a>
          </nav>

          <div className="auth-buttons">
            <ThemeToggle />
            <Link to="/auth?mode=signin">
              <button className="button button-ghost">
                Sign In
              </button>
            </Link>
            <Link to="/auth?mode=signup">
              <button className="button button-cta">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu">
            <ThemeToggle />
            <button 
              className="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-content">
              <a href="#features" className="nav-link" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#use-cases" className="nav-link" onClick={() => setIsOpen(false)}>Use Cases</a>
              <a href="#technology" className="nav-link" onClick={() => setIsOpen(false)}>Technology</a>
              <a href="#security" className="nav-link" onClick={() => setIsOpen(false)}>Security</a>
              <a href="#community" className="nav-link" onClick={() => setIsOpen(false)}>Community</a>
              <a href="#roadmap" className="nav-link" onClick={() => setIsOpen(false)}>Roadmap</a>
              
              <Link to="/auth?mode=signin" onClick={() => setIsOpen(false)}>
                <button className="button button-ghost">
                  Sign In
                </button>
              </Link>
              <Link to="/auth?mode=signup" onClick={() => setIsOpen(false)}>
                <button className="button button-cta">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
