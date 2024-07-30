import { Outlet } from "react-router-dom";
import { Footer } from "../../../components/footer/UI/footer";

export const MainPage = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};
