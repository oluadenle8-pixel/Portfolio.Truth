import { useState, useEffect, useRef } from 'react'
import logoImg from '@/imports/Vector__4_.png'
import heroShape from '@/imports/d39ccc090cea65bbe3e2de2962c85f99-removebg-preview__1__1.png'
import aboutBg from '@/imports/Rectangle_4.png'
import avatarImg from '@/imports/Group_2__7_.png'
import aboutVector from '@/imports/Vector_6.png'
import servicesVector from '@/imports/Vector_7.png'
import iconBusiness from '@/imports/Frame_4__1_.png'
import iconApp from '@/imports/Group.png'
import iconSEO from '@/imports/Group_6__2_.png'
import iconUX from '@/imports/Vector__5_.png'
import projDropDown from '@/imports/Project_Drop_Down.png'
import vector10 from '@/imports/Vector 10.png'
import { allProjectsData } from './projectsData'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllProjectsPage from './AllProjectsPage'
import resumePdf from '@/imports/resume.pdf'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="absolute top-[60px] left-0 right-0 z-50 px-6 md:px-12 flex justify-center">
      <div className="hidden lg:flex items-center w-full max-w-[1200px] h-[80px] px-[50px] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.07)]"
        style={{ backgroundColor: '#cde8f5' }}>
        <div className="flex-1 flex justify-between items-center pr-12 xl:pr-16">
          <a href="#home" style={{ fontFamily: 'Poppins, sans-serif', color: '#131C23', fontWeight: 500, fontSize: '18px' }} className="hover:text-[#EF951C] transition-colors">Home</a>
          <a href="#about" style={{ fontFamily: 'Poppins, sans-serif', color: '#131C23', fontWeight: 500, fontSize: '18px' }} className="hover:text-[#EF951C] transition-colors">About</a>
          <a href="#services" style={{ fontFamily: 'Poppins, sans-serif', color: '#131C23', fontWeight: 500, fontSize: '18px' }} className="hover:text-[#EF951C] transition-colors">Services</a>
        </div>
        <a href="#home" className="shrink-0 flex items-center justify-center hover:scale-105 transition-transform">
          <img src={logoImg} alt="Truth logo" className="h-[55px] w-auto object-contain" />
        </a>
        <div className="flex-1 flex justify-between items-center pl-12 xl:pl-16">
          <a href="#projects-gallery" style={{ fontFamily: 'Poppins, sans-serif', color: '#131C23', fontWeight: 500, fontSize: '18px' }} className="hover:text-[#EF951C] transition-colors">Projects Gallery</a>
          <a href="#resume" style={{ fontFamily: 'Poppins, sans-serif', color: '#131C23', fontWeight: 500, fontSize: '18px' }} className="hover:text-[#EF951C] transition-colors">Resume</a>
          <a href="#contact" style={{ fontFamily: 'Poppins, sans-serif', color: '#131C23', fontWeight: 500, fontSize: '18px' }} className="hover:text-[#EF951C] transition-colors">Contact</a>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between w-full px-6 py-4 rounded-full shadow-sm"
        style={{ backgroundColor: '#cde8f5' }}>
        <img src={logoImg} alt="Truth logo" className="h-8 w-auto object-contain" />
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 -mr-2" aria-label="Toggle menu">
          <div className="w-6 h-0.5 mb-1.5 transition-all" style={{ backgroundColor: '#131C23' }} />
          <div className="w-6 h-0.5 mb-1.5 transition-all" style={{ backgroundColor: '#131C23' }} />
          <div className="w-6 h-0.5 transition-all" style={{ backgroundColor: '#131C23' }} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-[120%] w-[calc(100%-3rem)] px-6 py-4 rounded-2xl flex flex-col gap-2 shadow-lg"
          style={{ backgroundColor: '#cde8f5' }}>
          {['Home', 'About', 'Services', 'Projects Gallery', 'Resume', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-blue-200/50 text-base font-medium last:border-0"
              style={{ color: '#131C23' }}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  )
}

