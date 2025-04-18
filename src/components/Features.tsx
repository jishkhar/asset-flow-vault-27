
import React from 'react';
import { Building, Zap, Users, VoteIcon, Shield, Globe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: LucideIcon,
  title: string, 
  description: string 
}) => {
  return (
    <div className="p-6 rounded-lg bg-gradient-card dark:bg-navy/50 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:scale-[1.02] hover:border-teal/30 border border-transparent dark:border-teal/10 dark:hover:border-teal/30">
      <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-cta/10 flex items-center justify-center">
        <Icon className="text-purple dark:text-teal" size={24} />
      </div>
      <h3 className="text-lg font-montserrat font-semibold mb-2 text-navy dark:text-white">{title}</h3>
      <p className="text-navy/70 dark:text-white/70">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Building,
      title: "Asset Tokenization",
      description: "Convert real-world assets into tradable digital tokens with fractional ownership capabilities."
    },
    {
      icon: Zap,
      title: "Instant Transfers",
      description: "Send assets globally in seconds, not days, with full settlement finality."
    },
    {
      icon: Users,
      title: "Community Aid Network",
      description: "Direct support with verification and transparency for community-driven initiatives."
    },
    {
      icon: VoteIcon,
      title: "Adaptive Governance",
      description: "Shape platform policies and earn rewards through decentralized voting."
    },
    {
      icon: Shield,
      title: "Transparency & Trust",
      description: "Full visibility into all transactions and valuations through immutable records."
    },
    {
      icon: Globe,
      title: "Interoperability",
      description: "Seamless integration with existing financial infrastructure and blockchain networks."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-softWhite dark:bg-navy/95" aria-label="Features Section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy dark:text-white">Core Features</h2>
          <p className="text-lg text-navy/70 dark:text-white/70 max-w-2xl mx-auto">
            Our comprehensive suite of features transforms how assets are managed, transferred, and governed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
