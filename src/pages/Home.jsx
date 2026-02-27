import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Hero,
  Founder,
  CollegeVideo,
  PlacementDrive,
  LatestEvents,
  NewsRelease,
  Stats,
  Management,
  PlacementNews,
  WhyChoose,
  Programs,
  Placements,
  CampusLife,
  UpcomingEvents,
} from "../components/home";

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