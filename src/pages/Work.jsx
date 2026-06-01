import { motion } from "framer-motion";

const workExperience = [
  {
    title: "Freelance Frontend Instructor",
    company: "Function for training and projects",
    date: "Jan 2025 – current",
    description: [
     " Delivered frontend curriculum (HTML, CSS, JavaScript, Bootstrap) to university students using project-based learning.",
"Applied project-based learning approach to improve practical coding skills."
    ],
  },
  {
    title: "Backend Developer",
    company: "Saint George Import & Export",
    date: "Aug 2022",
    description: [
      "Assisted in developing dynamic web applications using PHP, MySQL, phpMyAdmin.",
    ],
  },
];

const Work = () => {
  return (
    <section >

      <div className="grid gap-6 md:gap-8">

        {workExperience.map((job, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="galaxy-card p-5 sm:p-6 md:p-8 rounded-xl"
          >

            {/* Title */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
              {job.title}
            </h2>

            {/* Company */}
            <p className="text-sm sm:text-base md:text-lg font-semibold mt-1 text-gray-200">
              {job.company}
            </p>

            {/* Date */}
            <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-400">
              📅 {job.date}
            </p>

            {/* Description */}
            <ul className="mt-4 sm:mt-5 space-y-3">
              {job.description.map((item, i) => (
                <li
                  key={i}
                  className="text-sm sm:text-base text-gray-200 leading-relaxed flex gap-2"
                >
                  <span className="text-purple-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Work;