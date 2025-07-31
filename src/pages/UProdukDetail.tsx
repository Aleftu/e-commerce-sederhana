import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from '../components/Footer'; // Pastikan Footer-nya ada di folder ini

interface ProdukDetailView {
  id: number;
  merek: string;
  tipe: string;
  harga: string | number;
  tahun: string | number;
  spesifikasi: string;
  keterangan: string;
  status: string;
  foto: string[];
}

const ProdukDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [produk, setProduk] = useState<ProdukDetailView | null>(null);

  useEffect(() => {
    axios
      .get(`https://api-dealer-car-production.up.railway.app/mobil/${id}`)
      .then((res) => {
        const found = res.data.data.find((item: any) => item.id === Number(id));
        if (!found) {
          console.error(`Produk dengan id ${id} tidak ditemukan.`);
          return;
        }

        // ✅ Ambil foto dari 'url'
        const fotoUrls = Array.isArray(found.foto)
          ? found.foto.map((f: any) => f.url)
          : [];

        const produkBaru: ProdukDetailView = {
          id: found.id,
          merek: found.merek,
          tipe: found.tipe,
          harga: found.harga,
          tahun: found.tahun,
          spesifikasi: found.spesifikasi,
          keterangan: found.keterangan,
          status: found.status,
          foto: fotoUrls,
        };

        setProduk(produkBaru);
      })
      .catch((err) => {
        console.error('Gagal mengambil detail produk:', err);
      });
  }, [id]);

  if (!produk) return <p className="p-4">Loading...</p>;

  return (
    <div className="flex flex-col min-h-screen bg-[#beccfc] text-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8 flex-grow">
        <button
          onClick={() => navigate('/list-produk')}
          className="mb-4 px-4 py-2 bg-white text-[#35467e] border-[#35467e] rounded hover:bg-[#35467e] hover:text-white transition"
        >
          ← Kembali ke Produk
        </button>

        {/* Judul */}
        <h2 className="text-3xl font-bold text-[#35467e] mb-6 text-center">
          {produk.merek} {produk.tipe}
        </h2>

        {/* Slider Foto */}
        <div className="rounded-lg overflow-hidden shadow mb-8 bg-white">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            {produk.foto && produk.foto.length > 0 ? (
              produk.foto.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-[400px] object-cover"
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="w-full h-[400px] flex items-center justify-center bg-gray-200 text-gray-500">
                  Tidak ada foto tersedia
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        {/* Detail Produk */}
        <div className="space-y-3 bg-white rounded-xl shadow px-6 py-6 mb-16">
          <p><span className="font-semibold">Tahun:</span> {produk.tahun}</p>
          <p><span className="font-semibold">Spesifikasi:</span> {produk.spesifikasi}</p>
          <p><span className="font-semibold">Keterangan:</span> {produk.keterangan}</p>
          <p><span className="font-semibold">Status:</span> {produk.status}</p>
          <p className="text-lg font-bold text-green-600">
            Harga: Rp {new Intl.NumberFormat('id-ID').format(Number(produk.harga))}
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProdukDetail;
