import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen">
      <div
        className="overflow-hidden"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/7991662/pexels-photo-7991662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default HomePage;
