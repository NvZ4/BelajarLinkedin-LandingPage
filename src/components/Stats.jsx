import React from 'react';

const statsData = [
  { value: "1,200+", label: "Lulusan Bahagia", delay: "0" },
  { value: "4.9/5.0", label: "Rating Kelas", delay: "100" },
  { value: "30+", label: "Materi Praktis", delay: "200" },
  { value: "95%", label: "Dapat Dukungan Karier", delay: "300" },
];

const StatItem = ({ value, label, delay }) => (
  <div data-aos="fade-up" data-aos-delay={delay}>
    <h3 className="text-3xl font-bold text-blue-600">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const Stats = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;