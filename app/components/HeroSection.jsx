import Button from "./Button";
import Title from "./Title";

const HeroSection = () => {
  return (
    <div className="text-text grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-5rem)]">
      <div
        className="flex flex-col justify-between relative hero-left-line"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div></div>
        <div></div>
        <div className="px-10 md:ps-40 space-y-4 z-[2] pt-12 md:pt-0">
          <Title text="Do you want to be strong" />
          <p>Then you to us, We will teach you how to defend yourself</p>
          <Button placeholder={"View Details"} href="/" />
        </div>
        <div className="style-text text-5xl sm:text-7xl lg:text-9xl font-bold text-light/70 ps-16 hidden md:block">
          WANT
        </div>
      </div>
      <div
        className="flex justify-center mt-16 style-text text-5xl sm:text-7xl lg:text-9xl font-bold text-light/70 relative hero-right-line"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        STRONG
      </div>
    </div>
  );
};

export default HeroSection;
