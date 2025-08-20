import React, { useState } from 'react';
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from 'react-icons/md';

const Contact = () => {
  // State untuk mengelola input form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di aplikasi nyata, di sini Anda akan mengirim data ke backend atau layanan email
    alert('Terima kasih! Pesan Anda telah kami terima.');
    console.log('Form data submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" data-aos="fade-up">Hubungi Kami</h2>
          <p className="text-gray-600 mt-2" data-aos="fade-up" data-aos-delay="100">
            Punya pertanyaan? Jangan ragu untuk mengirim pesan.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-xl shadow-lg">
          {/* Info Kontak */}
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-800">Informasi Kontak</h3>
            <p className="text-gray-600">
              Isi formulir di samping atau hubungi kami melalui salah satu metode di bawah ini.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MdOutlineEmail className="w-6 h-6 text-blue-600 mr-4" />
                <a href="mailto:contact@belajarlinkedin.com" className="text-gray-700 hover:text-blue-600">
                  contact@belajarlinkedin.com
                </a>
              </div>
              <div className="flex items-center">
                <MdOutlinePhone className="w-6 h-6 text-blue-600 mr-4" />
                <span className="text-gray-700">+62 123 4567 8910</span>
              </div>
              <div className="flex items-center">
                <MdOutlineLocationOn className="w-6 h-6 text-blue-600 mr-4" />
                <span className="text-gray-700">Bekasi, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Formulir Kontak */}
          <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-left" data-aos-delay="200">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Alamat Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan Anda</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;