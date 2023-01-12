import Image from "next/image";

const LargeCard = ({ img, title, description, button }) => {
  return (
    <figure className="relative  py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt={"A beautiful outdoor scenery"}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-2xl "
        />
      </div>

      <figcaption className="absolute top-32 left-12 space-y-3">
        <h2 className="font-semibold text-4xl w-64">{title}</h2>
        <p>{description}</p>
        <button className="bg-gray-900 px-4 py-2 text-white text-sm rounded-md">
          {button}
        </button>
      </figcaption>
    </figure>
  );
};

export default LargeCard;
