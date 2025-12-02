// components/ProjectCard.jsx
function ProjectCard({ image, name, desc, link, repo, tools }) {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition hover:-translate-y-1">

      {/* Header Image */}
      <img src={image} alt="project" className="w-full h-40 object-cover" />

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="mt-2 text-gray-600">{desc}</p>

        <div className="flex gap-4 mt-3">
          <a
            className="text-blue-600 underline"
            href={link}
            target="_blank"
          >
            Live
          </a>

          <a
            className="text-blue-600 underline"
            href={repo}
            target="_blank"
          >
            Repo
          </a>
        </div>

        <p className="mt-2 text-sm text-gray-700">
          <strong>Tools:</strong> {tools.join(", ")}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
