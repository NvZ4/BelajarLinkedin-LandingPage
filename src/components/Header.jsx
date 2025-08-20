// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoClose } from "react-icons/io5";

const navLinks = [
  { href: '#home', text: 'Home' },
  { href: '#about', text: 'About' },
  { href: '#classes', text: 'Classes' },
  { href: '#curriculum',text: 'Curriculum' },
  { href: '#testimonials', text: 'Testimonials' },
  { href: '#faq', text: 'FAQ' },
  { href: '#contact', text: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State baru untuk melacak section yang aktif
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));

    const observerOptions = {
      root: null, // Mengamati viewport
      rootMargin: '0px',
      threshold: 0.5 // Section dianggap aktif jika 50% terlihat
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    // Cleanup observer saat komponen di-unmount
    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600">
            Belajar<span className="text-gray-800">LinkedIn</span>
          </a>

          {/* Navigasi untuk Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                >
                  {link.text}
                  {/* Garis bawah biru yang aktif */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}
                  ></span>
                </a>
              );
            })}
          </nav>

          {/* Tombol Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Buka menu"
          >
            <HiOutlineMenu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
           <a href="#" className="text-2xl font-bold text-blue-600" onClick={handleLinkClick}>
            Belajar<span className="text-gray-800">LinkedIn</span>
          </a>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="focus:outline-none"
            aria-label="Tutup menu"
          >
            <IoClose className="w-8 h-8" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl text-gray-800 hover:text-blue-600"
              onClick={handleLinkClick}
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;