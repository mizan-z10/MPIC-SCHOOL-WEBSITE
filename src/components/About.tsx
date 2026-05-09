import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-amber-500" />,
      title: 'Academic Excellence',
      description:
        'Providing a rigorous curriculum that balances traditional values with modern learning techniques.',
    },
    {
      icon: <Users className="w-6 h-6 text-amber-500" />,
      title: 'Expert Faculty',
      description:
        'Dedicated teachers committed to nurturing every student`s potential through personalized attention.',
    },
    {
      icon: <Target className="w-6 h-6 text-amber-500" />,
      title: 'Holistic Development',
      description:
        'Focus on sports, arts, and moral education to shape well-rounded individuals ready for the future.',
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text — comes first on mobile (easier to read before images) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-amber-600 font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">
              About Our School
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-5 leading-snug">
              A Legacy of Education in{' '}
              <span className="text-amber-500">Chauri Chaura</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
              Located in the historic land of Chauri Chaura, Gorakhpur, Mahadev Prashad Inter College stands as a beacon of knowledge and discipline. Since our inception, we have been dedicated to illuminating young minds and fostering a community of learners who are deeply rooted in their culture while reaching for the stars.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that education is not just about filling a pail, but the lighting of a fire. Our campus provides a safe, inclusive, and stimulating environment where every student is encouraged to ask questions, explore ideas, and achieve their dreams.
            </p>

            <div className="grid gap-4 sm:gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-blue-50 rounded-lg shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-0.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image grid — hidden on small phones, visible sm+ */}
          <motion.div
            className="relative hidden sm:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4 translate-y-6 sm:translate-y-8">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Classroom"
                  className="rounded-2xl shadow-xl w-full h-44 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="School Building"
                  className="rounded-2xl shadow-xl w-full h-32 sm:h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Students Studying"
                  className="rounded-2xl shadow-xl w-full h-32 sm:h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://images.unsplash.com/photo-1577896334698-13c1eed48814?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Library"
                  className="rounded-2xl shadow-xl w-full h-44 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
