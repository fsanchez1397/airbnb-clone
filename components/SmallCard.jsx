import Image from "next/image";

const SmallCard = ({ location, locationImg, locationDistance }) => {
  return (
    <figure className="flex items-center m-2 mt-5 space-x-4 rounded-xl hover:scale-105 duration-200 cursor-pointer hover:bg-gray-100 ">
      <div className="relative h-16 w-16">
        <Image
          src={locationImg}
          alt={`A picture of ${location}`}
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          priority
        />
      </div>
      <div className="pl-3 ">
        <figcaption className="font-semibold">{location}</figcaption>
        <figcaption className="text-gray-500">{locationDistance}</figcaption>
      </div>
    </figure>
  );
};

export default SmallCard;
