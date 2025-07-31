// gambar yg udahbisa tampil

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';

// // interface Foto {
// //   id: number;
// //   url: string;
// //   mobil_id: number;
// // }

// // interface Mobil {
// //   id: number;
// //   merek: string;
// //   tipe: string;
// //   harga: string;
// //   tahun: string;
// //   foto: Foto[]; // relasi array foto
// // }

// // const ProdukList: React.FC = () => {
// //   const [mobilList, setMobilList] = useState<Mobil[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchMobil = async () => {
// //       try {
// //         const response = await axios.get('https://api-dealer-car-production.up.railway.app/mobil');
// //         setMobilList(response.data.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Gagal fetch data mobil:', error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchMobil();
// //   }, []);

// //   if (loading) {
// //     return <p className="text-center mt-10 text-gray-500">Loading data mobil...</p>;
// //   }

// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
// //       {mobilList.map((mobil) => (
// //         <div key={mobil.id} className="bg-white rounded-xl shadow-md overflow-hidden">
// //           {/* Cek jika ada foto, tampilkan hanya foto[0].url */}
// //           {mobil.foto && mobil.foto.length > 0 ? (
// //             <img
// //               src={mobil.foto[0].url}
// //               alt={`${mobil.merek} ${mobil.tipe}`}
// //               className="w-full h-48 object-cover"
// //             />
// //           ) : (
// //             <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
// //               Tidak ada foto
// //             </div>
// //           )}

// //           <div className="p-4">
// //             <h2 className="text-lg font-semibold">{mobil.merek} {mobil.tipe}</h2>
// //             <p className="text-sm text-gray-600 mb-1">Tahun: {mobil.tahun}</p>
// //             <p className="text-sm text-gray-800 font-medium">Rp {mobil.harga}</p>
// //             <Link
// //               to={`/detail/${mobil.id}`}
// //               className="inline-block mt-3 text-blue-600 hover:underline text-sm"
// //             >
// //               Lihat Detail
// //             </Link>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ProdukList;


// gambar yg belum bisa tampil
// import { Link } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';

// interface ProdukView {
//   id: number;
//   merek: string;
//   tipe: string;
//   harga: string;
//   tahun: string;
//   spesifikasi: string;
//   keterangan: string;
//   status: string;
//   foto: {
//     id: number;
//     filename: string;
//   }[];
// }

// const ProdukList: React.FC = () => {
//   const [produkv, setProdukv] = useState<ProdukView[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get('https://api-dealer-car-production.up.railway.app/mobil')
//       .then((res) => {
//         const responseData = res.data;
//         if (Array.isArray(responseData.data)) {
//           setProdukv(responseData.data);
//         } else {
//           console.error("Isi 'data' bukan array:", responseData);
//           setError('Format data tidak sesuai.');
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Gagal fetch data:', err);
//         setError('Gagal memuat produk 😓.');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="p-6 text-center text-gray-500">
//         Memuat data mobil...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-6 text-red-600 text-center">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f8f9fc] p-6">
//       {/* Header & Tombol Kembali */}
//       <div className="max-w-6xl mx-auto mb-6">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="flex items-center justify-between mb-4"
//         >
//           <h1 className="text-2xl sm:text-3xl font-bold text-[#35467e]">Daftar Mobil Tersedia</h1>
//           <Link
//             to="/"
//             className="text-sm sm:text-base bg-[#35467e] text-white px-4 py-2 rounded-md hover:bg-[#2b3a6b] transition"
//           >
//             ← Kembali ke Beranda
//           </Link>
//         </motion.div>
//       </div>

//       {/* List Produk */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {produkv.map((item) => {
//           const firstImage = item.foto?.[0]?.filename;
//           const imageUrl = firstImage
//             ? `https://api-dealer-car-production.up.railway.app/uploads/${firstImage}`
//             : null;

//           // Skip rendering card if no image
//           if (!imageUrl) return null;

//           return (
//             <motion.div
//               key={item.id}
//               layout
//               className="flex flex-col rounded-xl overflow-hidden shadow-md bg-white transition hover:shadow-xl group"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//             >
//               <img
//                 src={imageUrl}
//                 alt={item.tipe}
//                 className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
//               />

//               <div className="p-4 flex flex-col justify-between flex-grow">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                   {item.merek} {item.tipe}
//                 </h3>

//                 <div className="text-sm text-gray-600 space-y-1 mb-3">
//                   <p>Tahun: {item.tahun}</p>
//                   <p>Spesifikasi: {item.spesifikasi}</p>
//                   <p>{item.keterangan}</p>
//                 </div>

//                 <p className="text-primary font-bold text-lg mb-4 text-[#35467e]">
//                   Rp {new Intl.NumberFormat('id-ID').format(Number(item.harga))}
//                 </p>

//                 <div className="flex justify-between gap-2 text-sm font-medium">
//                   <Link
//                     to={`/produk/${item.id}`}
//                     className="w-full text-center py-1.5 rounded-md bg-[#5266a9] text-white hover:bg-[#445aa0] transition"
//                   >
//                     Lihat Detail
//                   </Link>
//                   <a
//                     href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20mobil%20${encodeURIComponent(
//                       item.merek
//                     )}%20${encodeURIComponent(item.tipe)}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-full text-center py-1.5 rounded-md bg-[#35467e] text-white hover:bg-[#2e3b69] transition"
//                   >
//                     Hubungi
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProdukList;
