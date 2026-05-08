import { motion } from 'motion/react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    year: "2023 - Present",
    title: "Information Systems Student",
    company: "University Academic Journey",
    description: "Focusing on enterprise systems, database management, and software engineering principles. Actively involved in tech communities and academic projects.",
    type: "education",
    icon: GraduationCap
  },
  {
    year: "2023",
    title: "Scaffold Department Apprentice",
    company: "Industrial Construction Firm",
    description: "Assisted in management and standardization of scaffolding components. Developed optimization strategies for inventory tracking and safety protocols.",
    type: "work",
    icon: Briefcase
  },
  {
    year: "2022 - 2023",
    title: "Freelance Developer & Designer",
    company: "Direct Clients",
    description: "Executed various UI/UX design and web development projects for local startups and small businesses, bridging the gap between aesthetics and functionality.",
    type: "work",
    icon: Code2
  }
];

import { Code2 } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
         <div className="mb-16">
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-brand-cyan mb-6">Pathways</h2>
          <h3 className="text-4xl font-display font-bold">Education & Experience</h3>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-12 space-y-16">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.title + idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[61px] top-0 w-6 h-6 rounded-full glass flex items-center justify-center border-brand-cyan/50 text-brand-cyan">
                <item.icon size={12} />
              </div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-2xl font-bold">{item.title}</h4>
                  <p className="text-brand-cyan font-bold text-sm">{item.company}</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold text-neutral-400">
                  <Calendar size={14} /> {item.year}
                </div>
              </div>
              <p className="text-neutral-500 max-w-2xl leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
