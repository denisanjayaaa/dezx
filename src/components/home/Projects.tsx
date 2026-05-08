import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "SafeTrade Middleman",
    description: "A secure escrow-style platform for middleman transactions, ensuring trust between buyers and sellers in digital goods trading.",
    tech: ["React", "Express", "PostgreSQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
    links: { github: "#", live: "#" }
  },
  {
    title: "AutoTask Node Bot",
    description: "High-performance automation bot built with Node.js to handle repetitive scraping, monitoring, and notification tasks.",
    tech: ["Node.js", "Puppeteer", "Redis", "Telegram API"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800",
    links: { github: "#", live: "#" }
  },
  {
    title: "Scaffold Pro Standard",
    description: "Standardization system and presentation for industrial scaffolding departments, optimizing safety and inventory workflow.",
    tech: ["Design Sysem", "Documentation", "Process Optimization"],
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=800",
    links: { github: "#", live: "#" }
  },
  {
    title: "SIA Academic Portal",
    description: "A comprehensive academic information system designed to manage student data, course enrollment, and grade tracking.",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&q=80&w=800",
    links: { github: "#", live: "#" }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-brand-cyan mb-6">Portfolio</h2>
            <h3 className="text-4xl font-display font-bold">Featured Projects</h3>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-neutral-400 hover:text-white border-b border-transparent hover:border-brand-cyan transition-all font-bold text-sm tracking-[0.2em] uppercase"
          >
            View Archive
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-[40px] overflow-hidden glass border-white/5"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                <p className="text-neutral-500 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-6">
                  <a href={project.links.github} className="flex items-center gap-2 text-sm font-bold hover:text-brand-cyan transition-colors">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.links.live} className="flex items-center gap-2 text-sm font-bold hover:text-brand-cyan transition-colors">
                    <ExternalLink size={18} /> Preview
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
