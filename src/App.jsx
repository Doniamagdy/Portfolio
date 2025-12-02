import { Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import Education from "../src/components/Education";
import Work from "../src/components/Work";
import CodeWithDonia from "../src/components/CodeWithDonia";
import Projects from "../src/components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-background min-h-screen text-white">
   <Navbar />
      <div className="pt-20 container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<Work />} />
          <Route path="/code-with-donia" element={<CodeWithDonia />} />
          <Route path="/projects" element={<Projects /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;




      
      