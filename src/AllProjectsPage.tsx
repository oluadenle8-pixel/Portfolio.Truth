import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import proj1 from '@/imports/Project_1.png'; 
import proj2 from '@/imports/Project_2.png';
import proj3 from '@/imports/Project_3.png';
import logoImg from '@/imports/Vector__4_.png';

// ============================================================================
// 📁 PROJECT DATABASE (Added 'link' property to each object)
// ============================================================================
const allProjectsData = [
  {
    title: 'Character Design',
    img: proj1,
    accentColor: '#EF951C',
    category: 'Game Design',
    desc: "This project demonstrates my ability to translate user personalities and brand values into a tangible, visually compelling asset.",
    link: 'https://www.linkedin.com/posts/truthdottt_characterdesign-digitalart-uiux-activity-7432731206397399040-SUxU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFC14woByBOg5flFDxSpyrMyVj4H6XH1d5M',
  },
  {
    title: 'Space Explorer',
    img: proj2,
    accentColor: '#C1E7FF',
    category: 'Mobile Apps',
    desc: 'A mobile app UI design for an interactive space exploration learning platform, combining astronomy data with an immersive user experience.',
    link: 'https://www.figma.com/proto/aN5z7BTWjnahkgQ1zaU0pO/Space-Explorer?node-id=2105-4&p=f&t=ZHsWNKy4lJ6lzQNR-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2105%3A4',
  },
  {
    title: 'Nike App',
    img: proj3,
    accentColor: '#aaaaaa',
    category: 'Mobile Apps',
    desc: 'An e-commerce app redesign for Nike focusing on product showcase, clean navigation, and a premium brand experience for sneaker enthusiasts.',
    link: 'https://www.figma.com/proto/21bc6UgNRg1Ok5Bd9QoN7h/Nike-Airforce-Design?node-id=155-71&t=BZsTE9ifCwqZGuWB-0&scaling=scale-down&content-scaling=fixed&page-id=155%3A4',
  },
  {
    title: 'CookIt',
    img: proj1, 
    accentColor: '#FE6D44',
    category: 'Web Platforms',
    desc: 'A hybrid retrieval and generative machine learning system architecture designed to deliver highly personalized recipes with offline backup support.',
    link: '',
  },
  {
    title: 'HapticNav',
    img: proj2, 
    accentColor: '#3B6EA0',
    category: 'Academic',
    desc: 'An academic project featuring a voice-guided navigation interface specifically designed to enhance accessibility and user confidence.',
    link: '',
  },
  {
    title: 'Hostel Pal',
    img: proj3, 
    accentColor: '#EF951C',
    category: 'Web Platforms',
    desc: 'A mobile web app landing page and platform for university accommodation management, featuring optimized user flows and clean pricing structures.',
    link: '',
  },
  {
    title: 'SDG Rush',
    img: proj1, 
    accentColor: '#542CA9',
    category: 'Game Design',
    desc: 'A mission-driven mobile game project focusing on an engaging user interface and dynamic experience design.',
    link: '',
  },
  {
    title: 'HCI Insight',
    img: proj2, 
    accentColor: '#C1E7FF',
    category: 'Mobile Apps',
    desc: 'A comprehensive multi-sided educational platform design focused entirely on core human-computer interaction principles.',
    link: '',
  }
];
// ============================================================================

