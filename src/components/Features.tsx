import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Trophy, Monitor, Bus, Music, Book } from 'lucide-react';

const Features: React.FC = () => {
  const facilities = [
    { icon: <FlaskConical size={28} />, title: 'Science Labs', desc: 'Modern physics, chemistry, and biology laboratories.' },
    { icon: <Monitor size={28} />, title: 'Computer Lab', desc: 'High-tech computer lab with internet connectivity.' },
    { icon: <Book size={28} />, title: 'Library', desc: 'Extensive collection of books, journals, and digital resources.' },
    { icon: <Trophy size={28} />, title: 'Sports Complex', desc: 'Large playground for cricket, football, and volleyball.' },
    { icon: <Music size={28} />, title: 'Cultural Center', desc: 'Auditorium for events, music, and dance practice.' },
    { icon: <Bus size={28} />, title: 'Transport', desc: 'Safe and reliable bus service covering major routes.' },
  ];

  return (
    <section className="py-14 md:py-20 bg-slate-100" id="academics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900 mb-3">
            World Class Facilities
          </h2>
          <div className="h-1 w-16 md:w-24 bg-amber-500 mx-auto rounded-full" />
          <p className="mt-4 text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            We provide an environment where students have access to the best resources to excel in both academics and co-curricular activities.
          </p>
        </motion.div>

        {/* Grid: 1 col mobile → 2 col sm → 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="bg-white p-5 sm:p-7 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-amber-500 group flex gap-4 sm:block"
            >
              {/* Icon: inline with text on mobile, block on sm+ */}
              <div className="bg-blue-50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0 sm:mb-5 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                {facility.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  {facility.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{facility.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
