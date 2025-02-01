import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import WhatsappButton from "../components/WhatsappButton";
// import LiveChatButton from "../components/LiveChat";

export default function Main() {
  return (
    <div className='bg-black'>
      <div className='container mx-auto px-4 lg:px-8'>
        <WhatsappButton />
        {/* <LiveChatButton/> */}
        <Navbar />
        <div className="min-h-[90vh]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
