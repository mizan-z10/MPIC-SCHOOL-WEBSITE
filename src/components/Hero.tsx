import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-900/65 to-slate-900/90" />
      </div>

      {/* Content — mobile-first padding, text sizes scale up */}
      <div className="relative z-10 text-center px-5 sm:px-8 max-w-5xl mx-auto pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-5 md:space-y-6"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs sm:text-sm font-semibold tracking-wide">
            EST. 1975 • Chauri Chaura
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Mahadev Prashad{' '}
            <br className="hidden sm:block" />
            <span className="text-amber-400">Inter College</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            Empowering the next generation of leaders in Gorakhpur with excellence in education, character, and innovation.
          </p>

          {/* Buttons: stacked on mobile, side-by-side on sm+ */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2">
            <a
              href="#about"
              className="w-full sm:w-auto px-7 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-amber-500/30 flex items-center justify-center gap-2 group"
            >
              Discover More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white rounded-full font-bold text-base md:text-lg transition-all text-center"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-8 h-8 md:w-10 md:h-10" />
      </motion.div>
    </div>
  );
};

export default Hero;
