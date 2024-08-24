import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PreFooter from "./components/PreFooter";
import Spiner from "./components/Spiner";
import SpinWheelGame from "./components/SpinWheelGame";
import TermsAndConditions from "./components/TermsAndConditions";
import Winners from "./components/Winners";

export default function App() {
  return (
    <div className="bg-gray-800 h-full w-full">

    <Navbar/>
    <div className="">
      <Spiner />
    </div>
    {/* <SpinWheelGame/> */}
    <TermsAndConditions/>
    <PreFooter/>
    <Footer/>

    </div>
  )
}