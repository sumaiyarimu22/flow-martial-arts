import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="text-text grid grid-cols-2 h-[calc(100vh-5rem)]">
      <div className="flex flex-col justify-between relative hero-left-line">
        <div></div>
        <div></div>
        <div className="ps-40 space-y-4 z-[2]">
          <h1 className=" text-4xl font-medium style-text uppercase">
            Do you want to be strong
          </h1>
          <p>Then you to us, We will teach you how to defend yourself</p>
          <Button placeholder={"view details"} href="/" />
        </div>
        <div className="style-text text-9xl font-bold text-light/70 ps-16">
          WANT
        </div>
      </div>
      <div className="flex justify-center mt-16 style-text text-9xl font-bold text-light/70 relative hero-right-line">
        STRONG
      </div>
    </div>
  );
};

export default HeroSection;
