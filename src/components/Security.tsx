
import React, { useEffect, useRef } from 'react';
import { Shield, Lock, CheckCircle, AlertTriangle } from 'lucide-react';

const Security = () => {
  const outerRingRef = useRef<HTMLDivElement>(null);
  const middleRingRef = useRef<HTMLDivElement>(null);
  const innerRingRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (outerRingRef.current) outerRingRef.current.classList.add('opacity-100');
            setTimeout(() => {
              if (middleRingRef.current) middleRingRef.current.classList.add('opacity-100');
            }, 400);
            setTimeout(() => {
              if (innerRingRef.current) innerRingRef.current.classList.add('opacity-100');
            }, 800);
            setTimeout(() => {
              if (lockRef.current) lockRef.current.classList.add('scale-100');
            }, 1200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (outerRingRef.current) {
      observer.observe(outerRingRef.current);
    }

    return () => {
      if (outerRingRef.current) {
        observer.unobserve(outerRingRef.current);
      }
    };
  }, []);

  const securityFeatures = [
    { type: "outer", name: "End-to-End Encryption", icon: CheckCircle },
    { type: "outer", name: "Multi-Factor Authentication", icon: CheckCircle },
    { type: "outer", name: "Secure API Endpoints", icon: CheckCircle },
    { type: "outer", name: "DDOS Protection", icon: CheckCircle },
    { type: "middle", name: "Smart Contract Validation", icon: CheckCircle },
    { type: "middle", name: "Comprehensive Audit Trails", icon: CheckCircle },
    { type: "middle", name: "Formal Verification", icon: CheckCircle },
    { type: "inner", name: "Decentralized Identity", icon: CheckCircle },
    { type: "inner", name: "Multi-Signature Authorization", icon: CheckCircle },
  ];

  return (
    <section id="security" className="py-16 md:py-24 bg-gradient-to-b from-navy/5 to-purple/5" aria-label="Security Section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trust & Security</h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Our multi-layered security approach ensures the safety of all assets and transactions
          </p>
        </div>

        {/* Security Visualization */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <div 
                ref={outerRingRef}
                className="absolute inset-0 rounded-full border-4 border-dashed border-purple/30 opacity-0 transition-opacity duration-700"
              ></div>
              
              {/* Middle ring */}
              <div 
                ref={middleRingRef}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border-4 border-dashed border-teal/30 opacity-0 transition-opacity duration-700"
              ></div>
              
              {/* Inner ring */}
              <div 
                ref={innerRingRef}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full border-4 border-dashed border-navy/30 opacity-0 transition-opacity duration-700"
              ></div>
              
              {/* Center shield */}
              <div 
                ref={lockRef}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 scale-0 transition-transform duration-500"
              >
                <div className="w-full h-full rounded-full bg-gradient-cta shadow-lg flex items-center justify-center">
                  <Shield className="text-white w-1/2 h-1/2" />
                </div>
              </div>
              
              {/* Security features positioned around rings */}
              {securityFeatures.map((feature, index) => {
                // Calculate position based on index and type
                let radius, angle;
                
                if (feature.type === "outer") {
                  radius = 47;
                  angle = (index * 72) % 360;
                } else if (feature.type === "middle") {
                  radius = 37;
                  angle = ((index * 120) + 60) % 360;
                } else {
                  radius = 25;
                  angle = ((index * 180) + 90) % 360;
                }
                
                const x = 50 + radius * Math.cos(angle * Math.PI / 180);
                const y = 50 + radius * Math.sin(angle * Math.PI / 180);
                
                const Icon = feature.icon;
                
                return (
                  <div 
                    key={index}
                    className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 animate-fade-in"
                    style={{ 
                      left: `${x}%`, 
                      top: `${y}%`,
                      animationDelay: `${1.5 + index * 0.2}s`
                    }}
                  >
                    <div className={`w-8 h-8 rounded-full ${
                      feature.type === "outer" ? "bg-purple/10" :
                      feature.type === "middle" ? "bg-teal/10" : "bg-navy/10"
                    } flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 ${
                        feature.type === "outer" ? "text-purple" :
                        feature.type === "middle" ? "text-teal" : "text-navy"
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow-card border border-subtleGray/30">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-2 rounded-full bg-purple/10 text-purple">
                    <Lock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-montserrat font-semibold mb-2">
                      Comprehensive Security Model
                    </h3>
                    <p className="text-navy/70">
                      Our multi-layered approach provides defense-in-depth, from basic encryption to 
                      advanced smart contract verification and multi-signature controls.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-card border border-subtleGray/30">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-2 rounded-full bg-teal/10 text-teal">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-montserrat font-semibold mb-2">
                      Regular Security Audits
                    </h3>
                    <p className="text-navy/70">
                      All smart contracts and system components undergo rigorous third-party security audits 
                      to ensure the highest standards of safety and reliability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-card border border-subtleGray/30">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-2 rounded-full bg-navy/10 text-navy">
                    <AlertTriangle size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-montserrat font-semibold mb-2">
                      Transparent Security Practices
                    </h3>
                    <p className="text-navy/70">
                      We maintain full transparency about our security measures, vulnerabilities, and 
                      incident response protocols to build trust with our community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Statistics */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-subtleGray/30">
                  <div className="text-2xl font-bold text-purple">100%</div>
                  <div className="text-sm text-navy/70">Transparent Transactions</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-subtleGray/30">
                  <div className="text-2xl font-bold text-teal">24h</div>
                  <div className="text-sm text-navy/70">Value Updates</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-subtleGray/30">
                  <div className="text-2xl font-bold text-navy">3+</div>
                  <div className="text-sm text-navy/70">Security Layers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
