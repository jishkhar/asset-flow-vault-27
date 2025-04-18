import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-navy/90 to-purple/80 dark:from-purple/20 dark:to-navy/90 text-white" aria-label="Call to Action Section">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white opacity-5 animate-float"
              style={{
                width: `${Math.random() * 100 + 20}px`,
                height: `${Math.random() * 100 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-text">
            Ready to Transform Asset Transfers?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/80">
            Join UnityVault on Finternet and experience the future of financial technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-navy hover:bg-white/90 transition-all px-8 py-6 rounded-full text-lg font-montserrat font-semibold"
              onClick={() => window.open('#')}
            >
              Launch App
              <ArrowRight className="ml-2" size={18} />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg font-montserrat font-semibold"
              onClick={() => window.open('#')}
            >
              Join Our Community
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">65k</div>
              <div className="text-white/70">Transactions</div>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-white/70">Users</div>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">$5M+</div>
              <div className="text-white/70">Assets Tokenized</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
