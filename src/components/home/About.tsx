import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-brand-cyan mb-6">About Me</h2>
            <h3 className="text-4xl font-display font-bold leading-tight">
              Driven by curiosity, fueled by <span className="text-neutral-400 italic">code.</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-lg text-neutral-400 leading-relaxed"
          >
            <p>
              I am an <span className="text-white font-medium">Information Systems student</span> with a deep passion for digital craftsmanship. My journey in tech started with a fascination for how things work under the hood, leading me from design concepts to complex automation systems.
            </p>
            <p>
              Back in the day, I started exploring the intersection of <span className="text-white font-medium">IT and design</span>, which shaped my eye for detail. Today, I split my time between academic excellence and building real-world solutions—from secure transaction platforms to automation bots that simplify the mundane.
            </p>
            <p>
              Whether it's narrowing down a UI/UX problem or architecting a robust backend, I thrive on the challenge of solving problems that matter. I believe technology should be invisible yet impactful, a philosophy I apply to every line of code I write.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
