import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Our Location',
      lines: [
        'Mahadev Prashad Inter College,',
        'Chauri Chaura, Gorakhpur,',
        'Uttar Pradesh - 273201',
      ],
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone Number',
      lines: ['+91 98765 43210', '+91 551 234567'],
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email Address',
      lines: ['info@mpic-chaurichaura.edu.in', 'admissions@mpic-chaurichaura.edu.in'],
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: form first (action-first UX), info below. Desktop: side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Contact Form — first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100 order-1 lg:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-5">Send Message</h3>
            <div className="space-y-4 sm:space-y-5">
              {/* Name + Phone: stacked on mobile, side-by-side on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-base"
                    placeholder="+91 99999 99999"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-base"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none text-base"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Large tap-friendly CTA */}
              <button
                type="button"
                className="w-full py-4 bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group text-base"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Contact Info — second on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-2 lg:order-1"
          >
            <h4 className="text-amber-600 font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">
              Get in Touch
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 leading-snug">
              We'd Love to Hear from You
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg">
              Have questions about admissions, academics, or campus life? Reach out or visit our campus in Chauri Chaura.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {contactItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 sm:gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <div className="bg-amber-100 p-2.5 rounded-full text-amber-600 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-0.5">
                      {item.title}
                    </h3>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-gray-600 text-sm sm:text-base">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
