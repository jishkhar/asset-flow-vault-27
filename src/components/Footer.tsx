import React from 'react';
import { MessagesSquare, Github, Twitter, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-footer dark:bg-navy/95 text-white" aria-label="Footer">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-navy font-bold text-xl">UV</span>
              </div>
              <span className="text-white font-montserrat font-bold text-xl">UnityVault</span>
            </div>
            <p className="text-white/70 mb-6">
              The future of asset transfer and tokenization on the blockchain.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Discord"
              >
                <MessagesSquare size={18} className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#use-cases" className="text-white/70 hover:text-white transition-colors">Use Cases</a></li>
              <li><a href="#technology" className="text-white/70 hover:text-white transition-colors">Technology</a></li>
              <li><a href="#security" className="text-white/70 hover:text-white transition-colors">Security</a></li>
              <li><a href="#roadmap" className="text-white/70 hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">SDKs</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-white/70 mb-4">
              Stay updated with our latest news and updates.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-teal focus:ring-teal"
              />
              <Button 
                className="bg-teal hover:bg-teal/90 text-navy"
                size="icon"
              >
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} UnityVault. All rights reserved. HACKFEST-2025 Project.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
        
        {/* Special acknowledgment */}
        <div className="mt-6 text-center text-white/60 text-sm">
          Made with ❤️ by Pancake Sloths from Siddaganga Institute of Technology
          
          {/* Easter egg - tiny animated sloth that appears on hover */}
          <div className="inline-block relative ml-2 cursor-pointer group">
            <span className="font-bold">PS</span>
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="w-16 h-16 bg-purple/80 rounded-lg p-2 flex items-center justify-center">
                <span className="text-xs text-white">🦥 Pancake Sloths</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
