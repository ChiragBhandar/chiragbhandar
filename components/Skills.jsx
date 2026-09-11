'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiCplusplus, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiPostgresql, 
  SiMongodb, 
  SiPrisma, 
  SiSupabase, 
  SiGit, 
  SiGithub, 
  SiVercel, 
  SiPostman, 
  SiHtml5, 
  SiCss3 
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { FaShieldHalved, FaDatabase } from 'react-icons/fa6';

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
      title: 'Frontend & Full-Stack Development',
      description: 'Building modern, performant web applications with React.js, Next.js, TypeScript, and Tailwind CSS. Proficient in HTML5, CSS3, JavaScript, and crafting responsive, accessible, and user-centric interfaces.',
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
      title: 'Backend & API Engineering',
      description: 'Developing scalable backend systems, RESTful APIs, and Next.js Route Handlers powered by Node.js. Implementing clean architecture, robust server-side validation, error handling, and high-throughput endpoints.',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      id: '03',
      title: 'Database Architecture & ORM',
      description: 'Designing normalized schemas and managing relational and NoSQL databases with PostgreSQL and MongoDB. Proficient in Prisma ORM for type-safe database queries, schema migrations, and optimized data modeling.',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      )
    },
    {
      id: '04',
      title: 'Authentication & Security',
      description: 'Implementing secure user authentication and authorization using Better Auth and Supabase Auth. Enforcing Role-Based Access Control (RBAC), Row-Level Security (RLS), session security, and data protection.',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      id: '05',
      title: 'Programming Languages & Core CS',
      description: 'Solid foundations in C++, JavaScript, TypeScript, Python, and SQL. Deep problem-solving capabilities grounded in Data Structures & Algorithms (DSA), Object-Oriented Programming (OOPs), DBMS, OS, and CN.',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    },
    {
      id: '06',
      title: 'Tools, DevOps & Cloud Platforms',
      description: 'Streamlining development and continuous deployment on Vercel. Proficient with Git and GitHub for version control and collaboration, Postman for API testing and debugging, and VS Code for efficient engineering.',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="skills"
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
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-5 sm:mb-6 md:mb-8 text-[#e8e8e8] group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full bg-[#e8e8e8] rounded-full flex items-center justify-center">
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
  const iconClass = "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6";
  const skillsList = [
    { name: 'Next.js', icon: <SiNextdotjs className={iconClass} /> },
    { name: 'React.js', icon: <SiReact className={iconClass} /> },
    { name: 'TypeScript', icon: <SiTypescript className={iconClass} /> },
    { name: 'JavaScript', icon: <SiJavascript className={iconClass} /> },
    { name: 'Node.js', icon: <SiNodedotjs className={iconClass} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className={iconClass} /> },
    { name: 'Prisma ORM', icon: <SiPrisma className={iconClass} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className={iconClass} /> },
    { name: 'MongoDB', icon: <SiMongodb className={iconClass} /> },
    { name: 'Python', icon: <SiPython className={iconClass} /> },
    { name: 'C++', icon: <SiCplusplus className={iconClass} /> },
    { name: 'SQL', icon: <FaDatabase className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" /> },
    { name: 'REST APIs', icon: <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-tight">API</span> },
    { name: 'Route Handlers', icon: <SiNextdotjs className={iconClass} /> },
    { name: 'Better Auth', icon: <FaShieldHalved className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" /> },
    { name: 'Supabase Auth', icon: <SiSupabase className={iconClass} /> },
    { name: 'RBAC Security', icon: <FaShieldHalved className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" /> },
    { name: 'HTML5', icon: <SiHtml5 className={iconClass} /> },
    { name: 'CSS3', icon: <SiCss3 className={iconClass} /> },
    { name: 'Git', icon: <SiGit className={iconClass} /> },
    { name: 'GitHub', icon: <SiGithub className={iconClass} /> },
    { name: 'Vercel', icon: <SiVercel className={iconClass} /> },
    { name: 'Postman', icon: <SiPostman className={iconClass} /> },
    { name: 'VS Code', icon: <TbBrandVscode className={iconClass} /> },
  ];

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

        {/* Animated Marquee - Two identical sets for seamless loop */}
        <div className="overflow-hidden">
          <div className="flex gap-6 sm:gap-8 md:gap-12 animate-marquee group/marquee hover:animation-pause">
            {/* First set */}
            <div className="flex gap-6 sm:gap-8 md:gap-12 py-4 sm:py-6 md:py-8 shrink-0">
              {skillsList.map((skill, index) => (
                <div
                  key={`set1-${skill.name}-${index}`}
                  className="shrink-0 flex items-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-[#f5f5f5] border border-gray-300 rounded-none hover:bg-black hover:border-black transition-all duration-300 group"
                >
                  {/* Logo */}
                  <div className="text-base sm:text-xl md:text-2xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-black text-[#e8e8e8] rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300 font-bold">
                    {skill.icon}
                  </div>
                  {/* Name */}
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-black group-hover:text-white whitespace-nowrap transition-all duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Second set - exact duplicate for seamless loop */}
            <div className="flex gap-6 sm:gap-8 md:gap-12 py-4 sm:py-6 md:py-8 shrink-0">
              {skillsList.map((skill, index) => (
                <div
                  key={`set2-${skill.name}-${index}`}
                  className="shrink-0 flex items-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-[#f5f5f5] border border-gray-300 rounded-none hover:bg-black hover:border-black transition-all duration-300 group"
                >
                  {/* Logo */}
                  <div className="text-base sm:text-xl md:text-2xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-black text-[#e8e8e8] rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300 font-bold">
                    {skill.icon}
                  </div>
                  {/* Name */}
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-black group-hover:text-white whitespace-nowrap transition-all duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
