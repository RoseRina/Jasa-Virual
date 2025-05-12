import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">JasaDokumen</h3>
            <p className="text-neutral mb-4">
              Kami menyediakan layanan pembuatan dokumen bisnis dengan proses
              yang cepat, mudah, dan terpercaya. Tim kami siap membantu Anda
              mendapatkan dokumen bisnis yang diperlukan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#layanan" className="text-neutral hover:text-white transition-colors">
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link href="#tentang" className="text-neutral hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#kontak" className="text-neutral hover:text-white transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FiMail className="text-neutral-dark" />
                <span className="text-neutral">info@jasadokumen.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-neutral-dark" />
                <span className="text-neutral">+62 812 3456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-neutral-dark mt-1" />
                <span className="text-neutral">
                  Jl. Dokumen Bisnis No.123, Jakarta Selatan, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center text-neutral">
          <p>
            &copy; {currentYear} JasaDokumen. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 