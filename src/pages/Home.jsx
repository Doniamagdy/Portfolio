// import Skills from "../components/Skills";
// import About from "../components/About";
// import Contact from "../components/Contact";


// const Home= () => {
//   return (
//         <div className="mt-8 pb-12 space-y-8">
//             <About />
//             <Skills />
//             <Contact />
//         </div>
//   );
// };

// export default Home;


import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="space-y-10 pb-12">
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;