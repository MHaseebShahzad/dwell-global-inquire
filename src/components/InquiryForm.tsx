
import React, { useState } from "react";
import { toast } from "@/components/ui/sonner";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your inquiry! Our team will contact you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        budget: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="items-center justify-center flex flex-col w-full">
    <div className="w-full max-w-3xl h-full  mx-auto bg-white p-8 rounded-lg shadow-lg animate-fade-in border border-luxury-lightgold">
      <h2 className="text-2xl font-bold text-luxury-navy mb-2 font-playfair text-center">Exclusive Investment Opportunity</h2>
      <p className="text-luxury-gray mb-6 text-center">Connect with our expert advisors to explore premium global properties</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative">
            <input 
              type="text" 
              name="name" 
              placeholder="Full Name" 
              className="form-input w-full p-3 border border-luxury-lightgold rounded-md focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="relative">
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              className="form-input w-full p-3 border border-luxury-lightgold rounded-md focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative">
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number" 
              className="form-input w-full p-3 border border-luxury-lightgold rounded-md focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all" 
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="relative">
            <select 
              name="budget" 
              className="form-input w-full p-3 border border-luxury-lightgold rounded-md focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all appearance-none bg-white" 
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Investment Budget</option>
              <option value="£500,000 - £750,000">£500,000 - £750,000</option>
              <option value="£750,000 - £1,000,000">£750,000 - £1,000,000</option>
              <option value="£1,000,000 - £2,000,000">£1,000,000 - £2,000,000</option>
              <option value="£2,000,000+">£2,000,000+</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-luxury-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <textarea 
            name="message" 
            placeholder="Tell us about your investment goals and preferences..." 
            className="form-input w-full p-3 border border-luxury-lightgold rounded-md focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all min-h-[120px]" 
            value={formData.message}
            onChange={handleChange}
            rows={5}
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-luxury-navy text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] border-2 border-luxury-gold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              SECURE YOUR CONSULTATION
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          )}
        </button>
        
        <p className="text-xs text-center text-luxury-gray mt-4">Your information is secure and will never be shared with third parties</p>
      </form>
    </div>
    </div>
  );
};

export default InquiryForm;
