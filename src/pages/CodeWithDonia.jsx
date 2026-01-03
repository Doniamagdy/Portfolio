import Tabs from "../components/Tabs"

const resources = [
  {
    title: "Introduction to JavaScript",
    url: "https://drive.google.com/file/d/15bUxVul3eB57v47yj9SxCOcl_RD8EAyg/view?usp=sharing",
    category: "JavaScript Basics",
    description: "Learn the fundamentals of JavaScript programming",
  },
   {
    title: "JavaScript Variables",
    url: "https://drive.google.com/file/d/13qD_2Q30HJtm868EdAKxIMGR9s3F9yBw/view?usp=sharing",
    category: "JavaScript Basics",
    description: "Learn the fundamentals of JavaScript programming",
  },
];

const CodeWithDonia = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs />

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {resources.map((res, idx) => (
            <a
              key={idx}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-6 sm:p-8 border border-gray-100 relative overflow-hidden"
            >
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-md text-xs sm:text-sm font-semibold mb-4">
                {res.category}
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-300">
                {res.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 mb-4">{res.description}</p>

              <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                <span>View Resource</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Code Icon in Bottom Right */}
              <div className="absolute bottom-3 right-3 opacity-20 group-hover:opacity-30 transition-opacity">
                <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </a>
           
          ))}
        </div>

        {resources.length === 0 && (
          <div className="text-center py-14">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">More Resources Coming Soon!</h3>
            <p className="text-gray-500">Check back later for new tutorials and learning materials</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeWithDonia