import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
  foto: Foto[]; // relasi array foto
}

const ProdukList: React.FC = () => {
  const [mobilList, setMobilList] = useState<Mobil[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMobil = async () => {
      try {
        const response = await axios.get('https://api-dealer-car-production.up.railway.app/mobil');
        setMobilList(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Gagal fetch data mobil:', error);
        setLoading(false);
      }
    };

    fetchMobil();
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading data mobil...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {mobilList.map((mobil) => (
        <div key={mobil.id} className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Cek jika ada foto, tampilkan hanya foto[0].url */}
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
            <Link
              to={`/produk/${mobil.id}`}
              className="inline-block mt-3 text-blue-600 hover:underline text-sm"
            >
              Lihat Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProdukList;
