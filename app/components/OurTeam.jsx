import Image from "next/image";
import Title from "./Title";
import { BsTwitter } from "react-icons/bs";
import { BiLogoInstagram } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import data from "../../data";

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
          <div
            className="space-y-3 our-team relative"
            key={instructor.id}
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className="h-[70vh] overflow-hidden">
              <Image
                src={instructor.image}
                width="500"
                height="500"
                className="w-full h-full object-cover hover:scale-110  duration-500"
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
              <Link href={`/instructors/${instructor.id}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
