
'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i] === 'home' ? 'hero' : sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: 'ri-home-line' },
    { id: 'about', label: 'About Me', icon: 'ri-user-line' },
    { id: 'skills', label: 'Skills', icon: 'ri-code-s-slash-line' },
    { id: 'projects', label: 'Projects', icon: 'ri-folder-3-line' },
    { id: 'contact', label: 'Contact Me', icon: 'ri-mail-line' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#291C3A]/95 backdrop-blur-md border-b border-[#8121D0]/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-4xl font-bold text-white hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <span className="font-[\'Pacifico\']">Krithik Kotian</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#8121D0] to-[#B45CF0] text-white shadow-lg shadow-[#8121D0]/30'
                    : 'text-gray-300 hover:text-white hover:bg-[#8121D0]/20'
                }`}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className={`${item.icon} text-sm`}></i>
                </div>
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            {/* Social Links */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href="https://www.linkedin.com/in/krko" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#8121D0]/20 to-[#B45CF0]/20 border border-[#8121D0]/30 rounded-full text-white hover:text-white hover:bg-gradient-to-br hover:from-[#8121D0] hover:to-[#B45CF0] hover:border-transparent transition-all duration-300 cursor-pointer"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              
              <a 
                href="https://github.com/dataanalyst" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#8121D0]/20 to-[#B45CF0]/20 border border-[#8121D0]/30 rounded-full text-white hover:text-white hover:bg-gradient-to-br hover:from-[#8121D0] hover:to-[#B45CF0] hover:border-transparent transition-all duration-300 cursor-pointer"
              >
                <i className="ri-github-fill text-lg"></i>
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white hover:text-[#8121D0] transition-colors duration-300 cursor-pointer">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-menu-line text-xl"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
