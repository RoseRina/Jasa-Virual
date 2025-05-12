import { FiFileText, FiFile, FiLock } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiFileText className="w-12 h-12 text-primary" />,
      title: 'NPWP',
      description: 'Nomor Pokok Wajib Pajak adalah identitas yang harus dimiliki setiap wajib pajak. Kami membantu Anda mendapatkan NPWP dengan proses yang mudah dan cepat, tanpa ribet.',
      features: [
        'Konsultasi kebutuhan NPWP Anda',
        'Persiapan semua dokumen yang diperlukan',
        'Pendaftaran NPWP secara resmi',
        'Penyerahan kartu NPWP',
      ]
    },
    {
      icon: <FiFile className="w-12 h-12 text-primary" />,
      title: 'SIUP/NIB',
      description: 'Surat Izin Usaha Perdagangan dan Nomor Induk Berusaha adalah dokumen resmi yang harus dimiliki untuk menjalankan usaha secara legal di Indonesia.',
      features: [
        'Analisis jenis izin yang dibutuhkan',
        'Penyiapan berkas dan persyaratan',
        'Pengurusan perizinan resmi',
        'Monitoring proses sampai terbit',
      ]
    },
    {
      icon: <FiLock className="w-12 h-12 text-primary" />,
      title: 'Efin DJP',
      description: 'Electronic Filing Identification Number adalah nomor identitas yang digunakan untuk keperluan perpajakan secara elektronik. Wajib dimiliki jika NPWP terdaftar sebelum 2025.',
      features: [
        'Pengurusan efin untuk wajib pajak',
        'Bantuan aktivasi akun pajak online',
        'Pendampingan penggunaan DJP Online',
        'Support teknis pelaporan pajak',
      ]
    },
  ];

  return (
    <section id="layanan" className="section bg-neutral">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Layanan Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan pengurusan dokumen bisnis yang Anda butuhkan untuk
            menjalankan bisnis dengan legal dan aman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card hover:shadow-lg bg-white group transition-all"
            >
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>
              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-semibold mb-3 text-primary">Termasuk:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary text-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-serif font-bold mb-2">Catatan Penting</h3>
            <p className="text-neutral">
              Efin DJP hanya diperlukan jika NPWP Anda terdaftar sebelum tahun 2025. Jika NPWP Anda
              dibuat pada tahun 2025 atau setelahnya, Anda tidak memerlukan Efin DJP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 