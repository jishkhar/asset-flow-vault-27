
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Features from '@/components/Features';
import UseCases from '@/components/UseCases';
import Technology from '@/components/Technology';
import Security from '@/components/Security';
import Community from '@/components/Community';
import Roadmap from '@/components/Roadmap';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = id && document.getElementById(id);
        
        if (element) {
          const navHeight = 80; // Approximate height of the navbar
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Add accessibility improvements
  useEffect(() => {
    // Update document title
    document.title = 'UnityVault on Finternet | Tokenize, Transfer, Trade';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'UnityVault enables asset tokenization, instant transfers, and trading with near-zero fees on our unified blockchain ledger.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-softWhite">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <UseCases />
        <Technology />
        <Security />
        <Community />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
