import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-first: compact row */}
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo — always visible, label shortened on mobile */}
          <a href="#home" className="flex items-center gap-2">
            <div className="bg-white p-1.5 rounded-full shadow-md">
              <GraduationCap className="h-5 w-5 text-blue-900" />
            </div>
            <span className="font-bold text-base md:text-xl tracking-tight text-white">
              MPIC
              <span className="hidden sm:inline text-amber-400"> | Chauri Chaura</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-100 hover:text-amber-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-md"
            >
              Admissions
            </a>
          </div>

          {/* Mobile hamburger — large tap target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-blue-900 border-t border-blue-800 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center text-gray-100 hover:text-amber-400 hover:bg-white/5 px-3 py-3 rounded-lg text-base font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              {/* Full-width CTA at bottom of drawer */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white mt-3 px-4 py-3.5 rounded-xl font-bold text-base transition-colors"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
