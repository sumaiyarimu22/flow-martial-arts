import Image from "next/image";
import Title from "./Title";

const OurTeam = () => {
  return (
    <div className="text-text section-padding">
      <div className="flex justify-center">
        <Title text="Our team" />
      </div>
      <div className="grid grid-cols-4 gap-10 justify-center py-10 ps-36 pe-20">
        <div>
          <Image
            src="https://images.pexels.com/photos/7045738/pexels-photo-7045738.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width="500"
            height="500"
            className="w-full h-full object-cover"
            alt="bending-exercise"
          />
        </div>
        <div>
          <Image
            src="https://images.pexels.com/photos/8461245/pexels-photo-8461245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width="500"
            height="500"
            className="w-full h-full object-cover"
            alt="bending-exercise"
          />
        </div>
        <div>
          <Image
            src="https://images.pexels.com/photos/6455249/pexels-photo-6455249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width="500"
            height="500"
            className="w-full h-full object-cover"
            alt="bending-exercise"
          />
        </div>
        <div>
          <Image
            src="https://images.pexels.com/photos/6455249/pexels-photo-6455249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width="500"
            height="500"
            className="w-full h-full object-cover"
            alt="bending-exercise"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
