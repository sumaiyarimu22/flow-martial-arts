import Image from "next/image";
import Title from "./Title";

const images = [
  {
    src: "https://images.pexels.com/photos/3023756/pexels-photo-3023756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/690598/pexels-photo-690598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/2204179/pexels-photo-2204179.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    src: "https://images.pexels.com/photos/7045486/pexels-photo-7045486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/7045486/pexels-photo-7045486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/7045486/pexels-photo-7045486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/7045486/pexels-photo-7045486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/7045486/pexels-photo-7045486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/7045568/pexels-photo-7045568.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const GalleryCom = () => {
  return (
    <div className="text-text section-padding ms-16 lg:ms-44 me-16">
      <div className="flex flex-col justify-center text-center instagram relative">
        <div className="py-10">
          <Title text="OUR INSTAGRAM" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {images.map((img, i) => (
            <div key={i}>
              <div className="gallery-item h-[16rem]">
                <Image
                  src={img.src}
                  alt="Image 1"
                  width="500"
                  height="500"
                  className="w-full h-full object-cover"
                />
                <div className="overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryCom;
