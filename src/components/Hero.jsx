import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="container mx-auto px-6 pt-16 md:pt-24 pb-12 md:pb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" data-aos="fade-right">
            Unlock Your <span className="text-blue-600">Career Potential</span> with LinkedIn
          </h1>
          <p className="text-lg text-gray-600" data-aos="fade-right" data-aos-delay="200">
            Belajar personal branding & networking agar lebih cepat dapat kerja.
          </p>
          <a href="#" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300" data-aos="fade-up" data-aos-delay="400">
            Join the Class
          </a>
        </div>
        <div data-aos="fade-left" data-aos-delay="200">
          <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=996" alt="Career Growth Illustration" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;