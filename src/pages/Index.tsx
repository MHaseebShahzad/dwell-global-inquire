
import React from "react";
import InquiryForm from "@/components/InquiryForm";
import { Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 bg-luxury-navy text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-playfair tracking-wide px-4">Dwell Global Property</h1>
      </header>

      {/* Main Content - Split Layout */}
      <main className="flex-grow flex flex-col md:flex-row min-h-[calc(100vh-200px)]">
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
      <footer className="bg-luxury-navy py-4 text-white text-center">
        <div className="flex items-center justify-center space-x-2">
          <Phone size={18} />
          <span className="text-lg">+44 (0) 123 456 7890</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
