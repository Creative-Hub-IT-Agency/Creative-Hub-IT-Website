import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import WhatsappButton from "../components/WhatsappButton";
// import LiveChatButton from "../components/LiveChat";

export default function Main() {
  return (
    <>
    <WhatsappButton/>
    {/* <LiveChatButton/> */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
