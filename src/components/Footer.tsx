import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const navLinks = ['Home', 'About Us', 'Academics', 'Gallery', 'Contact'];
  const hrefs = ['#home', '#about', '#academics', '#gallery', '#contact'];
  const academics = ['Science Stream', 'Commerce Stream', 'Arts & Humanities', 'Sports Academy', 'Co-curriculars'];
  const hours = [
    { day: 'Mon - Fri', time: '8:00 AM - 4:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 1:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];
  const socials = [
    { icon: <FaFacebook size={18} />, href: '#' },
    { icon: <FaTwitter size={18} />, href: '#' },
    { icon: <FaInstagram size={18} />, href: '#' },
    { icon: <FaLinkedin size={18} />, href: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/*
          Mobile: 2-column grid (Brand + Hours | Links | Academics stacked naturally)
          md: 2 columns | lg: 4 columns
        */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10 md:mb-12">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <GraduationCap className="h-7 w-7 text-amber-500" />
              <span className="font-bold text-xl font-serif">MPIC</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Mahadev Prashad Inter College is dedicated to providing quality education and fostering the holistic development of students in Chauri Chaura.
            </p>
            {/* Social icons — larger tap targets on mobile */}
            <div className="flex gap-3 pt-1">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map((name, i) => (
                <li key={name}>
                  <a href={hrefs[i]} className="text-sm hover:text-amber-500 transition-colors">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 md:mb-6">Academics</h3>
            <ul className="space-y-2.5">
              {academics.map((item) => (
                <li key={item} className="text-sm hover:text-amber-500 transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visiting Hours */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-white font-bold text-base mb-4 md:mb-6">Visiting Hours</h3>
            <ul className="space-y-2.5">
              {hours.map(({ day, time }) => (
                <li key={day} className="flex justify-between gap-4 text-sm">
                  <span>{day}:</span>
                  <span className={time === 'Closed' ? 'text-amber-500' : ''}>{time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-slate-800">
              <p className="text-xs sm:text-sm text-slate-400">
                Chauri Chaura, Gorakhpur, UP - 273201
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-slate-500">
            © {new Date().getFullYear()} Mahadev Prashad Inter College. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-1">
            Designed with <Heart className="w-3.5 h-3.5 text-red-500 fill-current" /> for Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
