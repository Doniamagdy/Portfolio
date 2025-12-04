import { motion } from "framer-motion";
import Tabs from "../components/Tabs"

const workExperience = [
  {
    title: "Frontend Instructor",
    company: "Function for training and projects",
    date: "Dec 2024 – current",
    description: [
      "Delivered live coding sessions on HTML, CSS, JavaScript, and React.js to beginner and intermediate students.",
      "Created structured lesson plans, assignments, and coding challenges to guide student learning.",
      "Reviewed students' code and provided constructive feedback to help improve their skills and understanding.",
    ],
  },
  {
    title: "Admin",
    company: "Trade Fairs International & Mercury Communication",
    date: "Dec 2022 – Jun 2023",
    description: [
      "Contact with CEO, MD, CTO and IT Mangers inviting them to Cairo ICT and Caisec.",
    ],
  },
  {
    title: "High School Assistant Principal",
    company: "Dover American School",
    date: "Aug 2020 – Apr 2021",
    description: [
      "Collaborated with the Principal to oversee academic staff and ensuring alignment with school policies and performance standards.",
      "Monitored the accurate entry of student grades into the school system and submitting weekly performance reports to the Principal.",
      "Conducted daily classroom observations to evaluate instructional quality and support teachers.",
    ],
  },
  {
    title: "Elementary German Teacher",
    company: "Dover American School",
    date: "Aug 2018 – Jun 2020",
    description: [
      "Developed engaging curriculum plans and adaptive teaching methods tailored to student needs.",
      "Delivered personalized tutoring to support individual language development.",
      "Strengthened student skills in reading, writing, speaking, and listening through immersive, interactive lessons.",
    ],
  },
  {
    title: "Kindergarten German Teacher",
    company: "Menese International School",
    date: "Aug 2015 – Jun 2018",
    description: [
      "Delivered lessons that integrated academic content with personal, social, and emotional development.",
      "Engaged students using diverse instructional methods, including songs, videos, and hands-on activities.",
      "Created original educational materials such as books, flashcards, videos, and interactive games to enhance learning.",
    ],
  },
  {
    title: "Elementary German Teacher",
    company: "Alsayda Aicha School",
    date: "Aug 2014 – Jun 2015",
    description: [
      "Delivered interactive lessons using videos, presentations, and online games to maximize engagement.",
      "Enhanced teaching strategies through continuous professional development and educational seminars.",
      "Integrated modern teaching tools to foster a collaborative and student-centered learning environment.",
    ],
  },
];

const Work = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs />

        <div className="relative mt-8">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative md:ml-20"
              >
                <div className="hidden md:block absolute -left-[4.6rem] top-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>

                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 sm:p-8 border border-gray-100">
                  <div className="mb-4 sm:mb-5">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h2>
                    <p className="text-base sm:text-lg text-purple-600 font-semibold mb-2">
                      {job.company}
                    </p>
                    <div className="flex items-center gap-2 text-sm sm:text-base text-gray-500">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{job.date}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work