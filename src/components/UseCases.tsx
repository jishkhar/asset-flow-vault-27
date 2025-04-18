
import React, { useState } from 'react';
import { Building, Coins, ArrowLeftRight, Heart, VoteIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UseCaseCard = ({ 
  icon: Icon, 
  title, 
  description, 
  details 
}: { 
  icon: React.ComponentType<{ className?: string, size?: number }>, 
  title: string, 
  description: string,
  details: string 
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-card border border-subtleGray/30 overflow-hidden transition-all duration-300">
      <div className="p-6">
        <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-cta/10 flex items-center justify-center">
          <Icon className="text-purple" size={24} />
        </div>
        <h3 className="text-lg font-montserrat font-semibold mb-2">{title}</h3>
        <p className="text-navy/70 mb-4">{description}</p>
        
        <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-60' : 'max-h-0'}`}>
          <p className="text-navy/70 mb-4 text-sm">{details}</p>
        </div>
        
        <Button 
          variant="ghost" 
          className="p-0 h-auto text-purple hover:text-purple/80 hover:bg-transparent"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="text-underline-animation">
            {expanded ? 'Show less' : 'See how it works'}
          </span>
        </Button>
      </div>
    </div>
  );
};

const UseCases = () => {
  const useCases = [
    {
      icon: Building,
      title: "Real Estate Tokenization",
      description: "Transform property into tradable digital tokens",
      details: "Our platform enables property owners to convert real estate assets into digital tokens. This allows for fractional ownership, increased liquidity, and simplified transfers without traditional paperwork delays."
    },
    {
      icon: Coins,
      title: "Token Lending",
      description: "Lend tokens securely with transparent collateral",
      details: "Lenders can offer asset-backed loans with complete visibility into collateral and automated interest payments. Smart contracts ensure terms are enforced without requiring trust between parties."
    },
    {
      icon: ArrowLeftRight,
      title: "Asset Trading",
      description: "Trade various assets directly without intermediaries",
      details: "Our decentralized exchange enables direct peer-to-peer trading of tokenized assets, eliminating middlemen and reducing costs. Trade real estate tokens for cryptocurrency or other assets with instant settlement."
    },
    {
      icon: Heart,
      title: "Community Aid",
      description: "Direct verified donations with transparent allocation",
      details: "Enable direct support for community initiatives with full transparency. Donors can track exactly how their contributions are used, and communities can democratically vote on fund allocation."
    },
    {
      icon: VoteIcon,
      title: "Governance Participation",
      description: "Vote on platform policies and earn rewards",
      details: "Token holders can participate in governance decisions, shaping the future direction of the platform. Active participation is rewarded with additional tokens, incentivizing community involvement."
    }
  ];

  // Scroll functionality for mobile
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-navy/5" aria-label="Use Cases Section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Discover how UnityVault transforms various industries and processes
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              details={useCase.details}
            />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-navy" />
            </button>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-4 py-4 px-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="snap-center flex-shrink-0 w-[85%]"
              >
                <UseCaseCard
                  icon={useCase.icon}
                  title={useCase.title}
                  description={useCase.description}
                  details={useCase.details}
                />
              </div>
            ))}
          </div>
          
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-navy" />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="cta-button-secondary">Explore All Use Cases</Button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