function HeroSection() {
  return (
    <section id="home" style={{ backgroundColor: '#ffffff' }} className="pt-[160px] lg:pt-[200px] pb-20 px-6 md:px-12 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-[1300px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <div className="w-full lg:w-[646px] shrink-0 z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-wrap justify-center lg:justify-start items-baseline gap-2 mb-2">
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#515151' }} 
                  className="text-3xl sm:text-4xl lg:text-[50px] leading-none">
              Hi I am
            </span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#EF951C' }} 
                  className="text-3xl sm:text-4xl lg:text-[50px] leading-none tracking-tight">
              TRUTH .
            </span>
          </div>

          <div className="flex lg:hidden flex-col items-center text-center mb-8 w-full">
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#131C23', lineHeight: 1.1 }} 
                 className="text-6xl sm:text-7xl mb-2">
              UI & UX
            </div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: '#131C23', lineHeight: 1.1 }} 
                 className="text-6xl sm:text-7xl">
              Designer
            </div>
          </div>

          <div className="hidden lg:flex mb-8 w-full justify-start items-start gap-[24px]">
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#131C23', lineHeight: 1 }} 
                 className="text-[90px] whitespace-nowrap">
              UI &
            </div>
            <div className="flex flex-col text-left" style={{ gap: '11px' }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#131C23', lineHeight: 1 }} 
                   className="text-[90px]">
                UX
              </div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: '#131C23', lineHeight: 1 }} 
                   className="text-[90px]">
                Designer
              </div>
            </div>
          </div>

          <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, color: '#515151', lineHeight: 1.6 }} 
             className="text-base sm:text-lg lg:text-[21px] mb-10 w-full lg:max-w-[646px] text-center lg:text-left">
            I create beautiful and functional digital experiences. My focus is on crafting clean, intuitive designs that enhance user engagement and drive results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
            <a href="#projects-gallery" className="w-full sm:w-auto flex justify-center">
              <button className="rounded-full transition-all hover:opacity-85 hover:scale-105 flex items-center justify-center w-full sm:w-[185px]"
                style={{ 
                  height: '52px',
                  backgroundColor: '#131C23', 
                  color: '#FFFFFF', 
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '19px'
                }}>
                Portfolio
              </button>
            </a>
            <a href="#contact" className="w-full sm:w-auto flex justify-center">
              <button className="rounded-full border-[1.5px] transition-all hover:bg-[#fff8f0] hover:scale-105 flex items-center justify-center w-full sm:w-[185px]"
                style={{ 
                  height: '52px',
                  borderColor: '#EF951C', 
                  color: '#131C23', 
                  backgroundColor: 'transparent', 
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '19px'
                }}>
                Contact
              </button>
            </a>
          </div>
        </div>

        <div className="hidden lg:flex w-full justify-end relative">
          <img
            src={heroShape}
            alt="3D abstract geometric shapes"
            className="w-[600px] h-auto object-contain hover:-translate-y-4 transition-transform duration-500 ease-out"
          />
        </div>
      </div>
    </section>
  )
}

const aboutSkills = [
  { label: 'Ux',            pct: 90, gradient: 'linear-gradient(90deg, #7a1a00 0%, #FE6D44 100%)' },
  { label: 'Website Design', pct: 85, gradient: 'linear-gradient(90deg, #7a3800 0%, #FA8F2D 100%)' },
  { label: 'App Design',    pct: 80, gradient: 'linear-gradient(90deg, #0d2740 0%, #3B6EA0 100%)' },
  { label: 'Graphic Design', pct: 70, gradient: 'linear-gradient(90deg, #1e0a4a 0%, #542CA9 100%)' },
]

function ColoredLabel({ text }: { text: string }) {
  return (
    <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }} className="text-[20px] md:text-[22px] text-white tracking-wide">
      <span style={{ color: '#C1E7FF' }}>{text[0]}</span>{text.slice(1)}
    </span>
  )
}

