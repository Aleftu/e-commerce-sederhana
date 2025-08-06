import React from "react";
import {
FaWhatsapp,
FaMapMarkerAlt,
FaEnvelope,
FaClock, }
from 'react-icons/fa';
const Footer: React.FC = () => {
  return (
     <div className="mx-auto px-5 w-full  bg-[#909cd2] text-[#213384] font-semibold py-3">
      <h1 className="text-xl font-bold mb-4 ">Hubungi Kami</h1>

      <div className="space-y-4 text-base">
        <div className="flex items-center">
          <FaWhatsapp className="text-green-600 mr-3" />
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
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

      <p className="text-center text-white text-sm mt-5">
         45Motor 2025 | Powered by <span className="text-red-400">❤️</span>
      </p>
    </div>
   
  );
};

export default Footer;
