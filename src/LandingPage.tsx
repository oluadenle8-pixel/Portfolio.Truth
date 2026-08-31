import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '@/imports/Vector__4_.png';

export default function LandingPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const socialLinks = [
    { name: 'Portfolio Website', url: '/portfolio', internal: true },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/truthdottt', internal: false },
    { name: 'Instagram', url: 'https://instagram.com/truthdottt', internal: false },
    { name: 'Substack', url: 'https://substack.com/@truthdottt', internal: false },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-between px-6 py-12" style={{ backgroundColor: '#131C23' }}>
      
      {/* Spacer */}
      <div className="h-10" />

      {/* Center Content Area */}
      <div className="w-full max-w-[480px] flex flex-col items-center text-center animate-fade-in">
        
        {/* Logo Container with White Circle Background */}
        <div className="w-[110px] h-[110px] bg-white rounded-full flex items-center justify-center shadow-xl mb-6 hover:scale-105 transition-transform">
          <img src={logoImg} alt="Truth logo" className="h-[55px] w-auto object-contain" />
        </div>

        {/* Alias / Subtitle */}
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '28px', color: '#ffffff' }} className="mb-2">
          Truth <span style={{ color: '#EF951C' }}>.</span>
        </h1>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '16px', color: '#a0aab2' }} className="mb-10">
          UI/UX Designer & Creative Developer
        </p>

        {/* Social & Portfolio Buttons List */}
        <div className="w-full flex flex-col gap-4">
          {socialLinks.map((link, index) => {
            const isHovered = hoveredIndex === index;
            const buttonStyle = {
              backgroundColor: isHovered ? '#EF951C' : '#1d2a35',
              color: '#ffffff',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              border: isHovered ? '1px solid #EF951C' : '1px solid #334155',
            };

            return link.internal ? (
              <Link
                key={index}
                to={link.url}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-full py-4 px-6 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg"
                style={buttonStyle}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-full py-4 px-6 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg"
                style={buttonStyle}
              >
                {link.name}
              </a>
            );
          })}
        </div>

      </div>

      {/* Footer */}
      <footer className="w-full text-center">
        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '14px', color: '#8892b0' }}>
          &copy; 2026 Truth. All rights reserved.
        </p>
      </footer>

    </main>
  );
}