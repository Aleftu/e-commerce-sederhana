import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa'; 
import Loading from '../components/Loading';

interface Foto {
  id: number;
  url: string;
  mobil_id: number;
}

interface Mobil {
  id: number;
  merek: string;
  tipe: string;
  harga: string;
  tahun: string;
  foto: Foto[];
}

const ProdukList: React.FC = () => {
  const [mobilList, setMobilList] = useState<Mobil[]>([]);
  const [loading, setLoading] = useState(true);
  const [error ,setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMobil = async () => {
      try {
        const response = await axios.get('https://api-dealer-car-production.up.railway.app/mobil');
        setMobilList(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Gagal fetch data mobil:', error);
        setError('Gagal memuat produk');
        setLoading(false);
      }
    };

    fetchMobil();
  }, []);

  if (loading) {
     return <Loading />;
  }

  return (
    <div className="min-h-screen bg-[#beccfc] p-4 font-semibold">
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <FaReact className="text-4xl text-blue-500 mb-2" />
        <h1 className="text-2xl font-bold text-gray-700">Daftar Produk Mobil</h1>
        <Link to="/" className="mt-2 text-sm text-[#374472] underline hover:text-blue-900">
          Kembali ke Beranda
        </Link>
      </div>

      {/* Error */}
      {error && (
        <p className="text-center text-red-500">{error}</p>
      )}

      {/* Grid Produk */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mobilList.map((mobil) => (
          <div key={mobil.id} className="bg-white text-gray-700 rounded-xl shadow-md overflow-hidden">
            {mobil.foto && mobil.foto.length > 0 ? (
              <img
                src={mobil.foto[0].url}
                alt={`${mobil.merek} ${mobil.tipe}`}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                Tidak ada foto
              </div>
            )}

            <div className="p-4">
              <h2 className="text-lg font-semibold">{mobil.merek} {mobil.tipe}</h2>
              <p className="text-sm text-gray-600 mb-1">Tahun: {mobil.tahun}</p>
              <p className="text-sm text-gray-800 font-medium">Rp {mobil.harga}</p>

              {/* Tombol Aksi */}
              <div className="mt-4 space-x-2">
                <Link
                  to={`/produk/${mobil.id}`}
                  className="inline-block px-3 py-1 bg-[#6978af] text-white text-sm rounded hover:bg-[#7086d6]"
                >
                  Lihat Detail
                </Link>
                <a
                  href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20mobil%20${mobil.merek}%20${mobil.tipe}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 bg-[#374470] text-white text-sm rounded hover:bg-[#526091]">
                  Hubungi
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdukList; 