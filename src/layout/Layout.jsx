
import { Outlet } from "react-router-dom";
import Hero from "./Hero";
import Footer from "./Footer";
import Tabs from "../components/Tabs";

function Layout() {
  return (
    <div className=" min-h-screen overflow-hidden">

      <Hero />

      <main className="relative z-10 w-11/12 md:w-4/5 mx-auto py-10">
        <Tabs />

        <div className="mt-10">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;