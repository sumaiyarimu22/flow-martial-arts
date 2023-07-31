import Button from "./Button";
import Title from "./Title";

const HeroSection = () => {
  return (
    <div className="text-text grid grid-cols-2 h-[calc(100vh-5rem)]">
      <div className="flex flex-col justify-between relative hero-left-line">
        <div></div>
        <div></div>
        <div className="ps-40 space-y-4 z-[2]">
          <Title text="Do you want to be strong" />
          <p>Then you to us, We will teach you how to defend yourself</p>
          <Button placeholder={"View Details"} href="/" />
        </div>
        <div className="style-text text-7xl lg:text-9xl font-bold text-light/70 ps-16">
          WANT
        </div>
      </div>
      <div className="flex justify-center mt-16 style-text text-7xl lg:text-9xl font-bold text-light/70 relative hero-right-line">
        STRONG
      </div>
    </div>
  );
};

export default HeroSection;
