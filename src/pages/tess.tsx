// // // // // // // gambar yg udahbisa tampil

// // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // import axios from 'axios';
// // // // // // // // import { Link } from 'react-router-dom';

// // // // // // // // interface Foto {
// // // // // // // //   id: number;
// // // // // // // //   url: string;
// // // // // // // //   mobil_id: number;
// // // // // // // // }

// // // // // // // // interface Mobil {
// // // // // // // //   id: number;
// // // // // // // //   merek: string;
// // // // // // // //   tipe: string;
// // // // // // // //   harga: string;
// // // // // // // //   tahun: string;
// // // // // // // //   foto: Foto[]; // relasi array foto
// // // // // // // // }

// // // // // // // // const ProdukList: React.FC = () => {
// // // // // // // //   const [mobilList, setMobilList] = useState<Mobil[]>([]);
// // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchMobil = async () => {
// // // // // // // //       try {
// // // // // // // //         const response = await axios.get('https://api-dealer-car-production.up.railway.app/mobil');
// // // // // // // //         setMobilList(response.data.data);
// // // // // // // //         setLoading(false);
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error('Gagal fetch data mobil:', error);
// // // // // // // //         setLoading(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchMobil();
// // // // // // // //   }, []);

// // // // // // // //   if (loading) {
// // // // // // // //     return <p className="text-center mt-10 text-gray-500">Loading data mobil...</p>;
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
// // // // // // // //       {mobilList.map((mobil) => (
// // // // // // // //         <div key={mobil.id} className="bg-white rounded-xl shadow-md overflow-hidden">
// // // // // // // //           {/* Cek jika ada foto, tampilkan hanya foto[0].url */}
// // // // // // // //           {mobil.foto && mobil.foto.length > 0 ? (
// // // // // // // //             <img
// // // // // // // //               src={mobil.foto[0].url}
// // // // // // // //               alt={`${mobil.merek} ${mobil.tipe}`}
// // // // // // // //               className="w-full h-48 object-cover"
// // // // // // // //             />
// // // // // // // //           ) : (
// // // // // // // //             <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
// // // // // // // //               Tidak ada foto
// // // // // // // //             </div>
// // // // // // // //           )}

// // // // // // // //           <div className="p-4">
// // // // // // // //             <h2 className="text-lg font-semibold">{mobil.merek} {mobil.tipe}</h2>
// // // // // // // //             <p className="text-sm text-gray-600 mb-1">Tahun: {mobil.tahun}</p>
// // // // // // // //             <p className="text-sm text-gray-800 font-medium">Rp {mobil.harga}</p>
// // // // // // // //             <Link
// // // // // // // //               to={`/detail/${mobil.id}`}
// // // // // // // //               className="inline-block mt-3 text-blue-600 hover:underline text-sm"
// // // // // // // //             >
// // // // // // // //               Lihat Detail
// // // // // // // //             </Link>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       ))}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ProdukList;


// // // // // // // gambar yg belum bisa tampil
// // // // // // // import { Link } from 'react-router-dom';
// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import axios from 'axios';
// // // // // // // import { motion } from 'framer-motion';

// // // // // // // interface ProdukView {
// // // // // // //   id: number;
// // // // // // //   merek: string;
// // // // // // //   tipe: string;
// // // // // // //   harga: string;
// // // // // // //   tahun: string;
// // // // // // //   spesifikasi: string;
// // // // // // //   keterangan: string;
// // // // // // //   status: string;
// // // // // // //   foto: {
// // // // // // //     id: number;
// // // // // // //     filename: string;
// // // // // // //   }[];
// // // // // // // }

// // // // // // // const ProdukList: React.FC = () => {
// // // // // // //   const [produkv, setProdukv] = useState<ProdukView[]>([]);
// // // // // // //   const [error, setError] = useState<string | null>(null);
// // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // //   useEffect(() => {
// // // // // // //     axios
// // // // // // //       .get('https://api-dealer-car-production.up.railway.app/mobil')
// // // // // // //       .then((res) => {
// // // // // // //         const responseData = res.data;
// // // // // // //         if (Array.isArray(responseData.data)) {
// // // // // // //           setProdukv(responseData.data);
// // // // // // //         } else {
// // // // // // //           console.error("Isi 'data' bukan array:", responseData);
// // // // // // //           setError('Format data tidak sesuai.');
// // // // // // //         }
// // // // // // //         setLoading(false);
// // // // // // //       })
// // // // // // //       .catch((err) => {
// // // // // // //         console.error('Gagal fetch data:', err);
// // // // // // //         setError('Gagal memuat produk 😓.');
// // // // // // //         setLoading(false);
// // // // // // //       });
// // // // // // //   }, []);

