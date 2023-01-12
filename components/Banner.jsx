import Image from "next/image";
function Banner() {
  return (
    <div className="relative  h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="People in forest"
        style={{ objectFit: "cover" }}
        fill
        priority
      />
      <div className="absolute top-1/2 w-full  text-center">
        <h1 className="font-semibold text-sm sm:text-lg">
          Not sure where to go? Perfect.
        </h1>
        <button className="bg-white  py-3 px-10 text-purple-500 shadow-md rounded-full font-bold my-3  hover:scale-95 active:scale-90 active:shadow-sm transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
