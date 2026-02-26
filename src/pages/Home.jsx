import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Founder from "../components/Founder";
import CollegeVideo from "../components/CollegeVideo";
import PlacementDrive from "../components/PlacementDrive";
import LatestEvents from "../components/LatestEvents";
import NewsRelease from "../components/NewsRelease";
import Stats from "../components/Stats";
import Management from "../components/Management";
import PlacementNews from "../components/PlacementNews";
import WhyChoose from "../components/WhyChoose";
import Programs from "../components/Programs";
import Placements from "../components/Placements";
import CampusLife from "../components/CampusLife";
import UpcomingEvents from "../components/UpcomingEvents";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Founder />
      <PlacementDrive />
      <LatestEvents />
      <UpcomingEvents />
      <NewsRelease />
      <Stats />
      <Management />
      <PlacementNews />
      <WhyChoose />
      <Placements />
      <CampusLife />
      <CollegeVideo />
      <Programs />
      <Footer />
    </div>
  );
}

export default Home;