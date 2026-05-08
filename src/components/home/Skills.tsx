import { motion } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Layout, 
  Database, 
  Cpu, 
  Figma as FigmaIcon, 
  Github, 
  Layers 
} from 'lucide-react';

const skills = [
  { name: 'HTML', icon: Layout, level: 95 },
  { name: 'CSS', icon: Layers, level: 90 },
  { name: 'JavaScript', icon: Code2, level: 85 },
  { name: 'PHP', icon: Code2, level: 80 },
  { name: 'Node.js', icon: Terminal, level: 82 },
  { name: 'MySQL', icon: Database, level: 75 },
  { name: 'UI/UX Design', icon: FigmaIcon, level: 88 },
  { name: 'Git & GitHub', icon: Github, level: 85 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-brand-cyan mb-6">Expertise</h2>
            <h3 className="text-4xl font-display font-bold">Tech Stack & Tools</h3>
          </div>
          <p className="text-neutral-500 max-w-sm text-sm">
            Constant learning is my core. Here are the technologies I've mastered and use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[32px] glass hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 transition-transform">
                <skill.icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4">{skill.name}</h4>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-brand-cyan to-brand-blue"
                />
              </div>
              <div className="mt-2 text-[10px] text-neutral-500 font-bold text-right uppercase tracking-[0.2em]">
                {skill.level}% Mastery
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-cyan/5 blur-[150px] -z-10" />
    </section>
  );
}
