import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/landing/Footer";

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Page content will render here */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
