
import React from 'react';
import { Button } from '@/components/ui/button';

const Technology = () => {
  const technologies = [
    {
      name: "Blockchain Layer",
      color: "bg-purple/10",
      borderColor: "border-purple/30",
      textColor: "text-purple",
      components: ["Solana Blockchain", "65,000 TPS", "Proof of History"]
    },
    {
      name: "Smart Contracts",
      color: "bg-teal/10",
      borderColor: "border-teal/30",
      textColor: "text-teal",
      components: ["Rust/Anchor", "Token Programs", "Escrow Logic"]
    },
    {
      name: "Backend Services",
      color: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-500",
      components: ["Golang/Node.js", "API Gateway", "Data Indexing"]
    },
    {
      name: "Frontend",
      color: "bg-cyan-500/10", 
      borderColor: "border-cyan-500/30",
      textColor: "text-cyan-500",
      components: ["Next.js/React", "Responsive UI", "Web3 Wallets"]
    },
    {
      name: "Infrastructure",
      color: "bg-gray-500/10",
      borderColor: "border-gray-500/30",
      textColor: "text-gray-500",
      components: ["AWS/Docker", "Distributed Network", "Secure Cloud"]
    }
  ];

  return (
    <section id="technology" className="py-16 md:py-24 bg-softWhite" aria-label="Technology Section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Architecture</h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Powered by cutting-edge blockchain technology and modern development frameworks
          </p>
        </div>

        <div className="relative">
          {/* Architecture Visualization */}
          <div className="flex flex-col items-center mb-16">
            <div className="w-full max-w-4xl aspect-[4/3] relative bg-gradient-to-br from-navy/5 to-purple/5 rounded-xl border border-subtleGray/30 p-6 md:p-12">
              {/* Line connections */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M200,40 L100,120 L200,200 L300,120 L200,40"
                  fill="none"
                  stroke="#E0E5EB"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M100,120 L100,200"
                  fill="none"
                  stroke="#E0E5EB"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M300,120 L300,200"
                  fill="none"
                  stroke="#E0E5EB"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M200,200 L200,260"
                  fill="none"
                  stroke="#E0E5EB"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Tech nodes */}
              <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-purple/10 border border-purple/30 flex items-center justify-center transform hover:scale-105 transition-transform">
                  <div className="text-center p-2">
                    <div className="text-lg font-semibold text-purple">Blockchain</div>
                    <div className="text-xs text-navy/70">Solana</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-[35%] left-[25%] transform -translate-x-1/2">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg bg-teal/10 border border-teal/30 flex items-center justify-center transform hover:scale-105 transition-transform">
                  <div className="text-center p-2">
                    <div className="text-lg font-semibold text-teal">Smart Contracts</div>
                    <div className="text-xs text-navy/70">Rust/Anchor</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-[35%] left-[75%] transform -translate-x-1/2">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center transform hover:scale-105 transition-transform">
                  <div className="text-center p-2">
                    <div className="text-lg font-semibold text-blue-500">Backend</div>
                    <div className="text-xs text-navy/70">Go/Node.js</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center transform hover:scale-105 transition-transform">
                  <div className="text-center p-2">
                    <div className="text-lg font-semibold text-cyan-500">Frontend</div>
                    <div className="text-xs text-navy/70">Next.js/React</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg bg-gray-500/10 border border-gray-500/30 flex items-center justify-center transform hover:scale-105 transition-transform">
                  <div className="text-center p-2">
                    <div className="text-lg font-semibold text-gray-500">Infrastructure</div>
                    <div className="text-xs text-navy/70">AWS/Docker</div>
                  </div>
                </div>
              </div>

              {/* Animated data flow particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-purple animate-pulse"
                    style={{
                      top: '40%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      opacity: 0.7,
                      animationDelay: `${i * 0.5}s`
                    }}
                  ></div>
                ))}
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-teal animate-pulse"
                    style={{
                      top: '60%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      opacity: 0.7,
                      animationDelay: `${i * 0.5}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Stacks */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg ${tech.color} border ${tech.borderColor} hover:shadow-lg transition-all duration-300`}
              >
                <h3 className={`text-lg font-montserrat font-semibold mb-3 ${tech.textColor}`}>
                  {tech.name}
                </h3>
                <ul className="space-y-2">
                  {tech.components.map((component, i) => (
                    <li key={i} className="text-navy/70 text-sm flex items-center">
                      <span className={`w-2 h-2 rounded-full ${tech.textColor} mr-2`}></span>
                      {component}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Code snippet background - subtle watermark */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg opacity-5 pointer-events-none z-0">
            <pre className="text-xs font-jetbrains text-navy whitespace-pre-wrap">
              {`// Sample Anchor program
program UnityVault {
  pub fn tokenize_asset(
    ctx: Context<TokenizeAsset>,
    asset_id: String,
    shares: u64,
  ) -> Result<()> {
    // Asset tokenization logic
    Ok(())
  }
  
  pub fn transfer(
    ctx: Context<Transfer>,
    amount: u64,
  ) -> Result<()> {
    // Transfer logic
    Ok(())
  }
}`}
            </pre>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button className="cta-button-secondary">
            <span className="mr-2">Technical Documentation</span>
            <span className="inline-block w-5 h-5 rounded-full bg-purple/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Technology;
