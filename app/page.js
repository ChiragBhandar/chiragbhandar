'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame to avoid cascading renders
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="h-screen w-full flex flex-col bg-gray-100">
        <Navbar />
      
      <div className="flex-1 relative overflow-hidden">
        {/* Background SVG */}
        <div className="absolute inset-0 w-full h-full opacity-30">
          <Image 
            src="/homepage-bg.svg" 
            alt="" 
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Left social icons */}
        <div className="social-icons-left absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
          <a href="https://www.linkedin.com/in/chirag-bhandar/" target="_blank" rel="noopener noreferrer" 
             className="w-8 h-8 flex items-center justify-center text-black hover:opacity-60 transition-opacity">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://wa.me/919625520257" target="_blank" rel="noopener noreferrer"
             className="w-8 h-8 flex items-center justify-center text-black hover:opacity-60 transition-opacity">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
          <a href="https://github.com/ChiragBhandar" target="_blank" rel="noopener noreferrer"
             className="w-8 h-8 flex items-center justify-center text-black hover:opacity-60 transition-opacity">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        {/* Right vertical text */}
        <div className="vertical-text-right absolute right-8 top-1/2 -translate-y-1/2 z-20">
          <div className="writing-mode-vertical text-sm tracking-[0.3em] text-black/60 uppercase">
            Chirag Bhandar
          </div>
        </div>

        {/* Main content */}
        <div className="flex items-center justify-center h-full relative">
          <div className="text-center relative z-10 max-w-5xl px-4">
            {/* Hi text */}
            <p className={`text-base md:text-lg min-[1080px]:text-xl mb-2 font-light text-black transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              Hi! I&apos;m Chirag 
            </p>
            
            {/* Main heading */}
            <div className="relative">
              <h1 className={`text-4xl md:text-5xl min-[1080px]:text-8xl font-light leading-tight mb-4 text-black transition-all duration-1000 delay-200 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}>
                <span className="block">Front-end Developer</span>
              </h1>
              
              {/* Subheading */}
              <p className={`text-sm md:text-base min-[1080px]:text-2xl font-light text-black/70 mt-4 transition-all duration-1000 delay-500 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}>
                Building modern, performant & user-centric web experiences
              </p>

              {/* Download Resume Button */}
              <div className={`mt-8 transition-all duration-1000 delay-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}>
                <a 
                  href="/ChiragBhandar-Resume.pdf" 
                  download="ChiragBhandar-Resume.pdf"
                  className="group relative inline-flex items-center gap-2 min-[1080px]:gap-3 px-5 py-2.5 min-[1080px]:px-8 min-[1080px]:py-4 bg-black text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Animated background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  
                  {/* Button content */}
                  <span className="relative z-10 font-medium text-sm min-[1080px]:text-lg">Download Resume</span>
                  
                  {/* Download icon with animation */}
                  <svg 
                    className="relative z-10 w-4 h-4 min-[1080px]:w-5 min-[1080px]:h-5 transition-all duration-300 group-hover:translate-y-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  
                  {/* Shine effect */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      {/* About Section - includes About Me, Marquee Text, Profile Image, and Stats */}
      <About />
      
      {/* Skills Section - Horizontal Carousel */}
      <Skills />
      
      {/* Projects Section - Featured Work */}
      <Projects />
      
      {/* Contact Section - Reach Out Form */}
      <Contact />
      
      {/* Footer */}
      <Footer />
      
    </div>
  );
}
