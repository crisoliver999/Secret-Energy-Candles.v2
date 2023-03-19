import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Box minHeight='90vh'>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};

export default Layout;
