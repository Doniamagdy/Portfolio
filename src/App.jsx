import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Education from "../src/pages/Education";
import Work from "../src/pages/Work";
import Projects from "../src/pages/Projects";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
