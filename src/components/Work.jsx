import { motion } from "framer-motion";

const workExperience = [
  {
    title: "Frontend Instructor",
    company: "Function for training and projects",
    date: "Dec 2024 – current",
    description: [
      "Delivered live coding sessions on HTML, CSS, JavaScript, and React.js to beginner and intermediate students. ",
      " Created structured lesson plans, assignments, and coding challenges to guide student learning.",
      "Reviewed students’ code and provided constructive feedback to help improve their skills and understanding.",
    ],
  },
  {
    title: "Admin",
    company: "Trade Fairs International & Mercury Communication",
    date: "Dec 2022 – Jun 2023",
    description:
      "Contact with CEO, MD, CTO and IT Mangers inviting them to Cairo ICT and Caisec.",
  },
  {
    title: "High School Assistant Principal",
    company: "Dover American School",
    date: "Aug 2020 – Apr 2021",
    description: [
      "Collaborated with the Principal to oversee academic staff and ensuring alignment with school policies and performance standards.",
      "Monitored the accurate entry of student grades into the school system  and submitting weekly performance reports to the Principal.",
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
    <div className="min-h-[calc(100vh-200px)]  px-4 ">
      <div className="max-w-5xl mx-auto grid gap-6 mb-8">
      
        {workExperience.map((job, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg p-6 text-gray-800"
          >
            <h2 className="text-xl font-semibold text-primaryBlue">
              {job.title} – <span className="text-gray-700">{job.company}</span>
            </h2>
            <p className="text-sm text-gray-600 italic mt-1">{job.date}</p>
            <ul className="mt-3 list-disc list-inside space-y-2">
              {Array.isArray(job.description) ? (
                job.description.map((item, i) => (
                  <li key={i} className="text-justify">
                    {item}
                  </li>
                ))
              ) : (
                <li>{job.description}</li>
              )}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
