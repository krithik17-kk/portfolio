
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-[#8121D0] to-[#B45CF0] bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to turn your data into actionable insights? Let's discuss how we can work together
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8121D0] to-[#B45CF0] rounded-2xl flex items-center justify-center">
                  <i className="ri-mail-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Email</h3>
                  <a href="mailto:kotiankrithik3@gmail.com" className="text-gray-300 hover:text-white transition-all duration-300">kotiankrithik3@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8121D0] to-[#B45CF0] rounded-2xl flex items-center justify-center">
                  <i className="ri-linkedin-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/krko" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all duration-300">linkedin.com/in/krko</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8121D0] to-[#B45CF0] rounded-2xl flex items-center justify-center">
                  <i className="ri-github-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">GitHub</h3>
                  <a href="https://www.github.com/krithik17-kk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all duration-300">github.com/krithik17-kk</a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#331C52]/30 to-[#291C3A]/30 backdrop-blur-sm border border-[#8121D0]/20 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-4">What I Can Help With</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-[#8121D0]"></i>
                  Data Analysis & Insights
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-[#8121D0]"></i>
                  Machine Learning Solutions
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-[#8121D0]"></i>
                  Dashboard Development
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-[#8121D0]"></i>
                  Data Pipeline Architecture
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-[#8121D0]"></i>
                  Business Intelligence Strategy
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#331C52]/40 to-[#291C3A]/40 backdrop-blur-sm border border-[#8121D0]/20 rounded-2xl p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-[#8121D0] to-[#B45CF0] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-check-line text-white text-3xl"></i>
                </div>
                <h3 className="text-white font-bold text-2xl mb-4">Message Sent!</h3>
                <p className="text-gray-300">
                  Thanks for reaching out! I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#291C3A]/50 border border-[#8121D0]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#8121D0] focus:ring-2 focus:ring-[#8121D0]/20 focus:outline-none transition-all duration-300 text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#291C3A]/50 border border-[#8121D0]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#8121D0] focus:ring-2 focus:ring-[#8121D0]/20 focus:outline-none transition-all duration-300 text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-3">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    rows={6}
                    className="w-full bg-[#291C3A]/50 border border-[#8121D0]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#8121D0] focus:ring-2 focus:ring-[#8121D0]/20 focus:outline-none transition-all duration-300 resize-none text-sm"
                    placeholder="Tell me about your data project, goals, and timeline..."
                  ></textarea>
                  <div className="text-right mt-2">
                    <span className="text-gray-400 text-sm">{formData.message.length}/500</span>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="w-full bg-gradient-to-r from-[#8121D0] to-[#B45CF0] text-white py-4 px-6 rounded-lg font-semibold hover:shadow-2xl hover:shadow-[#8121D0]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line mr-2 animate-spin"></i>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-400">
            © 2024 Data Analyst Portfolio. Turning data into insights, one project at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