// // // // // // //   if (loading) {
// // // // // // //     return (
// // // // // // //       <div className="p-6 text-center text-gray-500">
// // // // // // //         Memuat data mobil...
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   if (error) {
// // // // // // //     return (
// // // // // // //       <div className="p-6 text-red-600 text-center">
// // // // // // //         <p>{error}</p>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-[#f8f9fc] p-6">
// // // // // // //       {/* Header & Tombol Kembali */}
// // // // // // //       <div className="max-w-6xl mx-auto mb-6">
// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity: 0, y: -20 }}
// // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // //           transition={{ duration: 0.4 }}
// // // // // // //           className="flex items-center justify-between mb-4"
// // // // // // //         >
// // // // // // //           <h1 className="text-2xl sm:text-3xl font-bold text-[#35467e]">Daftar Mobil Tersedia</h1>
// // // // // // //           <Link
// // // // // // //             to="/"
// // // // // // //             className="text-sm sm:text-base bg-[#35467e] text-white px-4 py-2 rounded-md hover:bg-[#2b3a6b] transition"
// // // // // // //           >
// // // // // // //             ← Kembali ke Beranda
// // // // // // //           </Link>
// // // // // // //         </motion.div>
// // // // // // //       </div>

// // // // // // //       {/* List Produk */}
// // // // // // //       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // // //         {produkv.map((item) => {
// // // // // // //           const firstImage = item.foto?.[0]?.filename;
// // // // // // //           const imageUrl = firstImage
// // // // // // //             ? `https://api-dealer-car-production.up.railway.app/uploads/${firstImage}`
// // // // // // //             : null;

// // // // // // //           // Skip rendering card if no image
// // // // // // //           if (!imageUrl) return null;

// // // // // // //           return (
// // // // // // //             <motion.div
// // // // // // //               key={item.id}
// // // // // // //               layout
// // // // // // //               className="flex flex-col rounded-xl overflow-hidden shadow-md bg-white transition hover:shadow-xl group"
// // // // // // //               initial={{ opacity: 0, y: 30 }}
// // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // //               transition={{ duration: 0.4 }}
// // // // // // //             >
// // // // // // //               <img
// // // // // // //                 src={imageUrl}
// // // // // // //                 alt={item.tipe}
// // // // // // //                 className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
// // // // // // //               />

// // // // // // //               <div className="p-4 flex flex-col justify-between flex-grow">
// // // // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-1">
// // // // // // //                   {item.merek} {item.tipe}
// // // // // // //                 </h3>

// // // // // // //                 <div className="text-sm text-gray-600 space-y-1 mb-3">
// // // // // // //                   <p>Tahun: {item.tahun}</p>
// // // // // // //                   <p>Spesifikasi: {item.spesifikasi}</p>
// // // // // // //                   <p>{item.keterangan}</p>
// // // // // // //                 </div>

// // // // // // //                 <p className="text-primary font-bold text-lg mb-4 text-[#35467e]">
// // // // // // //                   Rp {new Intl.NumberFormat('id-ID').format(Number(item.harga))}
// // // // // // //                 </p>

// // // // // // //                 <div className="flex justify-between gap-2 text-sm font-medium">
// // // // // // //                   <Link
// // // // // // //                     to={`/produk/${item.id}`}
// // // // // // //                     className="w-full text-center py-1.5 rounded-md bg-[#5266a9] text-white hover:bg-[#445aa0] transition"
// // // // // // //                   >
// // // // // // //                     Lihat Detail
// // // // // // //                   </Link>
// // // // // // //                   <a
// // // // // // //                     href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20mobil%20${encodeURIComponent(
// // // // // // //                       item.merek
// // // // // // //                     )}%20${encodeURIComponent(item.tipe)}`}
// // // // // // //                     target="_blank"
// // // // // // //                     rel="noopener noreferrer"
// // // // // // //                     className="w-full text-center py-1.5 rounded-md bg-[#35467e] text-white hover:bg-[#2e3b69] transition"
// // // // // // //                   >
// // // // // // //                     Hubungi
// // // // // // //                   </a>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </motion.div>
// // // // // // //           );
// // // // // // //         })}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ProdukList;



// // // // // // // src/components/HomeProdukPreview.tsx
// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import { Link } from 'react-router-dom';

// // // // // // interface Foto {
// // // // // //   id: number;
// // // // // //   url: string;
// // // // // //   mobil_id: number;
// // // // // // }

// // // // // // interface Mobil {
// // // // // //   id: number;
// // // // // //   merek: string;
// // // // // //   tipe: string;
// // // // // //   harga: string;
// // // // // //   tahun: string;
// // // // // //   foto: Foto[];
// // // // // // }

// // // // // // const ProdukPrev: React.FC = () => {
// // // // // //   const [mobilList, setMobilList] = useState<Mobil[]>([]);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [error ,setError] = useState<string | null>(null);

// // // // // //   useEffect(() => {
// // // // // //     const fetchMobil = async () => {
// // // // // //       try {
// // // // // //         const response = await axios.get('https://api-dealer-car-production.up.railway.app/mobil');
// // // // // //         // Ambil hanya 6 mobil pertama
// // // // // //         setMobilList(response.data.data.slice(0, 6));
// // // // // //         setLoading(false);
// // // // // //       } catch (error) {
// // // // // //         console.error('Gagal fetch data mobil:', error);
// // // // // //         setError('Gagal memuat produk');
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchMobil();
// // // // // //   }, []);

// // // // // //   if (loading) {
// // // // // //     return <p className="text-center mt-6 text-gray-500">Memuat produk...</p>;
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="p-4 bg-[#f2f5ff] rounded-md">
// // // // // //       <h2 className="text-xl font-bold text-[#374472] mb-4 text-center">Mobil Terbaru Dijual</h2>

// // // // // //       {error && (
// // // // // //         <p className="text-center text-red-500">{error}</p>
// // // // // //       )}

// // // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // // // // //         {mobilList.map((mobil) => (
// // // // // //           <div key={mobil.id} className="relative bg-white rounded-lg shadow hover:shadow-lg transition-all">
// // // // // //             {/* Badge Dijual */}
// // // // // //             <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
// // // // // //               Dijual
// // // // // //             </span>

// // // // // //             {/* Gambar */}
// // // // // //             {mobil.foto && mobil.foto.length > 0 ? (
// // // // // //               <img
// // // // // //                 src={mobil.foto[0].url}
// // // // // //                 alt={`${mobil.merek} ${mobil.tipe}`}
// // // // // //                 className="w-full h-40 object-cover rounded-t-lg"
// // // // // //               />
// // // // // //             ) : (
// // // // // //               <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500">
// // // // // //                 Tidak ada foto
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* Info Mobil */}
// // // // // //             <div className="p-3">
// // // // // //               <h3 className="text-md font-semibold">{mobil.merek} {mobil.tipe}</h3>
// // // // // //               <p className="text-sm text-gray-600">Tahun: {mobil.tahun}</p>
// // // // // //               <p className="text-sm font-medium text-[#374472]">Rp {mobil.harga}</p>
// // // // // //               <Link
// // // // // //                 to={`/produk/${mobil.id}`}
// // // // // //                 className="inline-block mt-2 text-sm text-blue-600 hover:underline"
// // // // // //               >
// // // // // //                 Detail
// // // // // //               </Link>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* Tombol Lihat Semua */}
// // // // // //       <div className="text-center mt-4">
// // // // // //         <Link to="/produk" className="px-4 py-2 bg-[#374472] text-white rounded hover:bg-[#4a5894] text-sm">
// // // // // //           Lihat Semua Produk
// // // // // //         </Link>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProdukPrev;