function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.25 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full pt-20 pb-[180px] lg:pb-[250px] flex items-start overflow-hidden"
    >
      <div className="absolute inset-0 z-0 w-full h-full">
        <img
          src={aboutBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-20 mt-10">
        <div 
          className="shrink-0 w-full max-w-[350px] lg:max-w-none lg:w-[400px] h-[450px] lg:h-auto rounded-[32px] flex items-end justify-center overflow-hidden mx-auto lg:mx-0 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          style={{ backgroundColor: '#EF951C' }}
        >
          <img
            src={avatarImg}
            alt="Truth avatar"
            className="w-[85%] h-[95%] object-contain object-bottom"
          />
        </div>

        <div className="flex-1 w-full flex flex-col justify-between text-left mt-2 lg:mt-0">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, lineHeight: 1 }} className="text-4xl md:text-5xl mb-2">
              <span style={{ color: '#C1E7FF' }}>A</span>
              <span className="text-white">bout Me</span>
            </h2>
            <img
              src={aboutVector}
              alt=""
              aria-hidden="true"
              className="w-28 md:w-36 h-auto block" 
            />
          </div>

          <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, lineHeight: 1.6 }} 
             className="text-white text-base md:text-[19px] w-full text-left py-8 lg:py-4">
            As a UI/UX Designer, I believe in making a positive impact through clean, intuitive, and effective design. My work is driven by the mission to put a smile on the faces of those I design for.
          </p>

          <div className="flex flex-col gap-6 md:gap-7 w-full">
            {aboutSkills.map((s) => (
              <div key={s.label} className="w-full flex flex-col gap-2">
                <div>
                  <ColoredLabel text={s.label} />
                </div>
                <div 
                  className="relative w-full h-[18px] md:h-[22px] rounded-full shadow-inner"
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <div 
                    className="absolute top-0 left-0 h-full rounded-full flex items-center justify-end"
                    style={{
                      width: animated ? `${s.pct}%` : '0%',
                      background: s.gradient,
                      transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    }} 
                  >
                    <div className="absolute right-0 translate-x-1/2 w-7 h-7 md:w-9 md:h-9 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)] border-[3px]" style={{ borderColor: '#f0f0f0' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const serviceCards = [
  {
    icon: iconBusiness,
    iconAlt: 'Business strategy icon',
    title: 'Business Strategy',
    color: '#EF951C',
    desc: 'Defining goals and planning how a digital product will achieve business success',
  },
  {
    icon: iconApp,
    iconAlt: 'App development icon',
    title: 'App Development',
    color: '#FE6D44',
    desc: 'Collaborating with developers to build the functional, user-friendly mobile or web application',
  },
  {
    icon: iconSEO,
    iconAlt: 'SEO optimization icon',
    title: 'SEO Optimization',
    color: '#3B6EA0',
    desc: 'Improving site performance and user experience to help your product rank higher in search results',
  },
  {
    icon: iconUX,
    iconAlt: 'UX consulting icon',
    title: 'UX Consulting',
    color: '#542CA9',
    desc: 'Advising on research, testing, and design strategy to optimize the overall user experience',
  },
]

function ColoredWordHeading({ title, color }: { title: string; color: string }) {
  return (
    <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: 1.2 }}>
      {title.split(' ').map((word, wi) => (
        <span key={wi}>
          {wi > 0 && ' '}
          <span style={{ color }}>{word[0]}</span>
          <span style={{ color: '#131C23' }}>{word.slice(1)}</span>
        </span>
      ))}
    </span>
  )
}

function ServicesSection() {
  return (
    <section 
      id="services" 
      style={{ backgroundColor: '#ffffff' }} 
      className="pt-[60px] lg:pt-[80px] pb-[100px] lg:pb-[120px]"
    >
      <div className="max-w-[1350px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex flex-col items-center lg:items-start mb-6">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '50px', lineHeight: 1 }} className="mb-2">
              <span style={{ color: '#EF951C' }}>S</span>
              <span style={{ color: '#131C23' }}>ervices</span>
            </h2>
            <img 
              src={servicesVector} 
              alt="Underline vector" 
              aria-hidden="true"
              className="w-[164px] h-[13px] block lg:ml-1" 
            />
          </div>

          <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '21px', lineHeight: 1.6, color: '#515151' }} 
             className="max-w-[733px] text-center">
            Creating delightful and intuitive digital experiences that leave a positive impact on my users.
          </p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 lg:gap-[30px]">
          {serviceCards.map(card => (
            <div key={card.title} 
                 className="bg-white rounded-[10px] p-6 flex flex-col justify-start transition-transform duration-200 hover:-translate-y-2 w-full lg:w-[300px]"
                 style={{ 
                   maxWidth: '300px', 
                   height: '200px',
                   boxShadow: '0px 14px 15px rgba(0,0,0,0.25)' 
                 }}>
              <img src={card.icon} alt={card.iconAlt} className="w-[40px] h-[40px] object-contain mb-[12px]" />
              <div className="mb-[10px]">
                <ColoredWordHeading title={card.title} color={card.color} />
              </div>
              <p style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontWeight: 500, 
                    fontSize: '15px', 
                    lineHeight: 1.35, 
                    letterSpacing: '-0.01em',
                    color: '#515151' 
                  }} 
                  className="text-left pr-1">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const latestProjects = allProjectsData.slice(0, 3)

  return (
    <section id="projects-gallery" className="relative pt-36 lg:pt-44 pb-[120px] lg:pb-[150px]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={aboutBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-bottom"
          style={{ transform: 'scaleY(-1)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1350px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 pt-6 lg:pt-8">
          <div className="inline-flex flex-col items-center lg:items-start">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '50px', lineHeight: 1 }} className="mb-2">
              <span style={{ color: '#C1E7FF' }}>P</span>
              <span style={{ color: '#ffffff' }}>rojects Gallery</span>
            </h2>
            <img 
              src={aboutVector} 
              alt="Underline vector" 
              aria-hidden="true" 
              className="w-[164px] h-[13px] block" 
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-[50px]">
          {latestProjects.map(project => (
            <div 
              key={project.title} 
              className="relative w-full max-w-[400px] h-[500px] rounded-[10px] overflow-hidden group shrink-0"
              style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
            >
              <img 
                src={project.img} 
                alt={`${project.title} project`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              
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
                    fontSize: '20px' 
                  }}
                >
                  View
                </a>
              </div>

              <div className="absolute inset-0 hidden lg:flex flex-col items-center justify-center px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '35px', lineHeight: 1.2 }} className="mb-4 text-center">
                  {project.title.split(' ').map((word, wi) => (
                    <span key={wi}>
                      {wi > 0 && ' '}
                      <span style={{ color: project.accentColor }}>{word[0]}</span>
                      <span style={{ color: '#ffffff' }}>{word.slice(1)}</span>
                    </span>
                  ))}
                </h3>
                
                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '19px', lineHeight: 1.5 }} 
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
                    fontSize: '20px' 
                  }}
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 bottom-0 z-20" style={{ transform: 'translate(-50%, 50%)' }}>
        <a 
          href="/all-projects" 
          className="block hover:scale-110 transition-transform duration-200"
          aria-label="View all projects"
        >
          <img
            src={projDropDown}
            alt="Show more projects"
            className="w-[100px] h-[100px] object-contain block"
          />
        </a>
      </div>
    </section>
  )
}

