import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PreFooter from "./components/PreFooter";
import Spiner from "./components/Spiner";
import SpinWheelGame from "./components/SpinWheelGame";
import TermsAndConditions from "./components/TermsAndConditions";
import Winners from "./components/Winners";

export default function App() {
  return (

    <div className="w-full h-full">
      <Navbar/>
    <div className="bg-slate-800 h-full w-full">
        <Spiner />
    {/* <SpinWheelGame/> */}
      <div className="flex justify-between lg:flex-row flex-col-reverse  mt-20 ">
      <TermsAndConditions/>
      <Winners/>
      </div>
      <PreFooter/>
      <Footer/>
    </div>
    </div>
  )
}