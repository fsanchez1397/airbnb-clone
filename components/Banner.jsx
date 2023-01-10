import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="People in forest"
        style={{ objectFit: "cover" }}
        fill
        priority
      />
      <div className="absolute">
        <p className="">Not sure where to go? Perfect.</p>
        <button className=""> I'm flexible</button>
      </div>
    </div>
  );
}

export default Banner;
