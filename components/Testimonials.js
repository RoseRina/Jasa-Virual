import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmad Santoso',
      role: 'Pengusaha UMKM',
      content: 'Proses pembuatan NPWP sangat cepat dan mudah. Tim sangat profesional dan responsif dalam membantu saya. Terima kasih Jasa Dokumen!',
      rating: 5
    },
    {
      name: 'Siti Rahayu',
      role: 'Startup Founder',
      content: 'Sangat terbantu dengan layanan pembuatan SIUP/NIB. Prosesnya transparan dan tim sangat informatif dalam menjelaskan setiap tahapan.',
      rating: 5
    },
    {
      name: 'Budi Prakoso',
      role: 'Konsultan Bisnis',
      content: 'Pembuatan Efin DJP jadi lebih mudah dengan bantuan tim yang kompeten. Sangat direkomendasikan untuk semua pelaku usaha!',
      rating: 5
    }
  ];

  return (
    <section className="section bg-neutral">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">
            Testimoni Klien
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apa kata mereka yang telah menggunakan layanan Jasa Dokumen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative"
            >
              <FaQuoteLeft className="text-4xl text-primary opacity-10 absolute top-4 left-4" />
              
              <blockquote className="text-gray-700 mb-6 relative z-10">
                "{testimonial.content}"
              </blockquote>

              <div className="border-t border-gray-100 pt-4">
                <div className="mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="inline-block text-yellow-400 mr-1" />
                  ))}
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg text-primary">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Dan masih banyak lagi klien puas lainnya yang telah kami bantu
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 