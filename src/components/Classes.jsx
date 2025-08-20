import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const classPackages = [
  {
    name: 'Kelas Mandiri',
    price: 'Rp 249.000',
    description: 'Belajar kapan saja sesuai kecepatanmu melalui materi video rekaman.',
    features: [
      'Akses Selamanya ke Video Materi',
      'Studi Kasus Praktis',
      'Template Profil LinkedIn',
      'Grup Komunitas Dasar'
    ],
    isPopular: false,
  },
  {
    name: 'Live Bootcamp',
    price: 'Rp 599.000',
    description: 'Interaksi langsung dengan mentor dan sesi praktek intensif.',
    features: [
      'Semua di Kelas Mandiri',
      '4 Sesi Live Interaktif via Zoom',
      'Sesi Tanya Jawab Langsung',
      'Portfolio & CV Review Personal',
      'Grup Komunitas Eksklusif',
      'Sertifikat Kelulusan'
    ],
    isPopular: true,
  }
];

const ClassCard = ({ pkg }) => {
  const cardClasses = pkg.isPopular 
    ? "bg-blue-600 text-white border-blue-700 relative" 
    : "bg-white text-gray-800 border-gray-200";
  
  const buttonClasses = pkg.isPopular
    ? "bg-white text-blue-600 hover:bg-gray-100"
    : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <div 
      className={`p-8 rounded-xl shadow-lg border transform hover:-translate-y-2 transition-transform duration-300 ${cardClasses}`}
      data-aos="fade-up"
      data-aos-delay={pkg.isPopular ? "200" : "0"}
    >
      {pkg.isPopular && (
        <span className="absolute top-0 right-4 -mt-3 bg-yellow-400 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">Paling Populer</span>
      )}
      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
      <p className={`mb-6 ${pkg.isPopular ? 'text-blue-100' : 'text-gray-500'}`}>{pkg.description}</p>
      <div className="text-4xl font-bold mb-6">
        {pkg.price}
      </div>
      <ul className="space-y-4 mb-8">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <BsCheckCircleFill className={`mr-3 ${pkg.isPopular ? 'text-yellow-400' : 'text-blue-600'}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#" className={`block w-full text-center font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 ${buttonClasses}`}>
        Daftar Sekarang
      </a>
    </div>
  );
};

const Classes = () => {
  return (
    <section id="classes" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
          Gabung Kelas LinkedIn Terbaik
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Pilih paket yang paling sesuai dengan gaya belajar dan tujuan kariermu.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {classPackages.map((pkg, index) => (
            <ClassCard key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;