import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    // Handle form submission - in production this would send data to server
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
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
                  <FiMail className="w-6 h-6 text-neutral" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-neutral">info@jasadokumen.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-light p-3 rounded-full">
                  <FiPhone className="w-6 h-6 text-neutral" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Telepon</h4>
                  <p className="text-neutral">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-light p-3 rounded-full">
                  <FiMapPin className="w-6 h-6 text-neutral" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Alamat</h4>
                  <p className="text-neutral">
                    Jl. Dokumen Bisnis No.123, <br />
                    Jakarta Selatan, Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-serif font-semibold mb-6">
                Jam Operasional
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="text-neutral">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span className="text-neutral">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu & Hari Libur</span>
                  <span className="text-neutral">Tutup</span>
                </div>
              </div>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
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
                className="btn btn-primary w-full flex items-center justify-center gap-2"
              >
                Kirim Pesan <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 