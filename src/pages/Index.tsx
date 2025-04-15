
import React from "react";
import InquiryForm from "@/components/InquiryForm";
import { Phone, Mail, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 bg-luxury-navy text-white">
        <div className="container mx-auto px-4 flex justify-start items-center">
          <h1 className="text-3xl md:text-4xl font-bold font-playfair tracking-wide">Dwell Global Property</h1>
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
        <div className="w-full md:w-1/2 bg-gradient-to-br from-white to-luxury-lightgold p-8 md:p-16 flex items-center justify-center">
          <InquiryForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-luxury-navy py-6 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            {/* Phone Numbers */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone size={16} className="text-luxury-gold" />
                <span className="text-sm md:text-base">UK +44 7740 622860</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone size={16} className="text-luxury-gold" />
                <span className="text-sm md:text-base">UAE +971 50 964 0548</span>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Mail size={16} className="text-luxury-gold" />
              <span className="text-sm md:text-base">Paul@dwellglobalproperty.com</span>
            </div>
            
            {/* Website */}
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Globe size={16} className="text-luxury-gold" />
              <span className="text-sm md:text-base">www.dwellglobalproperty.com</span>
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
