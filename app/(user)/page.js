import Navbar from "../components/Navbar";
import Hero from "../components/Header";
import About from '../components/About';
import Plan from '../components/Plan';
import ServiceSection from "../components/Services";
import Tools from "../components/Tools";
import MatterJS from "../components/MatterJS";
import OurClients from "../components/OurClients";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen font-sans">
      <Navbar />
      <Hero />
      <ServiceSection/>
      <About/>

      <Plan/>

      <Tools/>
      {/* <MatterJS /> */}

<OurClients />




<div className="h-screen">

</div>


    </main>
  );
}