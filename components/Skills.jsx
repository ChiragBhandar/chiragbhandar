'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

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

  const skills = [
    {
      id: '01',
      title: 'Front-end Development',
      description: 'Building scalable and high-performance web applications using Next.js, React, Tailwind CSS and JavaScript. Crafting responsive designs and seamless user experiences.',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
      )
    },
    {
      id: '02',
      title: 'UI/UX Design & Animations',
      description: 'Designing modern, responsive interfaces with Figma, Tailwind CSS, GSAP and Framer Motion. Creating intuitive experiences with clean design systems and pixel-perfect implementations.',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <circle cx="6.5" cy="6.5" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      id: '03',
      title: 'Performance Optimization',
      description: 'Optimizing web applications for lightning-fast load times, smooth animations, and excellent Core Web Vitals scores using modern techniques and best practices.',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      id: '04',
      title: 'Tools and Languages',
      description: 'Proficient in JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Figma, Git, GitHub, VS Code, and terminal commands for efficient development workflows.',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2" />
        </svg>
      )
    },
    {
      id: '05',
      title: 'Core Features Implementation',
      description: 'Responsive Design , UI/UX , Cross-Browser Compatibility , SEO , Performance Optimization , Deploying and managing applications on cloud platforms like Vercel,',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen w-full bg-white relative overflow-hidden py-20"
    >
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-8 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-black"
        >
          Skills & Expertise
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          animate={isVisible ? { width: '100px' } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[2px] bg-black mt-4 mx-auto"
        />
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        {/* Scroll hint overlay on left */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* Scroll hint overlay on right */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div 
          ref={scrollContainerRef}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide px-8"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div className="flex gap-3 sm:gap-4 md:gap-6 pb-6 sm:pb-8 min-w-max">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex-shrink-0 w-[250px] sm:w-[300px] md:w-[450px] lg:w-[500px] h-[320px] sm:h-[360px] md:h-[400px] bg-[#f5f5f5] border border-gray-300 rounded-none p-5 sm:p-7 md:p-10 hover:bg-[#ebebeb] transition-colors duration-300 group scroll-snap-align-start"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Card Number */}
                <div className="text-xs sm:text-sm font-light text-gray-400 mb-3 sm:mb-5 md:mb-6">{skill.id}</div>

                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-5 sm:mb-6 md:mb-8 text-[#c6ff00] group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full bg-[#c6ff00] rounded-full flex items-center justify-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black">
                      {skill.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-3xl font-light text-black mb-3 sm:mb-5 md:mb-6 leading-tight">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base font-light text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center mt-8 text-gray-400 text-sm font-light"
      >
        <div className="flex items-center justify-center gap-2">
          <span>Scroll horizontally</span>
          <svg className="w-4 h-4 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>

      {/* Animated Marquee Section */}
      <SkillsMarquee isVisible={isVisible} />
    </section>
  );
}

// Skills Marquee Component
function SkillsMarquee({ isVisible }) {
  const skillsList = [
    { name: 'React', icon: '⚛' },
    { name: 'Next.js', icon: '▲' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'HTML5', icon: '<>' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Framer Motion', icon: '⚡' },
    { name: 'GSAP', icon: '🎯' },
    { name: 'Figma', icon: '◆' },
    { name: 'Git', icon: '�' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Node.js', icon: '⬢' },
    { name: 'Vercel', icon: '▲' },
    { name: 'Responsive Design', icon: '�' },
    { name: 'SEO', icon: '🔍' },
    { name: 'Performance', icon: '⚡' },
  ];

  // Duplicate the skills for seamless loop
  const duplicatedSkills = [...skillsList, ...skillsList];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="mt-20 relative overflow-hidden"
    >
      {/* Section Label */}
      <div className="max-w-7xl mx-auto px-8 mb-8">
        <h3 className="text-2xl md:text-3xl font-light text-black text-center">
          Technologies & Tools
        </h3>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Animated Marquee */}
        <div className="flex gap-6 sm:gap-8 md:gap-12 py-4 sm:py-6 md:py-8 marquee-container">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="shrink-0 flex items-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-[#f5f5f5] border border-gray-300 rounded-none hover:bg-[#c6ff00] hover:border-black transition-all duration-300 group"
            >
              {/* Logo */}
              <div className="text-base sm:text-xl md:text-2xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-black text-[#c6ff00] rounded-full group-hover:bg-[#c6ff00] group-hover:text-black transition-all duration-300 font-bold">
                {skill.icon}
              </div>
              {/* Name */}
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-black whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
