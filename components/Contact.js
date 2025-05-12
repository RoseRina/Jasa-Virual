import { useState } from 'react';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Halo, saya ${formData.name} ingin konsultasi tentang ${formData.service}.\n\n${formData.message}`;
    const whatsappUrl = `https://wa.me/6285752083533?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="kontak" className="section bg-primary text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Hubungi Kami
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            Siap untuk mengurus dokumen bisnis Anda? Hubungi kami sekarang untuk konsultasi gratis
            dan informasi lebih lanjut tentang layanan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">
              Informasi Kontak
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-light p-3 rounded-full">
                  <FiPhone className="w-6 h-6 text-neutral" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">WhatsApp</h4>
                  <p className="text-neutral">0857-5208-3533</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/6285752083533"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>Chat WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="bg-white text-gray-800 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-6">
              Kirim Pesan
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  No. Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 mb-2">
                  Layanan yang Dibutuhkan
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">-- Pilih Layanan --</option>
                  <option value="NPWP">NPWP</option>
                  <option value="SIUP/NIB">SIUP/NIB</option>
                  <option value="Efin DJP">Efin DJP</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-opacity-90"
              >
                <FaWhatsapp className="w-5 h-5" />
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 