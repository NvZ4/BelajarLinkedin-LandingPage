import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">Hubungi kami untuk informasi lebih lanjut.</p>
        <p className="font-semibold mb-6">
          <a href="mailto:contact@belajarlinkedin.com" className="hover:text-blue-400 transition duration-300">
            contact@belajarlinkedin.com
          </a>
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-400 transition-transform transform hover:scale-110 duration-300">
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-transform transform hover:scale-110 duration-300">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-transform transform hover:scale-110 duration-300">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-8 text-gray-400 text-sm">&copy; 2025 Belajar LinkedIn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;