import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="mt-6 galaxy-card p-6 md:p-8 rounded-xl shadow-md w-full">


      {/* Container */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-8 sm:gap-0">

        {/* Email */}
        <div className="flex flex-col items-center text-center flex-1">
          <FaEnvelope className=" text-2xl mb-3" />
          <span className="text-md whitespace-nowrap">
            doniabahig92@gmail.com
          </span>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center flex-1">
          <FaPhone className=" text-2xl mb-3" />
          <span className="text-md  whitespace-nowrap">
            +20 010 111 66111
          </span>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center text-center flex-1">
          <FaMapMarkerAlt className=" text-2xl mb-3" />
          <span className="text-md whitespace-nowrap">
            Cairo, Egypt
          </span>
        </div>

      </div>
    </div>
  );
}

export default Contact;