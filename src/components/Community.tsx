
import React from 'react';
import { MessagesSquare, Github, Twitter, Send, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SocialLink = ({ 
  platform, 
  icon: Icon, 
  color,
  url 
}: { 
  platform: string, 
  icon: LucideIcon,
  color: string,
  url: string
}) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-subtleGray/30 hover:shadow-md transition-all duration-300 transform hover:translate-y-[-2px]"
    >
      <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center mr-4`}>
        <Icon className="text-white" size={20} />
      </div>
      <div>
        <h3 className="font-montserrat font-semibold text-navy">{platform}</h3>
        <p className="text-sm text-navy/70">Join our community</p>
      </div>
      <ArrowRight className="ml-auto text-navy/30" size={16} />
    </a>
  );
};

const Community = () => {
  const socialPlatforms = [
    { 
      platform: "Discord", 
      icon: MessagesSquare, 
      color: "bg-[#5865F2]",
      url: "#"
    },
    { 
      platform: "GitHub", 
      icon: Github, 
      color: "bg-[#333333]",
      url: "#"
    },
    { 
      platform: "Twitter", 
      icon: Twitter, 
      color: "bg-[#1DA1F2]",
      url: "#" 
    }
  ];

  return (
    <section id="community" className="py-16 md:py-24 bg-softWhite" aria-label="Community Section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Community & Ecosystem</h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Join our growing community of developers, users, and supporters
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-montserrat font-semibold mb-4">Connect With Us</h3>
              <p className="text-navy/70 mb-6">
                Join our vibrant community to stay updated, get support, and contribute to our ecosystem.
              </p>
              
              <div className="space-y-4">
                {socialPlatforms.map((platform, index) => (
                  <SocialLink
                    key={index}
                    platform={platform.platform}
                    icon={platform.icon}
                    color={platform.color}
                    url={platform.url}
                  />
                ))}
              </div>
            </div>
            
            {/* Community metrics */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-subtleGray/30 text-center">
                <div className="text-2xl font-bold text-purple">500+</div>
                <div className="text-sm text-navy/70">Community Members</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-subtleGray/30 text-center">
                <div className="text-2xl font-bold text-teal">50+</div>
                <div className="text-sm text-navy/70">Open Source Contributors</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-card border border-subtleGray/30">
              <h3 className="text-xl font-montserrat font-semibold mb-4">Stay Updated</h3>
              <p className="text-navy/70 mb-6">
                Subscribe to our newsletter for the latest updates, feature releases, and community news.
              </p>
              
              <form className="space-y-4">
                <div className="flex space-x-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="border-subtleGray focus:border-purple focus:ring-purple"
                    aria-label="Email address"
                    required
                  />
                  <Button className="bg-gradient-cta text-white px-4">
                    <Send size={16} className="mr-2" />
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-navy/60">
                  Join 500+ innovators getting weekly updates. We respect your privacy.
                </p>
              </form>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card border border-subtleGray/30">
              <h3 className="text-xl font-montserrat font-semibold mb-4">Developer Resources</h3>
              <div className="space-y-4">
                <div className="p-4 bg-navy/5 rounded-lg border border-navy/10">
                  <h4 className="font-montserrat font-semibold mb-2 flex items-center">
                    <div className="w-6 h-6 rounded bg-navy/10 flex items-center justify-center mr-2">
                      <span className="text-navy text-xs">1</span>
                    </div>
                    API Documentation
                  </h4>
                  <p className="text-sm text-navy/70">
                    Comprehensive API references and guides for integrating with UnityVault.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple mt-2">
                    <span className="text-underline-animation">View Documentation</span>
                  </Button>
                </div>
                
                <div className="p-4 bg-navy/5 rounded-lg border border-navy/10">
                  <h4 className="font-montserrat font-semibold mb-2 flex items-center">
                    <div className="w-6 h-6 rounded bg-navy/10 flex items-center justify-center mr-2">
                      <span className="text-navy text-xs">2</span>
                    </div>
                    SDK Downloads
                  </h4>
                  <p className="text-sm text-navy/70">
                    Client libraries in multiple languages to simplify integration.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple mt-2">
                    <span className="text-underline-animation">Download SDKs</span>
                  </Button>
                </div>
                
                <div className="p-4 bg-navy/5 rounded-lg border border-navy/10">
                  <h4 className="font-montserrat font-semibold mb-2 flex items-center">
                    <div className="w-6 h-6 rounded bg-navy/10 flex items-center justify-center mr-2">
                      <span className="text-navy text-xs">3</span>
                    </div>
                    Sample Code
                  </h4>
                  <code className="text-xs block p-2 bg-navy/10 rounded font-jetbrains mb-2">
                    {`const asset = await UnityVault.tokenize({
  assetId: "property-123",
  shares: 1000,
  initialPrice: 100
});`}
                  </code>
                  <Button variant="link" className="p-0 h-auto text-purple">
                    <span className="text-underline-animation">See more examples</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
