
import React from "react";
import InquiryForm from "@/components/InquiryForm";
import { Phone, TrendingUp, Shield, UserCheck, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 bg-luxury-navy text-white">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ad8b1b59-92f2-459c-a27d-ce57fbada460.png" 
              alt="Dwell Global Property Logo" 
              className="h-12 mr-3"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold font-playfair tracking-wide">Dwell Global Property</h1>
              <p className="text-luxury-lightgold text-sm md:text-base font-raleway">Empowering Smart Investments Across the Globe</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Split Layout */}
      <main className="flex-grow flex flex-col md:flex-row min-h-[calc(100vh-180px)]">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 bg-black">
          <img 
            src="/lovable-uploads/0ae56ce4-c672-4a62-8617-6c78eac3fd3a.png" 
            alt="Luxury Property Investment Opportunity"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-white to-luxury-lightgold p-6 md:p-12 flex flex-col items-center justify-start">
          {/* Achievements & Trust Section */}
          <div className="w-full mb-6 animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-sm">
                <p className="text-luxury-navy font-bold text-xl md:text-2xl">10+</p>
                <p className="text-luxury-gray text-sm">Years in Global Markets</p>
              </div>
              <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-sm">
                <p className="text-luxury-navy font-bold text-xl md:text-2xl">500+</p>
                <p className="text-luxury-gray text-sm">Clients from 20+ Countries</p>
              </div>
              <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-sm">
                <p className="text-luxury-navy font-bold text-xl md:text-2xl">$100M+</p>
                <p className="text-luxury-gray text-sm">Assets Managed</p>
              </div>
              <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-sm">
                <p className="text-luxury-navy font-bold text-xl md:text-2xl">4.9/5</p>
                <p className="text-luxury-gray text-sm">Rated by Investors</p>
              </div>
            </div>
          </div>
          
          {/* Why Invest With Us - Right Column */}
          <div className="w-full mb-6 animate-fade-in">
            <h2 className="text-xl md:text-2xl font-bold text-luxury-navy mb-4 font-playfair">Why Invest With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start bg-white bg-opacity-70 p-3 rounded-lg shadow-sm">
                <div className="bg-luxury-navy rounded-full p-2 mr-3 text-luxury-gold flex-shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-luxury-navy">High Returns</h3>
                  <p className="text-luxury-gray text-sm">Curated investment portfolios for steady growth.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white bg-opacity-70 p-3 rounded-lg shadow-sm">
                <div className="bg-luxury-navy rounded-full p-2 mr-3 text-luxury-gold flex-shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-luxury-navy">Secure Investments</h3>
                  <p className="text-luxury-gray text-sm">Legally vetted and verified properties.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white bg-opacity-70 p-3 rounded-lg shadow-sm">
                <div className="bg-luxury-navy rounded-full p-2 mr-3 text-luxury-gold flex-shrink-0">
                  <UserCheck size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-luxury-navy">Expert Guidance</h3>
                  <p className="text-luxury-gray text-sm">Personalized advice from industry professionals.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white bg-opacity-70 p-3 rounded-lg shadow-sm">
                <div className="bg-luxury-navy rounded-full p-2 mr-3 text-luxury-gold flex-shrink-0">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-luxury-navy">Global Reach</h3>
                  <p className="text-luxury-gray text-sm">Opportunities in top cities worldwide.</p>
                </div>
              </div>
            </div>
          </div>
          
          <InquiryForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-luxury-navy py-5 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-luxury-gold" />
              <span className="text-sm md:text-base">+447885466009</span>
            </div>
          </div>
          <div className="mt-3 text-center text-xs text-luxury-lightgold">
            © {new Date().getFullYear()} Dwell Global Property. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
