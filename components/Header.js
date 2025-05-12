import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="relative w-40 h-12">
            <Image
              src="/logo.png"
              alt="JasaDokumen"
              layout="fill"
              objectFit="contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#layanan" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Layanan
          </Link>
          <Link href="#tentang" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Tentang Kami
          </Link>
          <Link 
            href="https://wa.me/6285752083533" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-[#25D366] text-white hover:bg-opacity-90"
          >
            Hubungi Kami
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-white shadow-lg py-4 border-b border-gray-200 z-50">
          <div className="container-custom flex flex-col space-y-4">
            <Link
              href="#layanan"
              className="font-medium text-gray-700 hover:text-primary transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Layanan
            </Link>
            <Link
              href="#tentang"
              className="font-medium text-gray-700 hover:text-primary transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="https://wa.me/6285752083533"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] text-white hover:bg-opacity-90 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 