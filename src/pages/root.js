import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ui/Scroll/ScrollToTop";
import ScrollToHash from "../Components/ui/Scroll/ScrollToHashh";
import WpBot from "../Components/WpBot/WpBot";
function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <main>
        <Outlet />
        <WpBot/>
      </main>
      {/* <BotPenguinBot/> */}
      <Footer />
    </>
  );
}
export default RootLayout;
