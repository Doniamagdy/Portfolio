import ProjectCard from "../components/ProjectCard";
import projectImg from "../assets/Screenshot 2025-12-02 131553.png";
import projectImg2 from "../assets/Screenshot 2026-02-18 162051.png";
import Tabs from "../components/Tabs";

const Projects = () => {
  const data = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x300",
      img: projectImg,
      name: "Lanoura E-commerce",
      desc: "A responsive E-commerce built with React and Tailwind.",
      link: "https://lunora-ecommerce.vercel.app",
      repo: "https://github.com/Doniamagdy/Lunora-Ecommerce",
      tools: ["React", "Tailwind", "React Query"],
    },

    {
      id: 2,
      image: "https://via.placeholder.com/400x300",
      img: projectImg2,
      name: "Ibadah Online",
      desc: "A responsive Website for Ibadah built with React and Tailwind.",
      link: "https://www.ibadah.online/",
      tools: ["React", "Tailwind"],
    },
  ];

  return (
    <div className="w-full min-h-screen ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {data?.map((pro) => (
        
            <ProjectCard
              key={pro.id}
              projImage={pro.img}
              name={pro.name}
              link={pro.link}
              desc={pro.desc}
              tools={pro.tools}
              repo={pro.repo}
            />
         
          ))}
        </div>

        {data.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects to display yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
