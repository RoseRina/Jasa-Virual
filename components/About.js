import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';

const About = () => {
  const benefits = [
    'Proses cepat dan efisien',
    'Konsultasi gratis',
    'Tim profesional berpengalaman',
    'Dokumen dijamin resmi',
    'Harga transparan',
    'Layanan after-service'
  ];

  return (
    <section id="tentang" className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/logo.png"
                  alt="JasaDokumen Logo"
                  layout="fill"
                  objectFit="contain"
                  className="p-8"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full flex items-center justify-center text-center p-4">
                <span className="text-white font-bold">
                  Terpercaya Sejak 2020
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
              Tentang Kami
            </h2>
            
            <p className="text-gray-700 mb-4">
              JasaDokumen adalah penyedia layanan pembuatan dokumen bisnis yang terpercaya. 
              Kami membantu pelaku usaha dan individu dalam mengurus dokumen-dokumen penting 
              seperti NPWP, SIUP/NIB, dan Efin DJP dengan cara yang mudah dan efisien.
            </p>
            
            <p className="text-gray-700 mb-6">
              Dengan tim profesional yang berpengalaman, kami memastikan dokumen Anda diproses 
              dengan cepat, akurat, dan sesuai dengan peraturan yang berlaku. Kami memahami 
              betapa pentingnya dokumen-dokumen ini untuk keberlangsungan bisnis Anda.
            </p>
            
            <h3 className="text-xl font-semibold text-primary mb-4 font-serif">
              Mengapa Memilih Kami?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <FiCheck className="text-white w-3 h-3" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-neutral rounded-md border-l-4 border-primary">
              <p className="text-gray-700 italic">
                "Kami berkomitmen untuk memberikan layanan terbaik dan menjadi mitra 
                terpercaya dalam pengurusan dokumen bisnis Anda."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 