import React from 'react';

const curriculumData = [
  {
    title: "Fondasi Personal Branding",
    description: "Menemukan unique selling point dan membangun citra profesional yang otentik di LinkedIn."
  },
  {
    title: "Optimasi Profil All-Star",
    description: "Teknik mengisi setiap bagian profil (headline, summary, experience) agar SEO-friendly dan menarik bagi rekruter."
  },
  {
    title: "Content Strategy & Networking",
    description: "Cara membuat konten yang relevan, membangun engagement, dan memperluas jaringan secara efektif."
  },
  {
    title: "Strategi Melamar Kerja Tersembunyi",
    description: "Memanfaatkan LinkedIn untuk menemukan lowongan yang tidak diiklankan dan mendekati hiring manager."
  }
];

const CurriculumItem = ({ number, title, description, delay }) => (
  <div className="flex items-start" data-aos="fade-right" data-aos-delay={delay}>
    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">{number}</div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" data-aos="fade-up">Apa yang Akan Kamu Pelajari?</h2>
          <p className="text-gray-600 mt-2" data-aos="fade-up" data-aos-delay="100">
            Kurikulum kami dirancang untuk hasil maksimal.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {curriculumData.map((item, index) => (
              <CurriculumItem
                key={index}
                number={index + 1}
                title={item.title}
                description={item.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;