'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'FieldFlow',
      description: 'A multi-tenant field operations platform for dispatching, route planning, workforce management, GPS tracking, geofencing, and compliance auditing.',
      image: '/FieldFlow.png',
      demoUrl: 'https://field-flow-dev.vercel.app/',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Better Auth', 'Leaflet'],
      category: 'SaaS',
    },
    {
      id: 2,
      title: 'LifeStack',
      description: 'AI-powered full-stack productivity dashboard for habit tracking, journaling, analytics, and performance insights.',
      image: '/LifeStack.png',
      demoUrl: 'https://life-stack-dashboard.vercel.app/',
      technologies: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'Tailwind CSS', 'Grok API', 'Recharts'],
      category: 'Full Stack Web Application'
    },
    {
      id: 3,
      title: 'AI Resume Analyzer',
      description: 'An AI-powered web app that instantly analyzes resumes for ATS compatibility and provides actionable, role-specific improvement suggestions.',
      image: '/ResumeAnalyzer.jpeg',
      demoUrl: 'https://airesumeanalyzer-five.vercel.app/',
      technologies: ['Next.js', 'React', 'Framer Motion', 'TailwindCSS', 'Grok API'],
      category: 'Web App'
    },
    {
      id: 4,
      title: 'Code&Canvas',
      description: 'A visually clean, modern digital agency landing page ',
      image: '/Code&Canvas.jpeg',
      demoUrl: 'https://agency-landing-page-chirag.vercel.app/',
      technologies: ['Next.js', 'React', 'TailwindCSS', 'Framer Motion'],
      category: 'Website'
    },


  ];

  const handleProjectClick = (demoUrl) => {
    window.open(demoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="w-full min-h-screen bg-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-350 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-black mb-4">
            Featured Work
          </h2>
          <p className="text-lg md:text-xl text-black/60 font-light max-w-2xl mx-auto">
            A selection of projects that showcase my skills and creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.demoUrl)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Project Image */}
              <div className="absolute inset-0 w-full h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-black/70 backdrop-blur-sm pointer-events-none"
                />
              </div>

              {/* Project Info - Always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                <p className="text-xs text-white/70 uppercase tracking-wider mb-1.5">
                  {project.category}
                </p>
                <h3 className="text-xl font-light text-white mb-2">
                  {project.title}
                </h3>
              </div>

              {/* Animated Title on Hover */}
              <motion.div
                initial={false}
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                  y: hoveredProject === project.id ? 0 : 20
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none px-6"
              >
                {/* Animated Text Effect */}
                <div className="overflow-hidden mb-3">
                  <motion.h3
                    initial={false}
                    animate={{
                      y: hoveredProject === project.id ? 0 : 100
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.43, 0.13, 0.23, 0.96],
                      delay: 0.1
                    }}
                    className="text-3xl md:text-4xl font-light text-white text-center"
                  >
                    {project.title}
                  </motion.h3>
                </div>

                {/* Description */}
                <motion.p
                  initial={false}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                    y: hoveredProject === project.id ? 0 : 20
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2
                  }}
                  className="text-white/90 text-center mb-4 text-sm md:text-base font-light"
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                    y: hoveredProject === project.id ? 0 : 20
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3
                  }}
                  className="flex flex-wrap gap-2 justify-center mb-4"
                >
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white border border-white/30"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* View Demo Button */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                    y: hoveredProject === project.id ? 0 : 20
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4
                  }}
                  className="pointer-events-auto"
                >
                  <button className="px-5 py-2 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
                    View Demo
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>

              {/* Corner Accent */}
              <motion.div
                initial={false}
                animate={{
                  scale: hoveredProject === project.id ? 1 : 0,
                  opacity: hoveredProject === project.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full z-20"
              />
            </motion.div>
          ))}
        </div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/ChiragBhandar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-black hover:text-black/60 transition-colors duration-300 group"
          >
            <span className="text-lg font-light">View all projects on GitHub</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
