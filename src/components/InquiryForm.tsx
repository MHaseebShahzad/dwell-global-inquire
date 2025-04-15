
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
    <div className="w-full max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-luxury-navy mb-2 font-playfair">Investment Inquiry</h2>
      <p className="text-luxury-gray mb-6">Fill out the form below and our advisors will contact you shortly.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          <div>
            <input 
              type="text" 
              name="name" 
              placeholder="Full Name" 
              className="form-input" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              className="form-input" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number" 
              className="form-input" 
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <select 
              name="budget" 
              className="form-input" 
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
          </div>
          
          <div>
            <textarea 
              name="message" 
              placeholder="Your Message or Investment Interest" 
              className="form-input min-h-[120px]" 
              value={formData.message}
              onChange={handleChange}
              rows={5}
            />
          </div>
          
          <button 
            type="submit" 
            className="gold-button" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "GET MORE INFO NOW"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
