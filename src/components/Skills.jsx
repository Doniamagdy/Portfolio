import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript  } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 size={40} color="#e34c26" />, name:'HTML'},
  { icon: <FaCss3Alt size={40} color="#1572B6" />,  name:'CSS'},
  { icon: <FaBootstrap size={40} color="#7952B3" />, name:'BOOTSTRAP'},
  { icon: <SiTailwindcss size={40} color="#38bdf8" />, name:'TAILWIND'},
  { icon: <SiJavascript size={40} color="#F7DF1E" />, name:'JAVASCRIPT'},
    { icon: <SiTypescript  size={40} color="#3178c6" />, name:'TYPESCRIPT'},

  { icon: <FaReact size={40} color="#61DBFB" />, name:'REACT'},
];

function Skills() {
  return (
  <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Skills</h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              {/* Icon */}
              <div className=" transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center pt-2 ">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Skills;