import { motion } from "framer-motion";
import Tabs from "../components/Tabs"

const certificates = [
  {
    title: "Frontend Development Diploma",
    issuer: "Route Academy",
    date: "October 2023",
    url: "https://drive.google.com/file/d/1jKGzel8qX46XnPdgf42jvK2kNikq9hwC/view?usp=sharing",
  },
  {
    title: "Web Development",
    issuer: "NTI - National Technology Institute",
    date: "July 2022",
    url: "https://drive.google.com/file/d/1zP64SfKd0cS9DQx-53p2wOLXxu16SMaS/view?usp=sharing",
  },
  {
    title: "Web Design",
    issuer: "NTI - National Technology Institute",
    date: "April 2022",
    url: "https://drive.google.com/file/d/1xicwjdVtcTmz4mR4ag2-w4DIYKtswbz5/view?usp=sharing",
  },
  {
    title: "Saint George import & export",
    issuer: "Saint George import & export",
    date: "August 2022",
    url: "https://drive.google.com/file/d/1dEIuc2PTgngUp2qync4SmERVwJ0CUzq7/view?usp=sharing",
  },
  {
    title: "Backend Development Training",
    issuer: "Egyptian Council For Training",
    date: "March 2022",
    url: "https://drive.google.com/file/d/1_FFe4ejv89pjsoOmx77RkrAPByOZnxlJ/view?usp=sharing",
  },
];

const Education = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs />

        <div className="text-center mb-12 mt-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Faculty of Al-Alsun – Ain Shams University
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-medium">
            Class of 2013
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 sm:p-8 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-lg sm:text-xl">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {cert.title}
              </h3>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm sm:text-base text-gray-600 font-medium">
                  {cert.issuer}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {cert.date}
                </p>
              </div>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-sm sm:text-base group"
              >
                View Certificate
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education