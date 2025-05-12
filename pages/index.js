import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Jasa Dokumen Bisnis | NPWP, SIUP/NIB, Efin DJP</title>
        <meta name="description" content="Jasa pembuatan dokumen bisnis seperti NPWP, SIUP/NIB, dan Efin DJP dengan proses cepat dan mudah." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
} 