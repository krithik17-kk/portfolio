
'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "I'm a Data Analyst & Data Scientist – I build data-driven solutions for real-world problems.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%20data%20visualization%20dashboard%20with%20glowing%20purple%20neural%20networks%2C%20digital%20analytics%20charts%2C%20geometric%20patterns%2C%20holographic%20displays%2C%20cyberpunk%20technology%20interface%2C%20dark%20background%20with%20neon%20purple%20accents%2C%20high-tech%20data%20science%20workspace&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="container mx-auto text-center z-10 relative">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-white">Data Analyst & Data Scientist</span>
          </h1>

          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-[#8121D0] to-[#B45CF0] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#8121D0]/30 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-folder-3-line mr-2"></i>
            View My Projects
          </button>

          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-[#8121D0] text-[#8121D0] font-semibold rounded-full hover:bg-[#8121D0] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-mail-line mr-2"></i>
            Get In Touch
          </button>
        </div>

        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce text-[#8121D0] hover:text-[#B45CF0] transition-colors duration-300 cursor-pointer"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-arrow-down-line text-2xl"></i>
            </div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#291C3A] to-transparent"></div>
    </section>
  );
}
