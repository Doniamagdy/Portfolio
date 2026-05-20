import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow-md ">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>

    <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0">
  <span className="flex items-center gap-1">
    <FaEnvelope />
    <span className="break-all">doniabahig92@gmail.com</span>
  </span>

  <span className="flex items-center gap-1">
    <FaPhone />
    01011166111
  </span>

  <span className="flex items-center gap-1">
    <FaMapMarkerAlt />
    Cairo, Egypt
  </span>
</div>
        
    </div>
  );
}

export default Contact;
