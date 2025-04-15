
import React from "react";
import InquiryForm from "@/components/InquiryForm";
import { Phone, TrendingUp, Shield, UserCheck, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 bg-luxury-navy text-white">
        <div className="container mx-auto px-4 flex flex-col justify-start items-start">
          <h1 className="text-3xl md:text-4xl font-bold font-playfair tracking-wide">Dwell Global Property</h1>
          <p className="text-luxury-lightgold mt-1 font-raleway">Empowering Smart Investments Across the Globe</p>
        </div>
      </header>

      {/* Main Content - Split Layout */}
      <main className="flex-grow flex flex-col md:flex-row min-h-[calc(100vh-260px)]">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 bg-black">
          <img 
            src="/lovable-uploads/0ae56ce4-c672-4a62-8617-6c78eac3fd3a.png" 
            alt="Luxury Property Investment Opportunity"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-white to-luxury-lightgold p-8 md:p-16 flex flex-col items-center justify-center">
          {/* Achievements & Trust Section */}
          <div className="w-full mb-8 animate-fade-in">
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
          
          <InquiryForm />
        </div>
      </main>

      {/* Why Invest With Us Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-luxury-navy mb-8 text-center font-playfair">Why Invest With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4 hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-luxury-navy rounded-full p-4 mb-4 text-luxury-gold">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-luxury-navy">High Returns</h3>
              <p className="text-luxury-gray">Curated investment portfolios for steady growth.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-luxury-navy rounded-full p-4 mb-4 text-luxury-gold">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-luxury-navy">Secure Investments</h3>
              <p className="text-luxury-gray">Legally vetted and verified properties.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-luxury-navy rounded-full p-4 mb-4 text-luxury-gold">
                <UserCheck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-luxury-navy">Expert Guidance</h3>
              <p className="text-luxury-gray">Personalized advice from industry professionals.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-luxury-navy rounded-full p-4 mb-4 text-luxury-gold">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-luxury-navy">Global Reach</h3>
              <p className="text-luxury-gray">Opportunities in top cities worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-navy py-6 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-luxury-gold" />
              <span className="text-sm md:text-base">+447885466009</span>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-luxury-lightgold">
            © {new Date().getFullYear()} Dwell Global Property. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
