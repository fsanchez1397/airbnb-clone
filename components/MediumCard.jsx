import Image from "next/image";

export const MediumCard = ({ img, title }) => {
  return (
    <figure className=" cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image
          src={img}
          alt={title}
          fill
          style={{ objectFit: "contain" }}
          className="rounded-xl"
        />
      </div>
      <div>
        <figcaption className="text-2xl mt-3">{title}</figcaption>
      </div>
    </figure>
  );
};
