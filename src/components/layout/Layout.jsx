import { Outlet } from "react-router-dom";
import CoverImage from "../layout/CoverImage";
import Footer from "../layout/Footer";

function Layout() {
  return (
    <div>
      <CoverImage />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