// // // // // //upload foto yg dijamin tampil deh 
// // // // // <form
// // // // //   onSubmit={async (e) => {
// // // // //     e.preventDefault();
// // // // //     if (!foto || !selectedMobilId) {
// // // // //       toast.error('Foto atau ID mobil tidak valid.');
// // // // //       return;
// // // // //     }
// // // // //     const formData = new FormData();
// // // // //     formData.append('id_mobil', selectedMobilId);
// // // // //     formData.append('foto', foto);
// // // // //     formData.append('deskripsi', deskripsi);
// // // // //     try {
// // // // //       const token = localStorage.getItem('token');
// // // // //       if (!token) {
// // // // //         toast.error(
// // // // //           'Token tidak ditemukan. Silakan login ulang.'
// // // // //         );
// // // // //         return;
// // // // //       }
// // // // //       await axios.post(
// // // // //         `https://api-dealer-car-production.up.railway.app/upload`,
// // // // //         formData,
// // // // //         {
// // // // //           headers: {
// // // // //             'Content-Type': 'multipart/form-data',
// // // // //             Authorization: `Bearer ${token}`,
// // // // //           },
// // // // //         }
// // // // //       );
// // // // //       toast.success('Foto berhasil diupload!');
// // // // //       setUploadModal(false);
// // // // //       setFoto(null);
// // // // //       setDeskripsi('');
// // // // //       fetchMobil();
// // // // //     } catch (error: any) {
// // // // //       console.error(
// // // // //         'Upload error:',
// // // // //         error.response?.data || error.message
// // // // //       );
// // // // //       toast.error(
// // // // //         `Gagal mengupload foto: ${error.response?.data?.message || 'Terjadi kesalahan'}`
// // // // //       );
// // // // //     }
// // // // //   }}
// // // // //   className="grid gap-3"
// // // // // >
// // // // //   {/* === Tambahan untuk pilih mobil === */}
// // // // //   <label>Pilih Mobil</label>
// // // // //   <select
// // // // //     onChange={(e) => setSelectedMobilId(e.target.value)}
// // // // //     value={selectedMobilId || ''}
// // // // //     className="border p-2 bg-white text-black rounded"
// // // // //   >
// // // // //     <option value="">-- Pilih Mobil --</option>
// // // // //     {dataMobil.map((mobil) => (
// // // // //       <option key={mobil._id || mobil.id} value={mobil._id || mobil.id}>
// // // // //         {mobil.merk} - {mobil.tipe}
// // // // //       </option>
// // // // //     ))}
// // // // //   </select>

