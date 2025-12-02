import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center py-4  left-0 mt-6">
      <ul className="flex gap-6 text-lg font-bold text-gray-800">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      <li>
          <Link to={"/projects"}>Projects</Link>
        </li>

        <li>
          <Link to={"/education"}>Education</Link>
        </li>

        <li>
          <Link to={"/work"}>Work Experience</Link>
        </li>
        
        <li>
          <Link to={"/code-with-donia"}>Code with Donia</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
