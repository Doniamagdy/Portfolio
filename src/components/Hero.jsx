// components/Hero.jsx
import profile from "../assets/9.jpg";

function Hero() {
  return (
   <section className="flex flex-col items-center justify-center text-center mt-10">
      <img
      alt="my profile picture"
        src={profile}
        className="w-72 h-72 rounded-full object-cover shadow-2xl border-4 border-white hero-img"
      />

      <h1 className="mt-8 text-2xl md:text-3xl font-bold  text-gray-900 tracking-wide drop-shadow">
        Donia Magdy Ahmed
      </h1>

      <p className="mt-4 text-2xl font-semibold text-gray-700">Frontend Developer</p>

      <p className="mt-2 text-gray-600 max-w-xl">
        Passionate about building beautiful & functional web apps using modern technologies.
      </p>
    </section>
  );
}

export default Hero;
