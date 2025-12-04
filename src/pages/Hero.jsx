import profile from "../assets/9.jpg";
import Tabs from "../components/Tabs";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";

const Hero = () => {
  return (
    <section className="w-full">

      {/* Profile Section - Overlapping Cover */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-16 sm:-mt-20 relative">
          <img
            src={profile}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full border-4 border-white object-cover shadow-lg"
          />
          <div className="pb-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Donia Magdy
            </h1>
            <p className="text-gray-600 font-medium text-lg">
              Frontend Developer
            </p>
          </div>
        </div>

          <Tabs />

        <div className="mt-8 pb-12 space-y-8">

            <About />

         
            <Skills />
         

      
            <Contact />
      
        </div>
      </div>
    </section>
  );
};

export default Hero;