// // // // //   {/* === Deskripsi Foto === */}
// // // // //   <label>Deskripsi Foto</label>
// // // // //   <input
// // // // //     type="text"
// // // // //     value={deskripsi}
// // // // //     onChange={(e) => setDeskripsi(e.target.value)}
// // // // //     className="border p-2 bg-white text-black rounded"
// // // // //   />

// // // // //   {/* === Input Foto === */}
// // // // //   <label>Foto Mobil</label>
// // // // //   <input
// // // // //     type="file"
// // // // //     accept="image/*"
// // // // //     onChange={(e) =>
// // // // //       setFoto(e.target.files ? e.target.files[0] : null)
// // // // //     }
// // // // //     className="border p-2 bg-white text-black rounded"
// // // // //   />

// // // // //   {/* === Tombol Submit === */}
// // // // //   <button
// // // // //     type="submit"
// // // // //     className="bg-[#35467e] hover:bg-[#3851a3] text-white p-2 rounded"
// // // // //   >
// // // // //     Upload Foto
// // // // //   </button>
// // // // // </form>

// // // // //gambar responsif di bagian card
// // // // import { Link } from 'react-router-dom';
// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';

// // // interface Mobil {
// // //   id: number;
// // //   merek: string;
// // //   tipe: string;
// // //   harga: string;
// // //   tahun: string;
// // //   foto: Foto[];
// // // }

// // // interface Foto {
// // //   id: number;
// // //   url: string;
// // //   mobil_id: number;
// // // }

// // // const ProdukPrev: React.FC = () => {
// // //   const [produkprev, setProdukPrev] = useState<ProdukView[]>([]);
// // //   const [error, setError] = useState<string | null>(null);
// // //   const [loading, setLoading] = useState(true); // 👈 Tambahkan loading state

// // //   useEffect(() => {
// // //    const fetchMobil = async () => {
// // //     try {
// // //       const response = await axios.get('https://api-dealer-car-production.up.railway.app/mobil');
// // //       setProdukPrev(response.data.data.slice(0, 6));
// // //       setLoading(false);
// // //     }catch (error){
// // //     setLoading(false);
// // //    }};

// // //    fetchMobil();
// // //   }, []);

// // //   // Tampilkan pesan error jika ada
// // //   if (error) {
// // //     return (
// // //       <div className="p-4 text-red-600 text-center">
// // //         <p>{error}</p>
// // //       </div>
// // //     );
// // //   }

// // //   // Tampilkan loading screen
// // //   if (loading) {
// // //     return (
// // //       <div className="p-4 text-center">
// // //         <p className="text-gray-700 font-medium">Memuat produk...</p>
// // //       </div>
// // //     );
// // //   }

// // //   // Tampilkan produk jika tidak error dan sudah selesai loading
// // //   return (
// // //     <div className="bg-[#808dc4] py-4">
// // //       <div className="max-w-screen-xl mx-auto px-4 overflow-x-hidden">
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-black font-medium">
// // //           {produkprev.map((item) => (
// // //             <div
// // //               key={item.id}
// // //               className="relative border rounded p-2 bg-white shadow-md w-full text-sm"
// // //             >
// // //               {/* Status badge */}
// // //               <div className="absolute top-2 left-2 bg-[#5b6aa9] text-white text-xs font-bold px-2 py-1 rounded-md shadow">
// // //                 {item.status}
// // //               </div>

// // //               {/* Gambar */}
// // //               <div className="w-full aspect-[4/3] bg-gray-100 mb-2 rounded overflow-hidden flex items-center justify-center">
// // //   {item.foto && item.foto.length > 0 ? (
// // //     <img
// // //       src={item.foto[0].url}
// // //       alt={`${item.merek} ${item.tipe}`}
// // //       className="w-full h-full object-cover"
// // //     />
// // //   ) : (
// // //     <span className="text-gray-500 text-sm">Tidak ada foto</span>
// // //   )}
// // // </div>


// // //               {/* Info produk */}
// // //               <h3 className="font-semibold">
// // //                 {item.merek} {item.tipe}
// // //               </h3>
// // //               <div className="space-y-1 mt-2 text-sm">
// // //                 <p>tahun : {item.tahun}</p>
// // //               </div>
// // //               <p className="mt-2 font-semibold">Harga : {item.harga}</p>

