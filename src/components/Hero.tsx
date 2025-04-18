
import React from 'react';
import { ArrowDown, Zap, Wallet, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      className="pt-28 pb-16 md:py-32 relative overflow-hidden bg-gradient-mesh"
      aria-label="Hero Section"
    >
      <div className="absolute inset-0 bg-softWhite opacity-70"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-teal/20 animate-float"
            style={{
              width: `${Math.random() * 30 + 5}px`,
              height: `${Math.random() * 30 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          ></div>
        ))}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-purple/20 animate-float"
            style={{
              width: `${Math.random() * 30 + 5}px`,
              height: `${Math.random() * 30 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 mb-10 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              The Future of Asset Transfer is Here
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-navy/80">
              Tokenize, transfer, and trade assets instantly with near-zero fees on our unified blockchain ledger
            </p>
            
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="frosted-glass p-4 rounded-lg shadow-sm border border-subtleGray/30 card-rise">
                <div className="flex items-center mb-2">
                  <Zap className="w-5 h-5 text-purple mr-2" />
                  <span className="font-montserrat font-semibold">Fast</span>
                </div>
                <p className="text-2xl font-bold text-navy">65,000 TPS</p>
              </div>
              
              <div className="frosted-glass p-4 rounded-lg shadow-sm border border-subtleGray/30 card-rise">
                <div className="flex items-center mb-2">
                  <Wallet className="w-5 h-5 text-purple mr-2" />
                  <span className="font-montserrat font-semibold">Affordable</span>
                </div>
                <p className="text-2xl font-bold text-navy">Fees &lt;$0.01</p>
              </div>
              
              <div className="frosted-glass p-4 rounded-lg shadow-sm border border-subtleGray/30 card-rise">
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 text-purple mr-2" />
                  <span className="font-montserrat font-semibold">Quick</span>
                </div>
                <p className="text-2xl font-bold text-navy">Instant Settlement</p>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="cta-button">
                Get Started Now
              </Button>
              <Button variant="outline" className="cta-button-secondary">
                Explore Features
              </Button>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="w-full md:w-2/5 z-10 flex justify-center">
            <div className="w-full max-w-md relative">
              <div className="aspect-square bg-gradient-cta/5 rounded-3xl p-6 border border-purple/10">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-navy/5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-48 h-48 bg-navy/5 rounded-full animate-pulse absolute" style={{ animationDelay: '1s' }}></div>
                    <div className="w-64 h-64 bg-navy/5 rounded-full animate-pulse absolute" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                  <div className="z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-cta opacity-20 rounded-xl"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-cta rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xl">UV</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-6">
                      {[...Array(9)].map((_, i) => (
                        <div 
                          key={i} 
                          className="aspect-square bg-gradient-cta/10 rounded-lg border border-teal/20 flex items-center justify-center transform hover:scale-110 transition-transform"
                          style={{ transitionDelay: `${i * 0.05}s` }}
                        >
                          <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-purple/60' : 'bg-teal/60'}`}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-navy/60 text-sm mb-2">Scroll to discover</span>
          <ArrowDown className="w-5 h-5 text-purple animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
