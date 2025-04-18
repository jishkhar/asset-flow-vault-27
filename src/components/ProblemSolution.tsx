
import React from 'react';
import { ArrowRight, Calendar, DollarSign, Lock, Zap, Coins, FileText } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section 
      id="problem-solution" 
      className="py-16 md:py-24 bg-softWhite relative overflow-hidden"
      aria-label="Problem Solution Section"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Transforming <span className="text-purple">Traditional Finance</span> Challenges
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Problem Panel */}
          <div className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-navy/5 to-navy/10 border border-subtleGray">
            <h3 className="text-2xl font-montserrat font-semibold mb-6 text-navy">
              Current Challenges
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="mt-1 p-3 rounded-full bg-navy/10 text-navy group-hover:scale-110 transition-transform">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-montserrat font-semibold mb-2">
                    Slow Transfer Times
                  </h4>
                  <p className="text-navy/70">
                    Traditional asset transfers can take days or even weeks to settle, creating unnecessary delays and inefficiencies.
                  </p>
                  <div className="mt-3 w-full h-8 rounded-full bg-subtleGray/50 overflow-hidden">
                    <div className="h-full bg-navy/20 flex items-center pl-3 text-xs font-medium" style={{ width: '90%' }}>
                      5-7 Business Days
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="mt-1 p-3 rounded-full bg-navy/10 text-navy group-hover:scale-110 transition-transform">
                  <DollarSign size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-montserrat font-semibold mb-2">
                    High Costs
                  </h4>
                  <p className="text-navy/70">
                    Significant fees and hidden costs associated with asset transfers create barriers to entry and reduce profitability.
                  </p>
                  <div className="mt-3 flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-navy/20"
                      >
                        <DollarSign size={16} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="mt-1 p-3 rounded-full bg-navy/10 text-navy group-hover:scale-110 transition-transform">
                  <Lock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-montserrat font-semibold mb-2">
                    Lack of Transparency
                  </h4>
                  <p className="text-navy/70">
                    Opaque processes make it difficult to track asset ownership and verify transactions, creating trust issues.
                  </p>
                  <div className="mt-3 w-full h-16 bg-navy/10 rounded-lg flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-navy/20 backdrop-blur-sm rounded filter blur-sm flex items-center justify-center">
                      <Lock size={24} className="text-navy/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solution Panel */}
          <div className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-teal/5 to-purple/5 border border-teal/20">
            <h3 className="text-2xl font-montserrat font-semibold mb-6 text-navy">
              Our Solutions
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="mt-1 p-3 rounded-full bg-teal/10 text-teal group-hover:scale-110 transition-transform">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-montserrat font-semibold mb-2">
                    Instant Transfers
                  </h4>
                  <p className="text-navy/70">
                    Assets transfer in seconds, not days, enabling immediate settlement and improved liquidity management.
                  </p>
                  <div className="mt-3 w-full h-8 rounded-full bg-subtleGray/50 overflow-hidden">
                    <div className="h-full bg-teal/20 flex items-center pl-3 text-xs font-medium" style={{ width: '5%' }}>
                      &lt;5s
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="mt-1 p-3 rounded-full bg-teal/10 text-teal group-hover:scale-110 transition-transform">
                  <Coins size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-montserrat font-semibold mb-2">
                    Microscopic Fees
                  </h4>
                  <p className="text-navy/70">
                    Near-zero transaction costs open up new possibilities for micro-transactions and fractional ownership.
                  </p>
                  <div className="mt-3 flex items-center space-x-1">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal/20">
                      <span className="text-xs">¢</span>
                    </div>
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-subtleGray/30"
                      >
                        <DollarSign size={16} className="opacity-20" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="mt-1 p-3 rounded-full bg-teal/10 text-teal group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-montserrat font-semibold mb-2">
                    Complete Transparency
                  </h4>
                  <p className="text-navy/70">
                    Immutable blockchain records provide full visibility into ownership history and transaction details.
                  </p>
                  <div className="mt-3 w-full h-16 bg-teal/5 rounded-lg p-2">
                    <div className="h-full w-full bg-white/80 rounded border border-teal/20 flex items-center justify-center px-2">
                      <code className="text-xs text-navy/70 font-jetbrains">
                        {"{tx: '0x71c...9f3', asset: 'Property-A', owner: '0xf8d...3e2'}"}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Center divider with arrow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
          <div className="w-16 h-16 rounded-full bg-gradient-cta flex items-center justify-center shadow-lg">
            <ArrowRight size={24} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
