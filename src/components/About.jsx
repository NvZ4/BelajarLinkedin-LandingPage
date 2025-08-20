import React from 'react';
import { FaBullseye, FaUsers, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Kolom Gambar */}
          <div data-aos="fade-right">
            <img 
              src="https://img.freepik.com/free-vector/business-mission-concept-illustration_114360-7295.jpg?w=826" 
              alt="Team discussing a mission" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          {/* Kolom Teks */}
          <div data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-3xl font-bold mb-4">Tentang Belajar LinkedIn</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kami percaya setiap individu memiliki potensi karier yang luar biasa. Misi kami adalah membantu Anda membuka potensi tersebut dengan menguasai LinkedIn, platform profesional paling kuat di dunia.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FaBullseye />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Misi Kami</h4>
                  <p className="text-gray-600">Memberikan panduan praktis dan strategi teruji untuk membangun personal brand yang kuat dan jaringan profesional yang bermakna.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FaUsers />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Untuk Siapa Kami?</h4>
                  <p className="text-gray-600">Untuk mahasiswa, fresh graduate, dan profesional yang siap melesat dalam karier mereka.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;