import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Instagram, Send, Sparkles } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left: Info & Vision */}
          <div>
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-brand-cyan mb-6">Connect</h2>
            <h3 className="text-4xl font-display font-bold mb-12">Let's build something <span className="text-gradient">exceptional.</span></h3>
            
            <div className="space-y-12 mb-16">
              <div className="p-8 rounded-[32px] glass relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Sparkles size={100} />
                </div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="text-brand-cyan" size={20} /> Product Vision
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  I'm deeply interested in the future of web automation and AI-integrated systems. Currently exploring startup concepts focused on secure digital asset trading and decentralized identity verification for independent creators.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Mail, label: 'Email', value: 'contact@denisanjaya.dev', href: 'mailto:deniproject01@gmail.com' },
                  { icon: Github, label: 'GitHub', value: '@denisanjaya', href: '#' },
                  { icon: Linkedin, label: 'LinkedIn', value: '/in/denisanjaya', href: '#' },
                  { icon: Instagram, label: 'Instagram', value: '@denisanjaya', href: '#' },
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    className="p-6 rounded-2xl glass hover:bg-white/5 transition-all group"
                  >
                    <social.icon className="text-neutral-500 group-hover:text-brand-cyan mb-4 transition-colors" size={20} />
                    <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">{social.label}</p>
                    <p className="text-sm font-bold truncate">{social.value}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 rounded-[40px] glass border-white/5"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest pl-4">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Taylor Otwell"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:outline-none focus:border-brand-cyan/50 focus:bg-white/10 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest pl-4">Email Address</label>
                <input 
                  type="email" 
                  placeholder="taylor@laravel.com"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:outline-none focus:border-brand-cyan/50 focus:bg-white/10 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest pl-4">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:outline-none focus:border-brand-cyan/50 focus:bg-white/10 transition-all font-medium resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors mt-4"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
