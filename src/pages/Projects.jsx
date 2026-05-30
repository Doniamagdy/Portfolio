import ProjectCard from "../components/ProjectCard";
import { data } from "../data";

const Projects = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">

      {data.map((pro) => (
        <ProjectCard key={pro.id} {...pro}  projImage={pro.img}/>
      ))}

      {data.length === 0 && (
        <p className="text-white text-center col-span-full">
          No projects available
        </p>
      )}

    </div>
  );
};

export default Projects;