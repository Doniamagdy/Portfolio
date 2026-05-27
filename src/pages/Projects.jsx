// import ProjectCard from "../components/ProjectCard";
// import {data} from "../data.js"

// const Projects = () => {
  
//   return (
//     <> 
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
//           {data?.map((pro) => (
        
//             <ProjectCard
//               key={pro.id}
//               projImage={pro.img}
//               name={pro.name}
//               link={pro.link}
//               desc={pro.desc}
//               tools={pro.tools}
//               repo={pro.repo}
//             />
         
//           ))}
//         </div>

//         {data.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No projects to display yet.</p>
//           </div>
//         )}
//     </>
//   );
// };

// export default Projects;


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