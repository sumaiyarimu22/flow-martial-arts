"use client";
import { useParams } from "next/navigation";
import { BsTwitter } from "react-icons/bs";
import { BiLogoInstagram } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import data from "../../../data";
import Image from "next/image";
import Link from "next/link";

const InstructorDetails = () => {
  const param = useParams();

  const singleitem =
    data.length > 0 && data.filter((item) => item.id == param.instructorId);

  // console.log(singleitem[0].name);
  return (
    <div className="text-text section-padding">
      {singleitem.map((item) => (
        <div key={item.id} className="flex justify-between gap-10 mx-16">
          <div className="flex flex-col gap-5 justify-center ps-20">
            <div className="text-3xl style-text">{item.name}</div>
            <div className="text-accent/70">{item.occupation} Expart</div>
            <div className="w-[45vw]">{item.occupationDetails}</div>

            <div className="flex gap-3 text-2xl">
              <Link
                href={item.twiter}
                className="hover:text-accent duration-300"
              >
                <BsTwitter />
              </Link>
              <Link
                href={item.instagram}
                className="hover:text-accent duration-300"
              >
                <BiLogoInstagram />
              </Link>
              <Link
                href={item.facebook}
                className="hover:text-accent duration-300"
              >
                <BsFacebook />
              </Link>
            </div>
          </div>
          <div className="h-[60vh] w-[40vw]">
            <Image
              src={item.image}
              width="800"
              height="1200"
              className="w-full h-full object-scale-down"
              alt="bending-exercise"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstructorDetails;