// // //               {/* Tombol Aksi */}
// // //               <div className="flex flex-wrap gap-2 mt-4 text-white">
// // //                 <Link
// // //                   to={`/produk/${item.id}`}
// // //                   className="bg-[#6978af] rounded-md w-28 py-1 text-sm text-center"
// // //                 >
// // //                   Lihat detail
// // //                 </Link>
// // //                 <a
// // //                   href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20mobil%20${encodeURIComponent(
// // //                     item.merek
// // //                   )}%20${encodeURIComponent(item.tipe)}`}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="bg-[#374470] rounded-md w-24 py-1 text-sm text-center"
// // //                 >
// // //                   Hubungi
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Tombol Lihat Lebih Banyak */}
// // //         <div className="text-center mt-6">
// // //           <Link to="/list-produk">
// // //             <button className="bg-[#52639e] text-white px-6 py-2 rounded-md hover:bg-[#2c3b69] transition">
// // //               Lihat Lebih Banyak
// // //             </button>
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProdukPrev;


// // //yg sebelumnya gambar tampil tapi kurang responsif di bagian card sehingga memotong gambar asli
// // import { Link } from 'react-router-dom';
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // interface Mobil {
// //   id: number;
// //   merek: string;
// //   tipe: string;
// //   harga: string;
// //   tahun: string;
// //   foto: Foto[];
// // }

// // interface Foto {
// //   id: number;
// //   url: string;
// //   mobil_id: number;
// // }

// // const ProdukPrev: React.FC = () => {
// //   const [produkprev, setProdukPrev] = useState<ProdukView[]>([]);
// //   const [error, setError] = useState<string | null>(null);
// //   const [loading, setLoading] = useState(true); // 👈 Tambahkan loading state

// //   useEffect(() => {
// //    const fetchMobil = async () => {
// //     try {
// //       const response = await axios.get('https://api-dealer-car-production.up.railway.app/mobil');
// //       setProdukPrev(response.data.data.slice(0, 6));
// //       setLoading(false);
// //     }catch (error){
// //     setLoading(false);
// //    }};

// //    fetchMobil();
// //   }, []);

// //   // Tampilkan pesan error jika ada
// //   if (error) {
// //     return (
// //       <div className="p-4 text-red-600 text-center">
// //         <p>{error}</p>
// //       </div>
// //     );
// //   }

// //   // Tampilkan loading screen
// //   if (loading) {
// //     return (
// //       <div className="p-4 text-center">
// //         <p className="text-gray-700 font-medium">Memuat produk...</p>
// //       </div>
// //     );
// //   }

// //   // Tampilkan produk jika tidak error dan sudah selesai loading
// //   return (
// //     <div className="bg-[#808dc4] py-4">
// //       <div className="max-w-screen-xl mx-auto px-4 overflow-x-hidden">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-black font-medium">
// //           {produkprev.map((item) => (
// //             <div
// //               key={item.id}
// //               className="relative border rounded p-2 bg-white shadow-md max-w-[240px] w-full mx-auto text-sm"
// //             >
// //               {/* Status badge */}
// //               <div className="absolute top-2 left-2 bg-[#5b6aa9] text-white text-xs font-bold px-2 py-1 rounded-md shadow">
// //                 {item.status}
// //               </div>

// //               {/* Gambar */}
// //               {item.foto && item.foto.length > 0 ? (
// //               <img
// //                 src={item.foto[0].url}
// //                 alt={`${item.merek} ${item.tipe}`}
// //                 className="w-full h-40 object-cover mb-2 rounded"
// //               />
// //               ) : (
// //                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500">
// //                 Tidak ada foto
// //               </div>
// //               )}

// //               {/* Info produk */}
// //               <h3 className="font-semibold">
// //                 {item.merek} {item.tipe}
// //               </h3>
// //               <div className="space-y-1 mt-2 text-sm">
// //                 <p>tahun : {item.tahun}</p>
// //               </div>
// //               <p className="mt-2 font-semibold">Harga : {item.harga}</p>

// //               {/* Tombol Aksi */}
// //               <div className="flex flex-wrap gap-2 mt-4 text-white">
// //                 <Link
// //                   to={`/produk/${item.id}`}
// //                   className="bg-[#6978af] rounded-md w-28 py-1 text-sm text-center"
// //                 >
// //                   Lihat detail
// //                 </Link>
// //                 <a
// //                   href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20mobil%20${encodeURIComponent(
// //                     item.merek
// //                   )}%20${encodeURIComponent(item.tipe)}`}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="bg-[#374470] rounded-md w-24 py-1 text-sm text-center"
// //                 >
// //                   Hubungi
// //                 </a>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Tombol Lihat Lebih Banyak */}
// //         <div className="text-center mt-6">
// //           <Link to="/list-produk">
// //             <button className="bg-[#52639e] text-white px-6 py-2 rounded-md hover:bg-[#2c3b69] transition">
// //               Lihat Lebih Banyak
// //             </button>
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProdukPrev;



