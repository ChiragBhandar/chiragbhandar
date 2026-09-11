'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollScale, setScrollScale] = useState(1);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const imageCenter = rect.top + rect.height / 2;
      const windowCenter = windowHeight / 2;

      const distanceFromCenter = Math.abs(imageCenter - windowCenter);
      const maxDistance = windowHeight;
      
      const scale = 1.05 - (distanceFromCenter / maxDistance) * 0.2;
      const clampedScale = Math.max(0.85, Math.min(1.05, scale));
      
      setScrollScale(clampedScale);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const marqueeText = "FULL-STACK DEVELOPER • FRONTEND SPECIALIST • REACT DEVELOPER • NEXT.JS DEVELOPER • TECH ENTHUSIAST • DSA LEARNER • ";

  return (
    <>
      {/* About Me Section */}
      <section id="about" ref={sectionRef} className="min-h-screen w-full bg-white text-white flex items-center justify-center relative overflow-hidden">
        {/* Straight background shape */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className={`absolute left-0 right-0 bottom-0 w-full h-full bg-[#1a1a1a] transition-all duration-1500 ease-out ${
              isVisible ? 'top-0' : 'top-full'
            }`}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-16 flex flex-col items-center">
          <h1 
            className={`text-lg min-[425px]:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-relaxed text-center mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            I&apos;m a <span className="font-light">Full-stack Developer</span> – dedicated to building scalable, secure,  
            <br />
           and high-performance web applications from concept to deployment.
            <br />
            I design intuitive frontends, engineer efficient backend systems, and optimize databases for reliability and speed.
          </h1>
            <br />
            <br />
            <br />
          <p 
            className={`text-xs min-[425px]:text-sm md:text-base lg:text-lg font-light text-center mb-10 max-w-4xl transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Experienced with modern technologies including Next.js, React, TypeScript, Node.js, Prisma, PostgreSQL, and cloud deployment platforms like Vercel.
          </p>
           <br />
          <br />

          {/* Download Resume Button */}
          <div 
            className={`transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a 
              href="/ChiragBhandarResume.pdf" 
              download="ChiragBhandarResume.pdf"
              className="group relative inline-flex items-center gap-2 min-[1080px]:gap-3 px-5 py-2.5 min-[1080px]:px-8 min-[1080px]:py-4 bg-[#f5f5f5] text-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Animated background */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#e8e8e8] via-[#d8d8d8] to-[#c8c8c8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              
              {/* Button content */}
              <span className="relative z-10 font-medium text-sm min-[1080px]:text-lg">Download Resume</span>
              
              {/* Download icon with animation */}
              <svg 
                className="relative z-10 w-4 h-4 min-[1080px]:w-5 min-[1080px]:h-5 transition-all duration-300 group-hover:translate-y-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              
              {/* Shine effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
            </a>
          </div>
        </div>

        {/* Bottom Section - Scroll to Explore and My Short Story */}
        <div 
          className={`hidden sm:flex absolute bottom-8 left-0 right-0 z-20 px-8 justify-between items-center max-w-6xl mx-auto transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left side - Scroll to explore */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
            </div>
            <span className="text-sm text-white/60 uppercase tracking-wider">
              Scroll to Explore
            </span>
          </div>

          {/* Right side - My Short Story */}
          <div className="text-sm text-white/60 uppercase tracking-wider">
            My Short Story
          </div>
        </div>
      </section>

      {/* Marquee Text Animation */}
      <div className="w-full bg-gray-100 overflow-hidden py-8 border-y border-gray-300">
        <div className="flex animate-marquee-slow">
          <div className="flex whitespace-nowrap">
            <span className="text-3xl min-[380px]:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight inline-block text-black">
              {marqueeText.repeat(15)}
            </span>
            <span className="text-3xl min-[380px]:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight inline-block text-black">
              {marqueeText.repeat(15)}
            </span>
          </div>
        </div>
      </div>

      {/* Profile Image Section */}
      <section className="w-full bg-gray-100 py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`w-full transition-all duration-1500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
              <div 
                ref={imageRef}
                className="absolute inset-0 transition-transform duration-300 ease-out"
                style={{ transform: `scale(${scrollScale})` }}
              >
                <Image
                  src="/profile.png"
                  alt="Chirag - Front-end Developer"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-gray-100 py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-8">
              <h2 className="text-xl min-[775px]:text-3xl md:text-4xl font-normal leading-tight text-black">
                Driving measurable growth and engagement through thoughtful design and engineering.
              </h2>
              
              <div className="space-y-6">
                <div className="border-t border-black/20 pt-6">
                  <p className="text-xs min-[775px]:text-sm uppercase tracking-wider text-black/60 mb-4">
                    YEARS OF EXPERIENCE
                  </p>
                  <p className="text-5xl min-[775px]:text-7xl md:text-8xl font-bold text-black">
                    2+
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <p className="text-base min-[775px]:text-lg md:text-xl leading-relaxed text-black/80">
                Every product I build starts with understanding user goals and translating them into intuitive, high-performance experiences. From concept to launch, I focus on meaningful results—boosting user engagement, retention, and overall business impact.
              </p>
              
              <div className="space-y-6">
                <div className="border-t border-black/20 pt-6">
                  <p className="text-xs min-[775px]:text-sm uppercase tracking-wider text-black/60 mb-4">
                    PROJECTS COMPLETED
                  </p>
                  <p className="text-5xl min-[775px]:text-7xl md:text-8xl font-bold text-black">
                    15+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
