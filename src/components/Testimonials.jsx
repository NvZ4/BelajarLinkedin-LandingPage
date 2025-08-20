import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialData = [
  {
    quote: "Setelah ikut kelas ini, profil LinkedIn saya jadi lebih profesional dan mulai dilirik rekruter. Keren banget!",
    name: "- Andi, Mahasiswa UI",
    avatar: "https://i.pravatar.cc/150?u=andi",
    delay: "100"
  },
  {
    quote: "Materinya sangat praktis. Strategi job hunting-nya terbukti ampuh, saya dapat tawaran kerja baru!",
    name: "- Bunga, Fresh Graduate",
    avatar: "https://i.pravatar.cc/150?u=bunga",
    delay: "200"
  },
  {
    quote: "Tips networking-nya sangat membantu saya yang seorang introvert. Recommended!",
    name: "- Charlie, Graphic Designer",
    avatar: "https://i.pravatar.cc/150?u=charlie",
    delay: "300"
  }
];

const TestimonialCard = ({ quote, name, avatar, delay, className }) => (
  <div className={`bg-gray-50 p-8 rounded-lg shadow-lg relative ${className}`} data-aos="fade-up" data-aos-delay={delay}>
   <FaQuoteLeft className="absolute top-4 left-4 w-12 h-12 text-blue-100" />
    <div className="relative z-10">
      <p className="text-gray-600 italic mb-6">"{quote}"</p>
      <div className="flex items-center justify-center">
        <img className="w-12 h-12 rounded-full mr-4" src={avatar} alt={name} />
        <p className="font-semibold">{name}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">Apa Kata Mereka?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;