// // ///kirim ke be edit kalo user lagi edit foto di bagian tabel foto
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';
// // import { FiEdit, FiTrash, FiPlus } from 'react-icons/fi';

// // interface Mobil {
// //   id: string | number;
// //   merk: string;
// //   tipe: string;
// // }

// // interface Foto {
// //   id: string | number;
// //   url: string;
// //   deskripsi: string;
// //   id_mobil: string | number;
// // }

// // const FotoList: React.FC = () => {
// //   const [fotoList, setFotoList] = useState<Foto[]>([]);
// //   const [mobilList, setMobilList] = useState<Mobil[]>([]);

// //   const [file, setFile] = useState<File | null>(null);
// //   const [deskripsi, setDeskripsi] = useState('');
// //   const [selectedMobilId, setSelectedMobilId] = useState('');
// //   const [editingId, setEditingId] = useState<string | null>(null);
// //   const [showModal, setShowModal] = useState(false);

// //   // Modal konfirmasi hapus
// //   const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

// //   useEffect(() => {
// //     const fetchAll = async () => {
// //       await fetchMobil();
// //       await fetchFoto();
// //     };
// //     fetchAll();
// //   }, []);

// //   const fetchMobil = async () => {
// //     try {
// //       const res = await axios.get(
// //         'https://api-dealer-car-production.up.railway.app/mobil'
// //       );
// //       const data = Array.isArray(res.data) ? res.data : res.data.data;
// //       console.log('🚗 mobilList:', data);
// //       setMobilList(data || []);
// //     } catch (error) {
// //       console.error('❌ Gagal ambil mobil:', error);
// //       toast.error('Gagal mengambil data mobil.');
// //     }
// //   };

// //   const fetchFoto = async () => {
// //     try {
// //       const res = await axios.get(
// //         'https://api-dealer-car-production.up.railway.app/foto'
// //       );
// //       const data = Array.isArray(res.data) ? res.data : res.data.data;
// //       console.log('🖼️ fotoList:', data);
// //       setFotoList(data || []);
// //     } catch (error) {
// //       console.error('❌ Gagal ambil foto:', error);
// //       toast.error('Gagal mengambil data foto.');
// //     }
// //   };

// //   const openModal = () => {
// //     setShowModal(true);
// //     setEditingId(null);
// //     setFile(null);
// //     setDeskripsi('');
// //     setSelectedMobilId('');
// //   };

// //   const closeModal = () => {
// //     setShowModal(false);
// //     setEditingId(null);
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //   e.preventDefault();
// //   const token = localStorage.getItem('token');
// //   if (!token) return toast.error('Token tidak ditemukan.');

// //   if (!deskripsi || !selectedMobilId || (!file && !editingId)) {
// //     return toast.error('Semua field wajib diisi.');
// //   }

// //   try {
// //     if (editingId) {
// //       const formData = new FormData();
// //       formData.append('deskripsi', deskripsi);
// //       formData.append('id_mobil', selectedMobilId);
// //       if (file) {
// //         formData.append('foto', file); // harus "foto" sesuai backend
// //       }

// //       await axios.put(
// //         `https://api-dealer-car-production.up.railway.app/upload/${editingId}`,
// //         formData,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //             'Content-Type': 'multipart/form-data',
// //           },
// //         }
// //       );

// //       toast.success('Data foto berhasil diupdate.');
// //     } else {
// //       const formData = new FormData();
// //       formData.append('foto', file!); // nama field harus "foto"
// //       formData.append('deskripsi', deskripsi);
// //       formData.append('id_mobil', selectedMobilId);

// //       await axios.post(
// //         'https://api-dealer-car-production.up.railway.app/upload',
// //         formData,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //             'Content-Type': 'multipart/form-data',
// //           },
// //         }
// //       );

// //       toast.success('Foto berhasil diupload.');
// //     }

// //     closeModal();
// //     fetchFoto();
// //   } catch (error: any) {
// //     console.error('❌ Error saat simpan:', error.response?.data || error.message);
// //     toast.error('Gagal menyimpan data.');
// //   }
// // };


// //   const handleEdit = (foto: Foto) => {
// //     setEditingId(foto.id.toString());
// //     setDeskripsi(foto.deskripsi);
// //     setSelectedMobilId(foto.id_mobil.toString());
// //     setFile(null);
// //     setShowModal(true);
// //   };

