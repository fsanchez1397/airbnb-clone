import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
const HousingCard = ({
  rentalUnitInformation: { img, description, price, title, total, location },
}) => {
  return (
    <div className=" flex min-w-[600px]  mb-4 px-2 pr-4 py-8 shadow-lg rounded-lg hover:bg-gray-200 hover:opacity-80 transition duration-200 ease-out">
      {/* IMG*/}
      <div className="relative h-24 w-40  md:h-52 md:w-80 mr-4 flex-shrink-0">
        <Image
          src={img}
          alt="Rental unit"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-2xl"
        />
      </div>
      {/* Info*/}
      <div className="space-y-2 flex-grow">
        <p>{location}</p>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
      {/*Price/Heart */}
      <div className="flex flex-col justify-between items-end ">
        <HeartIcon className="h-6 hover:scale-125 hover:fill-red-500 hover:text-red-500" />
        <div className="flex flex-col items-end ">
          <p className="text-2xl font-bold">{price}</p>
          <p>{total}</p>
        </div>
      </div>
    </div>
  );
};

export default HousingCard;