export default function AllProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Mobile Apps', 'Web Platforms', 'Game Design', 'Academic'];

  const filteredProjects = activeFilter === 'All' 
    ? allProjectsData 
    : allProjectsData.filter(project => project.category === activeFilter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col justify-between" style={{ backgroundColor: '#131C23' }}>
      
      <div>
        {/* NAVIGATION BAR */}
        <nav className="w-full h-[80px] flex items-center justify-between px-6 md:px-12 shadow-md sticky top-0 z-50" style={{ backgroundColor: '#ffffff' }}>
          <Link to="/" className="hover:scale-105 transition-transform">
            <img src={logoImg} alt="Truth logo" className="h-[40px] w-auto object-contain" />
          </Link>
          <Link to="/" 
             style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }} 
             className="text-[#131C23] hover:text-[#EF951C] transition-colors flex items-center gap-2">
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        <section className="pt-20 pb-32 max-w-[1350px] mx-auto px-6">
          
          {/* Header Area */}
          <div className="flex flex-col items-center text-center mb-12">
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '50px', lineHeight: 1 }} className="mb-4">
              <span style={{ color: '#C1E7FF' }}>A</span>
              <span style={{ color: '#ffffff' }}>ll Projects</span>
            </h1>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '19px', color: '#a0aab2', maxWidth: '600px' }}>
              A complete archive of my UI/UX designs, case studies, and digital experiences.
            </p>
          </div>

          {/* DYNAMIC FILTER BAR */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setActiveFilter(category)}
                className="px-6 py-2 rounded-full transition-all duration-300"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  backgroundColor: activeFilter === category ? '#EF951C' : 'transparent',
                  color: activeFilter === category ? '#ffffff' : '#a0aab2',
                  border: activeFilter === category ? '1px solid #EF951C' : '1px solid #334155'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* THE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[50px] justify-items-center transition-all duration-500">
            {filteredProjects.map((project, index) => (
              
              <div 
                key={index} 
                className="relative w-full max-w-[400px] h-[500px] rounded-[10px] overflow-hidden group animate-fade-in"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              >
                <img 
                  src={project.img} 
                  alt={`${project.title} project`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                
                {/* MOBILE OVERLAY */}
                <div className="absolute inset-x-0 bottom-0 pt-24 pb-8 px-8 flex lg:hidden flex-col items-start justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '32px', lineHeight: 1.2 }} className="mb-4 text-left">
                    {project.title.split(' ').map((word, wi) => (
                      <span key={wi}>
                        {wi > 0 && ' '}
                        <span style={{ color: project.accentColor }}>{word[0]}</span>
                        <span style={{ color: '#ffffff' }}>{word.slice(1)}</span>
                      </span>
                    ))}
                  </h3>
                  
                  <a 
                    href={project.link || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rounded-full transition-transform hover:scale-105 flex items-center justify-center"
                    style={{ 
                      width: '140px', 
                      height: '45px', 
                      backgroundColor: project.accentColor, 
                      color: project.accentColor === '#C1E7FF' ? '#131C23' : '#ffffff', 
                      fontFamily: 'Poppins, sans-serif', 
                      fontWeight: 500, 
                      fontSize: '18px' 
                    }}
                  >
                    View
                  </a>
                </div>

                {/* DESKTOP OVERLAY */}
                <div className="absolute inset-0 hidden lg:flex flex-col items-center justify-center px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                  
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '32px', lineHeight: 1.2 }} className="mb-4 text-center">
                    {project.title.split(' ').map((word, wi) => (
                      <span key={wi}>
                        {wi > 0 && ' '}
                        <span style={{ color: project.accentColor }}>{word[0]}</span>
                        <span style={{ color: '#ffffff' }}>{word.slice(1)}</span>
                      </span>
                    ))}
                  </h3>
                  
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: 1.5 }} 
                     className="text-white text-center mb-8">
                    {project.desc}
                  </p>
                  
                  <a 
                    href={project.link || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rounded-full transition-transform hover:scale-105 flex items-center justify-center"
                    style={{ 
                      width: '140px', 
                      height: '45px', 
                      backgroundColor: project.accentColor, 
                      color: project.accentColor === '#C1E7FF' ? '#131C23' : '#ffffff', 
                      fontFamily: 'Poppins, sans-serif', 
                      fontWeight: 500, 
                      fontSize: '18px' 
                    }}
                  >
                    View
                  </a>
                </div>

              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="w-full py-8 border-t border-[#222f3e] text-center" style={{ backgroundColor: '#0d1318' }}>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '15px', color: '#8892b0' }}>
          copyright &copy; 2026. All rights reserved
        </p>
      </footer>

    </main>
  );
}