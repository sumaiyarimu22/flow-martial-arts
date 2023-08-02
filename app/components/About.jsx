import Image from "next/image";
import Button from "./Button";
import Title from "./Title";

const AboutUs = () => {
  return (
    <div className="text-text my-10 md:my-20  lg:mx-16 md:flex  md:about-line relative gap-10">
      <div
        className=" ps-10 md:ps-24 space-y-8 md:w-[60%] w-full "
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <Title text="About Us" />

        <p className="pe-10 text-sm md:text-base">{`Welcome to our FlowMartialArts, where we embark on a journey of physical and mental transformation through the timeless art of combat. At our academy, we foster a dynamic and supportive environment, empowering students of all ages and skill levels to unleash their full potential. Our team of passionate and highly skilled instructors brings a wealth of experience from diverse martial arts backgrounds, ensuring a well-rounded and comprehensive training curriculum. From mastering traditional disciplines to exploring contemporary techniques, our classes encompass a holistic approach to self-discipline, self-defense, and personal growth. Join us at our Martial Arts Academy, and together, let's cultivate not just martial prowess but also life-long values of respect, perseverance, and indomitable spirit.`}</p>
        <Button placeholder={"See more"} href="/" color="danger" />
        <div className="flex justify-end  mt-16 style-text text-6xl lg:text-8xl font-bold text-light/70">
          ABOUT US
        </div>
      </div>
      <div
        className="pt-20"
        data-aos="flip-left"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div className="md:rounded-full rounded-lg px-10 md:px-0 overflow-hidden ">
          <Image
            src="https://images.pexels.com/photos/8534775/pexels-photo-8534775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width="500"
            height="500"
            className="w-full h-[100vh] overflow-hidden hover:scale-110 duration-500"
            alt="bending-exercise"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
