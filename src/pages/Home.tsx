import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import GradientBackground from '../components/Background';
import Loading from '../components/Loading';
import ProdukPrev from './ProdukPrev';
import KontakComponent from '../components/Kontak';
import Footer from '../components/Footer';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  // Simulasi delay loading 2 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <GradientBackground />

      <div className="bg-[#808dc4]">
        {/* Produk Section */}
        <h1 className="text-center mt-1 font-semibold text-lg">
          Daftar Produk
        </h1>

        <div className="mb-10 card rounded-md bg-[#beccfc] mt-3 ">
          <ProdukPrev />
        </div>

        {/* Kontak Section */}
        <div className="bg-[#8d9bd1] relative z-10">
          <h1 className="mb-5 text-center mt-5 font-semibold text-xl">
            Informasi Kontak
          </h1>

          <div className="mb-5 card rounded-md mt-3">
            <KontakComponent />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
