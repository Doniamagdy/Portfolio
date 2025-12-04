import React from "react";

function Contact() {
  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow-md ">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
      <div className="flex flex-col sm:flex-row justify-between text-gray-700 text-sm">
        <div>
          <span className="font-semibold">doniabahig92@gmail.com</span>
          <span className="ms-4 ">Cairo, Egypt</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 mt-2 sm:mt-0">
          <a
            href="https://aboutdoniamagdy.my.canva.site/myportfolio"
            target="_blank"
            className="bg-purple-400 py-2 px-3 text-white text-shadow-md rounded-md mx-1 hover:bg-purple-500 text-center "
            rel="noopener noreferrer"
          >
            German Portfolio
          </a>
          <a
            href="https://drive.google.com/file/d/1fzuV-2AHqvP2PJ3nlKN6daB-yCgyiw8S/view?usp=sharing"
            target="_blank"
            className="bg-purple-400 py-2 px-3 text-white text-shadow-md rounded-md mx-1 hover:bg-purple-500 text-center"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
