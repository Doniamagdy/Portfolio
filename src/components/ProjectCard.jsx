function ProjectCard({ projImage, name, desc, link, repo, tools }) {
  return (
    <div className="galaxy-card md:p-8group  rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2  flex flex-col  h-full">
      
      {/* Header Image */}
      <div className="relative overflow-hidden h-48 sm:h-52 md:h-56">
        <img 
          src={projImage} 
          alt={`${name} project screenshot`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow space-y-4">
        
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold  line-clamp-2">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base  leading-relaxed flex-grow line-clamp-3">
          {desc}
        </p>

        {/* Tools/Technologies */}
        <div className="py-6 border-b border-gray-100">
         
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className=" sm:px-3 p-2 bg-white text-gray-900 rounded-full text-xs sm:text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex gap-3 pt-2">
          <a 
            className="flex-1 text-center px-4 py-2.5 text-shadow-md bg-purple-400 text-white rounded-lg font-medium hover:bg-purple-500 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>

          <a
            className="flex-1 text-center px-4 py-2.5 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base"
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        </div>
      </div>


    </div>
  );
}

export default ProjectCard;