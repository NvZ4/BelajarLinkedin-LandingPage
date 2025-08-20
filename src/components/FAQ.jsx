import React, { useState, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const faqData = [
  {
    question: "Untuk siapa kelas ini?",
    answer: "Kelas ini cocok untuk mahasiswa tingkat akhir, fresh graduate, dan para profesional yang ingin meningkatkan personal branding dan mencari peluang karier lebih baik melalui LinkedIn."
  },
  {
    question: "Apakah saya butuh akun LinkedIn Premium?",
    answer: "Tidak. Semua strategi yang diajarkan di kelas ini dapat diterapkan secara maksimal menggunakan akun LinkedIn Basic (gratis). Kami akan memberikan tips kapan saat yang tepat untuk upgrade jika memang diperlukan."
  },
  {
    question: "Bagaimana format kelasnya?",
    answer: "Kelas akan diadakan secara online melalui Zoom, terdiri dari sesi pemaparan materi, studi kasus, sesi tanya jawab, dan praktek langsung optimasi profil LinkedIn peserta."
  },
  {
    question: "Apakah saya akan mendapat rekaman kelas?",
    answer: "Ya, semua peserta paket Live Bootcamp akan mendapatkan rekaman setiap sesi yang dapat diakses selamanya, sehingga Anda bisa mengulang materi kapan pun dibutuhkan."
  }
];

const FaqItem = ({ item, index, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        role="button"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        className="w-full flex justify-between items-center text-left p-4 font-semibold focus:outline-none focus:bg-gray-100"
        onClick={onClick}
      >
        <span>{item.question}</span>
        <IoIosArrowDown
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      <div
        ref={contentRef}
        id={`faq-answer-${index}`}
        className="overflow-hidden text-gray-600 transition-max-height duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
        }}
      >
        <p className="p-4 pt-0">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" data-aos="fade-up">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                index={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;