// //   const confirmDelete = (id: string) => {
// //     setConfirmDeleteId(id);
// //   };

// //   const handleDeleteConfirmed = async () => {
// //   const token = localStorage.getItem('token');
// //   if (!token || !confirmDeleteId) return;

// //   try {
// //     await axios.delete(
// //       `https://api-dealer-car-production.up.railway.app/foto/${confirmDeleteId}`,
// //       {
// //         headers: { Authorization: `Bearer ${token}` },
// //       }
// //     );
// //     toast.success('Foto berhasil dihapus.');
// //     setConfirmDeleteId(null);
// //     fetchFoto();
// //   } catch {
// //     toast.error('Gagal menghapus foto.');
// //   }
// // };


// //   return (
// //     <div className="px-4 sm:px-8 py-6">
// //       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
// //         <h2 className="text-xl font-semibold text-white">Data Foto Mobil</h2>
// //         <button
// //           onClick={openModal}
// //           className="flex items-center gap-2 bg-[#5266a9] text-white px-4 py-2 rounded hover:bg-[#6078c5]"
// //         >
// //           <FiPlus /> Upload Foto
// //         </button>
// //       </div>

// //       {/* Modal Form Upload/Edit */}
// //       {showModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 px-4">
// //           <div className="bg-white w-11/12 sm:w-full max-w-md p-6 rounded shadow text-gray-700">
// //             <h2 className="text-lg font-semibold mb-4">
// //               {editingId ? 'Edit Foto' : 'Upload Foto'}
// //             </h2>
// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               {!editingId && (
// //                 <div>
// //                   <label className="block mb-1">File Foto</label>
// //                   <input
// //                     type="file"
// //                     accept="image/*"
// //                     onChange={(e) => setFile(e.target.files?.[0] || null)}
// //                     className="border w-full px-2 py-1 bg-white"
// //                     required
// //                   />
// //                 </div>
// //               )}
// //               <div>
// //                 <label className="block mb-1">Deskripsi</label>
// //                 <input
// //                   type="text"
// //                   value={deskripsi}
// //                   onChange={(e) => setDeskripsi(e.target.value)}
// //                   className="border w-full px-2 py-1 bg-white"
// //                   required
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block mb-1">Nama Mobil</label>
// //                 <select
// //                   value={selectedMobilId}
// //                   onChange={(e) => setSelectedMobilId(e.target.value)}
// //                   className="border w-full px-2 py-1 bg-white"
// //                   required
// //                 >
// //                   <option value="">-- Pilih Mobil --</option>
// //                   {mobilList.map((mobil) => (
// //                     <option key={mobil.id} value={mobil.id}>
// //                       {mobil.merk} {mobil.tipe}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>
// //               <div className="flex justify-end gap-2">
// //                 <button
// //                   type="button"
// //                   onClick={closeModal}
// //                   className="px-4 py-2 border rounded hover:bg-gray-100"
// //                 >
// //                   Batal
// //                 </button>
// //                 <button
// //                   type="submit"
// //                   className="bg-[#5266a9] text-white px-4 py-2 rounded hover:bg-[#6078c5]"
// //                 >
// //                   {editingId ? 'Update' : 'Upload'}
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}

// //       {/* Modal Konfirmasi Hapus */}
// //       {confirmDeleteId && (
// //         <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 px-4">
// //           <div className="bg-white w-full max-w-sm p-6 rounded shadow">
// //             <h2 className="text-lg font-semibold mb-4">Konfirmasi Hapus</h2>
// //             <p>Apakah kamu yakin ingin menghapus foto ini?</p>
// //             <div className="mt-4 flex justify-end gap-3">
// //               <button
// //                 onClick={() => setConfirmDeleteId(null)}
// //                 className="px-4 py-2 border rounded hover:bg-gray-100"
// //               >
// //                 Batal
// //               </button>
// //               <button
// //                 onClick={handleDeleteConfirmed}
// //                 className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
// //               >
// //                 Hapus
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Tabel Foto */}
// //       <div className="overflow-x-auto mt-6">
// //         <table className="min-w-full bg-white text-black text-sm sm:text-base border-collapse">
// //           <thead className="bg-[#5266a9] text-white">
// //             <tr>
// //               <th className="p-2 whitespace-nowrap">No</th>
// //               <th className="p-2 whitespace-nowrap">Foto</th>
// //               <th className="p-2 whitespace-nowrap">URL</th>
// //               <th className="p-2 whitespace-nowrap">Deskripsi</th>
// //               <th className="p-2 whitespace-nowrap">Nama Mobil</th>
// //               <th className="p-2 whitespace-nowrap">Aksi</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {fotoList.length === 0 ? (
// //               <tr>
// //                 <td colSpan={6} className="text-center py-4 text-gray-500">
// //                   Tidak ada data foto.
// //                 </td>
// //               </tr>
// //             ) : (
// //               fotoList.map((foto, index) => {
// //                 const mobil = mobilList.find(
// //                   (m) => String(m.id) === String(foto.id_mobil)
// //                 );
// //                 return (
// //                   <tr key={foto.id} className="border-t text-center">
// //                     <td className="p-2">{index + 1}</td>
// //                     <td className="p-2">
// //                       <img
// //                         src={foto.url}
// //                         alt="foto"
// //                         className="w-20 h-12 sm:w-28 sm:h-16 object-cover mx-auto rounded"
// //                       />
// //                     </td>
// //                     <td className="p-2 text-xs text-gray-700 break-all">-</td>
// //                     <td className="p-2">{foto.deskripsi || '-'}</td>
// //                     <td className="p-2">
// //                       {mobil
// //                         ? `${mobil.merk} ${mobil.tipe}`
// //                         : 'Mobil tidak ditemukan'}
// //                     </td>
// //                     <td className="p-2 space-x-2">
// //                       <button
// //                         onClick={() => handleEdit(foto)}
// //                         className=" text-yellow-500 hover:text-yellow-600"
// //                         title="Edit"
// //                       >
// //                         <FiEdit />
// //                       </button>
// //                       <button
// //                         onClick={() => confirmDelete(foto.id.toString())}
// //                         className="text-red-500 hover:text-red-600"
// //                         title="Hapus"
// //                       >
// //                         <FiTrash />
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 );
// //               })
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FotoList;

