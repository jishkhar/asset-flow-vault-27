
import React from 'react';
import { Check, AlertCircle, Clock } from 'lucide-react';

type MilestoneStatus = 'completed' | 'in-progress' | 'planned';

interface Milestone {
  date: string;
  title: string;
  description: string;
  status: MilestoneStatus;
}

const Roadmap = () => {
  const milestones: Milestone[] = [
    {
      date: "Q2 2025",
      title: "Public Beta Launch",
      description: "Initial platform launch with core tokenization and transfer features.",
      status: "completed"
    },
    {
      date: "Q3 2025",
      title: "Community Governance",
      description: "Introduction of governance mechanisms for community-driven decision making.",
      status: "in-progress"
    },
    {
      date: "Q4 2025",
      title: "Advanced Trading Features",
      description: "Implementation of advanced trading functionality and secondary markets.",
      status: "planned"
    },
    {
      date: "Q1 2026",
      title: "Enterprise Integrations",
      description: "Enterprise API suite and integration with major financial systems.",
      status: "planned"
    },
    {
      date: "Q2 2026",
      title: "Global Expansion",
      description: "Multi-language support and compliance with international regulations.",
      status: "planned"
    }
  ];

  const getStatusIcon = (status: MilestoneStatus) => {
    switch (status) {
      case 'completed':
        return <Check className="text-green-500" size={20} />;
      case 'in-progress':
        return <AlertCircle className="text-amber-500" size={20} />;
      case 'planned':
        return <Clock className="text-navy/60" size={20} />;
    }
  };

  const getStatusClass = (status: MilestoneStatus) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50';
      case 'in-progress':
        return 'border-amber-500 bg-amber-50';
      case 'planned':
        return 'border-navy/30 bg-navy/5';
    }
  };

  return (
    <section id="roadmap" className="py-16 md:py-24 bg-navy/5" aria-label="Roadmap Section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap & Vision</h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Our journey to transform asset transfers and management across the globe
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative mb-16">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-subtleGray/50"></div>
          
          <div className="relative flex justify-between">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex flex-col items-center w-1/5">
                <div 
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-4 z-10 bg-white ${
                    getStatusClass(milestone.status).replace('bg-', 'border-')
                  }`}
                >
                  {getStatusIcon(milestone.status)}
                </div>
                
                <div className={`text-center p-4 rounded-lg border ${getStatusClass(milestone.status)} w-full`}>
                  <div className="font-montserrat font-semibold mb-1">{milestone.date}</div>
                  <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-navy/70 text-sm">{milestone.description}</p>
                </div>
                
                {/* Connecting line */}
                <div 
                  className={`absolute top-5 left-1/2 h-0.5 ${
                    milestone.status === 'completed' ? 'bg-green-500' : 
                    milestone.status === 'in-progress' ? 'bg-amber-500' : 'bg-subtleGray/50'
                  }`}
                  style={{ 
                    width: index < milestones.length - 1 ? 'calc(100% - 3rem)' : '0',
                    left: 'calc(50% + 1.25rem)'
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden relative mb-16">
          <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-subtleGray/50"></div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start">
                <div 
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 bg-white mr-6 shrink-0 ${
                    getStatusClass(milestone.status).replace('bg-', 'border-')
                  }`}
                >
                  {getStatusIcon(milestone.status)}
                </div>
                
                <div className={`p-4 rounded-lg border ${getStatusClass(milestone.status)} flex-1`}>
                  <div className="font-montserrat font-semibold mb-1">{milestone.date}</div>
                  <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-navy/70 text-sm">{milestone.description}</p>
                </div>
                
                {/* Connecting line */}
                {index < milestones.length - 1 && (
                  <div 
                    className={`absolute top-10 left-5 w-0.5 ${
                      milestone.status === 'completed' ? 'bg-green-500' : 
                      milestone.status === 'in-progress' ? 'bg-amber-500' : 'bg-subtleGray/50'
                    }`}
                    style={{ height: 'calc(100% + 2rem)' }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Vision metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-card border border-subtleGray/30">
            <h3 className="text-xl font-montserrat font-semibold mb-4">Target Metrics</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-montserrat font-semibold">1M Tokenized Assets</span>
                  <span className="text-purple">25%</span>
                </div>
                <div className="w-full h-2 bg-subtleGray/30 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-cta rounded-full" style={{ width: '25%' }}></div>
                </div>
                <p className="text-sm text-navy/60 mt-1">250,000 assets tokenized to date</p>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-montserrat font-semibold">$10M in Community Aid</span>
                  <span className="text-purple">40%</span>
                </div>
                <div className="w-full h-2 bg-subtleGray/30 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-cta rounded-full" style={{ width: '40%' }}></div>
                </div>
                <p className="text-sm text-navy/60 mt-1">$4M distributed through our community aid network</p>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-montserrat font-semibold">Global Expansion</span>
                  <span className="text-purple">30%</span>
                </div>
                <div className="w-full h-2 bg-subtleGray/30 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-cta rounded-full" style={{ width: '30%' }}></div>
                </div>
                <p className="text-sm text-navy/60 mt-1">15 countries supported out of planned 50</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-card border border-subtleGray/30">
            <h3 className="text-xl font-montserrat font-semibold mb-4">Our Future Vision</h3>
            <div className="prose text-navy/70">
              <p>
                UnityVault aims to create a globally accessible financial ecosystem where assets of any kind 
                can be seamlessly tokenized, transferred, and traded with unprecedented efficiency and minimal cost.
              </p>
              <p>
                We envision a world where geographical boundaries no longer limit financial opportunities, 
                where fractional ownership democratizes access to valuable assets, and where communities can 
                collectively manage resources in transparent, efficient ways.
              </p>
              <p>
                Through continuous innovation and collaborative development, we're building the foundation 
                for the next generation of finance—one that's more inclusive, transparent, and empowering.
              </p>
            </div>
          </div>
        </div>

        {/* Team spotlight */}
        <div className="bg-white p-6 rounded-lg shadow-card border border-subtleGray/30 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-purple/10 rounded-lg flex items-center justify-center mr-4">
              <span className="text-purple font-bold text-xl">PS</span>
            </div>
            <h3 className="text-2xl font-montserrat font-semibold">Pancake Sloths</h3>
          </div>
          
          <p className="text-navy/70 max-w-2xl mx-auto mb-6">
            From Siddaganga Institute of Technology, we're a passionate team dedicated to revolutionizing 
            asset transfers through innovative blockchain solutions.
          </p>
          
          <div className="flex justify-center items-center space-x-4">
            <div className="px-3 py-1 rounded-full bg-navy/5 text-navy/70 text-sm">
              HACKFEST-2025
            </div>
            <div className="px-3 py-1 rounded-full bg-purple/10 text-purple text-sm">
              FinTech Track
            </div>
            <div className="px-3 py-1 rounded-full bg-teal/10 text-teal text-sm">
              Siddaganga Institute of Technology
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
