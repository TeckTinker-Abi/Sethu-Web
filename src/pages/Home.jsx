import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Programs from "../components/Programs";
import Placements from "../components/Placements";
import CampusLife from "../components/CampusLife"; // matches your file name
import Footer from "../components/Footer";
import Founder from "../components/Founder";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Founder />
      <WhyChoose />
      <Programs />
      <Placements />
      <CampusLife />
      <Footer />
    </div>
  );
}

export default Home;