// //foto slide 
// import { Link } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';

// interface Mobil {
//   id: number;
//   merek: string;
//   tipe: string;
//   harga: string;
//   tahun: string;
//   foto: Foto[];
//   status: string;
// }

// interface Foto {
//   id: number;
//   url: string;
//   mobil_id: number;
// }

// const ProdukPrev: React.FC = () => {
//   const [produkprev, setProdukPrev] = useState<Mobil[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMobil = async () => {
//       try {
//         const response = await axios.get(
//           'https://api-dealer-car-production.up.railway.app/mobil'
//         );
//         setProdukPrev(response.data.data);
//         setLoading(false);
//       } catch (error) {
//         setError('Gagal memuat data produk.');
//         setLoading(false);
//       }
//     };

//     fetchMobil();
//   }, []);

//   if (error) {
//     return <div className="p-4 text-red-600 text-center">{error}</div>;
//   }

//   if (loading) {
//     return (
//       <div className="p-4 text-center">
//         <p className="text-gray-700 font-medium">Memuat produk...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="rounded-md py-4 px-4">
//       <Swiper
//         spaceBetween={20}
//         slidesPerView={1.2}
//         navigation
//         modules={[Navigation]}
//         breakpoints={{
//           640: { slidesPerView: 2.2 },
//           768: { slidesPerView: 3.2 },
//           1024: { slidesPerView: 4.2 },
//         }}
//         className="text-black font-medium"
//       >
//         {produkprev.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div className="relative border rounded p-2 bg-white shadow-md w-full text-sm">
//               {/* Status badge */}
//               <div className="absolute top-2 left-2 bg-[#5b6aa9] text-white text-xs font-bold px-2 py-1 rounded-md shadow">
//                 {item.status}
//               </div>

//               {/* Gambar */}
//               <div className="w-full aspect-[4/3] bg-gray-100 mb-2 rounded overflow-hidden flex items-center justify-center">
//                 {item.foto && item.foto.length > 0 ? (
//                   <img
//                     src={item.foto[0].url}
//                     alt={`${item.merek} ${item.tipe}`}
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <span className="text-gray-500 text-sm">Tidak ada foto</span>
//                 )}
//               </div>

//               {/* Info produk */}
//               <h3 className="font-semibold">
//                 {item.merek} {item.tipe}
//               </h3>
//               <div className="space-y-1 mt-2 text-sm">
//                 <p>tahun : {item.tahun}</p>
//               </div>
//               <p className="mt-2 font-semibold">Harga : {item.harga}</p>

//               {/* Tombol Aksi */}
//               <div className="flex flex-col lg:flex-row gap-2 mt-4 text-white sm:mx-auto">
//                 <Link
//                   to={`/produk/${item.id}`}
//                   className="bg-[#6978af] rounded-md text-xs sm:text-sm py-1 px-3 w-full md:w-auto text-center"
//                 >
//                   Lihat detail
//                 </Link>
//                 <a
//                   href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20mobil%20${encodeURIComponent(
//                     item.merek
//                   )}%20${encodeURIComponent(item.tipe)}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-[#374470] rounded-md text-xs sm:text-sm py-1 px-3 w-full md:w-auto text-center"
//                 >
//                   Hubungi
//                 </a>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ProdukPrev;


