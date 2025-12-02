import { motion } from "framer-motion";

const certificates = [
  {
    title: "1.Frontend Development Diploma",
    issuer: "Route Academy",
    date: "October 2023",
    url: "https://drive.google.com/file/d/1jKGzel8qX46XnPdgf42jvK2kNikq9hwC/view?usp=sharing",
  },
  {
    title: "2.Web Development",
    issuer: "NTI - National Technology Institute",
    date: "July 2022",
    url: "https://drive.google.com/file/d/1zP64SfKd0cS9DQx-53p2wOLXxu16SMaS/view?usp=sharing",
  },

  {
    title: "3.Web Design",
    issuer: "NTI - National Technology Institute",
    date: "April 2022",
    url: "https://drive.google.com/file/d/1xicwjdVtcTmz4mR4ag2-w4DIYKtswbz5/view?usp=sharing",
  },
  {
    title: "4.Saint George import & export",
    issuer: "Saint George import & export",
    date: "August 2022",
    url: "https://drive.google.com/file/d/1dEIuc2PTgngUp2qync4SmERVwJ0CUzq7/view?usp=sharing",
  },

  {
    title: "5.Backend Development Training",
    issuer: "Egyptian Council For Training",
    date: "March 2022",
    url: "https://drive.google.com/file/d/1_FFe4ejv89pjsoOmx77RkrAPByOZnxlJ/view?usp=sharing",
  },
];

const Education = () => {
  return (
    <div className="min-h-[calc(100vh-200px)]  px-4">
      {/* Faculty Info */}
      <h1 className="text-3xl text-center mt-0 text-gray-800 mb-10">
        Faculty of Al-Alsun – Ain Shams University, Class of 2013
      </h1>

      {/* Certificate Cards */}
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-lg p-6 text-gray-800"
          >
            <h2 className="text-xl font-semibold text-primaryBlue">
              {cert.title}
            </h2>
            <p className="text-sm text-gray-600 italic">
              {cert.issuer} – {cert.date}
            </p>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orangeLink underline mt-2 inline-block"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>

      {/* Previous Portfolio */}
      <section className="px-10 mt-38 text-center text-gray-800">
        <h2 className="text-3xl font-bold mb-4">Resume & Certifications</h2>
        <p className="text-gray-600 mb-6">
          You can view my full professional resume, certificates, and German
          portfolio here:
        </p>

        <a
          href="https://aboutdoniamagdy.my.canva.site/myportfolio"
          target="_blank"
          className="px-6 py-3 bg-[#FF7EB6] text-white rounded-lg shadow "
        >
          View Full Portfolio
        </a>
      </section>
    </div>
  );
};

export default Education;
