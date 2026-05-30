import { motion } from "framer-motion";

const workExperience = [
  {
    title: "Freelance Frontend Instructor",
    company: "Function for training and projects",
    date: "Jan 2025 – current",
    description: [
      "Taught HTML, CSS, Bootstrap, and JavaScript to university students through hands-on sessions and project-based learning.",
      "Monitored student progress and provided feedback.",
      "Currently preparing a React course focused on building an e-commerce application with API integration, error handling, and state management.",
    ]}, { 
     title: "Backend Developer",
    company: "Saint George import & export",
    date: "Aug 2022",
    description: [
      "Assisted in developing dynamic web applications using PHP, MySQL, phpMyAdmin.",
     
    ],}
  
];
const Work = () => {
  return (
    <section className="relative py-10">

      {/* LINE */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[3px] bg-purple-500 shadow-[0_0_12px_#a855f7]"></div>

      <div className="space-y-10">

        {workExperience.map((job, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="relative md:ml-20 ml-10"
          >

            {/* CIRCLE */}
            <div className="absolute -left-[2.35rem] md:-left-[3.6rem] top-7 w-5 h-5 rounded-full bg-purple-500 border-4  shadow-[0_0_15px_#a855f7]"></div>

            {/* CARD */}
            <div className="galaxy-card p-6">

              <h2 className=" text-2xl md:text-3xl font-bold">
                {job.title}
              </h2>

              <p className=" text-lg font-semibold mt-1">
                {job.company}
              </p>

              <div className="flex items-center gap-2 mt-3 text-md">
                <span>📅</span>
                <span>{job.date}</span>
              </div>

              <ul className="mt-6 space-y-4">
                {job.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-200 leading-8"
                  >
                    <span className="text-purple-400 text-lg">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Work;