import Navbar from "../components/Navbar";
import Hero from "../components/Header";
import About from '../components/About';
import Plan from '../components/Plan';
import ServiceSection from "../components/Services";
import Tools from "../components/Tools";

export default function Home() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen font-sans">
      <Navbar />
      <Hero />
      <ServiceSection/>
      <About/>

      <Plan/>

      <Tools/>

    </main>
  );
}