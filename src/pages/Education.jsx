import { motion } from "framer-motion";

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
    <div>

      <div className="text-center mb-10 mt-8">
        <h1 className="text-3xl md:text-5xl font-bold ">
          Faculty of Al-Alsun – Ain Shams University
        </h1>
        <p className="text-cyan-300 mt-2">Class of 2013</p>
      </div>

      <div className=" grid gap-6 md:grid-cols-2">

        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="galaxy-card p-6 md:p-8 backdrop-blur-md rounded-2xl "
          >
            <div className="text-3xl font-bold mb-3">
              {cert.title}
            </div>

            <p className="text-2xl">{cert.issuer}</p>
            <p className="text-xl  my-4">{cert.date}</p>

            <a
              href={cert.url}
              target="_blank"
              className="text-cyan-400 hover:text-cyan-300"
            >
              View Certificate →
            </a>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Education;