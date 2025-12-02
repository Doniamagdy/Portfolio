// components/Projects.jsx
import ProjectCard from "./ProjectCard";
import projectImg from "../assets/Screenshot 2025-12-02 131553.png";

function Projects() {
  const data = [
    {
      id: 1,
      image: projectImg,
      name: "Lanoura E-commerce",
      desc: "A responsive E-commerce built with React and Tailwind.",
      link: "https://lunora-ecommerce.vercel.app",
      repo: "https://github.com/Doniamagdy/Lunora-Ecommerce",
      tools: ["React", "Tailwind", "React Query"],
    },
  ];

  return (
    <section className="px-10 py-16">
      <h2 className="text-3xl font-bold mb-8 text-black">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
