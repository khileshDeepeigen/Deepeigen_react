import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Page content will render here */}
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
