import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center hero-pattern overflow-hidden relative">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 py-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Jasa Pembuatan <br />
            <span className="text-secondary">Dokumen Bisnis</span>
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            Butuh NPWP, SIUP/NIB, atau Efin DJP untuk bisnis Anda? 
            Kami siap membantu Anda mendapatkan dokumen bisnis 
            dengan proses yang cepat dan mudah.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#layanan" className="btn btn-primary">
              Lihat Layanan
            </Link>
            <Link href="#kontak" className="btn border border-primary text-primary hover:bg-neutral transition-colors flex items-center justify-center gap-2">
              Hubungi Kami <FiArrowRight />
            </Link>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center justify-center relative">
          <div className="relative w-full h-full max-w-[500px]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary opacity-10 rounded-full -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-10 rounded-full -z-10"></div>
            
            <div className="bg-white rounded-lg shadow-xl p-8 transform rotate-3 z-10">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">
                🚀 Jasa Pembuatan Dokumen Bisnis 🚀
              </h3>
              
              <p className="mb-6 text-gray-700 text-center">
                Butuh NPWP, SIUP/NIB, atau Efin DJP? Kami siap bantu!
              </p>
              
              <div className="border-t border-b border-gray-200 py-4 my-4">
                <h4 className="font-serif text-lg font-semibold text-primary mb-3">
                  📋 Layanan Kami:
                </h4>
                
                <ul className="space-y-2 pl-5">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">1.</span>
                    <span>NPWP - Dapatkan NPWP Anda dengan mudah.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">2.</span>
                    <span>SIUP/NIB - Urus izin usaha Anda dengan cepat.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">3.</span>
                    <span>Efin DJP - Dibutuhkan jika NPWP terdaftar sebelum 2025.</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-sm text-gray-600 italic text-center">
                🔑 Catatan: Efin hanya untuk NPWP sebelum 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 