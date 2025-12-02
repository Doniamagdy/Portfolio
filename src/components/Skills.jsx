// components/Skills.jsx
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 size={50} color="#e34c26" /> },
  { icon: <FaCss3Alt size={50} color="#1572B6" /> },
  { icon: <FaBootstrap size={50} color="#7952B3" /> },
  { icon: <SiTailwindcss size={50} color="#38bdf8" /> },
  { icon: <SiJavascript size={50} color="#F7DF1E" /> },
  { icon: <FaReact size={50} color="#61DBFB" /> },
];

function Skills() {
  return (
    <section className="px-10 py-12 text-center mt-8">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 justify-center ">
        {skills.map((s, i) => (
          <div
            key={i}
            className="p-4 bg-white/30 backdrop-blur-lg rounded-xl shadow hover:scale-110 transition cursor-pointer mx-auto"
          >
            {s.icon}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
