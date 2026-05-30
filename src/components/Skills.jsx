import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiReactrouter,
  SiAxios,
  SiVite,
  SiReactquery,
  SiReacthookform,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

const skills = [
  { icon: <FaHtml5 size={24} color="#E34F26" />, name: "HTML5" },
  { icon: <FaCss3Alt size={24} color="#1572B6" />, name: "CSS3" },
  { icon: <FaBootstrap size={24} color="#7952B3" />, name: "Bootstrap" },
  { icon: <SiTailwindcss size={24} color="#38BDF8" />, name: "Tailwind" },
  { icon: <SiJavascript size={24} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <FaReact size={24} color="#61DAFB" />, name: "React" },
  { icon: <SiRedux size={24} color="#764ABC" />, name: "Redux Toolkit" },
  { icon: <SiAxios size={24} color="#5A29E4" />, name: "Axios" },
  { icon: <SiReactrouter size={24} color="#CA4245" />, name: "React Router" },
  { icon: <SiReactquery size={24} color="#FF4154" />, name: "React Query" },
  {
    icon: <SiReacthookform size={24} color="#EC5990" />,
    name: "React Hook Form",
  },
  { icon: <TbApi size={24} color="#00C2FF" />, name: "RESTful APIs" },
  { icon: <SiVite size={24} color="#646CFF" />, name: "Vite" },
  { icon: <FaGitAlt size={24} color="#F05032" />, name: "Git" },

  { icon: <FaGithub size={24} color="#ffffff" />, name: "GitHub" },
];

function Skills() {
  return (
    <section className="galaxy-card p-4 sm:p-6 md:p-8 mt-6 rounded-xl shadow-md">
      
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
        Skills & Tools
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              gap-2
              sm:gap-3
              px-3
              py-3
              sm:px-4
              sm:py-4
              rounded-lg
              hover:scale-105
              transition
              duration-300
            "
          >
            <div className="shrink-0">
              {skill.icon}
            </div>

            <span className="text-sm sm:text-base font-medium whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;