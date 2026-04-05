const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 glass mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center z-10 relative">
        <p className="text-slate-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Ayyappa Korlepara. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm flex items-center">
          Built with <span className="text-red-500 mx-1">♥️</span> using React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
