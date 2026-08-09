import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Seo from "./components/Seo";

const Layout = () => {
  return (
    <>
      <Seo />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
