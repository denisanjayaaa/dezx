import { motion } from 'motion/react';
import { ArrowRight, Download, Send } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-brand-cyan text-xs font-bold tracking-widest uppercase mb-6"
          >
            Available for opportunities
          </motion.span>
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Deni <span className="text-gradient">Sanjaya</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-md mb-8 font-medium leading-relaxed">
            Information Systems Student & Full-stack Developer focusing on building clean, automated, and scalable digital solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-neutral-200 transition-colors"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 rounded-xl glass font-bold hover:bg-white/10 transition-colors"
            >
              Contact Me <Send size={18} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 w-full aspect-square max-w-[450px] mx-auto rounded-[40px] overflow-hidden border border-white/10 glass animate-float">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
              alt="Deni Sanjaya"
              className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Decorative frames */}
          <div className="absolute -top-4 -right-4 w-full h-full border border-brand-cyan/20 rounded-[40px] -z-10" />
          <div className="absolute -bottom-4 -left-4 w-full h-full border border-white/5 rounded-[40px] -z-20" />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-neutral-500 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-cyan to-transparent" />
      </motion.div>
    </section>
  );
}
