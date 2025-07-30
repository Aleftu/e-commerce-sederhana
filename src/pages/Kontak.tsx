import React from 'react';
import Navbar from '../components/Navbar';
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa';

const Kontak: React.FC = () => {
  return (
    <div className="min-h-screen max-w-3xl mx-auto p-6 text-gray-800 bg-white">
        <Navbar />
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Hubungi Kami</h1>

      <div className="space-y-4 text-base">
        <div className="flex items-center">
          <FaWhatsapp className="text-green-600 mr-3" />
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            +62 812-3456-7890 (Chat via WhatsApp)
          </a>
        </div>

        <div className="flex items-center">
          <FaEnvelope className="text-red-600 mr-3" />
          <span>dealer@example.com</span>
        </div>

        <div className="flex items-center">
          <FaMapMarkerAlt className="text-blue-600 mr-3" />
          <span>Jl. Mobil Impian No. 123, Jakarta</span>
        </div>

        <div className="flex items-center">
          <FaClock className="text-yellow-600 mr-3" />
          <span>Senin - Sabtu: 09.00 - 17.00</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="aspect-[4/3] w-full mt-6">
  <iframe
    src="https://www.google.com/maps/embed?pb=..."
    className="w-full h-full"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

      </div>
    </div>
  );
};

export default Kontak;
