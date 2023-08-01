import Image from "next/image";
import Title from "./Title";
import { BsTwitter } from "react-icons/bs";
import { BiLogoInstagram } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";

const data = [
  {
    id: 1,

    image:
      "https://images.pexels.com/photos/7045430/pexels-photo-7045430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Valkyria Steelhart",
    occupation: "JUDO",
    twiter: "/",
    instagram: "/",
    facebook: "/",
  },
  {
    id: 2,

    image:
      "https://images.pexels.com/photos/10823768/pexels-photo-10823768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Seraphina Swiftstrike",
    occupation: "jiu jitsu",
    twiter: "/",
    instagram: "/",
    facebook: "/",
  },
  {
    id: 3,

    image:
      "https://images.pexels.com/photos/2628207/pexels-photo-2628207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Griffin Ironwood",
    occupation: "BOXING",
    twiter: "/",
    instagram: "/",
    facebook: "/",
  },
  {
    id: 4,

    image:
      "https://images.pexels.com/photos/7045664/pexels-photo-7045664.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Arlo Blackthorn",
    occupation: "MMA",
    twiter: "/",
    instagram: "/",
    facebook: "/",
  },
];

const OurTeam = () => {
  return (
    <div className="text-text section-padding">
      <div
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="flex justify-center"
      >
        <Title text="Our team" />
      </div>
      <div className="grid grid-cols-4 gap-5 justify-center my-10  mx-40">
        {data.map((instructor) => (
          <div className="space-y-3 our-team relative" key={instructor.id}>
            <div className="h-[70vh]">
              <Image
                src={instructor.image}
                width="500"
                height="500"
                className="w-full h-full object-cover"
                alt="bending-exercise"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <p>{instructor.name}</p>
              <p className="text-accent font-semibold">
                {instructor.occupation}
              </p>
              <div className="flex gap-3">
                <Link
                  href={instructor.twiter}
                  className="hover:text-accent duration-300"
                >
                  <BsTwitter />
                </Link>
                <Link
                  href={instructor.instagram}
                  className="hover:text-accent duration-300"
                >
                  <BiLogoInstagram />
                </Link>
                <Link
                  href={instructor.facebook}
                  className="hover:text-accent duration-300"
                >
                  <BsFacebook />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
