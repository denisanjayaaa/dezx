export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-neutral-500 font-medium tracking-tight">
          © {new Date().getFullYear()} Deni Sanjaya. Built with passion & precision.
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-xs font-bold text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-xs font-bold text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">Dribbble</a>
          <a href="#" className="text-xs font-bold text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