function ResumeSection() {
  return (
    <section id="resume" style={{ backgroundColor: '#ffffff' }} className="pt-24 pb-20 relative">
      <div className="text-center mx-auto px-6" style={{ maxWidth: '800px' }}>
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="inline-flex flex-col items-center lg:items-start">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '50px', lineHeight: 1 }} className="mb-2">
              <span style={{ color: '#EF951C' }}>R</span>
              <span style={{ color: '#131C23' }}>esume</span>
            </h2>
            <img 
              src={servicesVector} 
              alt="Heading underline vector" 
              aria-hidden="true" 
              className="w-[164px] h-[13px] block" 
            />
          </div>
        </div>

        {/* Text */}
        <p className="text-center mx-auto mb-10 px-4" 
           style={{ 
             color: '#515151', 
             fontFamily: 'Poppins, sans-serif', 
             fontWeight: 300, 
             fontSize: '19px',
             lineHeight: 1.7,
             maxWidth: '680px' 
           }}>
          I combine technical Computer Science foundations with a deep focus on empathetic design. Grab a copy of my resume to see my full experience and technical stack.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          
          {/* View Resume Button (Opens in a new tab) */}
          <a 
            href={resumePdf} 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full transition-all hover:opacity-85 hover:scale-105 flex items-center justify-center w-full sm:w-[180px]"
            style={{ 
              height: '50px',
              backgroundColor: '#131C23', 
              color: '#ffffff', 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '20px'
            }}
          >
            View Resume
          </a>
          
          {/* Download Button (Forces the file download) */}
          <a 
            href={resumePdf} 
            download="Truth_Resume.pdf"
            className="rounded-full border-[1.5px] transition-all hover:bg-[#fff8f0] hover:scale-105 flex items-center justify-center w-full sm:w-[180px]"
            style={{ 
              height: '50px',
              borderColor: '#EF951C', 
              color: '#131C23', 
              backgroundColor: 'transparent', 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '20px'
            }}
          >
            Download
          </a>

        </div>
        
      </div>
    </section>
  )
}

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const baseInputClasses = "w-full bg-white text-[#131C23] text-sm outline-none transition-colors duration-200 border-2 border-transparent focus:border-[#EF951C]"

  return (
    <section id="contact" style={{ backgroundColor: '#e2ebf3' }} className="pt-20 pb-24 relative">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="inline-flex flex-col items-center lg:items-start">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '50px', lineHeight: 1 }} className="mb-2">
              <span style={{ color: '#FF4B4B' }}>C</span>
              <span style={{ color: '#131C23' }}>ontact</span>
            </h2>
            <img 
              src={vector10} 
              alt="Heading underline vector" 
              aria-hidden="true" 
              className="w-[164px] h-[13px] block lg:ml-1" 
            />
          </div>
        </div>

        <p className="text-center mb-12 mx-auto" 
           style={{ color: '#515151', fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '19px', maxWidth: '600px' }}>
          "I don't just design screens; I solve problems with brutal honesty and empathetic logic."
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-[600px] mx-auto">
          <div>
            <label className="block text-xs md:text-sm mb-2 ml-2" style={{ color: '#515151', fontFamily: 'Poppins, sans-serif' }}>Your Name</label>
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              style={{ padding: '14px 24px', fontFamily: 'Poppins, sans-serif' }}
              className={`${baseInputClasses} rounded-full`}
              required
            />
          </div>
          <div>
            <label className="block text-xs md:text-sm mb-2 ml-2" style={{ color: '#515151', fontFamily: 'Poppins, sans-serif' }}>Your Email</label>
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              style={{ padding: '14px 24px', fontFamily: 'Poppins, sans-serif' }}
              className={`${baseInputClasses} rounded-full`}
              required
            />
          </div>
          <div>
            <label className="block text-xs md:text-sm mb-2 ml-2" style={{ color: '#515151', fontFamily: 'Poppins, sans-serif' }}>Subject</label>
            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
              style={{ padding: '14px 24px', fontFamily: 'Poppins, sans-serif' }}
              className={`${baseInputClasses} rounded-full`}
              required
            />
          </div>
          <div>
            <label className="block text-xs md:text-sm mb-2 ml-2" style={{ color: '#515151', fontFamily: 'Poppins, sans-serif' }}>Message</label>
            <textarea
              placeholder="Message..."
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              rows={6}
              style={{ padding: '16px 24px', fontFamily: 'Poppins, sans-serif', resize: 'vertical' }}
              className={`${baseInputClasses} rounded-[24px]`}
              required
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="rounded-full transition-all hover:opacity-85 hover:scale-105 flex items-center justify-center w-full sm:w-[180px]"
              style={{ 
                height: '50px',
                backgroundColor: '#EF951C', 
                color: '#ffffff', 
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '20px'
              }}
            >
              {submitted ? 'Sent!' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="w-full py-8 border-t border-[#222f3e] text-center" style={{ backgroundColor: '#0d1318' }}>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '15px', color: '#8892b0' }}>
       copyright &copy; 2026. All rights reserved
      </p>
    </footer>
  )
}

function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjectsPage />} />
      </Routes>
    </Router>
  )
}