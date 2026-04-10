import ProjectCard from "../components/ProjectCard";
import {data} from "../data.js"
import Tabs from "../components/Tabs";

const Projects = () => {
  
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
