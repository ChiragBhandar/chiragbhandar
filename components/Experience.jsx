'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Software Engineer Intern',
      company: 'Dawn Digitech LLP',
      location: 'Remote, India',
      duration: 'July 2026 – August 2026',
      badge: 'Internship',
      description: [
        {
          text: 'Contributed to AI-led software development projects, translating project requirements into functional features and cloud-based application workflows.',
          highlightWords: ['AI-led software development projects', 'cloud-based application workflows'],
        },
        {
          text: 'Developed application components using application architectures, data schemas, script configurations, and custom workflows for client-specific requirements.',
          highlightWords: ['application architectures, data schemas, script configurations, and custom workflows'],
        },
        {
          text: 'Worked in one-week MVP sprints, delivering technical milestones and improving solutions through weekly evaluations and project feedback while supporting low-code cloud application development.',
          highlightWords: ['one-week MVP sprints', 'weekly evaluations and project feedback'],
        },
      ],
      skills: [
        'AI Workflows',
        'Cloud Applications',
        'Application Architecture',
        'Data Schemas',
        'MVP Sprints',
        'Low-Code Systems',
      ],
    },
    {
      id: 2,
      role: 'Full Stack Developer Intern',
      company: 'Centre of Excellence for Happiness (CESH), Delhi Technological University',
      location: 'New Delhi, India',
      duration: 'June 2026 – July 2026',
      badge: 'Internship',
      description: [
        {
          text: 'Built a full-stack survey platform using Next.js, Supabase, and PostgreSQL, enabling structured survey creation, response collection, and analytics-ready data management.',
          highlightWords: ['full-stack survey platform', 'Next.js, Supabase, and PostgreSQL'],
        },
        {
          text: 'Designed normalized database schemas and RESTful APIs to support reliable response storage and scalable data retrieval.',
          highlightWords: ['normalized database schemas and RESTful APIs'],
        },
        {
          text: 'Implemented Supabase Authentication and Row-Level Security (RLS) to protect user submissions and enforce secure data access across the platform.',
          highlightWords: ['Supabase Authentication and Row-Level Security (RLS)'],
        },
      ],
      skills: [
        'Next.js',
        'Supabase',
        'PostgreSQL',
        'RESTful APIs',
        'RLS Security',
        'Database Modeling',
      ],
    },
  ];

  // Helper to highlight key phrases in bullets as in the original resume
  const renderHighlightedText = (text, highlights) => {
    if (!highlights || highlights.length === 0) return text;

    // Build regex pattern for all highlights
    const pattern = new RegExp(`(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    const parts = text.split(pattern);

    return parts.map((part, index) => {
      const isMatch = highlights.some(
        (h) => h.toLowerCase() === part.toLowerCase()
      );
      if (isMatch) {
        return (
          <strong key={index} className="font-semibold text-black">
            {part}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section
      id="experience"
      className="w-full bg-gray-100 py-14 sm:py-20 md:py-24 px-3.5 sm:px-6 md:px-10 lg:px-16 relative overflow-hidden border-t border-gray-200"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gray-200/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gray-200/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header matching theme */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-[10px] sm:text-xs uppercase tracking-widest text-black/70 font-medium mb-3 sm:mb-4"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black" />
            Career Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black tracking-tight"
          >
            Work Experience
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[2px] bg-black mt-3 sm:mt-4 mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm md:text-base text-black/60 font-light max-w-xl mx-auto mt-3 sm:mt-4 px-2"
          >
            Professional internships, technical roles, and real-world engineering impact.
          </motion.p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="relative space-y-5 sm:space-y-8 md:space-y-12">
          {/* Vertical timeline line on desktop */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Timeline Marker Dot (Desktop) */}
              <div className="hidden md:flex absolute left-8 -translate-x-1/2 top-8 w-10 h-10 rounded-full bg-white border-2 border-black items-center justify-center shadow-md z-10 group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Briefcase className="w-4 h-4 text-black group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Main Card */}
              <div className="md:ml-20 bg-white border border-gray-200/80 rounded-xl sm:rounded-2xl p-4 sm:p-7 md:p-9 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-black/20 via-black to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-gray-200">
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-black text-white">
                        {exp.badge}
                      </span>
                      <span className="text-[11px] sm:text-xs text-black/50 font-mono">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-black tracking-tight leading-snug">
                      {exp.role}
                    </h3>

                    <p className="text-sm sm:text-base md:text-lg font-medium text-black/80 italic leading-snug">
                      {exp.company}
                    </p>
                  </div>

                  {/* Metadata Pills: Duration & Location */}
                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 sm:gap-2 pt-1 sm:pt-0 shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 border border-gray-200 rounded-full text-[11px] sm:text-xs md:text-sm text-black/80 font-medium">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black/60 shrink-0" />
                      <span>{exp.duration}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-full text-[11px] sm:text-xs md:text-sm text-black/70">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black/60 shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Contributions & Achievements */}
                <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3.5">
                  {exp.description.map((item, bulletIdx) => (
                    <div
                      key={bulletIdx}
                      className="flex items-start gap-2.5 sm:gap-3 group/bullet"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/70 shrink-0 group-hover/bullet:scale-125 group-hover/bullet:bg-black transition-all duration-200" />
                      <p className="text-xs sm:text-sm md:text-[15px] text-gray-700 font-light leading-relaxed">
                        {renderHighlightedText(item.text, item.highlightWords)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Skills / Tech Pills */}
                <div className="mt-5 sm:mt-7 pt-4 sm:pt-5 border-t border-gray-100 flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-black/50 font-medium mr-1">
                    Focus:
                  </span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#f5f5f5] text-black border border-gray-300/80 rounded-full text-[11px] sm:text-xs font-light tracking-wide transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
