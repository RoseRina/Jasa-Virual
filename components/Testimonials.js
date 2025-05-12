import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmad Santoso',
      role: 'Pengusaha UMKM',
      image: '/testimonials/person1.jpg',
      content: 'Proses pembuatan NPWP sangat cepat dan mudah. Tim sangat profesional dan responsif dalam membantu saya. Terima kasih Jasa Dokumen!',
      rating: 5
    },
    {
      name: 'Siti Rahayu',
      role: 'Startup Founder',
      image: '/testimonials/person2.jpg',
      content: 'Sangat terbantu dengan layanan pembuatan SIUP/NIB. Prosesnya transparan dan tim sangat informatif dalam menjelaskan setiap tahapan.',
      rating: 5
    },
    {
      name: 'Budi Prakoso',
      role: 'Konsultan Bisnis',
      image: '/testimonials/person3.jpg',
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
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="inline-block text-yellow-400 mr-1" />
                ))}
              </div>

              <blockquote className="text-gray-700 italic">
                "{testimonial.content}"
              </blockquote>
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