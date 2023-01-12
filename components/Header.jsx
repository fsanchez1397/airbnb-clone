import Image from "next/image";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  GlobeAltIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-10">
      {/*Left */}
      <div className="sticky flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="http://links.papareact.com/qd3"
          fill
          style={{ objectFit: "contain", objectPosition: "left" }}
          alt="AirBnB Company Logo"
        />
      </div>
      {/*middle */}
      <div className="flex items-center md:border-2 rounded-full md:shadow-sm ">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow pl-3 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-[5.9px] cursor-pointer md:mx-3" />
      </div>
      {/*right */}
      <div className="flex items-center justify-end space-x-4">
        <p className="hidden md:inline cursor-pointer">Become A Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer text-gray-800" />
        <div className="flex items-center space-x-2 border-2 p-1 rounded-full ">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
